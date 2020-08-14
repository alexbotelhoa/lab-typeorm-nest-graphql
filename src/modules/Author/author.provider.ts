import { Connection } from 'typeorm';

import Author from './author.entity';

const AuthorProvider = [
  {
    provide: 'AuthorRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Author),
    inject: ['DbConnectionToken'],
  },
];

export default AuthorProvider;
