import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import Next from 'next';
import { RenderModule } from 'nest-next';
import { ErrorFilter } from './errors.filter';

async function bootstrap() {
  const dev = process.env.NODE_ENV !== 'production';
  const app = Next({ dev });
  await app.prepare();
  const server = await NestFactory.create(AppModule);
  const renderer = server.get(RenderModule);
  renderer.register(server, app);
  server.useGlobalFilters(new ErrorFilter());
  await server.listen(process.env.PORT || 3000);
}
bootstrap();
