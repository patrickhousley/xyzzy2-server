import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CardSet } from '../card-set/card-set.entity';

@Entity()
export class WhiteCard {
  @PrimaryGeneratedColumn() public id: number;

  @Column({
    type: 'varchar',
    length: '255',
    nullable: false
  })
  public text: string;

  @Column({
    type: 'varchar',
    length: '5',
    nullable: true
  })
  public watermark: string;

  @ManyToOne(() => CardSet, cardSet => cardSet.whiteCards, {
    cascadeAll: true
  })
  public cardSet: CardSet;
}
