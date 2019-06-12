import { IProductModel } from '../product/product.model';
import { IUserModel } from '../auth/user.model';

export interface IProductCartModel {
  id?: number;
  user?: IUserModel;
  product?: IProductModel;
  count: number;
  created_at?: Date;
}
