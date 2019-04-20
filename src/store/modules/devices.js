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
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
