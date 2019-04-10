<template>
  <div>Devices</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import * as actionTypes from '../store/action-types';

export default {
  name: 'DeviceList',
  methods: {
    ...mapActions('devices', {
      getUserDevices: actionTypes.GET_USER_DEVICES,
    }),
  },
  computed: mapState({
    devices: state => state.devices.all,
  }),
  created() {
    this.getUserDevices();
  },
};

</script>

