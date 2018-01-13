import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WhiteCard } from './white-card.entity';

@Module({
  modules: [TypeOrmModule.forFeature([WhiteCard])]
})
export class WhiteCardModule {}
