import { Injectable } from '@nestjs/common';
// import { Repository } from 'typeorm';
// import { InjectRepository } from '@nestjs/typeorm';

import AuthorModel from './author.model';

@Injectable()
class AuthorService extends AuthorModel {
  // public constructor(
  //   public readonly authorModel: AuthorModel,
  // ) {}
}

export default AuthorService;
