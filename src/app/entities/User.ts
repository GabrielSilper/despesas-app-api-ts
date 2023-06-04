import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('increment', { name: 'user_id' })
  userId: number;

  @Column('varchar')
  login: string;

  @Column('varchar')
  password: string;

  @Column('varchar')
  name: string;
}

export default User;
