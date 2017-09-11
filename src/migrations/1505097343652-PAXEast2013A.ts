/* tslint:disable:no-non-null-assertion no-unsafe-any no-any */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class PAXEast2013A1505097343652 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const insertResult = await queryRunner.insert('card_set', {
      name: `PAX East 2013 Pack &quot;A&quot;`,
      baseDeck: true,
      description: `PAX East 2013 Pack &quot;A&quot;.`,
      weight: 30,
      active: true
    });

    await queryRunner.insert('black_card', {
      text: `I have an idea even better than Kickstarter, and it's called ____starter.`,
      draw: 0,
      pick: 1,
      watermark: `PAX A`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `You have been waylaid by ____ and must defend yourself.`,
      draw: 0,
      pick: 1,
      watermark: `PAX A`,
      cardSetId: insertResult.result![0].id
    });

    await queryRunner.insert('white_card', {
      text: `An immediately regrettable $9 hot dog from the Boston Convention Center.`,
      watermark: `PAX A`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Running out of stamina.`,
      watermark: `PAX A`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Casting Magic Missile at a bully.`,
      watermark: `PAX A`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting bitch slapped by Dhalsim.`,
      watermark: `PAX A`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Firefly: Season 2.`,
      watermark: `PAX A`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Rotating shapes in mid-air so that they fit into other shapes when they fall.`,
      watermark: `PAX A`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Jiggle physics.`,
      watermark: `PAX A`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Paying the iron price.`,
      watermark: `PAX A`,
      cardSetId: insertResult.result![0].id
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.delete('black_card', {
      text: `I have an idea even better than Kickstarter, and it's called ____starter.`,
      draw: 0,
      pick: 1,
      watermark: `PAX A`
    });
    await queryRunner.delete('black_card', {
      text: `You have been waylaid by ____ and must defend yourself.`,
      draw: 0,
      pick: 1,
      watermark: `PAX A`
    });

    await queryRunner.delete('white_card', {
      text: `An immediately regrettable $9 hot dog from the Boston Convention Center.`,
      watermark: `PAX A`
    });
    await queryRunner.delete('white_card', {
      text: `Running out of stamina.`,
      watermark: `PAX A`
    });
    await queryRunner.delete('white_card', {
      text: `Casting Magic Missile at a bully.`,
      watermark: `PAX A`
    });
    await queryRunner.delete('white_card', {
      text: `Getting bitch slapped by Dhalsim.`,
      watermark: `PAX A`
    });
    await queryRunner.delete('white_card', {
      text: `Firefly: Season 2.`,
      watermark: `PAX A`
    });
    await queryRunner.delete('white_card', {
      text: `Rotating shapes in mid-air so that they fit into other shapes when they fall.`,
      watermark: `PAX A`
    });
    await queryRunner.delete('white_card', {
      text: `Jiggle physics.`,
      watermark: `PAX A`
    });
    await queryRunner.delete('white_card', {
      text: `Paying the iron price.`,
      watermark: `PAX A`
    });

    await queryRunner.delete('card_set', {
      name: `PAX East 2013 Pack &quot;A&quot;`,
      baseDeck: true,
      description: `PAX East 2013 Pack &quot;A&quot;.`,
      weight: 30,
      active: true
    });
  }
}
