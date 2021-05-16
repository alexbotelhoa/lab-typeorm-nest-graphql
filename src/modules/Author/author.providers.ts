import { Connection } from 'typeorm';

import Author from './author.entity';

const AuthorProviders = [
  {
    provide: 'AuthorRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Author),
    inject: ['DbConnectionToken'],
  },
];

export default AuthorProviders;
