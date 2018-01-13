/* tslint:disable:no-non-null-assertion no-unsafe-any no-any no-unnecessary-type-assertion */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Antisocial1505596854558 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const insertResult = await queryRunner.insert('card_set', {
      name: `[C] Antisocial Injustice`,
      baseDeck: false,
      description: null,
      weight: 521,
      active: true
    });

    await queryRunner.insert('black_card', {
      text: `Eating ____ gave me ____.`,
      draw: 2,
      pick: 2,
      watermark: `AI`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The reason I go to church is to learn about ____.`,
      draw: 0,
      pick: 1,
      watermark: `AI`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Show me on ____, where he ____.`,
      draw: 0,
      pick: 2,
      watermark: `AI`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I wouldn't ____ you with ____.`,
      draw: 0,
      pick: 2,
      watermark: `AI`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `All attempts at ____, have met with failure and crippling economic sanctions.`,
      draw: 0,
      pick: 1,
      watermark: `AI`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Despite our Administration's best efforts, we are still incapable of ____.`,
      draw: 0,
      pick: 1,
      watermark: `AI`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Technology improves every day. One day soon, surfing the web will be replaced by ____.`,
      draw: 0,
      pick: 1,
      watermark: `AI`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Choosy Moms Choose ____.`,
      draw: 0,
      pick: 1,
      watermark: `AI`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `At camp, we'd scare each other by telling stories about ____ around the fire.`,
      draw: 0,
      pick: 1,
      watermark: `AI`,
      cardSetId: insertResult.result![0].id
    });

    await queryRunner.insert('white_card', {
      text: `An ingrown toenail on the tip of a penis.`,
      watermark: `AI`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Feline Leukemia.`,
      watermark: `AI`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Marky Mark's foam rubber penis from Boogie Nights.`,
      watermark: `AI`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `My Spankerchief.`,
      watermark: `AI`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pumping a chemical toilet.`,
      watermark: `AI`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The fine line between kinky and perverted.`,
      watermark: `AI`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Rotisserie Chicken.`,
      watermark: `AI`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Vultures circling a birthday party.`,
      watermark: `AI`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An All White Jury.`,
      watermark: `AI`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Frottage.`,
      watermark: `AI`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Michael J. Fox trying to use a rotary phone.`,
      watermark: `AI`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Five Knuckle Truffle Punch.`,
      watermark: `AI`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Flipper Babies.`,
      watermark: `AI`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ejaculating into an insulin pump.`,
      watermark: `AI`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Rocky Dennis and John Merrick's lovechild.`,
      watermark: `AI`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The syrupy goop inside a Stretch Armstrong doll.`,
      watermark: `AI`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Finding an adhesive bandage at the bottom of your ice cream.`,
      watermark: `AI`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Life after Parole.`,
      watermark: `AI`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A cat's sand papery tongue bath.`,
      watermark: `AI`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Pit Bull named Genghis.`,
      watermark: `AI`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sphincter Bleaching.`,
      watermark: `AI`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bringing the Hamburglar to Justice.`,
      watermark: `AI`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Toilet Wine.`,
      watermark: `AI`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An Amputee's chapped limb nub.`,
      watermark: `AI`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Febreezing your Taint.`,
      watermark: `AI`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Leftist Propaganda.`,
      watermark: `AI`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cookie Monster's substance abuse issues.`,
      watermark: `AI`,
      cardSetId: insertResult.result![0].id
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.delete('black_card', {
      text: `Eating ____ gave me ____.`,
      draw: 2,
      pick: 2,
      watermark: `AI`
    });
    await queryRunner.delete('black_card', {
      text: `The reason I go to church is to learn about ____.`,
      draw: 0,
      pick: 1,
      watermark: `AI`
    });
    await queryRunner.delete('black_card', {
      text: `Show me on ____, where he ____.`,
      draw: 0,
      pick: 2,
      watermark: `AI`
    });
    await queryRunner.delete('black_card', {
      text: `I wouldn't ____ you with ____.`,
      draw: 0,
      pick: 2,
      watermark: `AI`
    });
    await queryRunner.delete('black_card', {
      text: `All attempts at ____, have met with failure and crippling economic sanctions.`,
      draw: 0,
      pick: 1,
      watermark: `AI`
    });
    await queryRunner.delete('black_card', {
      text: `Despite our Administration's best efforts, we are still incapable of ____.`,
      draw: 0,
      pick: 1,
      watermark: `AI`
    });
    await queryRunner.delete('black_card', {
      text: `Technology improves every day. One day soon, surfing the web will be replaced by ____.`,
      draw: 0,
      pick: 1,
      watermark: `AI`
    });
    await queryRunner.delete('black_card', {
      text: `Choosy Moms Choose ____.`,
      draw: 0,
      pick: 1,
      watermark: `AI`
    });
    await queryRunner.delete('black_card', {
      text: `At camp, we'd scare each other by telling stories about ____ around the fire.`,
      draw: 0,
      pick: 1,
      watermark: `AI`
    });

    await queryRunner.delete('white_card', {
      text: `An ingrown toenail on the tip of a penis.`,
      watermark: `AI`
    });
    await queryRunner.delete('white_card', {
      text: `Feline Leukemia.`,
      watermark: `AI`
    });
    await queryRunner.delete('white_card', {
      text: `Marky Mark's foam rubber penis from Boogie Nights.`,
      watermark: `AI`
    });
    await queryRunner.delete('white_card', {
      text: `My Spankerchief.`,
      watermark: `AI`
    });
    await queryRunner.delete('white_card', {
      text: `Pumping a chemical toilet.`,
      watermark: `AI`
    });
    await queryRunner.delete('white_card', {
      text: `The fine line between kinky and perverted.`,
      watermark: `AI`
    });
    await queryRunner.delete('white_card', {
      text: `A Rotisserie Chicken.`,
      watermark: `AI`
    });
    await queryRunner.delete('white_card', {
      text: `Vultures circling a birthday party.`,
      watermark: `AI`
    });
    await queryRunner.delete('white_card', {
      text: `An All White Jury.`,
      watermark: `AI`
    });
    await queryRunner.delete('white_card', {
      text: `Frottage.`,
      watermark: `AI`
    });
    await queryRunner.delete('white_card', {
      text: `Michael J. Fox trying to use a rotary phone.`,
      watermark: `AI`
    });
    await queryRunner.delete('white_card', {
      text: `The Five Knuckle Truffle Punch.`,
      watermark: `AI`
    });
    await queryRunner.delete('white_card', {
      text: `Flipper Babies.`,
      watermark: `AI`
    });
    await queryRunner.delete('white_card', {
      text: `Ejaculating into an insulin pump.`,
      watermark: `AI`
    });
    await queryRunner.delete('white_card', {
      text: `Rocky Dennis and John Merrick's lovechild.`,
      watermark: `AI`
    });
    await queryRunner.delete('white_card', {
      text: `The syrupy goop inside a Stretch Armstrong doll.`,
      watermark: `AI`
    });
    await queryRunner.delete('white_card', {
      text: `Finding an adhesive bandage at the bottom of your ice cream.`,
      watermark: `AI`
    });
    await queryRunner.delete('white_card', {
      text: `Life after Parole.`,
      watermark: `AI`
    });
    await queryRunner.delete('white_card', {
      text: `A cat's sand papery tongue bath.`,
      watermark: `AI`
    });
    await queryRunner.delete('white_card', {
      text: `A Pit Bull named Genghis.`,
      watermark: `AI`
    });
    await queryRunner.delete('white_card', {
      text: `Sphincter Bleaching.`,
      watermark: `AI`
    });
    await queryRunner.delete('white_card', {
      text: `Bringing the Hamburglar to Justice.`,
      watermark: `AI`
    });
    await queryRunner.delete('white_card', {
      text: `Toilet Wine.`,
      watermark: `AI`
    });
    await queryRunner.delete('white_card', {
      text: `An Amputee's chapped limb nub.`,
      watermark: `AI`
    });
    await queryRunner.delete('white_card', {
      text: `Febreezing your Taint.`,
      watermark: `AI`
    });
    await queryRunner.delete('white_card', {
      text: `Leftist Propaganda.`,
      watermark: `AI`
    });
    await queryRunner.delete('white_card', {
      text: `Cookie Monster's substance abuse issues.`,
      watermark: `AI`
    });

    await queryRunner.delete('card_set', {
      name: `[C] Antisocial Injustice`,
      baseDeck: false,
      description: null,
      weight: 521,
      active: true
    });
  }
}
