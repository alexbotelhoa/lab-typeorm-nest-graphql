import { Injectable } from '@nestjs/common';
import { Global, Module } from '@nestjs/common';

import { DatabaseModule } from '../../Database/database.module';

import GenreModel from './genre.model';
import GenreService from './genre.service';
import GenreResolver from './genre.resolver';

import GenreProviders from './genre.providers';

@Global()
@Injectable()
@Module({
  imports: [
    DatabaseModule,
  ],
  providers: [
    ...GenreProviders,
    GenreModel,
    GenreService,
    GenreResolver,
  ],
  controllers: [],
  exports: [
    GenreModel,
    GenreService,
  ],
})

export class GenreModule {};
