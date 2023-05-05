import axios from '../core/axios';

export const getSome = async () => {
  const someData = (await axios.get('URL')).data;
  return someData;
};
