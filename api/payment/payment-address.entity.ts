import { IAddress } from '../address/address.interface';

export class PaymentAddressEntity implements IAddress {
  id?: number;
  email: string = '';
  firstName: string = '';
  lastName: string = '';
  country: string = '';
  zip: string = '';
  city: string = '';
  street: string = '';
  lineOne: string = '';
  lineTwo: string = '';
  additionalInfo: string = '';
}
