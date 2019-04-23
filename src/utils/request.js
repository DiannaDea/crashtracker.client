import axios from 'axios';
import Vue from 'vue';

const BASE_URL = 'http://localhost';
const PORT = '8000';

const request = async (url, method, body = {}) => {
  try {
    const response = await axios({
      method,
      url: `${BASE_URL}:${PORT}/api${url}`,
      data: body,
    });
    return response.data;
  } catch (error) {
    Vue.notify({
      group: 'user-notifications',
      title: 'Sorry...',
      type: 'error',
      text: JSON.parse(error.request.response).message,
    });
  }
};

export default request;
