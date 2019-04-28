<template>
  <div>
    <h3>{{ $lang.stat.work.title }}</h3>
    <a-table
      :rowKey="statItem => statItem.uuid"
      :columns="columns" 
      :dataSource="workStat" bordered
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import * as actionTypes from '../store/action-types';

export default {
  name: 'WorkStatistics',
  computed: {
    ...mapState({
      workStat: state => state.devices.stat.work,
    }),
  },
  data() {
    return {
      columns: [{
      title: this.$lang.stat.work.columns.name,
      dataIndex: 'name',
    }, {
      title: this.$lang.stat.work.columns.uuid,
      dataIndex: 'uuid',
    }, {
      title: this.$lang.stat.work.columns.minTemperature,
      dataIndex: 'minTemperature',
    }, {
      title: this.$lang.stat.work.columns.maxTemperature,
      dataIndex: 'maxTemperature',
    }, {
      title: this.$lang.stat.work.columns.currentTemp,
      dataIndex: 'currentTemp',
    }, {
      title: this.$lang.stat.work.columns.avgTemperature,
      dataIndex: 'avgTemperature',
    }, {
      title: this.$lang.stat.work.columns.maxAccessTemp,
      dataIndex: 'maxAccessTemp',
    }, {
      title: this.$lang.stat.work.columns.minAccessTemp,
      dataIndex: 'minAccessTemp',
    }, {
      title: this.$lang.stat.work.columns.criticalCount,
      dataIndex: 'criticalCount',
    }, {
      title: this.$lang.stat.work.columns.lastTimeExcess,
      dataIndex: 'lastTimeExcess',
    }, {
      title: this.$lang.stat.work.columns.trackerSetupDate,
      dataIndex: 'trackerSetupDate',
    }],
    };
  },
  methods: {
    ...mapActions('devices', {
      getWorkStatistics: actionTypes.GET_DEVICE_SECTORS_WORK_STAT,
    }),
  },
  created() {
    const deviceId = this.$route.params;
    this.getWorkStatistics(deviceId);
  },
}
</script>

<style>

</style>
