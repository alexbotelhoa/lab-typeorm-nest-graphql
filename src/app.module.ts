import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import AuthorModule from './modules/Author/author.module';
import BookModule from './modules/Book/book.module';
import BookGenreModule from './modules/BookGenre/book-genre.module';
import GenreModule from './modules/Genre/genre.module';

import { genreBooksLoader } from './modules/Loaders/books.loader';

@Module({
  imports: [
    TypeOrmModule.forRoot(),

    AuthorModule,
    BookModule,
    BookGenreModule,
    GenreModule,

    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: true,
      context: {
        genreBooksLoader: genreBooksLoader(),
      },
    }),
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ],
})

export class AppModule {}
