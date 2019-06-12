import { IUserModel } from '../auth/user.model';

export interface ICommentModel {
  id?: number;
  user?: IUserModel;
  date: Date;
  text: string;
  children: ICommentModel[];
}
