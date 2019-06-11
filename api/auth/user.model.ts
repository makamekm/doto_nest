import { AddressEntity } from '../address/address.model';

export class UserEntity {
    id?: number;
    email: string = '';
    username: string = '';
    password: string = '';
    firstName: string = '';
    lastName: string = '';
    phoneNumber: string = '';
    addresses: AddressEntity[] = [];
  }