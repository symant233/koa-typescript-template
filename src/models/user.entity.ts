import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserModel {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @PrimaryColumn()
  email: string;

  @Column()
  name: string;
}
