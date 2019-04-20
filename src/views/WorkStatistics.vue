<template>
  <div>
    <h3>Works statistics of device sectors since the last service</h3>
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

const columns = [{
  title: 'Sector name',
  dataIndex: 'name',
}, {
  title: 'UUID',
  dataIndex: 'uuid',
}, {
  title: 'Min T°C',
  dataIndex: 'minTemperature',
}, {
  title: 'Max T°C',
  dataIndex: 'maxTemperature',
}, {
  title: 'Current T°C',
  dataIndex: 'currentTemp',
}, {
  title: 'Avg T°C',
  dataIndex: 'avgTemperature',
}, {
  title: 'Max access T°C',
  dataIndex: 'maxAccessTemp',
}, {
  title: 'Min access T°C',
  dataIndex: 'minAccessTempn',
}, {
  title: 'Critical situations',
  dataIndex: 'criticalCount',
}, {
  title: 'Last time overdue',
  dataIndex: 'lastTimeExcess',
}, {
  title: 'Setup date',
  dataIndex: 'trackerSetupDate',
}];

export default {
  name: 'WorkStatistics',
  computed: {
    ...mapState({
      workStat: state => state.devices.stat.work,
    }),
  },
  data() {
    return {
      columns,
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
