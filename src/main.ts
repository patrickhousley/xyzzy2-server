/* tslint:disable:no-unnecessary-type-assertion */
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as helmet from 'helmet';
import { ApplicationModule } from './app.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(ApplicationModule);
    app.use(helmet());
    app.use(compression());
    app.use(bodyParser.json());

    const port = parseInt(process.env.PORT as string, 10);
    await app.listen(port);

    const logger = new Logger('Xyzzy2Server');
    logger.log(`Application started on port ${port}`);
  } catch (error) {
    console.log(error);
  }
}
bootstrap().catch(error => console.log(error));
