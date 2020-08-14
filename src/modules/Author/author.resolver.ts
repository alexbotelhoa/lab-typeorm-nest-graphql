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
    return this.authorService.authorRepository.find();
  }
  @Query(() => Author, {nullable: true})
  public async author(@Args('id') id: number): Promise<Author> {
    return this.authorService.authorRepository.findOne({where: { id }});
  }

  @Mutation(() => Author)
  public async createAuthor(@Args('data') input: AuthorDto): Promise<Author> {
    const author = this.authorService.authorRepository.create({ name: input.name });
    return this.authorService.authorRepository.save(author);
  }

  @Mutation(() => Author)
  public async updateAuthor(@Args('data') input: AuthorDto): Promise<Author> { 
    const { id, name } = input;

    const authorFinded = await this.authorService.authorRepository.findOne({ where: { id } });

    authorFinded.name = name;
    
    return this.authorService.authorRepository.save(authorFinded);
  }

}

export default AuthorResolver;
