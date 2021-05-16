import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import DashboardController from './modules/Dashboard/dashboard.controller';
import DashboardService from './modules/Dashboard/dashboard.service';

import { AuthorModule } from './modules/Author/author.module';
import { BookModule } from './modules/Book/book.module';
import { BookGenreModule } from './modules/BookGenre/book-genre.module';
import { GenreModule } from './modules/Genre/genre.module';

import { genreBooksLoader } from './modules/Loaders/books.loader';

@Module({
  imports: [

    // Modulos
    AuthorModule,
    BookModule,
    BookGenreModule,
    GenreModule,

    // GraphQL
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: true,
      context: {
        genreBooksLoader: genreBooksLoader(),
      },
    }),
  ],
  controllers: [
    DashboardController
  ],
  providers: [
    DashboardService
  ],
})

export class AppModule {}
