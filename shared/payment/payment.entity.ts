import { IPaymentAddressModel } from './payment-address.model';
import { PaymentStatus } from '~/shared/payment/payment-status.enum';

export interface IPaymentModel {
  id?: number;
  userId?: number;
  price: number;
  currency: string;
  fullPrice: string;
  status: PaymentStatus;
  billingAddress: IPaymentAddressModel;
}
