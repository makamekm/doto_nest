import { CommentEntity } from '../comment/comment.model';
import { IAddress } from '../address/address.interface';

export class ProductOrderEntity {
  id?: number;
  productId: number = 0;
  count: number = 0;
  price: number = 0;
}

export enum OrderStatus {
  Initialized = 'initialized',
  WaitingForPayments = 'waitingForPayments',
  PaymentsDeclined = 'paymentsDeclined',
  Payed = 'payed',
  Gathering = 'gathering',
  Delivering = 'delivering',
  Awaiting = 'awaiting',
  Completed = 'completed',
  Error = 'error',
  Declined = 'declined',
  Issued = 'issued',
}

export class OrderAddressEntity implements IAddress {
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

export class OrderEntity {
  id?: number;
  userId?: number;
  date: Date = new Date();
  totalPrice: number = 0;
  products: ProductOrderEntity[] = [];
  status: OrderStatus = OrderStatus.Initialized;
  hasQuestion: boolean = false;
  hasAnswer: boolean = false;
  comments: CommentEntity[] = [];
  address: OrderAddressEntity = new OrderAddressEntity();
}
