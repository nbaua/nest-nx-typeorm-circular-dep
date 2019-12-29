import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { EndorseEntity } from './entities/endorse.entity';

export class EndorseService {
  constructor(
    @InjectRepository(EndorseEntity)
    private readonly endorseEntityRepository: Repository<EndorseEntity>
  ) {}

  getDescription(): string {
    return 'This API exposes Endorse data.';
  }

  async getEndorsements(): Promise<EndorseEntity[]> {
    const result = await this.endorseEntityRepository.find();
    return result;
  }

  async getEndorsementByCelebId(id: number): Promise<EndorseEntity> {
    const result = await this.endorseEntityRepository.findOne({
      celebrity_id: id
    });
    return result;
  }
}
