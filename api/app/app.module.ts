import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '../auth/auth.module';
import { DatabaseModule } from '../database/database.module';
import { AuthorResolver } from './app.resolver';
import { ExpensesModule } from '../expenses/expenses.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      playground: true,
      typePaths: ['./**/*.graphql'],
      path: process.env.IS_SEPARATE ? '/api/graphql' : '/graphql',
    }),
    DatabaseModule,
    AuthModule,
    ExpensesModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    AuthorResolver,
  ],
})
export class AppModule {}
