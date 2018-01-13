import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WhiteCardModule } from './white-card/white-card.module';

@Module({
  modules: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [__dirname + '/**/*.entity.ts', __dirname + '/**/*.entity.js'],
      migrations: [
        __dirname + '/migrations/*.ts',
        __dirname + '/migrations/*.js'
      ],
      migrationsRun: true
    }),
    WhiteCardModule
  ]
})
export class ApplicationModule {}
