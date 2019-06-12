import { PaymentStatus } from './payment-status.enum';
import { PaymentAddressEntity } from './payment-address.entity';

export class PaymentEntity {
  id?: number;
  userId?: number;
  price: number = 0;
  currency: string = '';
  fullPrice: string = '';
  status: PaymentStatus = PaymentStatus.Initialized;
  billingAddress: PaymentAddressEntity = new PaymentAddressEntity();
}
