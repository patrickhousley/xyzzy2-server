import { WhiteCard } from '../white-card/white-card.entity';
import { BlackCard } from '../black-card/black-card.entity';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
  } from 'typeorm';

@Entity()
export class CardSet {
  @PrimaryGeneratedColumn() public id: number;

  @Column({
    type: 'boolean',
    default: false,
    nullable: false
  })
  public active: boolean;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true
  })
  public name: string;

  @Column({
    type: 'boolean',
    default: false,
    nullable: false
  })
  public baseDeck: boolean;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true
  })
  public description: string;

  @Column({
    type: 'int',
    default: 0,
    nullable: false
  })
  public weight: number;

  @OneToMany(() => BlackCard, blackCard => blackCard.cardSet, {
    cascadeInsert: true,
    cascadeUpdate: true
  })
  public blackCards: BlackCard[];

  @OneToMany(() => WhiteCard, whiteCard => whiteCard.cardSet, {
    cascadeInsert: true,
    cascadeUpdate: true
  })
  public whiteCards: WhiteCard[];
}