import { 
  Args, 
  Context, 
  Mutation, 
  Parent, 
  Query, 
  ResolveProperty, 
  Resolver 
} from '@nestjs/graphql';

import Book from '../Book/book.entity';

import Genre from './genre.entity';
import GenreInput from './genre.input';
import GenreService from './genre.service';

import { IGraphQLContext } from '../Types/graphql.types';

@Resolver(Genre)
class GenreResolver {
  
  constructor(
    private readonly genreService: GenreService
  ) {}

  @Query(() => [Genre])
  public async genres(): Promise<Genre[]> {
    return this.genreService.genreRepo.find();
  }
  @Query(() => Genre, {nullable: true})
  public async genre(@Args('id') id: number): Promise<Genre> {
    return this.genreService.genreRepo.findOne(id);
  }

  @Mutation(() => Genre)
  public async createGenre(@Args('data') input: GenreInput): Promise<Genre> {
    // const genre = new Genre();
    // genre.name = input.name;
    // return this.genreService.genreRepo.save(genre);

    const genre = this.genreService.genreRepo.create({ name: input.name });
    return this.genreService.genreRepo.save(genre);
  }

  @ResolveProperty()
  public async book(@Parent() parent, @Context() {genreBooksLoader}: IGraphQLContext): Promise<Book[]> {
    return genreBooksLoader.load(parent.id);
  }

}

export default GenreResolver;
