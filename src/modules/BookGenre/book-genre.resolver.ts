import { Arg } from 'type-graphql';
import { 
  Args, 
  Mutation, 
  Query, 
  Resolver 
} from '@nestjs/graphql';

import BookGenre from './book-genre.entity';
import BookGenreDto from './book-genre.dto';
import BookGenreService from './book-genre.service';

@Resolver(BookGenre)
class BookGenreResolver {

  constructor(
    private readonly bookGenreService: BookGenreService
  ) {}

  @Query(() => [BookGenre])
  public async bookGenres(): Promise<BookGenre[]> {
    return this.bookGenreService.bookGenreRepository.find();
  }

  @Query(() => BookGenre)
  public async bookGenre(@Arg('id') id: number): Promise<BookGenre> {
    return this.bookGenreService.bookGenreRepository.findOne(id);
  }

  @Mutation(() => BookGenre)
  public async createBookGenre(@Args('data') input: BookGenreDto): Promise<BookGenre> {
    const bookGenre = new BookGenre();
    
    const {bookId, genreId} = input;

    bookGenre.bookId = bookId;
    bookGenre.genreId = genreId;

    return this.bookGenreService.bookGenreRepository.save(bookGenre);
  }

}

export default BookGenreResolver;
