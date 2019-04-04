import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import Next from 'next';
import { RenderModule } from 'nest-next';
import { ErrorFilter } from './errors.filter';

async function bootstrap() {
  const dev = process.env.NODE_ENV !== 'production';
  const app = Next({ dev });
  await app.prepare();
  const expressApp = express();
  const adapter = new ExpressAdapter(expressApp);
  const server = await NestFactory.create(AppModule, adapter);
  await server.enableCors();
  await server.init();
  const renderer = server.get(RenderModule);
  renderer.register(server, app);
  server.useGlobalFilters(new ErrorFilter());
  expressApp.listen(process.env.PORT || 3000);
}
bootstrap();
