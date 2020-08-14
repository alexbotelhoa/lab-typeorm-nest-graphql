import { Injectable } from '@nestjs/common';
import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import BookGenre from './book-genre.entity';
import BookGenreService from './book-genre.service';
import BookGenreResolver from './book-genre.resolver';

@Global()
@Injectable()
@Module({
  imports: [
    TypeOrmModule.forFeature([
      BookGenre,
    ]),
    BookGenreResolver,
  ],
  providers: [
    BookGenreService,
  ],
  exports: [
    BookGenreService,
  ],
})

export class BookGenreModule {};
