import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import Genre from './genre.entity';

class GenreModel {
  public constructor(
    @Inject('GenreRepositoryToken') 
    public readonly genreRepository: Repository<Genre>,
  ) {}
}

export default GenreModel;
