import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import Author from './author.entity';

@Injectable()
class AuthorService {
  public constructor(
    @InjectRepository(Author) public readonly authorRepo: Repository<Author>,
  ) {}
}

export default AuthorService;
