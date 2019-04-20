<template>
  <div>
    <AddDeviceForm />
    <AddSectorsList key="1" v-bind:style="getSectorsListVisibitity"/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import AddDeviceForm from '../components/AddDeviceForm';
import AddSectorsList from '../components/AddSectorsList';

export default {
  name: 'AddDevicePage',
  components: {
    AddDeviceForm,
    AddSectorsList,
  },
  computed: {
    ...mapState({
      createdDevice: state => state.devices.lastCreated.device,
      createdSectors: state => state.devices.lastCreated.sectors,
    }),
    checkSectorsListDisabled() {
      return (this.createdDevice && Object.keys(this.createdDevice).length) 
        ? false 
        : true;
    },
    getSectorsListVisibitity() {
      return {
        visibility: (this.checkSectorsListDisabled) ? 'hidden' : 'visible'
      }
    }
  },
};
</script>

<style>

</style>
