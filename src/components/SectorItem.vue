<template>
  <div class='sector-item'>
     <a-row :gutter="16" class="sector-status">
        <div
          class="status-round"
          v-bind:style="{ backgroundColor: getStatusRoundColor(sectorItem.status) }"
        />
    </a-row>
    <a-row :gutter="16">
      <a-col :span="6">
        <img
          :src="sectorIcon"
          class="sector-icon"
        />
      </a-col>
      <a-col :span="18" class="sector-info">
        <p>{{ sectorItem.name }}</p>
        <p>{{ `STATUS: ${sectorItem.status.name}` }}</p>
      </a-col>
    </a-row>
    <div class="temp-info">
      <a-row>
        <a-col><p>{{ `Max T: ${sectorItem.maxTemperature} °C` }}</p></a-col>
      </a-row>
      <a-row>
        <a-col><p>{{ `Min T: ${sectorItem.minTemperature} °C` }}</p></a-col>
      </a-row>
      <a-row>
        <a-col><p>{{ `Current T: ${sectorItem.status.currentTemp} °C` }}</p></a-col>
      </a-row>
    </div>
    <a-row>
      <a-button block>More information</a-button>
    </a-row>
  </div>
</template>

<script>
import SectorIcon from '../assets/sector.png';

export default {
  name: 'SectorItem',
  data () {
    return {
      sectorIcon: SectorIcon,
    }
  },
  props: {
    sectorItem: {
      type: Object,
      default: () => null,
    },
  },
  methods: {
    getStatusRoundColor({ number }) {
      return (number === 1) 
        ? 'green'
        : 'red';
    },
  }
}
</script>

<style>
  .sector-item {
    border: 1px solid #ababab;
    background: white;
    border-radius: 10px;
    height: 250px;
    margin-bottom: 20px;
    padding: 8px;
  }
  .status-round {
    height: 20px;
    width: 20px;
    border-radius: 100px;
    float: right;
    margin-right: 10px;
  }
  .sector-icon {
    height: 50px;
    width: 50px;
  }
  .sector-info {
    text-align: left;
  }
  .temp-info {
    text-align: left;
  }
</style>
