<template>
  <div>ServiceStatistics</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import * as actionTypes from '../store/action-types';

export default {
  name: 'ServiceStatistics',
  computed: {
    ...mapState({
      servicetat: state => state.devices.stat.service,
    }),
  },
  methods: {
    ...mapActions('devices', {
      getServiceStatistics: actionTypes.GET_DEVICE_SERVICE_STAT,
    }),
  },
  created() {
    const deviceId = this.$route.params;
    this.getServiceStatistics(deviceId);
  },
}
</script>

<style>

</style>
