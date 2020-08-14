import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import Author from './author.entity';

class AuthorModel {
  public constructor(
    @Inject('AuthorRepositoryToken') 
    public readonly authorRepository: Repository<Author>,
  ) {}
}

export default AuthorModel;
