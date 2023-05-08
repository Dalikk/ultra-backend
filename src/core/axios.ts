import axios from 'axios';

const axiosClient = axios.create();
console.warn(process.env.API_BASE_URL);
axiosClient.defaults.baseURL = process.env.API_BASE_URL;

// axiosClient.interceptors.request.use((config) => {
//   config.headers['x-apikey'] = 'apiKey';
//   return config;
// });

export default axiosClient;
