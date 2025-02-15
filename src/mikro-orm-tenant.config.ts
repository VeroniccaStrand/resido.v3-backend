import { defineConfig, PostgreSqlDriver } from '@mikro-orm/postgresql';

import { Migrator } from '@mikro-orm/migrations';

import configuration from './database/configuration';

const dbConfig = configuration().database;
export default defineConfig({
  driver: PostgreSqlDriver,
  dbName: dbConfig.dbName,
  user: dbConfig.username,
  password: dbConfig.password,
  host: dbConfig.host,
  port: +dbConfig.port,
  debug: true,
  schema: '*',
  allowGlobalContext: true,
  migrations: {
    path: `./migrations/template_tenant`,
    glob: '!(*.d).{js,ts}',
  },
  entities: [Manager, Admin, User, UnitTenant],
  extensions: [Migrator],
});
