/* tslint:disable:no-non-null-assertion no-unsafe-any no-any no-unnecessary-type-assertion */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Holiday20121505096888793 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const insertResult = await queryRunner.insert('card_set', {
      name: `2012 Holiday Pack`,
      baseDeck: false,
      description: `The 2012 Holiday Pack.`,
      weight: 22,
      active: true
    });

    await queryRunner.insert('black_card', {
      text: `This holiday season, Tim Allen must overcome his fear of ____ to save Christmas.`,
      draw: 0,
      pick: 1,
      watermark: `❄`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Jesus is ____.`,
      draw: 0,
      pick: 1,
      watermark: `❄`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `On the third day of Christmas, my true love gave to me: three French hens, two turtle doves, and ____.`,
      draw: 0,
      pick: 1,
      watermark: `❄`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Wake up, America. Christmas is under attack by secular liberals and their ____.`,
      draw: 0,
      pick: 1,
      watermark: `❄`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Every Christmas, my uncle gets drunk and tells the story about ____.`,
      draw: 0,
      pick: 1,
      watermark: `❄`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What keeps me warm during the cold, cold winter?`,
      draw: 0,
      pick: 1,
      watermark: `❄`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `After blacking out during New Year's Eve, I was awoken by ____.`,
      draw: 0,
      pick: 1,
      watermark: `❄`,
      cardSetId: insertResult.result![0].id
    });

    await queryRunner.insert('white_card', {
      text: `Santa's heavy sack.`,
      watermark: `❄`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Clearing a bloody path through Walmart with a scimitar.`,
      watermark: `❄`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Another shitty year.`,
      watermark: `❄`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Whatever Kwanzaa is supposed to be about.`,
      watermark: `❄`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Christmas stocking full of coleslaw.`,
      watermark: `❄`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Elf cum.`,
      watermark: `❄`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The tiny, calloused hands of the Chinese children that made this card.`,
      watermark: `❄`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Taking down Santa with a surface-to-air missle.`,
      watermark: `❄`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Socks. `,
      watermark: `❄`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pretending to be happy.`,
      watermark: `❄`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Krampus, the Austrian Christmas monster.`,
      watermark: `❄`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Star Wars Holiday Special.`,
      watermark: `❄`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mall Santa.`,
      watermark: `❄`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Several intertwining love stories featuring Hugh Grant.`,
      watermark: `❄`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Gift-wrapping a live hamster.`,
      watermark: `❄`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Space Jam on VHS.`,
      watermark: `❄`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Immaculate conception.`,
      watermark: `❄`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fucking up "Silent Night" in front of 300 parents.`,
      watermark: `❄`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A visually arresting turtleneck.`,
      watermark: `❄`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A toxic family environment.`,
      watermark: `❄`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Eating an entire snowman.`,
      watermark: `❄`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `My hot cousin.`,
      watermark: `❄`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Hungry-Man&trade; Frozen Christmas Dinner for One.`,
      watermark: `❄`,
      cardSetId: insertResult.result![0].id
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.delete('black_card', {
      text: `This holiday season, Tim Allen must overcome his fear of ____ to save Christmas.`,
      draw: 0,
      pick: 1,
      watermark: `❄`
    });
    await queryRunner.delete('black_card', {
      text: `Jesus is ____.`,
      draw: 0,
      pick: 1,
      watermark: `❄`
    });
    await queryRunner.delete('black_card', {
      text: `On the third day of Christmas, my true love gave to me: three French hens, two turtle doves, and ____.`,
      draw: 0,
      pick: 1,
      watermark: `❄`
    });
    await queryRunner.delete('black_card', {
      text: `Wake up, America. Christmas is under attack by secular liberals and their ____.`,
      draw: 0,
      pick: 1,
      watermark: `❄`
    });
    await queryRunner.delete('black_card', {
      text: `Every Christmas, my uncle gets drunk and tells the story about ____.`,
      draw: 0,
      pick: 1,
      watermark: `❄`
    });
    await queryRunner.delete('black_card', {
      text: `What keeps me warm during the cold, cold winter?`,
      draw: 0,
      pick: 1,
      watermark: `❄`
    });
    await queryRunner.delete('black_card', {
      text: `After blacking out during New Year's Eve, I was awoken by ____.`,
      draw: 0,
      pick: 1,
      watermark: `❄`
    });

    await queryRunner.delete('white_card', {
      text: `Santa's heavy sack.`,
      watermark: `❄`
    });
    await queryRunner.delete('white_card', {
      text: `Clearing a bloody path through Walmart with a scimitar.`,
      watermark: `❄`
    });
    await queryRunner.delete('white_card', {
      text: `Another shitty year.`,
      watermark: `❄`
    });
    await queryRunner.delete('white_card', {
      text: `Whatever Kwanzaa is supposed to be about.`,
      watermark: `❄`
    });
    await queryRunner.delete('white_card', {
      text: `A Christmas stocking full of coleslaw.`,
      watermark: `❄`
    });
    await queryRunner.delete('white_card', {
      text: `Elf cum.`,
      watermark: `❄`
    });
    await queryRunner.delete('white_card', {
      text: `The tiny, calloused hands of the Chinese children that made this card.`,
      watermark: `❄`
    });
    await queryRunner.delete('white_card', {
      text: `Taking down Santa with a surface-to-air missle.`,
      watermark: `❄`
    });
    await queryRunner.delete('white_card', {
      text: `Socks. `,
      watermark: `❄`
    });
    await queryRunner.delete('white_card', {
      text: `Pretending to be happy.`,
      watermark: `❄`
    });
    await queryRunner.delete('white_card', {
      text: `Krampus, the Austrian Christmas monster.`,
      watermark: `❄`
    });
    await queryRunner.delete('white_card', {
      text: `The Star Wars Holiday Special.`,
      watermark: `❄`
    });
    await queryRunner.delete('white_card', {
      text: `Mall Santa.`,
      watermark: `❄`
    });
    await queryRunner.delete('white_card', {
      text: `Several intertwining love stories featuring Hugh Grant.`,
      watermark: `❄`
    });
    await queryRunner.delete('white_card', {
      text: `Gift-wrapping a live hamster.`,
      watermark: `❄`
    });
    await queryRunner.delete('white_card', {
      text: `Space Jam on VHS.`,
      watermark: `❄`
    });
    await queryRunner.delete('white_card', {
      text: `Immaculate conception.`,
      watermark: `❄`
    });
    await queryRunner.delete('white_card', {
      text: `Fucking up "Silent Night" in front of 300 parents.`,
      watermark: `❄`
    });
    await queryRunner.delete('white_card', {
      text: `A visually arresting turtleneck.`,
      watermark: `❄`
    });
    await queryRunner.delete('white_card', {
      text: `A toxic family environment.`,
      watermark: `❄`
    });
    await queryRunner.delete('white_card', {
      text: `Eating an entire snowman.`,
      watermark: `❄`
    });
    await queryRunner.delete('white_card', {
      text: `My hot cousin.`,
      watermark: `❄`
    });
    await queryRunner.delete('white_card', {
      text: `A Hungry-Man&trade; Frozen Christmas Dinner for One.`,
      watermark: `❄`
    });

    await queryRunner.delete('card_set', {
      name: `2012 Holiday Pack`,
      baseDeck: false,
      description: `The 2012 Holiday Pack.`,
      weight: 22,
      active: true
    });
  }
}
