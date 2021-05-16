import { Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import Author from './author.entity';
import AuthorDto from './author.dto';

class AuthorModel {
  
  constructor(
    @Inject('AuthorRepositoryToken') 
    public readonly authorRepository: Repository<Author>,
  ) {}

  async all(): Promise<Author[]> {
    return this.authorRepository.find();
  }

  async find(id: number): Promise<Author> {
    return this.authorRepository.findOne({ where: { id } });
  }
 
  async create(input: AuthorDto): Promise<Author> {
    const author = this.authorRepository.create({ name: input.name });
    return this.authorRepository.save(author);
  }

  async update(input: AuthorDto): Promise<Author> {
    const { id, name } = input;

    const authorFinded = await this.authorRepository.findOne({ where: { id } });

    authorFinded.name = name;
    
    return this.authorRepository.save(authorFinded);
  }

}

export default AuthorModel;
