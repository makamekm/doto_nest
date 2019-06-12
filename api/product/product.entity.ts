import { ProductTagEntity } from './product-tag.entity';

// import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export class ProductEntity {
  id?: number;
  name: string = '';
  description: string = '';
  date: Date = new Date();
  price: number = 0;
  isDisabled: boolean = false;
  tags: ProductTagEntity[] = [];
}
