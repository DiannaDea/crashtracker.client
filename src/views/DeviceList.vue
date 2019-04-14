<template>
  <div class="devices-list">
    <DevicePanel
      @filterDevices="setFilter"
      @findDevices="setSearchKey"
    />
    <DeviceItems :devices="devicesToPass" />
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
    }),
    devicesToPass() {
      return (this.currentStatus === 'all' && !this.currentSearchKey.length)
        ? this.devices
        : this.selectedDevices;
    },
  },
  created() {
    this.getUserDevices();
  },
};

</script>

<style scoped>
  .devices-list {
    /* padding: 0 50px; */
  }

  .devices-list div {
    margin-bottom: 30px;
  }
</style>
