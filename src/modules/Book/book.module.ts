import { Injectable } from '@nestjs/common';
import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import Book from './book.entity';
import BookService from './book.service';
import BookResolver from './book.resolver';

@Global()
@Injectable()
@Module({
  imports: [
    TypeOrmModule.forFeature([
      Book,
    ]),
    BookResolver,
  ],
  providers: [
    BookService,
  ],
  exports: [
    BookService,
  ],
})

class BookModule {

}

export default BookModule;
