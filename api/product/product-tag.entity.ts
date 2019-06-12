import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ProductTag } from '../shared/product/product-tag.enum';
import { IProductTagModel } from '../shared/product/product-tag.model';
import { ProductEntity } from './product.entity';

@Entity()
export class ProductTagEntity implements IProductTagModel {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ default: ProductTag.Type })
  key: ProductTag = ProductTag.Type;

  @Column({ default: '' })
  value: string = '';

  @ManyToOne(() => ProductEntity, user => user.tags)
  product?: ProductEntity;
}
