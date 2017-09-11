/* tslint:disable:no-non-null-assertion no-unsafe-any no-any */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class NostalgiaPack1505095747823 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const insertResult = await queryRunner.insert('card_set', {
      name: `90s Nostalgia Pack`,
      baseDeck: false,
      description: null,
      weight: 19,
      active: true
    });

    await queryRunner.insert('black_card', {
      text: `Siskel and Ebert have panned ____ as "poorly conceived" and "sloppily executed."`,
      draw: 0,
      pick: 1,
      watermark: `90s`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Up next on Nickelodeon: "Clarissa Explains ____."`,
      draw: 0,
      pick: 1,
      watermark: `90s`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `How did Stella get her groove back?`,
      draw: 0,
      pick: 1,
      watermark: `90s`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Believe it or not, Jim Carrey can do a dead-on impression of ____.`,
      draw: 0,
      pick: 1,
      watermark: `90s`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `It's Morphin' Time! Mastadon! Pterodactyl! Triceratops! Sabertooth Tiger! ____!`,
      draw: 0,
      pick: 1,
      watermark: `90s`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Tonight on SNICK: "Are You Afraid of ____?"`,
      draw: 0,
      pick: 1,
      watermark: `90s`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I'm a bitch, I'm a lover, I'm a child, I'm ____.`,
      draw: 0,
      pick: 1,
      watermark: `90s`,
      cardSetId: insertResult.result![0].id
    });

    await queryRunner.insert('white_card', {
      text: `Sucking the President's dick.`,
      watermark: `90s`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sunny D! Alright!`,
      watermark: `90s`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Log&trade;.`,
      watermark: `90s`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Wearing Nicolas Cage's face.`,
      watermark: `90s`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Stabbing the shit out of a Capri Sun.`,
      watermark: `90s`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Freeing Willy.`,
      watermark: `90s`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Liking big butts and not being able to lie about it.`,
      watermark: `90s`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Great Cornholio.`,
      watermark: `90s`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pure Moods, Vol. 1.`,
      watermark: `90s`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A mulatto, an albino, a mosquito, and my libido.`,
      watermark: `90s`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Jerking off to a 10-second RealMedia clip.`,
      watermark: `90s`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Yelling "girl power!" and doing a high kick.`,
      watermark: `90s`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pamela Anderson's boobs running in slow motion.`,
      watermark: `90s`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting caught up in the CROSSFIRE&trade;.`,
      watermark: `90s`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Deregulating the mortgage market.`,
      watermark: `90s`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Y2K bug.`,
      watermark: `90s`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Kurt Cobain's death.`,
      watermark: `90s`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pizza in the morning, pizza in the evening, pizza at supper time.`,
      watermark: `90s`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Angels interfering in an otherwise fair baseball game.`,
      watermark: `90s`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Patti Mayonnaise.`,
      watermark: `90s`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cool 90s up-in-the-front hair.`,
      watermark: `90s`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Several Michael Keatons.`,
      watermark: `90s`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A bus that will explode if it goes under 50 miles per hour.`,
      watermark: `90s`,
      cardSetId: insertResult.result![0].id
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.delete('black_card', {
      text: `Siskel and Ebert have panned ____ as "poorly conceived" and "sloppily executed."`,
      draw: 0,
      pick: 1,
      watermark: `90s`
    });
    await queryRunner.delete('black_card', {
      text: `Up next on Nickelodeon: "Clarissa Explains ____."`,
      draw: 0,
      pick: 1,
      watermark: `90s`
    });
    await queryRunner.delete('black_card', {
      text: `How did Stella get her groove back?`,
      draw: 0,
      pick: 1,
      watermark: `90s`
    });
    await queryRunner.delete('black_card', {
      text: `Believe it or not, Jim Carrey can do a dead-on impression of ____.`,
      draw: 0,
      pick: 1,
      watermark: `90s`
    });
    await queryRunner.delete('black_card', {
      text: `It's Morphin' Time! Mastadon! Pterodactyl! Triceratops! Sabertooth Tiger! ____!`,
      draw: 0,
      pick: 1,
      watermark: `90s`
    });
    await queryRunner.delete('black_card', {
      text: `Tonight on SNICK: "Are You Afraid of ____?"`,
      draw: 0,
      pick: 1,
      watermark: `90s`
    });
    await queryRunner.delete('black_card', {
      text: `I'm a bitch, I'm a lover, I'm a child, I'm ____.`,
      draw: 0,
      pick: 1,
      watermark: `90s`
    });

    await queryRunner.delete('white_card', {
      text: `Sucking the President's dick.`,
      watermark: `90s`
    });
    await queryRunner.delete('white_card', {
      text: `Sunny D! Alright!`,
      watermark: `90s`
    });
    await queryRunner.delete('white_card', {
      text: `Log&trade;.`,
      watermark: `90s`
    });
    await queryRunner.delete('white_card', {
      text: `Wearing Nicolas Cage's face.`,
      watermark: `90s`
    });
    await queryRunner.delete('white_card', {
      text: `Stabbing the shit out of a Capri Sun.`,
      watermark: `90s`
    });
    await queryRunner.delete('white_card', {
      text: `Freeing Willy.`,
      watermark: `90s`
    });
    await queryRunner.delete('white_card', {
      text: `Liking big butts and not being able to lie about it.`,
      watermark: `90s`
    });
    await queryRunner.delete('white_card', {
      text: `The Great Cornholio.`,
      watermark: `90s`
    });
    await queryRunner.delete('white_card', {
      text: `Pure Moods, Vol. 1.`,
      watermark: `90s`
    });
    await queryRunner.delete('white_card', {
      text: `A mulatto, an albino, a mosquito, and my libido.`,
      watermark: `90s`
    });
    await queryRunner.delete('white_card', {
      text: `Jerking off to a 10-second RealMedia clip.`,
      watermark: `90s`
    });
    await queryRunner.delete('white_card', {
      text: `Yelling "girl power!" and doing a high kick.`,
      watermark: `90s`
    });
    await queryRunner.delete('white_card', {
      text: `Pamela Anderson's boobs running in slow motion.`,
      watermark: `90s`
    });
    await queryRunner.delete('white_card', {
      text: `Getting caught up in the CROSSFIRE&trade;.`,
      watermark: `90s`
    });
    await queryRunner.delete('white_card', {
      text: `Deregulating the mortgage market.`,
      watermark: `90s`
    });
    await queryRunner.delete('white_card', {
      text: `The Y2K bug.`,
      watermark: `90s`
    });
    await queryRunner.delete('white_card', {
      text: `Kurt Cobain's death.`,
      watermark: `90s`
    });
    await queryRunner.delete('white_card', {
      text: `Pizza in the morning, pizza in the evening, pizza at supper time.`,
      watermark: `90s`
    });
    await queryRunner.delete('white_card', {
      text: `Angels interfering in an otherwise fair baseball game.`,
      watermark: `90s`
    });
    await queryRunner.delete('white_card', {
      text: `Patti Mayonnaise.`,
      watermark: `90s`
    });
    await queryRunner.delete('white_card', {
      text: `Cool 90s up-in-the-front hair.`,
      watermark: `90s`
    });
    await queryRunner.delete('white_card', {
      text: `Several Michael Keatons.`,
      watermark: `90s`
    });
    await queryRunner.delete('white_card', {
      text: `A bus that will explode if it goes under 50 miles per hour.`,
      watermark: `90s`
    });

    await queryRunner.delete('card_set', {
      name: `90s Nostalgia Pack`,
      baseDeck: false,
      description: null,
      weight: 19,
      active: true
    });
  }
}
