import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import Book from './book.entity';

@Injectable()
class RepositoryService {
  public constructor(
    @InjectRepository(Book) public readonly bookRepo: Repository<Book>,
  ) {}
}

export default RepositoryService;
