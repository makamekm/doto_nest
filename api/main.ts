import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';

const expressApp = express();

expressApp.use(express.static('dist'));

let promise;

expressApp.use(async (req, res, next) => {
  await tryStartBootstrap();
  next();
});

export async function tryStartBootstrap() {
  if (!promise) {
    promise = bootstrap();
  }
  await promise;
}

async function bootstrap() {
  const adapter = new ExpressAdapter(expressApp);
  const server = await NestFactory.create(AppModule, adapter);
  if (!!process.env.IS_EXPRESS) {
    server.setGlobalPrefix('api');
  }
  await server.enableCors();
  await server.init();
}

export default expressApp;
