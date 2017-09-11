/* tslint:disable:no-non-null-assertion no-unsafe-any no-any */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Holiday20131505097121798 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const insertResult = await queryRunner.insert('card_set', {
      name: `2013 Holiday Bullshit`,
      baseDeck: true,
      description: `http://www.holidaybullshit.com/`,
      weight: 23,
      active: true
    });

    await queryRunner.insert('black_card', {
      text: `But wait, there's more! If you order ____ in the next 15 minutes, we'll throw in ____ absolutely free!`,
      draw: 0,
      pick: 2,
      watermark: `HBS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Blessed are you, Lord our God, creator of the universe, who has granted us ____.`,
      draw: 0,
      pick: 1,
      watermark: `HBS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Because they are forbidden from masturbating, Mormons channel their repressed sexual energy into ____.`,
      draw: 0,
      pick: 1,
      watermark: `HBS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I really hope my grandmother doesn't ask me to explain ____ again.`,
      draw: 0,
      pick: 1,
      watermark: `HBS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What's the one thing that makes an elf instantly ejaculate?`,
      draw: 0,
      pick: 1,
      watermark: `HBS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `GREETINGS HUMANS<br><br>I AM ____ BOT<br><br>EXECUTING PROGRAM`,
      draw: 0,
      pick: 1,
      watermark: `HBS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Kids these days with their iPods and their Internet. In my day, all we needed to pass the time was ____.`,
      draw: 0,
      pick: 1,
      watermark: `HBS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Revealed:<br>Why He Really Resigned!<br>Pope Benedict's Secret Struggle with ____!`,
      draw: 0,
      pick: 1,
      watermark: `HBS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Here's what you can expect for the new year.<br>Out: ____.<br>In: ____.`,
      draw: 0,
      pick: 2,
      watermark: `HBS`,
      cardSetId: insertResult.result![0].id
    });

    await queryRunner.insert('white_card', {
      text: `Giving money and personal information to strangers on the Internet.`,
      watermark: `HBS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A magical tablet containing a world of unlimited pornography.`,
      watermark: `HBS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `These low, low prices!`,
      watermark: `HBS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Piece of shit Christmas cards with no money in them.`,
      watermark: `HBS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Moses gargling Jesus's balls while Shiva and the Buddha penetrate his divine hand holes.`,
      watermark: `HBS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Hawaiian goddess Kapo and her flying detachable vagina.`,
      watermark: `HBS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The shittier, Jewish version of Christmas.`,
      watermark: `HBS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Making up for 10 years of shitty parenting with a PlayStation.`,
      watermark: `HBS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Swapping bodies with mom for a day.`,
      watermark: `HBS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Slicing a ham in icy silence.`,
      watermark: `HBS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Finding out that Santa isn't real.`,
      watermark: `HBS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Rudolph's bright red balls.`,
      watermark: `HBS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Grinch's musty, cum-stained pelt.`,
      watermark: `HBS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Breeding elves for their priceless semen.`,
      watermark: `HBS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Jizzing into Santa's beard.`,
      watermark: `HBS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A simultaneous nightmare and wet dream starring Sigourney Weaver.`,
      watermark: `HBS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Being blind and deaf and having no limbs.`,
      watermark: `HBS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `People with cake in their mouths talking about how good cake is.`,
      watermark: `HBS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Congress's flaccid penises withering away beneath their suit pants.`,
      watermark: `HBS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The royal afterbirth.`,
      watermark: `HBS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Having a strong opinion about Obamacare.`,
      watermark: `HBS`,
      cardSetId: insertResult.result![0].id
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.delete('black_card', {
      text: `But wait, there's more! If you order ____ in the next 15 minutes, we'll throw in ____ absolutely free!`,
      draw: 0,
      pick: 2,
      watermark: `HBS`
    });
    await queryRunner.delete('black_card', {
      text: `Blessed are you, Lord our God, creator of the universe, who has granted us ____.`,
      draw: 0,
      pick: 1,
      watermark: `HBS`
    });
    await queryRunner.delete('black_card', {
      text: `Because they are forbidden from masturbating, Mormons channel their repressed sexual energy into ____.`,
      draw: 0,
      pick: 1,
      watermark: `HBS`
    });
    await queryRunner.delete('black_card', {
      text: `I really hope my grandmother doesn't ask me to explain ____ again.`,
      draw: 0,
      pick: 1,
      watermark: `HBS`
    });
    await queryRunner.delete('black_card', {
      text: `What's the one thing that makes an elf instantly ejaculate?`,
      draw: 0,
      pick: 1,
      watermark: `HBS`
    });
    await queryRunner.delete('black_card', {
      text: `GREETINGS HUMANS<br><br>I AM ____ BOT<br><br>EXECUTING PROGRAM`,
      draw: 0,
      pick: 1,
      watermark: `HBS`
    });
    await queryRunner.delete('black_card', {
      text: `Kids these days with their iPods and their Internet. In my day, all we needed to pass the time was ____.`,
      draw: 0,
      pick: 1,
      watermark: `HBS`
    });
    await queryRunner.delete('black_card', {
      text: `Revealed:<br>Why He Really Resigned!<br>Pope Benedict's Secret Struggle with ____!`,
      draw: 0,
      pick: 1,
      watermark: `HBS`
    });
    await queryRunner.delete('black_card', {
      text: `Here's what you can expect for the new year.<br>Out: ____.<br>In: ____.`,
      draw: 0,
      pick: 2,
      watermark: `HBS`
    });

    await queryRunner.delete('white_card', {
      text: `Giving money and personal information to strangers on the Internet.`,
      watermark: `HBS`
    });
    await queryRunner.delete('white_card', {
      text: `A magical tablet containing a world of unlimited pornography.`,
      watermark: `HBS`
    });
    await queryRunner.delete('white_card', {
      text: `These low, low prices!`,
      watermark: `HBS`
    });
    await queryRunner.delete('white_card', {
      text: `Piece of shit Christmas cards with no money in them.`,
      watermark: `HBS`
    });
    await queryRunner.delete('white_card', {
      text: `Moses gargling Jesus's balls while Shiva and the Buddha penetrate his divine hand holes.`,
      watermark: `HBS`
    });
    await queryRunner.delete('white_card', {
      text: `The Hawaiian goddess Kapo and her flying detachable vagina.`,
      watermark: `HBS`
    });
    await queryRunner.delete('white_card', {
      text: `The shittier, Jewish version of Christmas.`,
      watermark: `HBS`
    });
    await queryRunner.delete('white_card', {
      text: `Making up for 10 years of shitty parenting with a PlayStation.`,
      watermark: `HBS`
    });
    await queryRunner.delete('white_card', {
      text: `Swapping bodies with mom for a day.`,
      watermark: `HBS`
    });
    await queryRunner.delete('white_card', {
      text: `Slicing a ham in icy silence.`,
      watermark: `HBS`
    });
    await queryRunner.delete('white_card', {
      text: `Finding out that Santa isn't real.`,
      watermark: `HBS`
    });
    await queryRunner.delete('white_card', {
      text: `Rudolph's bright red balls.`,
      watermark: `HBS`
    });
    await queryRunner.delete('white_card', {
      text: `The Grinch's musty, cum-stained pelt.`,
      watermark: `HBS`
    });
    await queryRunner.delete('white_card', {
      text: `Breeding elves for their priceless semen.`,
      watermark: `HBS`
    });
    await queryRunner.delete('white_card', {
      text: `Jizzing into Santa's beard.`,
      watermark: `HBS`
    });
    await queryRunner.delete('white_card', {
      text: `A simultaneous nightmare and wet dream starring Sigourney Weaver.`,
      watermark: `HBS`
    });
    await queryRunner.delete('white_card', {
      text: `Being blind and deaf and having no limbs.`,
      watermark: `HBS`
    });
    await queryRunner.delete('white_card', {
      text: `People with cake in their mouths talking about how good cake is.`,
      watermark: `HBS`
    });
    await queryRunner.delete('white_card', {
      text: `Congress's flaccid penises withering away beneath their suit pants.`,
      watermark: `HBS`
    });
    await queryRunner.delete('white_card', {
      text: `The royal afterbirth.`,
      watermark: `HBS`
    });
    await queryRunner.delete('white_card', {
      text: `Having a strong opinion about Obamacare.`,
      watermark: `HBS`
    });

    await queryRunner.delete('card_set', {
      name: `2013 Holiday Bullshit`,
      baseDeck: true,
      description: `http://www.holidaybullshit.com/`,
      weight: 23,
      active: true
    });
  }
}
