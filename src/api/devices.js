import request from '../utils/request';

const getAllDevices = userId => request(`/users/${userId}/devices`, 'get');

const getOneDevice = deviceId => request(`/devices/${deviceId}`, 'get');

const getDeviceSectors = deviceId => request(`/devices/${deviceId}/sectors`, 'get');

const createDevice = deviceInfo => request('/devices', 'post', deviceInfo);

const createDeviceSectors = sectors => request('/sectors', 'post', sectors);

const deleteDevice = deviceId => request(`/devices/${deviceId}`, 'delete');

const deleteSector = sectorId => request(`/sectors/${sectorId}`, 'delete');

const getServiceStatistics = deviceId => request(`/statistics/${deviceId}/service`, 'get');

const getWorkStatistics = deviceId => request(`/statistics/${deviceId}/sectors`, 'get');

const startService = deviceId => request(`/service/${deviceId}/start`, 'post');

const stopService = deviceId => request(`/service/${deviceId}/stop`, 'post');

export default {
  getAllDevices,
  getOneDevice,
  getDeviceSectors,
  createDevice,
  createDeviceSectors,
  deleteDevice,
  deleteSector,
  getServiceStatistics,
  getWorkStatistics,
  startService,
  stopService,
};
