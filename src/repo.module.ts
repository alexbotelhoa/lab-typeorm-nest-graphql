import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import RepoService from './repo.service';
import Author from './modules/Author/author.entity';
import Book from './modules/Book/book.entity';
import Genre from './modules/Genre/genre.entity';
import BookGenre from './modules/BookGenre/book-genre.entity';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([
      Author,
      Book,
      Genre,
      BookGenre,
    ]),
  ],
  providers: [RepoService],
  exports: [RepoService],
})

class RepoModule {

}

export default RepoModule;
