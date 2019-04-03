import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('Index')
  public root(): string {
    return this.appService.root();
  }

  @Get('ping')
  public ping(): string {
    return this.appService.root();
  }
}
