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
        <p>{{ `${$lang.devicePage.sectorInfo.status} ${sectorItem.status.name}` }}</p>
      </a-col>
    </a-row>
    <div class="temp-info">
      <a-row>
        <a-col>
          <p>{{ `${$lang.devicePage.sectorInfo.maxT} ${sectorItem.maxTemperature} °C` }}</p>
        </a-col>
      </a-row>
      <a-row>
        <a-col>
          <p>{{ `${$lang.devicePage.sectorInfo.minT} ${sectorItem.minTemperature} °C` }}</p>
        </a-col>
      </a-row>
      <a-row>
        <a-col>
          <p>{{ `${$lang.devicePage.sectorInfo.currentT} ${sectorItem.status.currentTemp} °C` }}</p>
        </a-col>
      </a-row>
    </div>
    <a-row :gutter="16">
      <a-col :span="12">
         <a-button
         @click="submitDeleteSector"
          type="danger" 
          block>{{ $lang.devicePage.btnDeleteSector }}</a-button>
      </a-col>
      <a-col :span="12">
        <a-button block>{{ $lang.devicePage.btnMoreSectorInfo }}</a-button>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import * as actionTypes from '../store/action-types';
import SectorIcon from '../assets/sector.png';

export default {
  name: 'SectorItem',
  data() {
    return {
      sectorIcon: SectorIcon,
    };
  },
  props: {
    sectorItem: {
      type: Object,
      default: () => null,
    },
  },
  methods: {
    ...mapActions('devices', {
      deleteSector: actionTypes.DELETE_SECTOR,
    }),
    getStatusRoundColor({ number }) {
      return (number === 1)
        ? 'green'
        : 'red';
    },
    submitDeleteSector() {
      this.deleteSector({ sectorId: this.sectorItem.id });
      this.$notify({
        group: 'user-notifications',
        type: 'success',
        title: 'Successfully deleted sector!',
      });
    }
  },
};
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
    padding-left: 10px;
  }
</style>
