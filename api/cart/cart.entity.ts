import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { IProductCartModel } from '~/shared/cart/cart.model';
import { UserEntity } from '../auth/user.entity';
import { ProductEntity } from '../product/product.entity';

@Entity()
export class ProductCartEntity implements IProductCartModel {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ default: new Date() })
  date: Date = new Date();

  @ManyToOne(() => UserEntity)
  user?: UserEntity;

  @ManyToOne(() => ProductEntity)
  product?: ProductEntity;

  @Column({ default: 1 })
  count: number = 1;
}
