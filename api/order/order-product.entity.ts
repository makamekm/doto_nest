import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { IOrderProductModel } from '~/shared/order/order-product.model';
import { OrderEntity } from './order.entity';
import { ProductEntity } from '../product/product.entity';

@Entity()
export class OrderProductEntity implements IOrderProductModel {
  @PrimaryGeneratedColumn()
  id?: number;

  @ManyToOne(() => ProductEntity)
  product?: ProductEntity;

  @Column({ default: 0 })
  count: number = 0;

  @Column({ default: 0 })
  price: number = 0;

  @ManyToOne(() => OrderEntity, e => e.products)
  order?: OrderEntity;
}
