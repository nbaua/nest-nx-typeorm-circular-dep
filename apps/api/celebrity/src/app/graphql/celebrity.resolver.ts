import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CelebrityService, CelebrityEntity } from '@celeb-ads/celebrity';

@Resolver()
export class CelebrityResolver {
  constructor(private celebrityService: CelebrityService) {}
  @Query(returns => String)
  getDescription(): string {
    return this.celebrityService.getDescription();
  }

  @Query(returns => [CelebrityEntity])
  getCelebrities(): Promise<CelebrityEntity[]> {
    return this.celebrityService.getCelebrities();
  }

  @Query(returns => CelebrityEntity)
  getCelebrityById(@Args('id') id: number): Promise<CelebrityEntity> {
    return this.celebrityService.getCelebrityById(id);
  }
}
