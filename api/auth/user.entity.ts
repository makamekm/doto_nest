import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { UserAddressEntity } from './user-address.entity';
import { IUserModel } from '~/shared/auth/user.model';

@Entity()
export class UserEntity implements IUserModel {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ default: '' })
  email: string = '';

  @Column({ default: '' })
  username: string = '';

  @Column({ default: '' })
  password: string = '';

  @Column({ default: '' })
  firstName: string = '';

  @Column({ default: '' })
  lastName: string = '';

  @Column({ default: '' })
  phoneNumber: string = '';

  @Column({ default: new Date() })
  date: Date = new Date();

  @ManyToMany(() => UserAddressEntity)
  addresses: UserAddressEntity[] = [];
}
