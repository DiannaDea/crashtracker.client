<template>
  <div>
    <h3>
      {{ $lang.stat.service.title }} {{ `${servicetat[0].name} (${$lang.stat.service.model} - ${servicetat[0].model})` }}
    </h3>
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

export default {
  name: 'ServiceStatistics',
  data() {
    return {
      columns: [{
        title: this.$lang.stat.service.columns.dateStart,
        dataIndex: 'dateStart',
      }, {
        title: this.$lang.stat.service.columns.dateEnd,
        dataIndex: 'dateEnd',
      }, {
        title: this.$lang.stat.service.columns.serviceInterval,
        dataIndex: 'serviceInterval',
      }, {
        title: this.$lang.stat.service.columns.workHoursAfterService,
        dataIndex: 'workHoursAfterService',
      }, {
        title: this.$lang.stat.service.columns.workHoursGeneral,
        dataIndex: 'workHoursGeneral',
      }, {
        title: this.$lang.stat.service.columns.criticalCount,
        dataIndex: 'criticalCount',
      }, {
        title: this.$lang.stat.service.columns.sectorsAvgTemp,
        dataIndex: 'sectorsAvgTemp',
      }],
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
