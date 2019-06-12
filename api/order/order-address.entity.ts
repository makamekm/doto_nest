import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IOrderAddressModel } from '../shared/order/order-address.model';

@Entity()
export class OrderAddressEntity implements IOrderAddressModel {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ default: '' })
  email: string = '';

  @Column({ default: '' })
  firstName: string = '';

  @Column({ default: '' })
  lastName: string = '';

  @Column({ default: '' })
  country: string = '';

  @Column({ default: '' })
  zip: string = '';

  @Column({ default: '' })
  city: string = '';

  @Column({ default: '' })
  street: string = '';

  @Column({ default: '' })
  lineOne: string = '';

  @Column({ default: '' })
  lineTwo: string = '';

  @Column({ default: '' })
  additionalInfo: string = '';
}
