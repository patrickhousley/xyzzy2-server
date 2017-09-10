import { CardSet } from '../card-set/card-set.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn
  } from 'typeorm';

@Entity()
export class BlackCard {
  @PrimaryGeneratedColumn() public id: number;

  @Column({
    type: 'varchar',
    length: '255'
  })
  public text: string;

  @Column({
    type: 'int',
    default: 0
  })
  public draw: number;

  @Column({
    type: 'int',
    default: 1
  })
  public pick: number;

  @Column({
    type: 'varchar',
    length: '5',
    nullable: true
  })
  public watermark: string;

  @ManyToOne(() => CardSet, cardSet => cardSet.blackCards, {
    cascadeAll: true
  })
  public cardSet: CardSet;
}