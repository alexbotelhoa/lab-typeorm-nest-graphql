import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import BookGenre from './book-genre.entity';

class BookGenreModel {
  public constructor(
    @Inject('BookGenreRepositoryToken') 
    public readonly bookGenreRepository: Repository<BookGenre>,
  ) {}
}

export default BookGenreModel;
