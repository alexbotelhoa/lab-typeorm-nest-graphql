import { Injectable } from '@nestjs/common';

import AuthorModel from './author.model';

@Injectable()
class AuthorService extends AuthorModel {

}

export default AuthorService;
