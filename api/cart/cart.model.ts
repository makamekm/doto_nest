export class ProductCartEntity {
  id?: number;
  userId?: number;
  date: Date = new Date();
  productId: number = 0;
  count: number = 0;
}
