import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import Book from './book.entity';

@Injectable()
class BookModel {
  public constructor(
    @InjectRepository(Book)
    // @Inject('BookRepositoryToken') 
    public readonly bookRepository: Repository<Book>,
  ) {}
}

export default BookModel;