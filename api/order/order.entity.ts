import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, OneToOne, OneToMany } from 'typeorm';
import { CommentEntity } from '../comment/comment.entity';
import { OrderProductEntity } from './order-product.entity';
import { OrderAddressEntity } from './order-address.entity';
import { OrderStatus } from '~/shared/order/order-status.enum';
import { IOrderModel } from '~/shared/order/order.model';
import { UserEntity } from '../auth/user.entity';

@Entity()
export class OrderEntity implements IOrderModel {
  @PrimaryGeneratedColumn()
  id?: number;

  @ManyToOne(() => UserEntity)
  user?: UserEntity;

  @Column({ default: new Date() })
  date: Date = new Date();

  @Column({ default: 0 })
  totalPrice: number = 0;

  @OneToMany(() => OrderProductEntity, e => e.order)
  products: OrderProductEntity[] = [];

  @Column({ default: OrderStatus.Initialized })
  status: OrderStatus = OrderStatus.Initialized;

  @Column({ default: false })
  hasQuestion: boolean = false;

  @Column({ default: false })
  hasAnswer: boolean = false;

  @ManyToMany(() => OrderProductEntity)
  comments: CommentEntity[] = [];

  @OneToOne(() => OrderProductEntity)
  address: OrderAddressEntity = new OrderAddressEntity();
}
