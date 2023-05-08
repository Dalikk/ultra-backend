import axios from '../../core/axios';

export const productRests = async () => {
  return (await axios.get('/product/rests')).data;
};
