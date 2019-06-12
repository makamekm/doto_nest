import { IUserAddressModel } from './user-address.model';

export interface IUserModel {
  id?: number;
  email: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  addresses?: IUserAddressModel[];
  created_at?: Date;
  updated_at?: Date;
}
