import { Request, Response } from 'express';

import * as API from '../../api';
import { RequestWithQuery } from '@/types/generics';
import { IProductRestsFilterParams } from '@/interfaces/konturAPI';

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await API.kontur.products.productList();
    return res.json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'Something went wrong' });
  }
};

export const getProductRests = async (req: Request, res: Response) => {
  try {
    const productsRests = await API.kontur.products.productRests();
    return res.json(productsRests);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'Something went wrong' });
  }
};

export const getFilteredProductRests = async (
  req: Request<RequestWithQuery<{ name: string }>>,
  res: Response,
) => {
  try {
    const filterParams: IProductRestsFilterParams = {
      name: req.query.name.toString(),
    };
    const productRests = await API.kontur.products.filteredProductRests(
      filterParams,
    );
    return res.json(productRests);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'Something went wrong' });
  }
};
