<template>
  <div>
    <a-skeleton v-if="!sectorsLoaded" active />
    <p v-else-if="sectorsLoaded && !sectors.length">No sectors found</p>
    <a-row
      v-else
      :gutter="16">
      <a-col
        v-for="sector in sectors"
        :key="sector.id"
        :span="6">
        <SectorItem :sectorItem="sector" />
      </a-col>
    </a-row>
    <div class="sector-list-panel">
      <a-row type="flex" justify="end">
        <a-col :span="3">
          <a-button type="dashed">Work statistics</a-button>
        </a-col>
        <a-col :span="3">
          <a-button type="primary">+ ADD SECTOR</a-button>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script>
import SectorItem from '../components/SectorItem';

export default {
  name: 'SectorsList',
  components: {
    SectorItem,
  },
  props: {
    sectors: {
      type: Array,
      default: () => [],
    },
    sectorsLoaded: {
      type: Boolean,
    },
  },
};
</script>
<style>
  .sector-list-panel {
    margin: 25px 0;
  }
</style>

