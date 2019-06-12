import { IUserModel } from '../auth/user.model';

export interface ICommentModel {
  id?: number;
  user?: IUserModel;
  text: string;
  children?: ICommentModel[];
  created_at?: Date;
  updated_at?: Date;
}
