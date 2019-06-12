import { CommentEntity } from '../comment/comment.entity';
import { OrderStatus } from './order-status.enum';
import { OrderProductEntity } from './order-product.entity';
import { OrderAddressEntity } from './order-address.entity';

export class OrderEntity {
  id?: number;
  userId?: number;
  date: Date = new Date();
  totalPrice: number = 0;
  products: OrderProductEntity[] = [];
  status: OrderStatus = OrderStatus.Initialized;
  hasQuestion: boolean = false;
  hasAnswer: boolean = false;
  comments: CommentEntity[] = [];
  address: OrderAddressEntity = new OrderAddressEntity();
}
