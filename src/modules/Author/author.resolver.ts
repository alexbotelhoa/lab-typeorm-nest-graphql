import { 
  Args, 
  Mutation, 
  Query, 
  Resolver 
} from '@nestjs/graphql';

import Author from './author.entity';
import AuthorDto from './author.dto';
import AuthorService from './author.service';

@Resolver(Author)
class AuthorResolver {
  
  constructor(
    private readonly authorService: AuthorService
  ) {}

  @Query(() => [Author])
  public async authors(): Promise<Author[]> {
    return this.authorService.authorAll();
  }

  @Query(() => Author, {nullable: true})
  public async author(@Args('id') id: number): Promise<Author> {
    return this.authorService.authorFind(id);
  }

  @Mutation(() => Author)
  public async createAuthor(@Args('data') input: AuthorDto): Promise<Author> {
    return this.authorService.authorCreate(input);    
  }

  @Mutation(() => Author)
  public async updateAuthor(@Args('data') input: AuthorDto): Promise<Author> { 
    return this.authorService.authorUpdate(input); 
  }

}

export default AuthorResolver;
