import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  public root(): string {
    return this.appService.root();
  }

  @Get('ping')
  public ping(): string {
    return this.appService.root();
  }

  @Get('test')
  public test(): any[] {
    return [
      {
        id: 0,
        name: 'maxim',
      },
      {
        id: 1,
        name: 'karpov',
      },
    ];
  }
}
