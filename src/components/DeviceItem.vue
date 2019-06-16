<template>
  <div class='device-item'>
    <a-row :gutter="16" class="device-status">
      <div
        class="status-round"
        v-bind:style="{ backgroundColor: getStatusRoundColor(deviceItem.status) }"
      />
    </a-row>
    <a-row :gutter="16" class="device-info">
      <a-col :span="6" class="device-img">
        <img
          :src="getImgUrl(deviceItem.type)"
          :alt="deviceItem.type"
          :class="[ deviceItem.type === 'oven' ? 'oven-img' : 'fridge-img' ]"
        />
      </a-col>
      <a-col :span="18">
        <p>{{ deviceItem.name }}</p>
        <p>{{ `${$lang.deviceList.deviceItem.status} ${deviceItem.status.name}` }}</p>
        <p>{{ `${$lang.deviceList.deviceItem.nextService} ${deviceItem.dateNextService}` }}</p>
      </a-col>
    </a-row>
    <a-row :gutter="16" class="device-control">
      <a-col :span="12">
        <a-button
          type="primary"
          @click="handleStartService"
          v-if="deviceItem.status.code !== 5" 
          block>{{ $lang.deviceList.deviceItem.btnStartService }}</a-button>
          <a-button
          type="danger"
          v-else
          @click="handleStopService"
          block>{{ $lang.deviceList.deviceItem.btnEndService }}</a-button>
      </a-col>
      <a-col :span="12">
        <a-button block @click="goToDevicePage">
          {{ $lang.deviceList.deviceItem.btnMoreInfo }}
        </a-button>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import * as actionTypes from '../store/action-types';
import FridgeIcon from '../assets/fridge_icon.png';
import OvenIcon from '../assets/oven_icon.png';

export default {
  name: 'DeviceItem',
  props: {
    deviceItem: {
      type: Object,
      default: () => null,
    },
  },
  methods: {
    ...mapActions('devices', {
      startService: actionTypes.START_SERVICE,
      stopService: actionTypes.STOP_SERVICE,
    }),
    getImgUrl(type) {
      return (type === 'fridge')
        ? FridgeIcon
        : OvenIcon;
    },
    getStatusRoundColor({ code }) {
      if (code === 1) return 'green';
      if (code === 2) return 'orange';
      if (code === 3 || code === 4) return 'red';
      return 'grey';
    },
    goToDevicePage() {
      this.$router.push({ path: `/devices/${this.deviceItem.id}` });
    },
    handleStartService() {
      this.startService({ deviceId: this.deviceItem.id });
    },
    handleStopService() {
      this.stopService({ deviceId: this.deviceItem.id });
    },
  },
  computed: {
    deviceLogoUrl() {
      return (this.deviceItem && this.deviceItem === 'fridge')
        ? '../../static/fridge_icon.png'
        : '../../static/oven_svg.png';
    },
  },
};

</script>

<style scoped>
  .device-item {
    border: 1px solid black;
    background: white;
    border-radius: 10px;
    height: 180px;
    margin-bottom: 20px;
    padding: 8px;
  }
  .device-info {
    height: 60%;
    text-align: left;
  }

  .device-img {
    text-align: center;
  }

  .oven-img {
    width: 65px;
    height: 65px;
  }

  .fridge-img {
    width: 45px;
    height: 88px;
  }

  .device-control {
    height: 20%;
  }

  .status-round {
    height: 20px;
    width: 20px;
    border-radius: 100px;
    float: right;
    margin-right: 10px;
  }
</style>

