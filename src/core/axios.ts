import axios from 'axios';
import * as dotenv from 'dotenv';
import * as path from 'path';
dotenv.config({ path: path.join(__dirname, '../../.env') });

const axiosClient = axios.create();
axiosClient.defaults.baseURL = process.env.API_BASE_URL;

// axiosClient.interceptors.request.use((config) => {
//   config.headers['x-apikey'] = 'apiKey';
//   return config;
// });

export default axiosClient;
