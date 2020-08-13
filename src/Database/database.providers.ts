import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async () => {
      const url = process.env.TYPEORM_URL;
      const synchronize = process.env.TYPEORM_AUTO_SCHEMA_SYNC === 'true';
      const logging = process.env.TYPEORM_LOG === 'true';
      const maxPoolSize = process.env.TYPEORM_MAX_POOL_SIZE || 2;

      return await createConnection({
        type: 'postgres',
        url,
        migrations: [__dirname + '/migration/*{.ts,.js}'],
        entities: [__dirname + '/../../modules/**/*.entity{.ts,.js}'],
        synchronize,
        logging,
        extra: { max: maxPoolSize },
      });
    },
  },
];
