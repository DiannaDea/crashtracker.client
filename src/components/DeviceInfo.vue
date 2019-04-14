<template>
  <div class="device-info-container">
    <div v-if="!device">
      <a-skeleton active />
    </div>
    <a-row :gutter="32" type="flex" justify="center" v-else>
      <a-col :span="10">
        <!-- Device name -->
        <a-row>
          <a-col :span="8">
            <div class="device-input-label"><p>Name: </p></div>
          </a-col>
          <a-col :span="16">
            <a-input class="device-input" :value="device.name" />
          </a-col>
        </a-row>
        <!-- -->

        <!-- Device model -->
        <a-row>
          <a-col :span="8">
            <div class="device-input-label"><p>Model: </p></div>
          </a-col>
          <a-col :span="16">
            <a-input class="device-input" :value="device.model" />
          </a-col>
        </a-row>
        <!-- -->

        <!-- Device type -->
        <a-row>
          <a-col :span="8">
            <div class="device-input-label"><p>Device type: </p></div>
          </a-col>
          <a-col :span="16">
            <a-input class="device-input" :value="device.type" />
          </a-col>
        </a-row>
        <!-- -->

      </a-col>
      <a-col :span="10">
        <!-- Device service interval -->
        <a-row>
          <a-col :span="8">
            <div class="device-input-label"><p>Service interval: </p></div>
          </a-col>
          <a-col :span="16">
            <a-input class="device-input" :value="device.serviceInterval" />
          </a-col>
        </a-row>
        <!-- -->

        <!-- Service notify before -->
        <a-row>
          <a-col :span="8">
            <div class="device-input-label"><p>Notify before service: </p></div>
          </a-col>
          <a-col :span="16">
            <a-input class="device-input" :value="device.notifyBeforeService" />
          </a-col>
        </a-row>
        <!-- -->

        <!-- Device description -->
        <a-row>
          <a-col :span="8">
            <div class="device-input-label"><p>Description: </p></div>
          </a-col>
          <a-col :span="16">
            <a-textarea class="device-input" :value="device.description" :rows="4"/>
          </a-col>
        </a-row>
        <!-- -->
      </a-col>
    </a-row>
     <a-row :gutter="32" class="device-info" type="flex" justify="end">
      <a-col :span="7">
        <a-button type="primary">Service statistics</a-button>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: 'DeviceInfo',
  props: {
    device: {
      type: Object,
      default: () => null,
    },
  },
};
</script>
<style>
  .device-info-container > div.ant-divider {
    margin-bottom: 50px;
  }
</style>

