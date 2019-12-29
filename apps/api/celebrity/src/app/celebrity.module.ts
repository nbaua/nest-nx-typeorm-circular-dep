import { EndorseEntity } from '@celeb-ads/endorse';
import { CelebrityService, CelebrityEntity } from '@celeb-ads/celebrity';
import { Module } from '@nestjs/common';
// import { JwtModule } from '@nestjs/jwt';
// import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CelebrityResolver } from './graphql/celebrity.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([CelebrityEntity, EndorseEntity])
    // PassportModule.register({ defaultStrategy: 'jwt' }),
    // JwtModule.register({
    //   secret: ConfigHelper.getConfig().jwtSecretKey
    // })
  ],

  providers: [
    CelebrityResolver,
    CelebrityService
    // AuthenticationService,  JwtStrategy,
  ],
  controllers: []
  // exports: [CelebrityService]
})
export class CelebrityModule {}
