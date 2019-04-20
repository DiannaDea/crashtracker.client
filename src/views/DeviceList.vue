<template>
  <div class="devices-list">
    <a-alert
      v-if="showServiceSoonNotification"
      message="SERVICE SOON"
      description="Some devices need to have service soon. Don't forget about it!"
      type="warning"
      closable
    />
    <a-alert
      v-if="showCriticalNotification"
      message="CRITICAL SITUATION"
      description="Some devices have critical errors. Fix them as soon as possible!"
      type="error"
      closable
    />
    <a-alert
      v-if="showServiceOverdueNotification"
      message="SERVICE OVERDUE"
      description="Some devices have service overdue. Send them to service!"
      type="error"
      closable
    />
    <DevicePanel
      @filterDevices="setFilter"
      @findDevices="setSearchKey"
    />
    <DeviceItems
      :devices="devicesToPass"
      :devicesLoaded="devicesLoaded"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import DeviceItems from '../components/DeviceItems';
import DevicePanel from '../components/DevicePanel';
import * as actionTypes from '../store/action-types';

export default {
  name: 'DeviceList',
  components: {
    DeviceItems,
    DevicePanel,
  },
  data() {
    return {
      selectedDevices: [],
      currentStatus: 'all',
      currentSearchKey: '',
      statusCodes: {
        working: 1,
        critical: 4,
        service: 5,
      },
    };
  },
  methods: {
    ...mapActions('devices', {
      getUserDevices: actionTypes.GET_USER_DEVICES,
    }),
    setFilter(type) {
      this.currentStatus = type;
      this.doFilterAndSort();
    },
    setSearchKey(key) {
      this.currentSearchKey = key;
      this.doFilterAndSort();
    },
    doFilterAndSort() {
      this.selectedDevices = this.devices.filter((device) => {
        if (this.currentStatus !== 'all' && !this.currentSearchKey.length) {
          return device.status.code === this.statusCodes[this.currentStatus];
        } else if (this.currentStatus === 'all' && this.currentSearchKey) {
          return device.name.includes(this.currentSearchKey);
        }
        return device.status.code === this.statusCodes[this.currentStatus] &&
        device.name.includes(this.currentSearchKey);
      });
    },
  },
  computed: {
    ...mapState({
      devices: state => state.devices.all,
      devicesLoaded: state => state.devices.devicesLoaded,
    }),
    devicesToPass() {
      return (this.currentStatus === 'all' && !this.currentSearchKey.length)
        ? this.devices
        : this.selectedDevices;
    },
    showCriticalNotification() {
      const criticalDevice = this.devices.find(device => device.status.code === 4);
      return (criticalDevice) ? true : false;
    },
    showServiceOverdueNotification() {
      const criticalDevice = this.devices.find(device => device.status.code === 3);
      return (criticalDevice) ? true : false;
    },
    showServiceSoonNotification() {
      const criticalDevice = this.devices.find(device => device.status.code === 2);
      return (criticalDevice) ? true : false;
    }
  },
  created() {
    this.getUserDevices();
  },
};

</script>

<style scoped>
  .devices-list div {
    margin-bottom: 30px;
  }
</style>
