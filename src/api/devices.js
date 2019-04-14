import request from '../utils/request';

const getAllDevices = () => request('/users/43954c12-552f-4f52-8523-4d38bb8f6389/devices', 'get');

const getOneDevice = deviceId => request(`/devices/${deviceId}`, 'get');

const getDeviceSectors = deviceId => request(`/devices/${deviceId}/sectors`, 'get');

export default {
  getAllDevices,
  getOneDevice,
  getDeviceSectors,
};
