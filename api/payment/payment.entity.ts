import { PaymentAddressEntity } from './payment-address.entity';
import { PaymentStatus } from '~/shared/payment/payment-status.enum';

export class PaymentEntity {
  id?: number;
  userId?: number;
  price: number = 0;
  currency: string = '';
  fullPrice: string = '';
  status: PaymentStatus = PaymentStatus.Initialized;
  billingAddress: PaymentAddressEntity = new PaymentAddressEntity();
}
