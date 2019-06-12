import { ProductTagEntity } from './product-tag.model';

export class ProductEntity {
  id?: number;
  name: string = '';
  description: string = '';
  date: Date = new Date();
  price: number = 0;
  isDisabled: boolean = false;
  tags: ProductTagEntity[] = [];
}
