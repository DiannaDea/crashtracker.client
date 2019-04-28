<template>
  <a-row type="flex" justify="end">
    <a-col :span="12">
      <h1 class="page-title">{{ $lang.deviceList.deviceTitle }}</h1>
    </a-col>
    <a-col :span="5">
      <a-row>
         <a-col :span="12">
           <div class="filter-label"><p>{{ $lang.deviceList.statusSelect.title }}</p></div>
         </a-col>
         <a-col :span="12">
           <a-select
            class="filter-panel"
            defaultValue="all"
            style="width: 120px"
            @change="filterDevices">
            <a-select-option value="all">
              {{ $lang.deviceList.statusSelect.options.all }}
            </a-select-option>
            <a-select-option value="working">
              {{ $lang.deviceList.statusSelect.options.working }}
            </a-select-option>
            <a-select-option value="critical">
              {{ $lang.deviceList.statusSelect.options.critical }}
            </a-select-option>
            <a-select-option value="service">
              {{ $lang.deviceList.statusSelect.options.onService }}
            </a-select-option>
          </a-select>
         </a-col>
      </a-row>
    </a-col>
    <a-col :span="4">
      <a-input-search
        class="search-panel"
        :placeholder="$lang.deviceList.searchTitle"
        style="width: 200px"
        @search="findDevices"
      />
    </a-col>
    <a-col :span="3">
      <a-button
        class="add-device-btn"
        type="primary"
        @click="goToAddDevicePage">
        {{ $lang.deviceList.btnAddDevice }}
      </a-button>
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
    goToAddDevicePage() {
      this.$router.push({ path: '/add-device' });
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

