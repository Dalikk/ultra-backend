import axios from 'axios';
import * as dotenv from 'dotenv';
import * as path from 'path';
dotenv.config({ path: path.join(__dirname, '../../.env') });

const konturHandlerAPI = axios.create({
  baseURL: process.env.KONTUR_API_HANDLER_BASE_URL,
});

export { konturHandlerAPI };
