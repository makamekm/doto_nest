import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import { ErrorFilter } from './errors.filter';

const expressApp = express();

expressApp.use(express.static('dist'));

expressApp.use(async (req, res, next) => {
  await promise;
  next();
});

const promise = bootstrap();

async function bootstrap() {
  const adapter = new ExpressAdapter(expressApp);
  const server = await NestFactory.create(AppModule, adapter);
  if (process.env.IS_CLOUD) {
    server.setGlobalPrefix('api');
  }
  await server.enableCors();
  await server.init();
  server.useGlobalFilters(new ErrorFilter());
}

export default expressApp;
