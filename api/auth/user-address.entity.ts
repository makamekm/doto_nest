import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserAddressEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ default: '' })
  country: string = '';

  @Column({ default: '' })
  zip: string = '';

  @Column({ default: '' })
  city: string = '';

  @Column({ default: '' })
  street: string = '';

  @Column({ default: '' })
  lineOne: string = '';

  @Column({ default: '' })
  lineTwo: string = '';

  @Column({ default: '' })
  additionalInfo: string = '';
}
