import { Request, Response } from 'express';

export const hello = (req: Request, res: Response) => {
  try {
    return res.json({ msg: 'Hello' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'Something went wrong' });
  }
};
