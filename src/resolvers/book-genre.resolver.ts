import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import RepoService from '../repo.service';
import BookGenre from '../db/models/book-genre.entity';
import BookGenreInput from './input/book-genre.input';
import { Arg } from 'type-graphql';

@Resolver()
class BookGenreResolver {

  constructor(private readonly repoService: RepoService) {}
  @Mutation(() => BookGenre)
  public async createBookGenre(@Args('data') input: BookGenreInput): Promise<BookGenre> {
    const bookGenre = new BookGenre();
    const {bookId, genreId} = input;
    bookGenre.bookId = bookId;
    bookGenre.genreId = genreId;
    return this.repoService.bookGenreRepo.save(bookGenre);
  }

  @Query(() => [BookGenre])
  public async bookGenres(): Promise<BookGenre[]> {
    return this.repoService.bookGenreRepo.find();
  }

  @Query(() => BookGenre)
  public async bookGenre(@Arg('id') id: number): Promise<BookGenre> {
    return this.repoService.bookGenreRepo.findOne(id);
  }
}

export default BookGenreResolver;
