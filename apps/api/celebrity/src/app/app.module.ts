import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CelebrityModule } from './celebrity.module';
import { GraphQLModule } from '@nestjs/graphql';
import { CelebrityEntity } from '@celeb-ads/celebrity';
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
      entities: [CelebrityEntity, EndorseEntity],
      synchronize: false
    }),
    CelebrityModule,
    // forwardRef(() => CelebrityModule),
    GraphQLModule.forRoot({
      context: ({ req }) => ({ req }),
      autoSchemaFile: false,
      typePaths: ['./**/celebrity.gql'],
      installSubscriptionHandlers: true,
      debug: false
    })
  ],
  providers: []
})
export class AppModule {}
