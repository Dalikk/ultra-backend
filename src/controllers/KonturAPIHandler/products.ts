import { Request, Response } from 'express';

import * as API from '../../api';

export const getProductRests = async (req: Request, res: Response) => {
  try {
    const productsRests = await API.products.productRests();
    return res.json(productsRests);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'Something went wrong' });
  }
};
