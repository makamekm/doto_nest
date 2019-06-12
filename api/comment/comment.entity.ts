export class CommentEntity {
  id?: number;
  userId?: number;
  date: Date = new Date();
  text: number = 0;
  children: CommentEntity[] = [];
}
