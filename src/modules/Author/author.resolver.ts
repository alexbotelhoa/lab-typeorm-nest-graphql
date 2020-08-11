import { 
  Args, 
  Mutation, 
  Query, 
  Resolver 
} from '@nestjs/graphql';

import RepoService from '../../repo.service';
import Author from '../Author/author.entity';
import AuthorInput from '../Author/author.input';

@Resolver()
class AuthorResolver {
  
  constructor(private readonly repoService: RepoService) {}

  @Query(() => [Author])
  public async authors(): Promise<Author[]> {
    return this.repoService.authorRepo.find();
  }
  @Query(() => Author, {nullable: true})
  public async author(@Args('id') id: number): Promise<Author> {
    return this.repoService.authorRepo.findOne({where: { id }});
  }

  @Mutation(() => Author)
  public async createAuthor(@Args('data') input: AuthorInput): Promise<Author> {
    const author = this.repoService.authorRepo.create({ name: input.name });
    return this.repoService.authorRepo.save(author);
  }

  @Mutation(() => Author)
  public async updateAuthor(@Args('data') input: AuthorInput): Promise<Author> { 
    const { id, name } = input;

    const authorFinded = await this.repoService.authorRepo.findOne({ where: { id } });

    authorFinded.name = name;
    
    return this.repoService.authorRepo.save(authorFinded);
  }

}

export default AuthorResolver;
