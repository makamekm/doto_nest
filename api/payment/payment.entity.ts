import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne } from 'typeorm';
import { PaymentAddressEntity } from './payment-address.entity';
import { PaymentStatus } from '~/shared/payment/payment-status.enum';
import { IPaymentModel } from '~/shared/payment/payment.entity';
import { UserEntity } from '../auth/user.entity';

@Entity()
export class PaymentEntity implements IPaymentModel {
  @PrimaryGeneratedColumn()
  id?: number;

  @ManyToOne(() => UserEntity)
  user?: UserEntity;

  @Column({ default: 0 })
  price: number = 0;

  @Column({ default: '' })
  currency: string = '';

  @Column({ default: '' })
  fullPrice: string = '';

  @Column({ default: PaymentStatus.Initialized })
  status: PaymentStatus = PaymentStatus.Initialized;

  @OneToOne(() => PaymentAddressEntity)
  billingAddress: PaymentAddressEntity = new PaymentAddressEntity();
}
