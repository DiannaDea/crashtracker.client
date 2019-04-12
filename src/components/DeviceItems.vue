<template>
  <div>
    <h1 v-if="!devices.length">No devices found</h1>
    <a-row
      v-else
      :gutter="16">
      <a-col
        v-for="device in devices"
        :key="device.id"
        :span="6">
        <DeviceItem :deviceItem="device" />
      </a-col>
    </a-row>
  </div>
</template>
<script>
import DeviceItem from '../components/DeviceItem';

export default {
  name: 'DeviceItems',
  components: {
    DeviceItem,
  },
  props: {
    devices: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
