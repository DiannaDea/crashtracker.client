<template>
  <div class="device-page">
    <a-divider>
      <h3>{{$lang.devicePage.deviceTitle}}</h3>
    </a-divider>
    <DeviceInfo :device="device"/>
    <a-divider>
      <h3>{{$lang.devicePage.sectorTitle}}</h3>
    </a-divider>
    <SectorsList :deviceId="(device) ? device.id : null" :sectors="sectors" :sectorsLoaded="sectorsLoaded"/>
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
      sectorsLoaded: state => state.devices.sectorsLoaded,
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
  .device-page > div.ant-divider {
    margin-bottom: 50px;
  }
</style>
