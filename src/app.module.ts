import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RenderModule } from 'nest-next';

@Module({
  imports: [RenderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
