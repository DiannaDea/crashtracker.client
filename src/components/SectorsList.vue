<template>
  <div>
    <a-skeleton v-if="!sectorsLoaded" active />
    <p v-else-if="sectorsLoaded && !sectors.length">No sectors found</p>
    <a-row
      v-else
      :gutter="16" type="flex" justify="center">
      <a-col
        v-for="sector in [ ...this.sectors, ...this.createdSectors ]"
        :key="sector.id"
        :span="6">
        <SectorItem :sectorItem="sector" />
      </a-col>
    </a-row>
    <div class="sector-list-panel">
      <a-row :gutter="16" type="flex" justify="end">
        <a-col :span="3">
          <a-button @click="goToWorkStatisticsPage" type="dashed" block >
            {{$lang.devicePage.btnWorkStat}}
          </a-button>
        </a-col>
        <a-col :span="3">
          <a-button @click="showModal" type="primary" block>
            {{$lang.devicePage.btnAddSector}}
          </a-button>
        </a-col>
      </a-row>
    </div>
    <AddSectorModal
      @handleOkModal="addSector"
      @handleCancelModal="handleCancelModal"
      :modalVisible="showAddSectorModal" />
  </div>
</template>
<script>
import SectorItem from '../components/SectorItem';
import AddSectorModal from '../components/AddSectorModal';
import { mapState, mapActions } from 'vuex';
import * as actionTypes from '../store/action-types';

export default {
  name: 'SectorsList',
  components: {
    SectorItem,
    AddSectorModal,
  },
  data() {
    return {
      showAddSectorModal: false,
    }
  },
  props: {
    deviceId: {
      type: String,
      default: () => null,
    },
    sectors: {
      type: Array,
      default: () => [],
    },
    sectorsLoaded: {
      type: Boolean,
    },
  },
  computed: {
    ...mapState({
      createdSectors: state => state.devices.lastCreated.sectors,
    }),
  },
  methods: {
    ...mapActions('devices', {
      createDeviceSectors: actionTypes.CREATE_DEVICE_SECTORS,
    }),
    showModal() {
      this.showAddSectorModal = true;
    },
    addSector(sectorInfo) {
      this.createDeviceSectors({
        deviceId: this.deviceId,
        sectorTrackers: [ sectorInfo ],
      });
      this.showAddSectorModal = false;
      this.$notify({
        group: 'user-notifications',
        type: 'success',
        title: 'Successfully created device sector!',
      });
    },
    handleCancelModal() {
      this.showAddSectorModal = false;
    },
    goToWorkStatisticsPage() {
      this.$router.push({ path: `/devices/${this.deviceId}/work-statistics` });
    }
  }
};
</script>
<style>
  .sector-list-panel {
    margin: 25px 0;
  }
</style>

