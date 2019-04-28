<template>
  <div v-if="true" transition="fadeLeft">
    <a-divider>
      <h2>{{ $lang.addDevice.sectors.title }}</h2>
    </a-divider>
    <a-row :gutter="16" type="flex" justify="end" class="sectors-list-control-panel">
      <a-col :span="3">
        <a-button
          block
          :disabled="checkButtonsDisabled"
          @click="showModal" 
          type="primary">{{ $lang.addDevice.sectors.btnAddSector }}</a-button>
      </a-col>
      <a-col :span="3">
        <a-button
          block
          :disabled="checkButtonsDisabled"
          @click="submitCreateSectors" 
          type="primary">{{ $lang.addDevice.sectors.btnSaveSector }}</a-button>
      </a-col>
    </a-row>
    <a-table
      :rowKey="sector => sector.uuid"
      :columns="columns" 
      :dataSource="sectors" bordered
    />
    <AddSectorModal
      @handleOkModal="addSector"
      @handleCancelModal="hideModal"
      :modalVisible="modalVisible" />
  </div>
</template>

<script>
import AddSectorModal from './AddSectorModal';
import { mapState, mapActions } from 'vuex';
import * as actionTypes from '../store/action-types';

export default {
  name: 'AddSectorsList',
  data() {
    return {
      modalVisible: false,
      columns: [{
        title: this.$lang.addDevice.sectors.tableColumns.name,
        dataIndex: 'name',
      }, {
        title: this.$lang.addDevice.sectors.tableColumns.number,
        dataIndex: 'number',
      }, {
        title: this.$lang.addDevice.sectors.tableColumns.location,
        dataIndex: 'location',
      }, {
        title: this.$lang.addDevice.sectors.tableColumns.maxTemperature,
        dataIndex: 'maxTemperature',
      }, {
        title: this.$lang.addDevice.sectors.tableColumns.minTemperature,
        dataIndex: 'minTemperature',
      }, {
        title: this.$lang.addDevice.sectors.tableColumns.trackerSetupDate,
        dataIndex: 'trackerSetupDate',
      }, {
        title: this.$lang.addDevice.sectors.tableColumns.maxTimeExcess,
        dataIndex: 'maxTimeExcess',
      }],
      sectors: [],
      clickedSaveSectors: false,
    };
  },
  computed: {
    ...mapState({
      createdDevice: state => state.devices.lastCreated.device,
      createdSectors: state => state.devices.lastCreated.sectors,
    }),
    checkButtonsDisabled() {
      if (!this.createdDevice) return true;
      return (this.clickedSaveSectors && this.createdSectors && this.createdSectors.length) 
        ? true 
        : false;
    }
  },
  components: {
    AddSectorModal,
  },
  methods: {
    ...mapActions('devices', {
      createDeviceSectors: actionTypes.CREATE_DEVICE_SECTORS,
    }),
    showModal() {
      this.modalVisible = true;
    },
    hideModal() {
      this.modalVisible = false;
    },
    addSector(sectorInfo) {
      this.sectors = [...this.sectors, sectorInfo];
      this.modalVisible = false;
    },
    submitCreateSectors() {
      this.clickedSaveSectors = true;
      this.createDeviceSectors({
        deviceId: this.createdDevice.id,
        sectorTrackers: this.sectors,
      }).then(createdSectors => {
        this.$notify({
          group: 'user-notifications',
          type: 'success',
          title: 'Successfully created device sectors!',
        });
        this.$router.push({ path: `/devices` });
      });
    }
  },
};
</script>

<style>
  .sectors-list-control-panel {
    margin-bottom: 25px;
  }
</style>
