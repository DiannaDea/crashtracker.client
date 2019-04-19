<template>
  <div>
    <a-divider>
      <h2>Step 2: Create device sectors</h2>
    </a-divider>
    <a-button @click="showModal" type="primary">ADD SECTOR</a-button>
    <AddSectorModal
      @handleOkModal="createSector"
      @handleCancelModal="hideModal"
      :modalVisible="modalVisible" />
  </div>
</template>

<script>
import AddSectorModal from './AddSectorModal';

export default {
  name: 'AddSectorsList',
  data() {
    return {
      modalVisible: false,
    };
  },
  components: {
    AddSectorModal,
  },
  methods: {
    showModal() {
      this.modalVisible = true;
    },
    hideModal() {
      this.modalVisible = false;
    },
    createSector() {
      this.modalVisible = false;
    },
  },
};
</script>

<style>

</style>
