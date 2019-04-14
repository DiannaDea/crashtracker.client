import devicesAPI from '../../api/devices';
import * as actionTypes from '../action-types';
import * as mutationTypes from '../mutation-types';

const state = {
  all: [],
  devicesLoaded: false,
  curDevice: null,
  curDeviceSectors: [],
  sectorsLoaded: false,
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
};

const mutations = {
  // eslint-disable-next-line no-shadow
  [mutationTypes.SET_USER_DEVICES](state, devices) {
    state.all = devices;
    state.devicesLoaded = true;
    state.sectorsLoaded = false;
  },
  // eslint-disable-next-line no-shadow
  [mutationTypes.SET_CURRENT_DEVICE](state, device) {
    state.curDevice = device;
  },
  // eslint-disable-next-line no-shadow
  [mutationTypes.SET_CURRENT_DEVICE_SECTORS](state, sectors) {
    state.curDeviceSectors = sectors;
    state.sectorsLoaded = true;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
