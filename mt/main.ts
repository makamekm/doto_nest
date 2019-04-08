import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import { ErrorFilter } from './errors.filter';

const expressApp = express();

expressApp.all('/api/*', async (req, res, next) => {
  await promise;
  next();
});

const promise = bootstrap();

async function bootstrap() {
  const adapter = new ExpressAdapter(expressApp);
  const server = await NestFactory.create(AppModule, adapter);
  server.setGlobalPrefix('api');
  await server.enableCors();
  await server.init();
  server.useGlobalFilters(new ErrorFilter());
}

export default expressApp;
