import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as express from 'express';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Serve static files from the "public" directory
  app.use(express.static(path.join(__dirname, '..', 'public')));
  await app.listen(3000);
}
bootstrap();
