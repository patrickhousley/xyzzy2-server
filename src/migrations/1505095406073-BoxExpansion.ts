/* tslint:disable:no-non-null-assertion no-unsafe-any no-any */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class BoxExpansion1505095406073 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const insertResult = await queryRunner.insert('card_set', {
      name: `Box Expansion`,
      baseDeck: true,
      description: `The Expansion Box Box Expansion.`,
      weight: 18,
      active: true
    });

    await queryRunner.insert('black_card', {
      text: `Why can't I sleep at night?`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });

    await queryRunner.insert('white_card', {
      text: `The biggest, blackest dick.`,
      watermark: `SG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An outbreak of smallbox.`,
      watermark: `BOX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Boxcar Children.`,
      watermark: `BOX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A world without boxes.`,
      watermark: `BOX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Boxing up my feelings.`,
      watermark: `BOX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Something that looks like a box but turns out to be a crate.`,
      watermark: `BOX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The J15 Patriot Assault Box.`,
      watermark: `BOX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A box without hinges, key, or lid, yet golden treasure inside is hid.`,
      watermark: `BOX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Former President George W. Box.`,
      watermark: `BOX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pandora's vagina.`,
      watermark: `BOX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A box.`,
      watermark: `BOX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A box within a box.`,
      watermark: `BOX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A boxing match with a giant box.`,
      watermark: `BOX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A box that is conscious and wishes it weren't a box.`,
      watermark: `BOX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A box of biscuits, a box of mixed biscuits, and a biscuit mixer.`,
      watermark: `BOX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A box-shaped man.`,
      watermark: `BOX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A man-shaped box.`,
      watermark: `BOX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An alternate universe in which boxes store things inside of people.`,
      watermark: `BOX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Two midgets shitting into a box.`,
      watermark: `BOX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A falcon with a box on its head.`,
      watermark: `BOX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Being a motherfucking box.`,
      watermark: `BOX`,
      cardSetId: insertResult.result![0].id
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.delete('black_card', {
      text: `Why can't I sleep at night?`,
      draw: 0,
      pick: 1,
      watermark: null
    });

    await queryRunner.delete('white_card', {
      text: `The biggest, blackest dick.`,
      watermark: `SG`
    });
    await queryRunner.delete('white_card', {
      text: `An outbreak of smallbox.`,
      watermark: `BOX`
    });
    await queryRunner.delete('white_card', {
      text: `The Boxcar Children.`,
      watermark: `BOX`
    });
    await queryRunner.delete('white_card', {
      text: `A world without boxes.`,
      watermark: `BOX`
    });
    await queryRunner.delete('white_card', {
      text: `Boxing up my feelings.`,
      watermark: `BOX`
    });
    await queryRunner.delete('white_card', {
      text: `Something that looks like a box but turns out to be a crate.`,
      watermark: `BOX`
    });
    await queryRunner.delete('white_card', {
      text: `The J15 Patriot Assault Box.`,
      watermark: `BOX`
    });
    await queryRunner.delete('white_card', {
      text: `A box without hinges, key, or lid, yet golden treasure inside is hid.`,
      watermark: `BOX`
    });
    await queryRunner.delete('white_card', {
      text: `Former President George W. Box.`,
      watermark: `BOX`
    });
    await queryRunner.delete('white_card', {
      text: `Pandora's vagina.`,
      watermark: `BOX`
    });
    await queryRunner.delete('white_card', {
      text: `A box.`,
      watermark: `BOX`
    });
    await queryRunner.delete('white_card', {
      text: `A box within a box.`,
      watermark: `BOX`
    });
    await queryRunner.delete('white_card', {
      text: `A boxing match with a giant box.`,
      watermark: `BOX`
    });
    await queryRunner.delete('white_card', {
      text: `A box that is conscious and wishes it weren't a box.`,
      watermark: `BOX`
    });
    await queryRunner.delete('white_card', {
      text: `A box of biscuits, a box of mixed biscuits, and a biscuit mixer.`,
      watermark: `BOX`
    });
    await queryRunner.delete('white_card', {
      text: `A box-shaped man.`,
      watermark: `BOX`
    });
    await queryRunner.delete('white_card', {
      text: `A man-shaped box.`,
      watermark: `BOX`
    });
    await queryRunner.delete('white_card', {
      text: `An alternate universe in which boxes store things inside of people.`,
      watermark: `BOX`
    });
    await queryRunner.delete('white_card', {
      text: `Two midgets shitting into a box.`,
      watermark: `BOX`
    });
    await queryRunner.delete('white_card', {
      text: `A falcon with a box on its head.`,
      watermark: `BOX`
    });
    await queryRunner.delete('white_card', {
      text: `Being a motherfucking box.`,
      watermark: `BOX`
    });

    await queryRunner.delete('card_set', {
      name: `Box Expansion`,
      baseDeck: true,
      description: `The Expansion Box Box Expansion.`,
      weight: 18,
      active: true
    });
  }
}
