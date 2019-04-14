import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import DeviceList from '@/views/DeviceList';
import DevicePage from '@/views/DevicePage';
import AddDevicePage from '@/views/AddDevicePage';

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
  ],
});
