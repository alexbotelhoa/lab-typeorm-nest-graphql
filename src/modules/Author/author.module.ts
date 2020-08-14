import { Injectable } from '@nestjs/common';
import { Global, Module } from '@nestjs/common';

import { DatabaseModule } from '../../Database/database.module';

import AuthorModel from './author.model';
import AuthorService from './author.service';
import AuthorResolver from './author.resolver';

import AuthorProviders from './author.providers';

@Global()
@Injectable()
@Module({
  imports: [
    DatabaseModule,
  ],
  providers: [
    ...AuthorProviders,
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
