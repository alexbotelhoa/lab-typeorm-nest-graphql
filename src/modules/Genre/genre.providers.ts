import { Connection } from 'typeorm';

import Genre from './genre.entity';

const GenreProviders = [
  {
    provide: 'GenreRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Genre),
    inject: ['DbConnectionToken'],
  },
];

export default GenreProviders;
