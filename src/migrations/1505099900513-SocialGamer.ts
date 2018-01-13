/* tslint:disable:no-non-null-assertion no-unsafe-any no-any no-unnecessary-type-assertion */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class SocialGamer1505099900513 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const insertResult = await queryRunner.insert('card_set', {
      name: `[C] SocialGamer`,
      baseDeck: false,
      description: `Custom cards from the SocialGamer.net community.`,
      weight: 101,
      active: true
    });

    await queryRunner.insert('black_card', {
      text: `____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ is the name of my ____ cover band.`,
      draw: 0,
      pick: 2,
      watermark: `SG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Alcoholic games of Clue&reg; lead to ____.`,
      draw: 0,
      pick: 1,
      watermark: `SG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____.tumblr.com`,
      draw: 0,
      pick: 1,
      watermark: `SG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Don't slow down in East Cleveland or ____.`,
      draw: 0,
      pick: 1,
      watermark: `SG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `At the last PAX, Paul and Storm had ____ thrown at them during "Opening Band".`,
      draw: 0,
      pick: 1,
      watermark: `SG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ has the "mount" keyword.`,
      draw: 0,
      pick: 1,
      watermark: `SG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Drunken games of Pretend You're Xyzzy lead to ____ and ____.`,
      draw: 0,
      pick: 2,
      watermark: `SG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Who dunnit? ____ with ____ in ____.`,
      draw: 2,
      pick: 3,
      watermark: `SG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Next on GSN: "The $100,000 ____."`,
      draw: 0,
      pick: 1,
      watermark: `SG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Much ____. So ____. Wow.`,
      draw: 0,
      pick: 2,
      watermark: `SG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Nickelodeon's next kids' game show is "____", hosted by ____.`,
      draw: 0,
      pick: 2,
      watermark: `SG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ probably tastes better than Quiznos.`,
      draw: 0,
      pick: 1,
      watermark: `SG`,
      cardSetId: insertResult.result![0].id
    });

    await queryRunner.insert('white_card', {
      text: `The sound a single ThunderStix&reg; makes.`,
      watermark: `SG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Chilled Knife.`,
      watermark: `SG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dr. Phil.`,
      watermark: `SG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Paul and Storm.`,
      watermark: `SG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Jonathan Coulton.`,
      watermark: `SG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `MC Frontalot.`,
      watermark: `SG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pretending you're Xyzzy.`,
      watermark: `SG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cleveland (it's not Detroit!).`,
      watermark: `SG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The best card in my hand.`,
      watermark: `SG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The biggest, blackest dick.`,
      watermark: `SG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Suddenly realizing you're retarded.`,
      watermark: `SG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The League of Legends.`,
      watermark: `SG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Canadian penny.`,
      watermark: `SG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `dho's penis.`,
      watermark: `SG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Griffy's tits.`,
      watermark: `SG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Being banned from /r/pyongyang.`,
      watermark: `SG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The lost city of Atlantis.`,
      watermark: `SG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Hollaad Tonnel.`,
      watermark: `SG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A fountain of vomit.`,
      watermark: `SG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Billy the Answer Head.`,
      watermark: `SG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Performing the Secret Slime Action.`,
      watermark: `SG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Blank.`,
      watermark: `SG`,
      cardSetId: insertResult.result![0].id
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.delete('black_card', {
      text: `____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `____ is the name of my ____ cover band.`,
      draw: 0,
      pick: 2,
      watermark: `SG`
    });
    await queryRunner.delete('black_card', {
      text: `Alcoholic games of Clue&reg; lead to ____.`,
      draw: 0,
      pick: 1,
      watermark: `SG`
    });
    await queryRunner.delete('black_card', {
      text: `____.tumblr.com`,
      draw: 0,
      pick: 1,
      watermark: `SG`
    });
    await queryRunner.delete('black_card', {
      text: `Don't slow down in East Cleveland or ____.`,
      draw: 0,
      pick: 1,
      watermark: `SG`
    });
    await queryRunner.delete('black_card', {
      text: `At the last PAX, Paul and Storm had ____ thrown at them during "Opening Band".`,
      draw: 0,
      pick: 1,
      watermark: `SG`
    });
    await queryRunner.delete('black_card', {
      text: `____ has the "mount" keyword.`,
      draw: 0,
      pick: 1,
      watermark: `SG`
    });
    await queryRunner.delete('black_card', {
      text: `Drunken games of Pretend You're Xyzzy lead to ____ and ____.`,
      draw: 0,
      pick: 2,
      watermark: `SG`
    });
    await queryRunner.delete('black_card', {
      text: `Who dunnit? ____ with ____ in ____.`,
      draw: 2,
      pick: 3,
      watermark: `SG`
    });
    await queryRunner.delete('black_card', {
      text: `Next on GSN: "The $100,000 ____."`,
      draw: 0,
      pick: 1,
      watermark: `SG`
    });
    await queryRunner.delete('black_card', {
      text: `Much ____. So ____. Wow.`,
      draw: 0,
      pick: 2,
      watermark: `SG`
    });
    await queryRunner.delete('black_card', {
      text: `Nickelodeon's next kids' game show is "____", hosted by ____.`,
      draw: 0,
      pick: 2,
      watermark: `SG`
    });
    await queryRunner.delete('black_card', {
      text: `____ probably tastes better than Quiznos.`,
      draw: 0,
      pick: 1,
      watermark: `SG`
    });

    await queryRunner.delete('white_card', {
      text: `The sound a single ThunderStix&reg; makes.`,
      watermark: `SG`
    });
    await queryRunner.delete('white_card', {
      text: `The Chilled Knife.`,
      watermark: `SG`
    });
    await queryRunner.delete('white_card', {
      text: `Dr. Phil.`,
      watermark: `SG`
    });
    await queryRunner.delete('white_card', {
      text: `Paul and Storm.`,
      watermark: `SG`
    });
    await queryRunner.delete('white_card', {
      text: `Jonathan Coulton.`,
      watermark: `SG`
    });
    await queryRunner.delete('white_card', {
      text: `MC Frontalot.`,
      watermark: `SG`
    });
    await queryRunner.delete('white_card', {
      text: `Pretending you're Xyzzy.`,
      watermark: `SG`
    });
    await queryRunner.delete('white_card', {
      text: `Cleveland (it's not Detroit!).`,
      watermark: `SG`
    });
    await queryRunner.delete('white_card', {
      text: `The best card in my hand.`,
      watermark: `SG`
    });
    await queryRunner.delete('white_card', {
      text: `The biggest, blackest dick.`,
      watermark: `SG`
    });
    await queryRunner.delete('white_card', {
      text: `Suddenly realizing you're retarded.`,
      watermark: `SG`
    });
    await queryRunner.delete('white_card', {
      text: `The League of Legends.`,
      watermark: `SG`
    });
    await queryRunner.delete('white_card', {
      text: `A Canadian penny.`,
      watermark: `SG`
    });
    await queryRunner.delete('white_card', {
      text: `dho's penis.`,
      watermark: `SG`
    });
    await queryRunner.delete('white_card', {
      text: `Griffy's tits.`,
      watermark: `SG`
    });
    await queryRunner.delete('white_card', {
      text: `Being banned from /r/pyongyang.`,
      watermark: `SG`
    });
    await queryRunner.delete('white_card', {
      text: `The lost city of Atlantis.`,
      watermark: `SG`
    });
    await queryRunner.delete('white_card', {
      text: `The Hollaad Tonnel.`,
      watermark: `SG`
    });
    await queryRunner.delete('white_card', {
      text: `A fountain of vomit.`,
      watermark: `SG`
    });
    await queryRunner.delete('white_card', {
      text: `Billy the Answer Head.`,
      watermark: `SG`
    });
    await queryRunner.delete('white_card', {
      text: `Performing the Secret Slime Action.`,
      watermark: `SG`
    });
    await queryRunner.delete('white_card', {
      text: `Blank.`,
      watermark: `SG`
    });

    await queryRunner.delete('card_set', {
      name: `[C] SocialGamer`,
      baseDeck: false,
      description: `Custom cards from the SocialGamer.net community.`,
      weight: 101,
      active: true
    });
  }
}
