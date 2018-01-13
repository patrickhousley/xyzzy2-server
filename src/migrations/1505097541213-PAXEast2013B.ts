/* tslint:disable:no-non-null-assertion no-unsafe-any no-any no-unnecessary-type-assertion */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class PAXEast2013B1505097541213 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const insertResult = await queryRunner.insert('card_set', {
      name: `PAX East 2013 Pack &quot;B&quot;`,
      baseDeck: false,
      description: `PAX East 2013 Pack &quot;B&quot;.`,
      weight: 31,
      active: true
    });

    await queryRunner.insert('black_card', {
      text: `Action stations! Action stations! Set condition one throughout the fleet and brace for ____!`,
      draw: 0,
      pick: 1,
      watermark: `PAX B`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In the final round of this year's Omegathon, Omeganauts must face off in a game of ____.`,
      draw: 0,
      pick: 1,
      watermark: `PAX B`,
      cardSetId: insertResult.result![0].id
    });

    await queryRunner.insert('white_card', {
      text: `Loading from a previous save.`,
      watermark: `PAX B`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sharpening a foam broadsword on a foam whetstone.`,
      watermark: `PAX B`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The rocket launcher.`,
      watermark: `PAX B`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The depression that ensues after catching 'em all.`,
      watermark: `PAX B`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Violating the First Law of Robotics.`,
      watermark: `PAX B`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting inside the Horadric Cube with a hot babe and pressing the transmute button.`,
      watermark: `PAX B`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Punching a tree to gather wood.`,
      watermark: `PAX B`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Spending the year's insulin budget on Warhammer 40k figurines.`,
      watermark: `PAX B`,
      cardSetId: insertResult.result![0].id
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.delete('black_card', {
      text: `Action stations! Action stations! Set condition one throughout the fleet and brace for ____!`,
      draw: 0,
      pick: 1,
      watermark: `PAX B`
    });
    await queryRunner.delete('black_card', {
      text: `In the final round of this year's Omegathon, Omeganauts must face off in a game of ____.`,
      draw: 0,
      pick: 1,
      watermark: `PAX B`
    });

    await queryRunner.delete('white_card', {
      text: `Loading from a previous save.`,
      watermark: `PAX B`
    });
    await queryRunner.delete('white_card', {
      text: `Sharpening a foam broadsword on a foam whetstone.`,
      watermark: `PAX B`
    });
    await queryRunner.delete('white_card', {
      text: `The rocket launcher.`,
      watermark: `PAX B`
    });
    await queryRunner.delete('white_card', {
      text: `The depression that ensues after catching 'em all.`,
      watermark: `PAX B`
    });
    await queryRunner.delete('white_card', {
      text: `Violating the First Law of Robotics.`,
      watermark: `PAX B`
    });
    await queryRunner.delete('white_card', {
      text: `Getting inside the Horadric Cube with a hot babe and pressing the transmute button.`,
      watermark: `PAX B`
    });
    await queryRunner.delete('white_card', {
      text: `Punching a tree to gather wood.`,
      watermark: `PAX B`
    });
    await queryRunner.delete('white_card', {
      text: `Spending the year's insulin budget on Warhammer 40k figurines.`,
      watermark: `PAX B`
    });

    await queryRunner.delete('card_set', {
      name: `PAX East 2013 Pack &quot;B&quot;`,
      baseDeck: false,
      description: `PAX East 2013 Pack &quot;B&quot;.`,
      weight: 31,
      active: true
    });
  }
}
