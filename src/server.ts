/* tslint:disable:no-import-side-effect no-console */
// prettier-ignore
import 'reflect-metadata';

import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as express from 'express';
import * as helmet from 'helmet';
import { ApplicationModule } from './modules/application/app.module';

const expressInstance = express();
expressInstance.use(helmet());
expressInstance.use(compression());
expressInstance.use(bodyParser.json());

const app = NestFactory.create(ApplicationModule, expressInstance);
app.listen(3000, () => console.log('Application is listening on port 3000.'));
