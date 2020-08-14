import { Injectable } from '@nestjs/common';
import { Global, Module } from '@nestjs/common';

import { DatabaseModule } from '../../Database/database.module';

import BookGenreModel from './book-genre.model';
import BookGenreService from './book-genre.service';
import BookGenreResolver from './book-genre.resolver';

import BookGenreProviders from './book-genre.providers';

@Global()
@Injectable()
@Module({
  imports: [
    DatabaseModule,
  ],
  providers: [
    ...BookGenreProviders,
    BookGenreModel,
    BookGenreService,
    BookGenreResolver,
  ],
  controllers: [],
  exports: [
    BookGenreModel,
    BookGenreService,
  ],
})

export class BookGenreModule {};
