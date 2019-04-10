import devicesAPI from '../../api/devices';
import * as actionTypes from '../action-types';
import * as mutationTypes from '../mutation-types';

const state = {
  all: [],
};

const getters = {};

const actions = {
  async [actionTypes.GET_USER_DEVICES]({ commit }) {
    const devices = await devicesAPI.getAllDevices();
    commit(mutationTypes.SET_USER_DEVICES, devices);
  },
};

const mutations = {
  // eslint-disable-next-line no-shadow
  [mutationTypes.SET_USER_DEVICES](state, devices) {
    state.all = devices;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
