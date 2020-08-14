import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import Book from './book.entity';

class BookModel {
  public constructor(
    @Inject('BookRepositoryToken')
    public readonly bookRepository: Repository<Book>,
  ) {}
}

export default BookModel;