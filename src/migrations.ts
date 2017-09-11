/* tslint:disable:no-console */

import * as path from 'path';
import * as process from 'process';
import { ConnectionOptions, createConnection } from 'typeorm';

let connectionOptions: ConnectionOptions;

if (process.env.DATABASE_URL) {
  connectionOptions = {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: [path.join(__dirname, 'modules', '**', '*.entity.ts')],
    migrations: [path.join(__dirname, 'migrations', '*.ts')],
    autoSchemaSync: false
  };
} else {
  connectionOptions = {
    type: 'postgres',
    host: process.env.DATABASE_HOST || 'localhost',
    port: Number(process.env.DATABASE_PORT) || 5432,
    username: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASS || 'admin',
    database: process.env.DATABASE_NAME || 'xyzzy2',
    entities: [path.join(__dirname, 'modules', '**', '*.entity.ts')],
    migrations: [path.join(__dirname, 'migrations', '*.ts')],
    autoSchemaSync: false
  };
}

(async () => {
  const connection = await createConnection(connectionOptions);
  await connection.runMigrations();
  await connection.close();
})().catch(error => console.error(error));
