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

  @Get('node/list')
  public nodeList() {
    return {
      list: [
        {
          id: 0,
          version: {
            id: 0,
            version: 'qwerty',
          },
          name: 'test',
          status: 'good',
          author: 'maxim',
          date: '01/01/2019 10:10:10',
          comments: 'It was very necessary',
        },
        {
          id: 1,
          version: {
            id: 1,
            version: 'ytrewq',
          },
          name: 'test',
          status: 'good',
          author: 'maxim',
          date: '01/01/2019 10:10:10',
          comments: 'It was very necessary',
        },
      ],
    };
  }

  @Get('node/get')
  public nodeGet() {
    return {
      data: {
        id: 0,
        version: {
          id: 0,
          version: 'qwerty',
        },
        name: 'test',
        status: 'good',
        date: '01/01/2019 10:10:10',
        comments: 'It was very necessary',
        history: [
          {
            version: {
              id: 0,
              version: 'qwerty',
            },
            author: 'maxim',
            date: '01/01/2019 10:10:10',
            comments: 'It was very necessary',
          },
          {
            version: {
              id: 1,
              version: 'ytrewq',
            },
            author: 'maxim',
            date: '01/01/2019 09:09:09',
            comments: 'It was not really necessary',
          },
        ],
      },
    };
  }

  @Get('version/list')
  public versionList() {
    return {
      list: [
        {
          id: 0,
          version: 'qwerty',
        },
        {
          id: 1,
          version: 'ytrewq',
        },
      ],
    };
  }
}
