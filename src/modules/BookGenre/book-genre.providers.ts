import { Connection } from 'typeorm';

import BookGenre from './book-genre.entity';

const BookGenreProviders = [
  {
    provide: 'BookGenreRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(BookGenre),
    inject: ['DbConnectionToken'],
  },
];

export default BookGenreProviders;