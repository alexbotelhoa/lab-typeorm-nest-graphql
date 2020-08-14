import { Injectable } from '@nestjs/common';
import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// import { DatabaseModule } from '../../Database/database.module';

import Book from './book.entity';
import BookModel from './book.model';
import BookService from './book.service';
import BookResolver from './book.resolver';

import BookProvider from './book.provider';

@Global()
@Injectable()
@Module({
  imports: [
    // DatabaseModule,
    TypeOrmModule.forFeature([
      Book,
    ]),
  ],
  providers: [
    // ...BookProvider,
    BookModel,
    BookService,
    BookResolver,
  ],
  controllers: [],
  exports: [
    BookModel,
    BookService,
  ],
})

export class BookModule {};
