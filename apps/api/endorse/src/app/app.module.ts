import { CelebrityEntity } from '@celeb-ads/celebrity';
import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EndorseModule } from './Endorse.module';
import { GraphQLModule } from '@nestjs/graphql';
import { EndorseEntity } from '@celeb-ads/endorse';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      database: 'nestnx',
      username: 'root',
      password: 'SqlAdmin$123',
      logging: true,
      entities: [EndorseEntity, CelebrityEntity],
      synchronize: false
    }),
    EndorseModule,
    // forwardRef(() => EndorseModule),
    GraphQLModule.forRoot({
      context: ({ req }) => ({ req }),
      autoSchemaFile: false,
      typePaths: ['./**/endorse.gql'],
      installSubscriptionHandlers: true,
      debug: false
    })
  ],
  providers: []
})
export class AppModule {}
