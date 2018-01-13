/* tslint:disable:no-non-null-assertion no-unsafe-any no-any no-unnecessary-type-assertion */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class MisprintReplacement1505096554899 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const insertResult = await queryRunner.insert('card_set', {
      name: `Misprint Replacement Bonus Cards`,
      baseDeck: false,
      description: `Bonus cards included with replacements for misprinted cards.`,
      weight: 21,
      active: true
    });

    await queryRunner.insert('black_card', {
      text: `Daddy, why is Mommy crying?`,
      draw: 0,
      pick: 1,
      watermark: `B`,
      cardSetId: insertResult.result![0].id
    });

    await queryRunner.insert('white_card', {
      text: `A bitch slap.`,
      watermark: `B`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `One trillion dollars.`,
      watermark: `B`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Chunks of dead prostitute.`,
      watermark: `B`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The entire Mormon Tabernacle Choir.`,
      watermark: `B`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The female orgasm.`,
      watermark: `B`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Extremely tight pants.`,
      watermark: `B`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Stormtroopers.`,
      watermark: `B`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Boy Scouts of America.`,
      watermark: `B`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Throwing a virgin into a volcano.`,
      watermark: `B`,
      cardSetId: insertResult.result![0].id
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.delete('black_card', {
      text: `Daddy, why is Mommy crying?`,
      draw: 0,
      pick: 1,
      watermark: `B`
    });

    await queryRunner.delete('white_card', {
      text: `A bitch slap.`,
      watermark: `B`
    });
    await queryRunner.delete('white_card', {
      text: `One trillion dollars.`,
      watermark: `B`
    });
    await queryRunner.delete('white_card', {
      text: `Chunks of dead prostitute.`,
      watermark: `B`
    });
    await queryRunner.delete('white_card', {
      text: `The entire Mormon Tabernacle Choir.`,
      watermark: `B`
    });
    await queryRunner.delete('white_card', {
      text: `The female orgasm.`,
      watermark: `B`
    });
    await queryRunner.delete('white_card', {
      text: `Extremely tight pants.`,
      watermark: `B`
    });
    await queryRunner.delete('white_card', {
      text: `Stormtroopers.`,
      watermark: `B`
    });
    await queryRunner.delete('white_card', {
      text: `The Boy Scouts of America.`,
      watermark: `B`
    });
    await queryRunner.delete('white_card', {
      text: `Throwing a virgin into a volcano.`,
      watermark: `B`
    });

    await queryRunner.delete('card_set', {
      name: `Misprint Replacement Bonus Cards`,
      baseDeck: false,
      description: `Bonus cards included with replacements for misprinted cards.`,
      weight: 21,
      active: true
    });
  }
}
