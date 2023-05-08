import { konturHandlerAPI as konturHandler } from '../../core/axios';
import { IProductRestsFilterParams } from '@/interfaces/konturAPI';

export const productList = async () => {
  return (await konturHandler.get('/product/list')).data;
};

export const productRests = async () => {
  return (await konturHandler.get('/product/rests')).data;
};

export const filteredProductRests = async (
  filterParams: IProductRestsFilterParams,
) => {
  const params = filterParams;
  return (await konturHandler.get('/product/rests/filtered', { params })).data;
};
