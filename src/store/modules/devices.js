import devicesAPI from '../../api/devices';
import * as actionTypes from '../action-types';
import * as mutationTypes from '../mutation-types';

const state = {
  all: [],
  devicesLoaded: false,
  curDevice: null,
  curDeviceSectors: [],
  sectorsLoaded: false,
  lastCreated: {
    device: null,
    sectors: [],
  },
  stat: {
    service: [],
    work: [],
  },
};

const getters = {};

const actions = {
  async [actionTypes.GET_USER_DEVICES]({ commit }) {
    const devices = await devicesAPI.getAllDevices();
    commit(mutationTypes.SET_USER_DEVICES, devices);
  },
  async [actionTypes.GET_CURRENT_DEVICE]({ commit }, { deviceId }) {
    const curDevice = await devicesAPI.getOneDevice(deviceId);
    commit(mutationTypes.SET_CURRENT_DEVICE, curDevice);
  },
  async [actionTypes.GET_CURRENT_DEVICE_SECTORS]({ commit }, { deviceId }) {
    const curSectors = await devicesAPI.getDeviceSectors(deviceId);
    commit(mutationTypes.SET_CURRENT_DEVICE_SECTORS, curSectors);
  },
  async [actionTypes.CREATE_DEVICE]({ commit }, deviceInfo) {
    const createdDevice = await devicesAPI.createDevice(deviceInfo);
    commit(mutationTypes.SET_CREATED_DEVICE, createdDevice);
  },
  async [actionTypes.CREATE_DEVICE_SECTORS]({ commit }, sectors) {
    const createdSectors = await devicesAPI.createDeviceSectors(sectors);
    commit(mutationTypes.SET_CREATED_SECTORS, createdSectors);
  },
  async [actionTypes.DELETE_DEVICE]({ commit }, { deviceId }) {
    await devicesAPI.deleteDevice(deviceId);
    commit(mutationTypes.DELETE_DEVICE, deviceId);
  },
  async [actionTypes.DELETE_SECTOR]({ commit }, { sectorId }) {
    await devicesAPI.deleteSector(sectorId);
    commit(mutationTypes.DELETE_SECTOR, sectorId);
  },
  async [actionTypes.GET_DEVICE_SERVICE_STAT]({ commit }, { deviceId }) {
    const stat = await devicesAPI.getServiceStatistics(deviceId);
    commit(mutationTypes.SET_DEVICE_SERVICE_STAT, stat);
  },
  async [actionTypes.GET_DEVICE_SECTORS_WORK_STAT]({ commit }, { deviceId }) {
    const stat = await devicesAPI.getWorkStatistics(deviceId);
    commit(mutationTypes.SET_DEVICE_SECTORS_WORK_STAT, stat);
  },
  async [actionTypes.START_SERVICE]({ commit }, { deviceId }) {
    await devicesAPI.startService(deviceId);
    commit(mutationTypes.SET_SERVICE_IN_PROGRESS, deviceId);
  },
  async [actionTypes.STOP_SERVICE]({ commit }, { deviceId }) {
    await devicesAPI.stopService(deviceId);
    commit(mutationTypes.SET_SERVICE_FINISHED, deviceId);
  },
};

const mutations = {
  // eslint-disable-next-line no-shadow
  [mutationTypes.SET_USER_DEVICES](state, devices) {
    state.all = devices;
    state.devicesLoaded = true;
    state.sectorsLoaded = false;
    state.lastCreated.device = null;
    state.lastCreated.sectors = [];
  },
  // eslint-disable-next-line no-shadow
  [mutationTypes.SET_CURRENT_DEVICE](state, device) {
    state.curDevice = device;
    state.lastCreated.device = null;
  },
  // eslint-disable-next-line no-shadow
  [mutationTypes.SET_CURRENT_DEVICE_SECTORS](state, sectors) {
    state.curDeviceSectors = sectors;
    state.sectorsLoaded = true;
    state.lastCreated.sectors = [];
  },
  // eslint-disable-next-line no-shadow
  [mutationTypes.SET_CREATED_DEVICE](state, createdDevice) {
    state.lastCreated.device = createdDevice;
  },
  // eslint-disable-next-line no-shadow
  [mutationTypes.SET_CREATED_SECTORS](state, sectors) {
    state.lastCreated.sectors = sectors;
  },
  // eslint-disable-next-line no-shadow
  [mutationTypes.DELETE_DEVICE](state, deviceId) {
    state.all = state.all.filter(device => device.id !== deviceId);
  },
  // eslint-disable-next-line no-shadow
  [mutationTypes.DELETE_SECTOR](state, sectorId) {
    state.curDeviceSectors = state.curDeviceSectors.filter(sector => sector.id !== sectorId);
  },
  // eslint-disable-next-line no-shadow
  [mutationTypes.SET_DEVICE_SERVICE_STAT](state, stat) {
    state.stat.service = stat;
  },
  // eslint-disable-next-line no-shadow
  [mutationTypes.SET_DEVICE_SECTORS_WORK_STAT](state, stat) {
    state.stat.work = stat;
  },
  // eslint-disable-next-line no-shadow
  [mutationTypes.SET_SERVICE_IN_PROGRESS](state, deviceId) {
    state.all = state.all.map(device => ((device.id === deviceId)
      ? {
        ...device,
        status: {
          code: 5,
          name: 'SERVICE_IN_PROGRESS',
        },
      }
      : device));
  },
  // eslint-disable-next-line no-shadow
  [mutationTypes.SET_SERVICE_FINISHED](state, deviceId) {
    state.all = state.all.map(device => ((device.id === deviceId)
      ? {
        ...device,
        status: {
          code: 1,
          name: 'SERVICE_OK',
        },
      }
      : device));
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
