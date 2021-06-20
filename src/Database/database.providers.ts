import { createConnection } from 'typeorm';

const DatabaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async () => {
      return await createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 54322,
        username: "user",
        password: "123456",
        database: "lab_nest",
        synchronize: true,
        logging: false,
        entities: [__dirname + '/../modules/**/*.entity{.ts,.js}'],
        migrations: [__dirname + '/migrations/*{.ts,.js}'],
      });
    },
  },
];

export default DatabaseProviders;
