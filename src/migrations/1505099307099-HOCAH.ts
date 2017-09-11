/* tslint:disable:no-non-null-assertion no-unsafe-any no-any */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class HOCAH1505099307099 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const insertResult = await queryRunner.insert('card_set', {
      name: `House of Cards Against Humanity`,
      baseDeck: false,
      description: `House of Cards pack. http://www.houseofcardsagainsthumanity.com/`,
      weight: 40,
      active: true
    });

    await queryRunner.insert('black_card', {
      text: `I can't believe Netflix is using ____ to promote House of Cards.`,
      draw: 0,
      pick: 1,
      watermark: `HOCAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I'm not going to lie. I despise ____. There, I said it.`,
      draw: 0,
      pick: 1,
      watermark: `HOCAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `A wise man said, "Everything is about sex. Except sex. Sex is about ____."`,
      draw: 0,
      pick: 1,
      watermark: `HOCAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Our relationship is strictly professional. Let's not complicate things with ____.`,
      draw: 0,
      pick: 1,
      watermark: `HOCAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Because you enjoyed ____, we thought you'd like ____.`,
      draw: 0,
      pick: 2,
      watermark: `HOCAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `We're not like other news organizations. Here at Slugline, we welcome ____ in the office. `,
      draw: 0,
      pick: 1,
      watermark: `HOCAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Cancel all my meetings. We've got a situation with ____ that requires my immediate attention.`,
      draw: 0,
      pick: 1,
      watermark: `HOCAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `If you need him to, Remy Danton can pull some strings and get you ____, but it'll cost you.`,
      draw: 0,
      pick: 1,
      watermark: `HOCAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Corruption. Betrayal. ____. Coming soon to Netflix, "House of ____."`,
      draw: 0,
      pick: 2,
      watermark: `HOCAH`,
      cardSetId: insertResult.result![0].id
    });

    await queryRunner.insert('white_card', {
      text: `25 shitty jokes about House of Cards.`,
      watermark: `HOCAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An origami swan that's some kind of symbol?`,
      watermark: `HOCAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A much younger woman.`,
      watermark: `HOCAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A homoerotic subplot.`,
      watermark: `HOCAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Forcing a handjob on a dying man. `,
      watermark: `HOCAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ribs so good they transcend race and class.`,
      watermark: `HOCAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Carbon monoxide poisoning. `,
      watermark: `HOCAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Punching a congressman in the face.`,
      watermark: `HOCAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Discharging a firearm in a residential area.`,
      watermark: `HOCAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Strangling a dog to make a point to the audience.`,
      watermark: `HOCAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A childless marriage.`,
      watermark: `HOCAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting eaten out while on the phone with Dad.`,
      watermark: `HOCAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Making it look like a suicide.`,
      watermark: `HOCAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An older man.`,
      watermark: `HOCAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The sensitive European photographer who's fucking my wife.`,
      watermark: `HOCAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `My constituents.`,
      watermark: `HOCAH`,
      cardSetId: insertResult.result![0].id
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.delete('black_card', {
      text: `I can't believe Netflix is using ____ to promote House of Cards.`,
      draw: 0,
      pick: 1,
      watermark: `HOCAH`
    });
    await queryRunner.delete('black_card', {
      text: `I'm not going to lie. I despise ____. There, I said it.`,
      draw: 0,
      pick: 1,
      watermark: `HOCAH`
    });
    await queryRunner.delete('black_card', {
      text: `A wise man said, "Everything is about sex. Except sex. Sex is about ____."`,
      draw: 0,
      pick: 1,
      watermark: `HOCAH`
    });
    await queryRunner.delete('black_card', {
      text: `Our relationship is strictly professional. Let's not complicate things with ____.`,
      draw: 0,
      pick: 1,
      watermark: `HOCAH`
    });
    await queryRunner.delete('black_card', {
      text: `Because you enjoyed ____, we thought you'd like ____.`,
      draw: 0,
      pick: 2,
      watermark: `HOCAH`
    });
    await queryRunner.delete('black_card', {
      text: `We're not like other news organizations. Here at Slugline, we welcome ____ in the office. `,
      draw: 0,
      pick: 1,
      watermark: `HOCAH`
    });
    await queryRunner.delete('black_card', {
      text: `Cancel all my meetings. We've got a situation with ____ that requires my immediate attention.`,
      draw: 0,
      pick: 1,
      watermark: `HOCAH`
    });
    await queryRunner.delete('black_card', {
      text: `If you need him to, Remy Danton can pull some strings and get you ____, but it'll cost you.`,
      draw: 0,
      pick: 1,
      watermark: `HOCAH`
    });
    await queryRunner.delete('black_card', {
      text: `Corruption. Betrayal. ____. Coming soon to Netflix, "House of ____."`,
      draw: 0,
      pick: 2,
      watermark: `HOCAH`
    });

    await queryRunner.delete('white_card', {
      text: `25 shitty jokes about House of Cards.`,
      watermark: `HOCAH`
    });
    await queryRunner.delete('white_card', {
      text: `An origami swan that's some kind of symbol?`,
      watermark: `HOCAH`
    });
    await queryRunner.delete('white_card', {
      text: `A much younger woman.`,
      watermark: `HOCAH`
    });
    await queryRunner.delete('white_card', {
      text: `A homoerotic subplot.`,
      watermark: `HOCAH`
    });
    await queryRunner.delete('white_card', {
      text: `Forcing a handjob on a dying man. `,
      watermark: `HOCAH`
    });
    await queryRunner.delete('white_card', {
      text: `Ribs so good they transcend race and class.`,
      watermark: `HOCAH`
    });
    await queryRunner.delete('white_card', {
      text: `Carbon monoxide poisoning. `,
      watermark: `HOCAH`
    });
    await queryRunner.delete('white_card', {
      text: `Punching a congressman in the face.`,
      watermark: `HOCAH`
    });
    await queryRunner.delete('white_card', {
      text: `Discharging a firearm in a residential area.`,
      watermark: `HOCAH`
    });
    await queryRunner.delete('white_card', {
      text: `Strangling a dog to make a point to the audience.`,
      watermark: `HOCAH`
    });
    await queryRunner.delete('white_card', {
      text: `A childless marriage.`,
      watermark: `HOCAH`
    });
    await queryRunner.delete('white_card', {
      text: `Getting eaten out while on the phone with Dad.`,
      watermark: `HOCAH`
    });
    await queryRunner.delete('white_card', {
      text: `Making it look like a suicide.`,
      watermark: `HOCAH`
    });
    await queryRunner.delete('white_card', {
      text: `An older man.`,
      watermark: `HOCAH`
    });
    await queryRunner.delete('white_card', {
      text: `The sensitive European photographer who's fucking my wife.`,
      watermark: `HOCAH`
    });
    await queryRunner.delete('white_card', {
      text: `My constituents.`,
      watermark: `HOCAH`
    });

    await queryRunner.delete('card_set', {
      name: `House of Cards Against Humanity`,
      baseDeck: false,
      description: `House of Cards pack. http://www.houseofcardsagainsthumanity.com/`,
      weight: 40,
      active: true
    });
  }
}
