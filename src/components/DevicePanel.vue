<template>
  <a-row type="flex" justify="end">
    <a-col :span="12">
      <h1 class="page-title">Devices</h1>
    </a-col>
    <a-col :span="5">
      <a-row>
         <a-col :span="12">
           <div class="filter-label"><p>Status: </p></div>
         </a-col>
         <a-col :span="12">
           <a-select
            class="filter-panel"
            defaultValue="all"
            style="width: 120px"
            @change="filterDevices">
            <a-select-option value="all">All</a-select-option>
            <a-select-option value="working">Working</a-select-option>
            <a-select-option value="critical">Critical</a-select-option>
            <a-select-option value="service">On service</a-select-option>
          </a-select>
         </a-col>
      </a-row>
    </a-col>
    <a-col :span="4">
      <a-input-search
        class="search-panel"
        placeholder="Search..."
        style="width: 200px"
        @search="findDevices"
      />
    </a-col>
    <a-col :span="3">
      <a-button class="add-device-btn" type="primary">+ ADD DEVICE</a-button>
    </a-col>
  </a-row>
</template>
<script>
export default {
  name: 'DevicePanel',
  props: {
    devices: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    filterDevices(type) {
      this.$emit('filterDevices', type);
    },
    findDevices(key) {
      this.$emit('findDevices', key);
    },
  },
};
</script>
<style>
  .search-panel, .add-device-btn {
    float: right;
  }

  .filter-label {
    height: 32px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .filter-label p {
    margin: 0;
  }

  .page-title {
    float: left;
  }
</style>

