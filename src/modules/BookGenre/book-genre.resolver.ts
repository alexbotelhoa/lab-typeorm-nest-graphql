import { 
  Args, 
  Mutation, 
  Query, 
  Resolver 
} from '@nestjs/graphql';
import { Arg } from 'type-graphql';

import RepositoryService from '../../repository.service';

import BookGenre from '../BookGenre/book-genre.entity';
import BookGenreInput from '../BookGenre/book-genre.input';

@Resolver()
class BookGenreResolver {

  constructor(private readonly repoService: RepositoryService) {}

  @Query(() => [BookGenre])
  public async bookGenres(): Promise<BookGenre[]> {
    return this.repoService.bookGenreRepo.find();
  }

  @Query(() => BookGenre)
  public async bookGenre(@Arg('id') id: number): Promise<BookGenre> {
    return this.repoService.bookGenreRepo.findOne(id);
  }

  @Mutation(() => BookGenre)
  public async createBookGenre(@Args('data') input: BookGenreInput): Promise<BookGenre> {
    const bookGenre = new BookGenre();
    
    const {bookId, genreId} = input;

    bookGenre.bookId = bookId;
    bookGenre.genreId = genreId;

    return this.repoService.bookGenreRepo.save(bookGenre);
  }

}

export default BookGenreResolver;
