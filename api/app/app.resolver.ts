import { Resolver, Query, Args, ResolveProperty, Parent } from '@nestjs/graphql';
import { Author } from '../shared/graphql';

@Resolver('Author')
export class AuthorResolver {

  @Query()
  async author(@Args('id') id: number): Promise<Author> {
    return {
      id,
      firstName: `Hello World! ${id}`,
    };
  }
}
