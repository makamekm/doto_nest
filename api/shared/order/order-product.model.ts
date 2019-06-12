import { IProductModel } from '../product/product.model';

export interface IOrderProductModel {
  id?: number;
  product?: IProductModel;
  count: number;
  price: number;
}
