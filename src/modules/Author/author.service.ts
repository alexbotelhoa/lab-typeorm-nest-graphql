import { Injectable } from '@nestjs/common';

import AuthorDto from './author.dto';
import AuthorModel from './author.model';

@Injectable()
class AuthorService {

    constructor(
        public readonly authorModel: AuthorModel,
      ) {}

    async authorAll() {
        return await this.authorModel.all();
    }

    async authorFind(id: number) {
        return await this.authorModel.find(id);
    }

    async authorCreate(input: AuthorDto) {
        return await this.authorModel.create(input);
    }

    async authorUpdate(input: AuthorDto) {
        return await this.authorModel.update(input);
    }

}

export default AuthorService;
