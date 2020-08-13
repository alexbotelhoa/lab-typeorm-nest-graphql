import { 
  Args, 
  Mutation, 
  Query, 
  Resolver 
} from '@nestjs/graphql';

import Author from './author.entity';
import AuthorInput from './author.input';
import AuthorService from './author.service';

@Resolver()
class AuthorResolver {
  
  constructor(
    private readonly authorService: AuthorService
  ) {}

  @Query(() => [Author])
  public async authors(): Promise<Author[]> {
    return this.authorService.authorRepo.find();
  }
  @Query(() => Author, {nullable: true})
  public async author(@Args('id') id: number): Promise<Author> {
    return this.authorService.authorRepo.findOne({where: { id }});
  }

  @Mutation(() => Author)
  public async createAuthor(@Args('data') input: AuthorInput): Promise<Author> {
    const author = this.authorService.authorRepo.create({ name: input.name });
    return this.authorService.authorRepo.save(author);
  }

  @Mutation(() => Author)
  public async updateAuthor(@Args('data') input: AuthorInput): Promise<Author> { 
    const { id, name } = input;

    const authorFinded = await this.authorService.authorRepo.findOne({ where: { id } });

    authorFinded.name = name;
    
    return this.authorService.authorRepo.save(authorFinded);
  }

}

export default AuthorResolver;
