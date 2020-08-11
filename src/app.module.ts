import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import RepoModule from './repo.module';
import AuthorResolver from './resolvers/author.resolver';
import BookResolver from './resolvers/book.resolver';
import GenreResolver from './resolvers/genre.resolver';
import BookGenreResolver from './resolvers/book-genre.resolver';
import { genreBooksLoader } from './db/loaders/books.loader';

const graphQLImports = [
  AuthorResolver,
  BookResolver,
  GenreResolver,
  BookGenreResolver,
];

@Module({
  imports: [TypeOrmModule.forRoot(),
    RepoModule,
    ...graphQLImports,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: true,
      context: {
        genreBooksLoader: genreBooksLoader(),
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
