import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { IProductModel } from '~/shared/product/product.model';
import { ProductTagEntity } from './product-tag.entity';

@Entity()
export class ProductEntity implements IProductModel {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ default: '' })
  name: string = '';

  @Column({ default: '' })
  description: string = '';

  @Column({ default: new Date() })
  date: Date = new Date();

  @Column({ default: 0 })
  price: number = 0;

  @Column({ default: false })
  isDisabled: boolean = false;

  @OneToMany(() => ProductTagEntity, e => e.product)
  tags: ProductTagEntity[] = [];
}
