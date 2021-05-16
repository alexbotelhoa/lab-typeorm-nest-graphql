import { Connection } from 'typeorm';

import Book from './book.entity';

const BookProviders = [
  {
    provide: 'BookRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Book),
    inject: ['DbConnectionToken'],
  },
];

export default BookProviders;
