import { ProductTag } from './product-tag.enum';

export interface IProductTagModel {
  id?: number;
  key: ProductTag;
  value: string;
}
