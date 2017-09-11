/* tslint:disable:no-non-null-assertion no-unsafe-any no-any */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class PAXEast2014Panel1505099018084 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const insertResult = await queryRunner.insert('card_set', {
      name: `PAX East 2014 Panel Pack`,
      baseDeck: false,
      description: `These cards were proposed during the CAH panel at PAX East 2014, printed up overnight, and distributed to panel attendees the next day.`,
      weight: 35,
      active: true
    });

    await queryRunner.insert('black_card', {
      text: `____ was totally worth the trauma.<span class="cardnum">9 / 10</span>`,
      draw: 0,
      pick: 1,
      watermark: `Panel`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Let me tell you about my new startup. It's basically ____, but for ____.<span class="cardnum">10 / 10</span>`,
      draw: 0,
      pick: 2,
      watermark: `Panel`,
      cardSetId: insertResult.result![0].id
    });

    await queryRunner.insert('white_card', {
      text: `Hodor.<span class="cardnum">4 / 10</span>`,
      watermark: `Panel`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A floor that is literally made of lava.<span class="cardnum">5 / 10</span>`,
      watermark: `Panel`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Exciting content!<span class="cardnum">8 / 10</span>`,
      watermark: `Panel`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Stepping on a god damn friggin' LEGO.<span class="cardnum">1 / 10</span>`,
      watermark: `Panel`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Rubbing chocolate pudding all over Bill Cosby's nipples.<span class="cardnum">2 / 10</span>`,
      watermark: `Panel`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `What The Rock was really cooking.<span class="cardnum">3 / 10</span>`,
      watermark: `Panel`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `All this liquid in my mouth.<span class="cardnum">6 / 10</span>`,
      watermark: `Panel`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Giving a dolphin a handjob for science.<span class="cardnum">7 / 10</span>`,
      watermark: `Panel`,
      cardSetId: insertResult.result![0].id
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.delete('black_card', {
      text: `____ was totally worth the trauma.<span class="cardnum">9 / 10</span>`,
      draw: 0,
      pick: 1,
      watermark: `Panel`
    });
    await queryRunner.delete('black_card', {
      text: `Let me tell you about my new startup. It's basically ____, but for ____.<span class="cardnum">10 / 10</span>`,
      draw: 0,
      pick: 2,
      watermark: `Panel`
    });

    await queryRunner.delete('white_card', {
      text: `Hodor.<span class="cardnum">4 / 10</span>`,
      watermark: `Panel`
    });
    await queryRunner.delete('white_card', {
      text: `A floor that is literally made of lava.<span class="cardnum">5 / 10</span>`,
      watermark: `Panel`
    });
    await queryRunner.delete('white_card', {
      text: `Exciting content!<span class="cardnum">8 / 10</span>`,
      watermark: `Panel`
    });
    await queryRunner.delete('white_card', {
      text: `Stepping on a god damn friggin' LEGO.<span class="cardnum">1 / 10</span>`,
      watermark: `Panel`
    });
    await queryRunner.delete('white_card', {
      text: `Rubbing chocolate pudding all over Bill Cosby's nipples.<span class="cardnum">2 / 10</span>`,
      watermark: `Panel`
    });
    await queryRunner.delete('white_card', {
      text: `What The Rock was really cooking.<span class="cardnum">3 / 10</span>`,
      watermark: `Panel`
    });
    await queryRunner.delete('white_card', {
      text: `All this liquid in my mouth.<span class="cardnum">6 / 10</span>`,
      watermark: `Panel`
    });
    await queryRunner.delete('white_card', {
      text: `Giving a dolphin a handjob for science.<span class="cardnum">7 / 10</span>`,
      watermark: `Panel`
    });

    await queryRunner.delete('card_set', {
      name: `PAX East 2014 Panel Pack`,
      baseDeck: false,
      description: `These cards were proposed during the CAH panel at PAX East 2014, printed up overnight, and distributed to panel attendees the next day.`,
      weight: 35,
      active: true
    });
  }
}
