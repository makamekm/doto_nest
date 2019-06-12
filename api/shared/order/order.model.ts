import { ICommentModel } from '../comment/comment.model';
import { OrderStatus } from './order-status.enum';
import { IOrderProductModel } from './order-product.model';
import { IOrderAddressModel } from './order-address.model';
import { IUserModel } from '../auth/user.model';

export interface IOrderModel {
  id?: number;
  user?: IUserModel;
  totalPrice: number;
  products?: IOrderProductModel[];
  status: OrderStatus;
  hasQuestion: boolean;
  hasAnswer: boolean;
  comments?: ICommentModel[];
  address?: IOrderAddressModel;
  created_at?: Date;
  updated_at?: Date;
}
