import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import Author from './author.entity';

@Injectable()
class AuthorModel {
  public constructor(
    @InjectRepository(Author)
    // @Inject('AuthorRepositoryToken') 
    public readonly authorRepository: Repository<Author>,
  ) {}
}

export default AuthorModel;
