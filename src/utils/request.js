import axios from 'axios';
import Vue from 'vue';

const { API_URL } = process.env || 'http://localhost';
const { API_PORT } = process.env || '8000';

const request = async (url, method, body = {}) => {
  try {
    const response = await axios({
      method,
      url: `${API_URL}:${API_PORT}/api${url}`,
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
