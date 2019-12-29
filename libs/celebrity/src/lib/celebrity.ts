import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CelebrityEntity } from './entities/celebrity.entity';

export class CelebrityService {
  constructor(
    @InjectRepository(CelebrityEntity)
    private readonly celebrityEntityRepository: Repository<CelebrityEntity>
  ) {}

  getDescription(): string {
    return 'This API exposes Celebrity data.';
  }

  async getCelebrities(): Promise<CelebrityEntity[]> {
    const result = await this.celebrityEntityRepository.find({
      relations: ['endorsements']
    });
    return result;
  }

  async getCelebrityById(id: number): Promise<CelebrityEntity> {
    const result = await this.celebrityEntityRepository.findOne({
      id: id
    });
    return result;
  }
}
