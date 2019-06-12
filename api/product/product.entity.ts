import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { IProductModel } from '../shared/product/product.model';
import { ProductTagEntity } from './product-tag.entity';

@Entity()
export class ProductEntity implements IProductModel {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ default: '' })
  name: string = '';

  @Column({ default: '' })
  description: string = '';

  @Column({ default: 0 })
  price: number = 0;

  @Column({ default: false })
  isDisabled: boolean = false;

  @OneToMany(() => ProductTagEntity, e => e.product)
  tags?: ProductTagEntity[];

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;
}
