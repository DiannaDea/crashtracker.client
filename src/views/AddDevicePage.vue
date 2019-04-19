<template>
  <div>
    <AddDeviceForm />
    <AddSectorsList />
  </div>
</template>

<script>
import AddDeviceForm from '../components/AddDeviceForm';
import AddSectorsList from '../components/AddSectorsList';

export default {
  name: 'AddDevicePage',
  components: {
    AddDeviceForm,
    AddSectorsList,
  },
  data() {
    return {
      deviceInfo: null,
      sectors: [],
    };
  },
};
</script>

<style>

</style>
