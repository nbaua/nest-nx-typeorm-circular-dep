import { EndorseEntity } from '@celeb-ads/endorse';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn
  // JoinColumn,
  // OneToOne
} from 'typeorm';

@Entity('celebrities')
export class CelebrityEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'name', length: 50 })
  name: string;

  @Column({ name: 'age' })
  age: number;

  @Column({ name: 'gender', length: 10 })
  gender: string;

  @OneToMany(() => EndorseEntity, endorsements => endorsements.celebrity_id)
  @JoinColumn({ name: 'id' })
  endorsements: EndorseEntity[];
}
