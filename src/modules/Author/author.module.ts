import { Injectable } from '@nestjs/common';
import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import Author from './author.entity';
import AuthorService from './author.service';
import AuthorResolver from './author.resolver';

@Global()
@Injectable()
@Module({
  imports: [
    TypeOrmModule.forFeature([
      Author,
    ]),
    AuthorResolver,
  ],
  providers: [
    AuthorService,
  ],
  exports: [
    AuthorService,
  ],
})

class AuthorModule {

}

export default AuthorModule;
