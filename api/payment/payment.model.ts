import { IAddress } from '../address/address.interface';

export enum PaymentStatus {
  Initialized = 'initialized',
  Awaiting = 'awaiting',
  Error = 'error',
  Declined = 'Declined',
}

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

export class PaymentEntity {
  id?: number;
  userId?: number;
  price: number = 0;
  currency: string = '';
  fullPrice: string = '';
  status: PaymentStatus = PaymentStatus.Initialized;
  billingAddress: PaymentAddressEntity = new PaymentAddressEntity();
}
