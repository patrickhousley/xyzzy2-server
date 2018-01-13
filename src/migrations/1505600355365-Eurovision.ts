/* tslint:disable:no-non-null-assertion no-unsafe-any no-any no-unnecessary-type-assertion */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Eurovision1505600355365 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const insertResult = await queryRunner.insert('card_set', {
      name: `[C] Eurovision Song Contest`,
      baseDeck: false,
      description: null,
      weight: 530,
      active: true
    });

    await queryRunner.insert('black_card', {
      text: `Azerbaijan, Land of ____.`,
      draw: 0,
      pick: 1,
      watermark: `ESC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `There's rumours of a country buying votes with ____.`,
      draw: 0,
      pick: 1,
      watermark: `ESC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Your ideal interval act.`,
      draw: 0,
      pick: 3,
      watermark: `ESC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `This performance contains flashing images, ____ and ____.`,
      draw: 0,
      pick: 2,
      watermark: `ESC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Serbia entered magical girls. How horribly will their contract end?`,
      draw: 0,
      pick: 2,
      watermark: `ESC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `HELLO EUROPE, ____ CALLING! 12 POINTS GO TO ____!`,
      draw: 0,
      pick: 2,
      watermark: `ESC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____. As guaranteed as Cyprus giving Greece 12 points.`,
      draw: 0,
      pick: 1,
      watermark: `ESC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Women kissing each other on stage, men kissing each other on stage, what next?`,
      draw: 0,
      pick: 1,
      watermark: `ESC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Lena goes from Eurovision winner, to participant, to score reader. Her next job is ____.`,
      draw: 0,
      pick: 1,
      watermark: `ESC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The correct procedure for listening to Fairytale is:`,
      draw: 0,
      pick: 2,
      watermark: `ESC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Nothing can bring down Ruslana's chippy mood,, not even ____.`,
      draw: 0,
      pick: 1,
      watermark: `ESC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Krista Siegfrids' chronic marrying spree added ____ to her victims list.`,
      draw: 0,
      pick: 1,
      watermark: `ESC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The BBC have decided to dig up another old relic and send ____ to represent the UK.`,
      draw: 0,
      pick: 1,
      watermark: `ESC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `A (few) word(s) synonymous with Eurovision fans: ____`,
      draw: 0,
      pick: 1,
      watermark: `ESC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Johnny Logan is a man of many talents; he wins Eurovisions and ____.`,
      draw: 0,
      pick: 1,
      watermark: `ESC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Misheard lyrics of Verjamem resulted in people thinking Eva Boto screeched ____.`,
      draw: 0,
      pick: 1,
      watermark: `ESC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `This country has declined to participate due to ____.`,
      draw: 0,
      pick: 1,
      watermark: `ESC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I'm in loooooooove with a fairytaaaale, even thouuugh it ____.`,
      draw: 0,
      pick: 1,
      watermark: `ESC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In an attempt to foster friendly attitudes between ESC entrants, the host country made them ____ and ____.`,
      draw: 0,
      pick: 2,
      watermark: `ESC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The winning act had ____ and ____ as the singer belted out lyrics about ____.`,
      draw: 2,
      pick: 3,
      watermark: `ESC`,
      cardSetId: insertResult.result![0].id
    });

    await queryRunner.insert('white_card', {
      text: `Verka Serduchka.`,
      watermark: `ESC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cezar Ouatu, his opera falsetto voice, his lifting dress and his naked dancers.`,
      watermark: `ESC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `EUUUUUUPHOOOORIAAAA.`,
      watermark: `ESC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Loreen's hammertime dance.`,
      watermark: `ESC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ruslana's vast array of animals she may or may not have slain with her bare hands.`,
      watermark: `ESC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Alexander Rybak.`,
      watermark: `ESC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Eldar Gasimov's stone cold,, dead eyes.`,
      watermark: `ESC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Eurovision Song Contest.`,
      watermark: `ESC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Loreen Talhaoui.`,
      watermark: `ESC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Epic Sax Guy.`,
      watermark: `ESC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Not being Jedward.`,
      watermark: `ESC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lena Meyer-Landrut.`,
      watermark: `ESC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Helena Paparizou breathing a sigh of relief that she didn't win during the economic crisis.`,
      watermark: `ESC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Emmelie de Forest's big doe-eyed look.`,
      watermark: `ESC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `ZELJKO YOU CHEAAAAAT.`,
      watermark: `ESC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lordi's entire army of makeup artists.`,
      watermark: `ESC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Malena Ernman's massive arms.`,
      watermark: `ESC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The shock and anger you feel when your neighbour doesn't give you 12 points.`,
      watermark: `ESC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Showing you the Maiden Tower 15 times.`,
      watermark: `ESC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The ABBApocalypse.`,
      watermark: `ESC`,
      cardSetId: insertResult.result![0].id
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.delete('black_card', {
      text: `Azerbaijan, Land of ____.`,
      draw: 0,
      pick: 1,
      watermark: `ESC`
    });
    await queryRunner.delete('black_card', {
      text: `There's rumours of a country buying votes with ____.`,
      draw: 0,
      pick: 1,
      watermark: `ESC`
    });
    await queryRunner.delete('black_card', {
      text: `Your ideal interval act.`,
      draw: 0,
      pick: 3,
      watermark: `ESC`
    });
    await queryRunner.delete('black_card', {
      text: `This performance contains flashing images, ____ and ____.`,
      draw: 0,
      pick: 2,
      watermark: `ESC`
    });
    await queryRunner.delete('black_card', {
      text: `Serbia entered magical girls. How horribly will their contract end?`,
      draw: 0,
      pick: 2,
      watermark: `ESC`
    });
    await queryRunner.delete('black_card', {
      text: `HELLO EUROPE, ____ CALLING! 12 POINTS GO TO ____!`,
      draw: 0,
      pick: 2,
      watermark: `ESC`
    });
    await queryRunner.delete('black_card', {
      text: `____. As guaranteed as Cyprus giving Greece 12 points.`,
      draw: 0,
      pick: 1,
      watermark: `ESC`
    });
    await queryRunner.delete('black_card', {
      text: `Women kissing each other on stage, men kissing each other on stage, what next?`,
      draw: 0,
      pick: 1,
      watermark: `ESC`
    });
    await queryRunner.delete('black_card', {
      text: `Lena goes from Eurovision winner, to participant, to score reader. Her next job is ____.`,
      draw: 0,
      pick: 1,
      watermark: `ESC`
    });
    await queryRunner.delete('black_card', {
      text: `The correct procedure for listening to Fairytale is:`,
      draw: 0,
      pick: 2,
      watermark: `ESC`
    });
    await queryRunner.delete('black_card', {
      text: `Nothing can bring down Ruslana's chippy mood,, not even ____.`,
      draw: 0,
      pick: 1,
      watermark: `ESC`
    });
    await queryRunner.delete('black_card', {
      text: `Krista Siegfrids' chronic marrying spree added ____ to her victims list.`,
      draw: 0,
      pick: 1,
      watermark: `ESC`
    });
    await queryRunner.delete('black_card', {
      text: `The BBC have decided to dig up another old relic and send ____ to represent the UK.`,
      draw: 0,
      pick: 1,
      watermark: `ESC`
    });
    await queryRunner.delete('black_card', {
      text: `A (few) word(s) synonymous with Eurovision fans: ____`,
      draw: 0,
      pick: 1,
      watermark: `ESC`
    });
    await queryRunner.delete('black_card', {
      text: `Johnny Logan is a man of many talents; he wins Eurovisions and ____.`,
      draw: 0,
      pick: 1,
      watermark: `ESC`
    });
    await queryRunner.delete('black_card', {
      text: `Misheard lyrics of Verjamem resulted in people thinking Eva Boto screeched ____.`,
      draw: 0,
      pick: 1,
      watermark: `ESC`
    });
    await queryRunner.delete('black_card', {
      text: `This country has declined to participate due to ____.`,
      draw: 0,
      pick: 1,
      watermark: `ESC`
    });
    await queryRunner.delete('black_card', {
      text: `I'm in loooooooove with a fairytaaaale, even thouuugh it ____.`,
      draw: 0,
      pick: 1,
      watermark: `ESC`
    });
    await queryRunner.delete('black_card', {
      text: `In an attempt to foster friendly attitudes between ESC entrants, the host country made them ____ and ____.`,
      draw: 0,
      pick: 2,
      watermark: `ESC`
    });
    await queryRunner.delete('black_card', {
      text: `The winning act had ____ and ____ as the singer belted out lyrics about ____.`,
      draw: 2,
      pick: 3,
      watermark: `ESC`
    });

    await queryRunner.delete('white_card', {
      text: `Verka Serduchka.`,
      watermark: `ESC`
    });
    await queryRunner.delete('white_card', {
      text: `Cezar Ouatu, his opera falsetto voice, his lifting dress and his naked dancers.`,
      watermark: `ESC`
    });
    await queryRunner.delete('white_card', {
      text: `EUUUUUUPHOOOORIAAAA.`,
      watermark: `ESC`
    });
    await queryRunner.delete('white_card', {
      text: `Loreen's hammertime dance.`,
      watermark: `ESC`
    });
    await queryRunner.delete('white_card', {
      text: `Ruslana's vast array of animals she may or may not have slain with her bare hands.`,
      watermark: `ESC`
    });
    await queryRunner.delete('white_card', {
      text: `Alexander Rybak.`,
      watermark: `ESC`
    });
    await queryRunner.delete('white_card', {
      text: `Eldar Gasimov's stone cold,, dead eyes.`,
      watermark: `ESC`
    });
    await queryRunner.delete('white_card', {
      text: `The Eurovision Song Contest.`,
      watermark: `ESC`
    });
    await queryRunner.delete('white_card', {
      text: `Loreen Talhaoui.`,
      watermark: `ESC`
    });
    await queryRunner.delete('white_card', {
      text: `Epic Sax Guy.`,
      watermark: `ESC`
    });
    await queryRunner.delete('white_card', {
      text: `Not being Jedward.`,
      watermark: `ESC`
    });
    await queryRunner.delete('white_card', {
      text: `Lena Meyer-Landrut.`,
      watermark: `ESC`
    });
    await queryRunner.delete('white_card', {
      text: `Helena Paparizou breathing a sigh of relief that she didn't win during the economic crisis.`,
      watermark: `ESC`
    });
    await queryRunner.delete('white_card', {
      text: `Emmelie de Forest's big doe-eyed look.`,
      watermark: `ESC`
    });
    await queryRunner.delete('white_card', {
      text: `ZELJKO YOU CHEAAAAAT.`,
      watermark: `ESC`
    });
    await queryRunner.delete('white_card', {
      text: `Lordi's entire army of makeup artists.`,
      watermark: `ESC`
    });
    await queryRunner.delete('white_card', {
      text: `Malena Ernman's massive arms.`,
      watermark: `ESC`
    });
    await queryRunner.delete('white_card', {
      text: `The shock and anger you feel when your neighbour doesn't give you 12 points.`,
      watermark: `ESC`
    });
    await queryRunner.delete('white_card', {
      text: `Showing you the Maiden Tower 15 times.`,
      watermark: `ESC`
    });
    await queryRunner.delete('white_card', {
      text: `The ABBApocalypse.`,
      watermark: `ESC`
    });

    await queryRunner.delete('card_set', {
      name: `[C] Eurovision Song Contest`,
      baseDeck: false,
      description: null,
      weight: 530,
      active: true
    });
  }
}
