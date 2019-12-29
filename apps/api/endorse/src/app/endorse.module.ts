import { Module } from '@nestjs/common';
// import { JwtModule } from '@nestjs/jwt';
// import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EndorseService, EndorseEntity } from '@celeb-ads/endorse';

import { EndorseResolver } from './graphql/endorse.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([EndorseEntity])
    // PassportModule.register({ defaultStrategy: 'jwt' }),
    // JwtModule.register({
    //   secret: ConfigHelper.getConfig().jwtSecretKey
    // })
  ],

  providers: [
    EndorseResolver,
    EndorseService
    // AuthenticationService,  JwtStrategy,
  ],
  controllers: []
  // exports: [EndorseService]
})
export class EndorseModule {}
