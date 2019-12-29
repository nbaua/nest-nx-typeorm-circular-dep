import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication
} from '@nestjs/platform-fastify';
import * as helmet from 'helmet';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const port = 9631;
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    {
      // logger: true
    }
  );
  app.enableCors();
  app.use(helmet());
  // app.useLogger();

  app.useGlobalPipes(
    new ValidationPipe({ validationError: { target: false, value: false } })
  );
  await app.listen(port, '0.0.0.0');
  console.log(`Listening at > http://localhost:${port}/graphql`);
}

bootstrap();
