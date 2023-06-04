import { Request, Response } from 'express';
import userService from '../services/user.service';

const getAll = async (req: Request, res: Response) => {
  const { status, message } = await userService.getAll();
  return res.status(status).json(message);
};

export default { getAll };
