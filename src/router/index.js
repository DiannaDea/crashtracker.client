import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import DeviceList from '@/views/DeviceList';
import DevicePage from '@/views/DevicePage';
import AddDevicePage from '@/views/AddDevicePage';
import ServiceStatistics from '@/views/ServiceStatistics';
import WorkStatistics from '@/views/WorkStatistics';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/devices/:deviceId',
      name: 'DevicePage',
      component: DevicePage,
    },
    {
      path: '/devices',
      name: 'DeviceList',
      component: DeviceList,
    },
    {
      path: '/add-device',
      name: 'AddDevicePage',
      component: AddDevicePage,
    },
    {
      path: '/devices/:deviceId/service-statistics',
      name: 'ServiceStatistics',
      component: ServiceStatistics,
    },
    {
      path: '/devices/:deviceId/work-statistics',
      name: 'WorkStatistics',
      component: WorkStatistics,
    },
  ],
});
