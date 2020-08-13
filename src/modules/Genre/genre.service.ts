import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import Genre from './genre.entity';

@Injectable()
class GenreService {
  public constructor(
    @InjectRepository(Genre) public readonly genreRepo: Repository<Genre>,
  ) {}
}

export default GenreService;