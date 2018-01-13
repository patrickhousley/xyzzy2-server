/* tslint:disable:no-non-null-assertion no-unsafe-any no-any no-unnecessary-type-assertion */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class PAXEast2013C1505097543624 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const insertResult = await queryRunner.insert('card_set', {
      name: `PAX East 2013 Pack &quot;C&quot;`,
      baseDeck: false,
      description: `PAX East 2013 Pack &quot;C&quot;.`,
      weight: 32,
      active: true
    });

    await queryRunner.insert('black_card', {
      text: `Press <span class="card_number">&darr;</span><span class="card_number">&darr;</span><span class="card_number">&larr;</span><span class="card_number">&rarr;</span><span class="card_number">B</span> to unleash ____.`,
      draw: 0,
      pick: 1,
      watermark: `PAX C`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I don't know exactly how I got the PAX plague, but I suspect it had something to do with ____.`,
      draw: 0,
      pick: 1,
      watermark: `PAX C`,
      cardSetId: insertResult.result![0].id
    });

    await queryRunner.insert('white_card', {
      text: `Achieving 500 actions per minute.`,
      watermark: `PAX C`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Forgetting to eat, and consequently dying.`,
      watermark: `PAX C`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Wil Wheaton crashing an actual spaceship.`,
      watermark: `PAX C`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Klobb.`,
      watermark: `PAX C`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Charging up all the way.`,
      watermark: `PAX C`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Vespene gas.`,
      watermark: `PAX C`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Judging elves by the color of their skin and not by the content of their character.`,
      watermark: `PAX C`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Smashing all the pottery in a Pottery Barn in search of rupees.`,
      watermark: `PAX C`,
      cardSetId: insertResult.result![0].id
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.delete('black_card', {
      text: `Press <span class="card_number">&darr;</span><span class="card_number">&darr;</span><span class="card_number">&larr;</span><span class="card_number">&rarr;</span><span class="card_number">B</span> to unleash ____.`,
      draw: 0,
      pick: 1,
      watermark: `PAX C`
    });
    await queryRunner.delete('black_card', {
      text: `I don't know exactly how I got the PAX plague, but I suspect it had something to do with ____.`,
      draw: 0,
      pick: 1,
      watermark: `PAX C`
    });

    await queryRunner.delete('white_card', {
      text: `Achieving 500 actions per minute.`,
      watermark: `PAX C`
    });
    await queryRunner.delete('white_card', {
      text: `Forgetting to eat, and consequently dying.`,
      watermark: `PAX C`
    });
    await queryRunner.delete('white_card', {
      text: `Wil Wheaton crashing an actual spaceship.`,
      watermark: `PAX C`
    });
    await queryRunner.delete('white_card', {
      text: `The Klobb.`,
      watermark: `PAX C`
    });
    await queryRunner.delete('white_card', {
      text: `Charging up all the way.`,
      watermark: `PAX C`
    });
    await queryRunner.delete('white_card', {
      text: `Vespene gas.`,
      watermark: `PAX C`
    });
    await queryRunner.delete('white_card', {
      text: `Judging elves by the color of their skin and not by the content of their character.`,
      watermark: `PAX C`
    });
    await queryRunner.delete('white_card', {
      text: `Smashing all the pottery in a Pottery Barn in search of rupees.`,
      watermark: `PAX C`
    });

    await queryRunner.delete('card_set', {
      name: `PAX East 2013 Pack &quot;C&quot;`,
      baseDeck: false,
      description: `PAX East 2013 Pack &quot;C&quot;.`,
      weight: 32,
      active: true
    });
  }
}
