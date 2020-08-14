import { Injectable } from '@nestjs/common';
import { Global, Module } from '@nestjs/common';

import { DatabaseModule } from '../../Database/database.module';

import BookModel from './book.model';
import BookService from './book.service';
import BookResolver from './book.resolver';

import BookProviders from './book.providers';

@Global()
@Injectable()
@Module({
  imports: [
    DatabaseModule,
  ],
  providers: [
    ...BookProviders,
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
