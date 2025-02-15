import { defineConfig, PostgreSqlDriver } from '@mikro-orm/postgresql';
import configuration from './database/configuration';
import { Migrator } from '@mikro-orm/migrations';
import { Tenant } from './modules/tenants/entities/tenant.entity';

const dbConfig = configuration().database;

export default defineConfig({
  driver: PostgreSqlDriver,
  dbName: dbConfig.dbName,
  user: dbConfig.username,
  password: dbConfig.password,
  host: dbConfig.host,
  port: +dbConfig.port,
  debug: true,
  schema: 'public',
  allowGlobalContext: true,
  migrations: {
    path: './migrations/public',
  },
  extensions: [Migrator],
  entities: [Tenant],
});
