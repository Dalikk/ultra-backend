import { Request, Response } from 'express';

import * as API from '../api';

export const hello = (req: Request, res: Response) => {
  try {
    return res.json({ msg: 'Hello' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'Something went wrong' });
  }
};

export const helloAPI = async (req: Request, res: Response) => {
  try {
    const data = await API.getSome();
    return res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'Something went wrong' });
  }
};
