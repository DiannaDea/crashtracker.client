import authAPI from '../../api/auth';
import * as actionTypes from '../action-types';
import * as mutationTypes from '../mutation-types';

const state = {
  user: null,
  token: null || localStorage.getItem('token'),
};

const getters = {};

const actions = {
  async [actionTypes.SING_IN]({ commit }, signInParams) {
    return new Promise(async (resolve) => {
      const { token } = await authAPI.signIn(signInParams);
      commit(mutationTypes.SET_USER_TOKEN, token);
      resolve(token);
    });
  },
  async [actionTypes.SIGN_OUT]({ commit }) {
    return new Promise(async (resolve) => {
      commit(mutationTypes.REMOVE_USER_TOKEN);
      resolve();
    });
  },
  async [actionTypes.SIGN_UP]({ commit }, userParams) {
    return new Promise(async (resolve) => {
      const user = await authAPI.signUp(userParams);
      resolve(user);
    });
  },
  async [actionTypes.GET_USER]({ commit }, userId) {
    return new Promise(async (resolve) => {
      const user = await authAPI.getUser(userId);
      commit(mutationTypes.SET_USER, user);
      resolve(user);
    });
  },
};

const mutations = {
  // eslint-disable-next-line no-shadow
  [mutationTypes.SET_USER_TOKEN](state, token) {
    state.token = token;
    localStorage.setItem('token', token);
  },
  // eslint-disable-next-line no-shadow
  [mutationTypes.REMOVE_USER_TOKEN](state) {
    state.token = null;
    state.user = null;
    localStorage.removeItem('token');
  },
  // eslint-disable-next-line no-shadow
  [mutationTypes.SET_USER](state, user) {
    state.user = user;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
