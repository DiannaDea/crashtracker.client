<template>
  <div>
    <DeviceInfo :device="device"/>
    <SectorsList />
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import * as actionTypes from '../store/action-types';
import DeviceInfo from '../components/DeviceInfo';
import SectorsList from '../components/SectorsList';

export default {
  name: 'DevicePage',
  components: {
    DeviceInfo,
    SectorsList,
  },
  methods: {
    ...mapActions('devices', {
      getDeviceInfo: actionTypes.GET_CURRENT_DEVICE,
      getDeviceSectors: actionTypes.GET_CURRENT_DEVICE_SECTORS,
    }),
  },
  computed: {
    ...mapState({
      device: state => state.devices.curDevice,
      sectors: state => state.devices.curDeviceSectors,
    }),
  },
  created() {
    const deviceId = this.$route.params;
    this.getDeviceInfo(deviceId);
    this.getDeviceSectors(deviceId);
  },
};
</script>
<style>
  .device-input {
    margin-bottom: 20px;
  }

  .device-input-label {
    text-align: left;
  }
</style>
