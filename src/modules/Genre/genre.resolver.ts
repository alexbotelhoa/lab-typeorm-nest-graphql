import { 
  Args, 
  Context, 
  Mutation, 
  Parent, 
  Query, 
  ResolveProperty, 
  Resolver 
} from '@nestjs/graphql';

import RepositoryService from '../../repository.service';

import Book from '../Book/book.entity';
import Genre from '../Genre/genre.entity';
import GenreInput from '../Genre/genre.input';

import { IGraphQLContext } from '../../types/graphql.types';

@Resolver(Genre)
class GenreResolver {
  
  constructor(private readonly repoService: RepositoryService) {}

  @Query(() => [Genre])
  public async genres(): Promise<Genre[]> {
    return this.repoService.genreRepo.find();
  }
  @Query(() => Genre, {nullable: true})
  public async genre(@Args('id') id: number): Promise<Genre> {
    return this.repoService.genreRepo.findOne(id);
  }

  @Mutation(() => Genre)
  public async createGenre(@Args('data') input: GenreInput): Promise<Genre> {
    const genre = new Genre();
    genre.name = input.name;
    return this.repoService.genreRepo.save(genre);
  }

  @ResolveProperty()
  public async book(@Parent() parent, @Context() {genreBooksLoader}: IGraphQLContext): Promise<Book[]> {
    return genreBooksLoader.load(parent.id);
  }

}

export default GenreResolver;
