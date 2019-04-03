import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import Next from 'next';
import { RenderModule } from 'nest-next';

async function bootstrap() {
  const dev = process.env.NODE_ENV !== 'production';
  const app = Next({ dev });
  await app.prepare();
  const server = await NestFactory.create(AppModule);
  const renderer = server.get(RenderModule);
  renderer.register(server, app);
  await server.listen(process.env.PORT || 3000);
}
bootstrap();
