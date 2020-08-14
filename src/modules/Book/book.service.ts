import { Injectable } from '@nestjs/common';
// import { Repository } from 'typeorm';
// import { InjectRepository } from '@nestjs/typeorm';

import BookModel from './book.model';

@Injectable()
class BookService extends BookModel {
  // public constructor(
  //   public readonly bookRepo: Repository<Book>,
  // ) {}
}

export default BookService;
