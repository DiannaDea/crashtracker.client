<template>
  <div>
    <h3>Service statistics of {{ `${servicetat[0].name} (model - ${servicetat[0].model})` }}</h3>
    <a-table
      :rowKey="statItem => statItem.id"
      :columns="columns" 
      :dataSource="servicetat" bordered
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import * as actionTypes from '../store/action-types';

const columns = [{
  title: 'Service start',
  dataIndex: 'dateStart',
}, {
  title: 'Service end',
  dataIndex: 'dateEnd',
}, {
  title: 'Service interval',
  dataIndex: 'serviceInterval',
}, {
  title: 'Worked (h) after last service',
  dataIndex: 'workHoursAfterService',
}, {
  title: 'General work (h)',
  dataIndex: 'workHoursGeneral',
}, {
  title: 'Critical situations count',
  dataIndex: 'criticalCount',
}, {
  title: 'Avg T°C sectors',
  dataIndex: 'sectorsAvgTemp',
}];

export default {
  name: 'ServiceStatistics',
  data() {
    return {
      columns,
    }
  },
  computed: {
    ...mapState({
      servicetat: state => state.devices.stat.service,
    }),
  },
  methods: {
    ...mapActions('devices', {
      getServiceStatistics: actionTypes.GET_DEVICE_SERVICE_STAT,
    }),
  },
  created() {
    const deviceId = this.$route.params;
    this.getServiceStatistics(deviceId);
  },
}
</script>

<style>

</style>
