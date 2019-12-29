import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { EndorseService, EndorseEntity } from '@celeb-ads/endorse';

@Resolver()
export class EndorseResolver {
  constructor(private endorseService: EndorseService) {}
  @Query(returns => String)
  getDescription(): string {
    return this.endorseService.getDescription();
  }

  @Query(returns => [EndorseEntity])
  getEndorsements(): Promise<EndorseEntity[]> {
    return this.endorseService.getEndorsements();
  }

  @Query(returns => EndorseEntity)
  getEndorsementByCelebId(@Args('id') id: number): Promise<EndorseEntity> {
    return this.endorseService.getEndorsementByCelebId(id);
  }
}
