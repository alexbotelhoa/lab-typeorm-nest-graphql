import { createConnection } from 'typeorm';

const DatabaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async () => {
      return await createConnection({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: "root",
        password: "",
        database: "lab_graphql_db1",
        synchronize: true,
        migrations: [__dirname + '/migrations/*{.ts,.js}'],
        entities: [__dirname + '/../modules/**/*.entity{.ts,.js}'],
      });
    },
  },
];

export default DatabaseProviders;
