import axios from 'axios';
import * as dotenv from 'dotenv';
import * as path from 'path';
dotenv.config({ path: path.join(__dirname, '../../.env') });

const checkEnvVar = (varName: string): string => {
  const value = process.env[varName];
  if (!value) {
    throw new Error(`${varName} env var required`);
  }
  return value;
};

const checkMicroserviceAvailability = async (url: string, name: string) => {
  try {
    await axios.get(url);
    return true;
  } catch (error) {
    console.warn(`Microservice --${name}-- is not available now`);
  }
};

const konturAPIHandlerBaseURL = checkEnvVar('KONTUR_API_HANDLER_BASE_URL');
const cashAccountingBaseURL = checkEnvVar('CASH_ACCOUNTING_BASE_URL');

checkMicroserviceAvailability(konturAPIHandlerBaseURL, 'Kontur API handler');
checkMicroserviceAvailability(cashAccountingBaseURL, 'Cash accounting');

const konturHandlerAPI = axios.create({
  baseURL: konturAPIHandlerBaseURL,
});

const cashAccountingAPI = axios.create({
  baseURL: cashAccountingBaseURL,
});

export { konturHandlerAPI, cashAccountingAPI };
