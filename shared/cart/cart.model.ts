import { IProductModel } from '../product/product.model';
import { IUserModel } from '../auth/user.model';

export interface IProductCartModel {
  id?: number;
  user?: IUserModel;
  date: Date;
  product?: IProductModel;
  count: number;
}
