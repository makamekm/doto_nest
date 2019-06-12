import { IProductTagModel } from './product-tag.model';

export interface IProductModel {
  id?: number;
  name: string;
  description: string;
  date: Date;
  price: number;
  isDisabled: boolean;
  tags: IProductTagModel[];
}