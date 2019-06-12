import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { ICommentModel } from '~/shared/comment/comment.model';
import { UserEntity } from '../auth/user.entity';

@Entity()
export class CommentEntity implements ICommentModel {
  @PrimaryGeneratedColumn()
  id?: number;

  @ManyToOne(() => UserEntity)
  user?: UserEntity;

  @Column({ default: new Date() })
  date: Date = new Date();

  @Column({ default: '' })
  text: string = '';

  @OneToMany(() => CommentEntity, e => e.parent)
  children: CommentEntity[] = [];

  @ManyToOne(() => CommentEntity, e => e.children)
  parent?: CommentEntity;
}
