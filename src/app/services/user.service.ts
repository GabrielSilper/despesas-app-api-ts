import { AppDataSource } from '../../database/data-source';
import { OK } from '../constants/httpCodes';
import User from '../entities/User';
import IUser from '../interfaces/IUser';
import ServiceData from '../types/ServiceData';

const userModel = AppDataSource.getRepository(User);

const getAll = async (): Promise<ServiceData<IUser[]>> => {
  const users = await userModel.find();
  return { status: OK, message: users };
};

export default { getAll };
