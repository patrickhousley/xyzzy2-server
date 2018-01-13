/* tslint:disable:no-non-null-assertion no-unsafe-any no-any no-unnecessary-type-assertion */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Canadian1505096272300 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const insertResult = await queryRunner.insert('card_set', {
      name: `Canadian`,
      baseDeck: false,
      description: `Cards included in Canadian orders.`,
      weight: 20,
      active: true
    });

    await queryRunner.insert('black_card', {
      text: `O Canada, we stand on guard for ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Air Canada guidelines now prohibit ____ on airplanes.`,
      draw: 0,
      pick: 1,
      watermark: `CAN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In an attempt to reach a wider audience, the Royal Ontario Museum has opened an interactive exhibit on ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `CTV presents ____, the story of ____.`,
      draw: 0,
      pick: 2,
      watermark: `CAN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What's the Canadian government using to inspire rural students to succeed?`,
      draw: 0,
      pick: 1,
      watermark: `CAN`,
      cardSetId: insertResult.result![0].id
    });

    await queryRunner.insert('white_card', {
      text: `Mr. Dressup.`,
      watermark: `CAN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Being Canadian.`,
      watermark: `CAN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Famous Five.`,
      watermark: `CAN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Stephen Harper.`,
      watermark: `CAN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Royal Canadian Mounted Police.`,
      watermark: `CAN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An icy handjob from an Edmonton hooker.`,
      watermark: `CAN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Poutine.`,
      watermark: `CAN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Newfies.`,
      watermark: `CAN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Official Languages Act. La Loi sur les langues officielles.`,
      watermark: `CAN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Terry Fox's prosthetic leg.`,
      watermark: `CAN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The FLQ.`,
      watermark: `CAN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Canada: America's Hat.`,
      watermark: `CAN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Don Cherry's wardrobe.`,
      watermark: `CAN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Burning down the White House.`,
      watermark: `CAN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Heritage minutes.`,
      watermark: `CAN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Homo milk.`,
      watermark: `CAN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Naked News.`,
      watermark: `CAN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Syrupy sex with a maple tree.`,
      watermark: `CAN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Snotsicles.`,
      watermark: `CAN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Schmirler the Curler.`,
      watermark: `CAN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Molson muscle.`,
      watermark: `CAN`,
      cardSetId: insertResult.result![0].id
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.delete('black_card', {
      text: `O Canada, we stand on guard for ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAN`
    });
    await queryRunner.delete('black_card', {
      text: `Air Canada guidelines now prohibit ____ on airplanes.`,
      draw: 0,
      pick: 1,
      watermark: `CAN`
    });
    await queryRunner.delete('black_card', {
      text: `In an attempt to reach a wider audience, the Royal Ontario Museum has opened an interactive exhibit on ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAN`
    });
    await queryRunner.delete('black_card', {
      text: `CTV presents ____, the story of ____.`,
      draw: 0,
      pick: 2,
      watermark: `CAN`
    });
    await queryRunner.delete('black_card', {
      text: `What's the Canadian government using to inspire rural students to succeed?`,
      draw: 0,
      pick: 1,
      watermark: `CAN`
    });

    await queryRunner.delete('white_card', {
      text: `Mr. Dressup.`,
      watermark: `CAN`
    });
    await queryRunner.delete('white_card', {
      text: `Being Canadian.`,
      watermark: `CAN`
    });
    await queryRunner.delete('white_card', {
      text: `The Famous Five.`,
      watermark: `CAN`
    });
    await queryRunner.delete('white_card', {
      text: `Stephen Harper.`,
      watermark: `CAN`
    });
    await queryRunner.delete('white_card', {
      text: `The Royal Canadian Mounted Police.`,
      watermark: `CAN`
    });
    await queryRunner.delete('white_card', {
      text: `An icy handjob from an Edmonton hooker.`,
      watermark: `CAN`
    });
    await queryRunner.delete('white_card', {
      text: `Poutine.`,
      watermark: `CAN`
    });
    await queryRunner.delete('white_card', {
      text: `Newfies.`,
      watermark: `CAN`
    });
    await queryRunner.delete('white_card', {
      text: `The Official Languages Act. La Loi sur les langues officielles.`,
      watermark: `CAN`
    });
    await queryRunner.delete('white_card', {
      text: `Terry Fox's prosthetic leg.`,
      watermark: `CAN`
    });
    await queryRunner.delete('white_card', {
      text: `The FLQ.`,
      watermark: `CAN`
    });
    await queryRunner.delete('white_card', {
      text: `Canada: America's Hat.`,
      watermark: `CAN`
    });
    await queryRunner.delete('white_card', {
      text: `Don Cherry's wardrobe.`,
      watermark: `CAN`
    });
    await queryRunner.delete('white_card', {
      text: `Burning down the White House.`,
      watermark: `CAN`
    });
    await queryRunner.delete('white_card', {
      text: `Heritage minutes.`,
      watermark: `CAN`
    });
    await queryRunner.delete('white_card', {
      text: `Homo milk.`,
      watermark: `CAN`
    });
    await queryRunner.delete('white_card', {
      text: `Naked News.`,
      watermark: `CAN`
    });
    await queryRunner.delete('white_card', {
      text: `Syrupy sex with a maple tree.`,
      watermark: `CAN`
    });
    await queryRunner.delete('white_card', {
      text: `Snotsicles.`,
      watermark: `CAN`
    });
    await queryRunner.delete('white_card', {
      text: `Schmirler the Curler.`,
      watermark: `CAN`
    });
    await queryRunner.delete('white_card', {
      text: `A Molson muscle.`,
      watermark: `CAN`
    });

    await queryRunner.delete('card_set', {
      name: `Canadian`,
      baseDeck: false,
      description: `Cards included in Canadian orders.`,
      weight: 20,
      active: true
    });
  }
}
