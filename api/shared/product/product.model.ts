import { IProductTagModel } from './product-tag.model';

export interface IProductModel {
  id?: number;
  name: string;
  description: string;
  price: number;
  isDisabled: boolean;
  tags?: IProductTagModel[];
  created_at?: Date;
  updated_at?: Date;
}
