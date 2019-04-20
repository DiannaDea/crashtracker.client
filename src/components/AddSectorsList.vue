<template>
  <div v-if="true" transition="fadeLeft">
    <a-divider>
      <h2>Step 2: Create device sectors</h2>
    </a-divider>
    <a-row :gutter="16" type="flex" justify="end" class="sectors-list-control-panel">
      <a-col :span="3">
        <a-button
          block
          :disabled="checkButtonsDisabled"
          @click="showModal" 
          type="primary">ADD SECTOR</a-button>
      </a-col>
      <a-col :span="3">
        <a-button
          block
          :disabled="checkButtonsDisabled"
          @click="submitCreateSectors" 
          type="primary">SAVE SECTORS</a-button>
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

const columns = [{
  title: 'Sector name',
  dataIndex: 'name',
}, {
  title: 'Number',
  dataIndex: 'number',
}, {
  title: 'Location',
  dataIndex: 'location',
}, {
  title: 'Max T°C',
  dataIndex: 'maxTemperature',
}, {
  title: 'Min T°C',
  dataIndex: 'minTemperature',
}, {
  title: 'Sensor setup date',
  dataIndex: 'trackerSetupDate',
}, {
  title: 'Time norm access (h)',
  dataIndex: 'maxTimeExcess',
}];


export default {
  name: 'AddSectorsList',
  data() {
    return {
      modalVisible: false,
      columns,
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
