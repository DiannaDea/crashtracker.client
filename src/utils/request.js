import axios from 'axios';

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
    return error;
  }
};

export default request;
