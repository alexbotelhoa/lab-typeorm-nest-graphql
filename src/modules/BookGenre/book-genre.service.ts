import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import BookGenre from './book-genre.entity';

@Injectable()
class BookGenreService {
  public constructor(
    @InjectRepository(BookGenre) public readonly bookGenreRepo: Repository<BookGenre>,
  ) {}
}

export default BookGenreService;
