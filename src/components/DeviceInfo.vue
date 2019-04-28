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
            <div class="device-input-label"><p>{{$lang.devicePage.inputs.name}}</p></div>
          </a-col>
          <a-col :span="16">
            <a-input class="device-input" :value="device.name" />
          </a-col>
        </a-row>
        <!-- -->

        <!-- Device model -->
        <a-row>
          <a-col :span="8">
            <div class="device-input-label"><p>{{$lang.devicePage.inputs.model}}</p></div>
          </a-col>
          <a-col :span="16">
            <a-input class="device-input" :value="device.model" />
          </a-col>
        </a-row>
        <!-- -->

        <!-- Device type -->
        <a-row>
          <a-col :span="8">
            <div class="device-input-label"><p>{{$lang.devicePage.inputs.type}}</p></div>
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
            <div class="device-input-label"><p>{{$lang.devicePage.inputs.serviceInterval}}</p></div>
          </a-col>
          <a-col :span="16">
            <a-input class="device-input" :value="device.serviceInterval" />
          </a-col>
        </a-row>
        <!-- -->

        <!-- Service notify before -->
        <a-row>
          <a-col :span="8">
            <div class="device-input-label">
              <p>{{$lang.devicePage.inputs.notifyBeforeService}}</p>
            </div>
          </a-col>
          <a-col :span="16">
            <a-input class="device-input" :value="device.notifyBeforeService" />
          </a-col>
        </a-row>
        <!-- -->

        <!-- Device description -->
        <a-row>
          <a-col :span="8">
            <div class="device-input-label">
              <p>{{$lang.devicePage.inputs.description}}</p>
            </div>
          </a-col>
          <a-col :span="16">
            <a-textarea class="device-input" :value="device.description" :rows="4"/>
          </a-col>
        </a-row>
        <!-- -->
      </a-col>
    </a-row>
     <a-row :gutter="16" class="sector-list-panel" type="flex" justify="end">
      <a-col :span="3">
        <a-button block @click="submitDeleteDevice" type="danger">
          {{$lang.devicePage.btnDeleteDevice}}
        </a-button>
      </a-col>
      <a-col :span="3">
        <a-button
          @click="goToServiceStatisticsPage"
          block 
          type="primary">{{$lang.devicePage.btnServiceStat}}</a-button>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import * as actionTypes from '../store/action-types';

export default {
  name: 'DeviceInfo',
  props: {
    device: {
      type: Object,
      default: () => null,
    },
  },
  methods: {
    ...mapActions('devices', {
      deleteDevice: actionTypes.DELETE_DEVICE,
    }),
    submitDeleteDevice() {
      this.deleteDevice({ deviceId: this.device.id });
      this.$notify({
        group: 'user-notifications',
        type: 'success',
        title: 'Successfully deleted device!',
      });
      this.$router.push({ path: `/devices` });
    },
    goToServiceStatisticsPage() {
      this.$router.push({ path: `/devices/${this.device.id}/service-statistics` });
    }
  }
};
</script>
<style>
  .device-info-container > div.ant-divider {
    margin-bottom: 50px;
  }
</style>

