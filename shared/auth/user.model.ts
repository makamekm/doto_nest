import { IUserAddressModel } from './user-address.model';

export class IUserModel {
  id?: number;
  email: string = '';
  username: string = '';
  password: string = '';
  firstName: string = '';
  lastName: string = '';
  phoneNumber: string = '';
  addresses: IUserAddressModel[] = [];
}
