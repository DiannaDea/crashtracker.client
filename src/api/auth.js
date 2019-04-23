import request from '../utils/request';

const signIn = signInParams => request('/auth/signin', 'post', signInParams);

const signUp = signUpParams => request('/auth/signup', 'post', signUpParams);

const getUser = email => request(`/users/${email}`, 'get');

export default {
  signIn,
  signUp,
  getUser,
};
