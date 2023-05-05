import axios from 'axios';

const axiosClient = axios.create();

axiosClient.defaults.baseURL = `Type base URL here`;

axiosClient.interceptors.request.use((config) => {
  config.headers['x-apikey'] = 'apiKey';
  return config;
});

export default axiosClient;
