import { Injectable } from '@nestjs/common';
import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// import { DatabaseModule } from '../../Database/database.module';

import Author from './author.entity';
import AuthorModel from './author.model';
import AuthorService from './author.service';
import AuthorResolver from './author.resolver';

import AuthorProvider from './author.provider';

@Global()
@Injectable()
@Module({
  imports: [
    // DatabaseModule,
    TypeOrmModule.forFeature([
      Author,
    ]),
  ],
  providers: [
    // ...AuthorProvider,
    AuthorModel,
    AuthorService,
    AuthorResolver,
  ],
  controllers: [],
  exports: [
    AuthorModel,
    AuthorService,
  ],
})

export class AuthorModule {};
