import { Injectable } from '@nestjs/common';
import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import Genre from './genre.entity';
import GenreService from './genre.service';
import GenreResolver from './genre.resolver';

@Global()
@Injectable()
@Module({
  imports: [
    TypeOrmModule.forFeature([
      Genre,
    ]),
    GenreResolver,
  ],
  providers: [
    GenreService,
  ],
  exports: [
    GenreService,
  ],
})

export class GenreModule {};
