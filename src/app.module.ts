import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import RepositoryModule from './repository.module';
import ResolverModule from './resolver.module';

import { genreBooksLoader } from './modules/Loaders/books.loader';

@Module({
  imports: [TypeOrmModule.forRoot(),
    RepositoryModule,
    ...ResolverModule,
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
