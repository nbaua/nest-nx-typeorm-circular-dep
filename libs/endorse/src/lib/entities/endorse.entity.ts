import { CelebrityEntity } from '@celeb-ads/celebrity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn
  // JoinColumn,
  // OneToOne
} from 'typeorm';

@Entity('endorsement')
export class EndorseEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'celebrity_id' })
  celebrity_id: number;

  @Column({ name: 'name', length: 50 })
  name: string;

  @Column({ name: 'company_name', length: 50 })
  company_name: string;

  @ManyToOne(() => CelebrityEntity, celebrity => celebrity.endorsements)
  @JoinColumn({ name: 'celebrity_id' })
  celebrity: CelebrityEntity;
}
