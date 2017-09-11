/* tslint:disable:no-non-null-assertion no-unsafe-any no-any */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class VerySerious1505100557370 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const insertResult = await queryRunner.insert('card_set', {
      name: `[C] Very Serious`,
      baseDeck: false,
      description: `http://forum.verysrs.com/`,
      weight: 501,
      active: true
    });

    await queryRunner.insert('black_card', {
      text: `____ Jesus is the Jesus of ____.`,
      draw: 0,
      pick: 2,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ ALL THE ____.`,
      draw: 0,
      pick: 2,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `There were ALOT of ____ doing ____.`,
      draw: 0,
      pick: 2,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Dogimo would give up ____ to type a six sentence paragraph in a thread.`,
      draw: 0,
      pick: 1,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Simple dog ate and vomited ____.`,
      draw: 0,
      pick: 1,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `When I was 25, I won an award for ____.`,
      draw: 0,
      pick: 1,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I'm more awesome than a T-rex because of ____.`,
      draw: 0,
      pick: 1,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ in my pants.`,
      draw: 0,
      pick: 1,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `We need to talk about your whole gallon of ____.`,
      draw: 0,
      pick: 1,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Clean ALL the ____.`,
      draw: 0,
      pick: 1,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The first rule of Jade Club is ____.`,
      draw: 0,
      pick: 1,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The forum nearly broke when ____ posted ____ in The Dead Thread.`,
      draw: 0,
      pick: 2,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `A mod war about ____ occurred during ____.`,
      draw: 0,
      pick: 2,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `No one likes me after I posted ____ in the TMI thread.`,
      draw: 0,
      pick: 1,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ was banned from tinychat because of ____.`,
      draw: 0,
      pick: 2,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ for president!`,
      draw: 0,
      pick: 1,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I did ____, like a fucking adult.`,
      draw: 0,
      pick: 1,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Domo travelled across ____ to win the prize of ____.`,
      draw: 0,
      pick: 2,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Roses and her hammer collection defeated an entire squadron of ____.`,
      draw: 0,
      pick: 1,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `After Blue posted ____ in chat, I never trusted his links again.`,
      draw: 0,
      pick: 1,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Fuck you, I'm a ____.`,
      draw: 0,
      pick: 1,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Cunnilungus and psychiatry brought us to ____.`,
      draw: 0,
      pick: 1,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I CAN ____ ACROSS THE ____.`,
      draw: 0,
      pick: 2,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ is the only thing that matters.`,
      draw: 0,
      pick: 1,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I'm an expert on ____.`,
      draw: 0,
      pick: 1,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I want ____ in my mouflon RIGHT MEOW.`,
      draw: 0,
      pick: 1,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Don't get mad, get ____.`,
      draw: 0,
      pick: 1,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Have fun, don't be ____.`,
      draw: 0,
      pick: 1,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `It's the end of ____ as we know it.`,
      draw: 0,
      pick: 1,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ is my worst habit.`,
      draw: 0,
      pick: 1,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Everything's better with ____.`,
      draw: 0,
      pick: 1,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Yaar's mother is ____.`,
      draw: 0,
      pick: 1,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What would you taste like?`,
      draw: 0,
      pick: 1,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What have you accomplished today?`,
      draw: 0,
      pick: 1,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What made you happy today?`,
      draw: 0,
      pick: 1,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Why are you frothing with rage?`,
      draw: 0,
      pick: 1,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What mildy annoyed you today?`,
      draw: 0,
      pick: 1,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `We'll always have ____.`,
      draw: 0,
      pick: 1,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ uses ____. It is SUPER EFFECTIVE!`,
      draw: 0,
      pick: 2,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Let's all rock out to the sounds of ____.`,
      draw: 0,
      pick: 1,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Take ____, it will last longer.`,
      draw: 0,
      pick: 1,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `You have my bow. AND MY ____.`,
      draw: 0,
      pick: 1,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `VS: Where the ____ happens!`,
      draw: 0,
      pick: 1,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____? FRY. EYES.`,
      draw: 0,
      pick: 1,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `A wild ____ appeared! It used ____!`,
      draw: 0,
      pick: 2,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I thought being a ____ was the best thing ever, until I became a ____.`,
      draw: 0,
      pick: 2,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Live long and ____.`,
      draw: 0,
      pick: 1,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I'm under the ____.`,
      draw: 0,
      pick: 1,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `If life gives you ____, make ____.`,
      draw: 0,
      pick: 2,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Who needs a bidet when you have ____?`,
      draw: 0,
      pick: 1,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Kill it with ____!`,
      draw: 0,
      pick: 1,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `My ____ is too big!`,
      draw: 0,
      pick: 1,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Best drink ever: One part ____, three parts ____, and a splash of ____.`,
      draw: 2,
      pick: 3,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ makes me uncomfortable.`,
      draw: 0,
      pick: 1,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Stop, drop, and ____.`,
      draw: 0,
      pick: 1,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Think before you ____.`,
      draw: 0,
      pick: 1,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The hills are alive with ____ of ____.`,
      draw: 0,
      pick: 2,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `After I saw ____, I needed ____.`,
      draw: 0,
      pick: 2,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `There's ____ in my soup.`,
      draw: 0,
      pick: 1,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });

    await queryRunner.insert('white_card', {
      text: `Show me your tits!`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Thanking your sex slaves.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dickcheese.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Googly eyes on a cock.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Typing with your genitals.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pirate hookers.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Poopcake.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mandatory Sex Party.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A WHOLE GALLON.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Games you can play with bricks.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lewhora.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fancy tampons.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Very Serious Island.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `COLLIN.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ferngully.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Velociraptor.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Thundercunting.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Werewolf.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cultist.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Vejazzled vagina.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `HODOR.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Simple dog.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Butt oranges.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sweater kittens.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Baby batter.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Meat curtains.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Strawberry Shortcake sexing up a Carebear and giving birth to NyanCat.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Blowjob Jesus.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `GOATS.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Welcome Taco.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Boobs.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Moobs.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tinychat.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Centaur Therapist Jesus.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `LOUD NOISES.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `THE GODDAMN BATMAN.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Swinging an axe in the air while cornholing a bear.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `WIIINES.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Wende head tilt.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Chris Gaines.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fuck you, I'm a bear.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Doctor Who.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `EXTERMINATE.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Landshark.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bearshark.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `SCIENCE!!1!`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Great Dildo, Thor.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Just the tip!`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Daddy foam.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `PooooooP!`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Buttpirate Pokemon.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A really good booby weight.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tubemonster.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bevis.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Trouser snakes.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A WHOLE GALLON OF BOOBS.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Barfstab.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `LYNCH LUPUS.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Drinking on live TV.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Shooting heroin into my eyeballs.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Skittering ovaries.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ricardo.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Power of Greyskull.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The revolution.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The establishment.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Queer Lesbian Jesus.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hello Kitty.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Readying my torch for burnination.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tots.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting drunk before noon.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `In a sneaky hate spiral.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Clown strippers.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `KERMIT FLAIL.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Certified Breast Maintenance Engineer.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A test tube baby.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dancing naked.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Moist and Juicy.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Orgy.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Premature ejaculation.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bounty, the Quicker Picker Upper.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lotion.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Rapey dolphin.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Werepoo.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Handbra.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A moose giving birth in Maggly's yard.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `More bandaids.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fuckweasel.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Curious hands.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Spagbag.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tears of manly pain.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cthulu.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Surprise penis.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `SEX.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mr. Tinycheeks.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A spoon that is too big.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bleeding Anuses.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Not being pregnant.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An Olive Ewe.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hookers and blow.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dropbears.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Standing next to short people to use them as armrests.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Making a random guess in Werewolf that gets you killed later.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `INTERNET FOREVER!`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The jitters you get before a meetup.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Shenaniganty.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `I AM HOW BABIES ARE MADE.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Noble whore.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Kangaroo stripper.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Droopums.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nonni's mantis.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ginger baby.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Drunk foruming.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Thundercunt.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.delete('black_card', {
      text: `____ Jesus is the Jesus of ____.`,
      draw: 0,
      pick: 2,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `____ ALL THE ____.`,
      draw: 0,
      pick: 2,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `There were ALOT of ____ doing ____.`,
      draw: 0,
      pick: 2,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `Dogimo would give up ____ to type a six sentence paragraph in a thread.`,
      draw: 0,
      pick: 1,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `Simple dog ate and vomited ____.`,
      draw: 0,
      pick: 1,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `When I was 25, I won an award for ____.`,
      draw: 0,
      pick: 1,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `I'm more awesome than a T-rex because of ____.`,
      draw: 0,
      pick: 1,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `____ in my pants.`,
      draw: 0,
      pick: 1,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `We need to talk about your whole gallon of ____.`,
      draw: 0,
      pick: 1,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `Clean ALL the ____.`,
      draw: 0,
      pick: 1,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `The first rule of Jade Club is ____.`,
      draw: 0,
      pick: 1,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `The forum nearly broke when ____ posted ____ in The Dead Thread.`,
      draw: 0,
      pick: 2,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `A mod war about ____ occurred during ____.`,
      draw: 0,
      pick: 2,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `No one likes me after I posted ____ in the TMI thread.`,
      draw: 0,
      pick: 1,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `____ was banned from tinychat because of ____.`,
      draw: 0,
      pick: 2,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `____ for president!`,
      draw: 0,
      pick: 1,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `I did ____, like a fucking adult.`,
      draw: 0,
      pick: 1,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `Domo travelled across ____ to win the prize of ____.`,
      draw: 0,
      pick: 2,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `Roses and her hammer collection defeated an entire squadron of ____.`,
      draw: 0,
      pick: 1,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `After Blue posted ____ in chat, I never trusted his links again.`,
      draw: 0,
      pick: 1,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `Fuck you, I'm a ____.`,
      draw: 0,
      pick: 1,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `Cunnilungus and psychiatry brought us to ____.`,
      draw: 0,
      pick: 1,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `I CAN ____ ACROSS THE ____.`,
      draw: 0,
      pick: 2,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `____ is the only thing that matters.`,
      draw: 0,
      pick: 1,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `I'm an expert on ____.`,
      draw: 0,
      pick: 1,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `I want ____ in my mouflon RIGHT MEOW.`,
      draw: 0,
      pick: 1,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `Don't get mad, get ____.`,
      draw: 0,
      pick: 1,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `Have fun, don't be ____.`,
      draw: 0,
      pick: 1,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `It's the end of ____ as we know it.`,
      draw: 0,
      pick: 1,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `____ is my worst habit.`,
      draw: 0,
      pick: 1,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `Everything's better with ____.`,
      draw: 0,
      pick: 1,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `Yaar's mother is ____.`,
      draw: 0,
      pick: 1,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `What would you taste like?`,
      draw: 0,
      pick: 1,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `What have you accomplished today?`,
      draw: 0,
      pick: 1,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `What made you happy today?`,
      draw: 0,
      pick: 1,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `Why are you frothing with rage?`,
      draw: 0,
      pick: 1,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `What mildy annoyed you today?`,
      draw: 0,
      pick: 1,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `We'll always have ____.`,
      draw: 0,
      pick: 1,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `____ uses ____. It is SUPER EFFECTIVE!`,
      draw: 0,
      pick: 2,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `Let's all rock out to the sounds of ____.`,
      draw: 0,
      pick: 1,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `Take ____, it will last longer.`,
      draw: 0,
      pick: 1,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `You have my bow. AND MY ____.`,
      draw: 0,
      pick: 1,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `VS: Where the ____ happens!`,
      draw: 0,
      pick: 1,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `____? FRY. EYES.`,
      draw: 0,
      pick: 1,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `A wild ____ appeared! It used ____!`,
      draw: 0,
      pick: 2,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `I thought being a ____ was the best thing ever, until I became a ____.`,
      draw: 0,
      pick: 2,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `Live long and ____.`,
      draw: 0,
      pick: 1,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `I'm under the ____.`,
      draw: 0,
      pick: 1,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `If life gives you ____, make ____.`,
      draw: 0,
      pick: 2,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `Who needs a bidet when you have ____?`,
      draw: 0,
      pick: 1,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `Kill it with ____!`,
      draw: 0,
      pick: 1,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `My ____ is too big!`,
      draw: 0,
      pick: 1,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `Best drink ever: One part ____, three parts ____, and a splash of ____.`,
      draw: 2,
      pick: 3,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `____ makes me uncomfortable.`,
      draw: 0,
      pick: 1,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `Stop, drop, and ____.`,
      draw: 0,
      pick: 1,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `Think before you ____.`,
      draw: 0,
      pick: 1,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `The hills are alive with ____ of ____.`,
      draw: 0,
      pick: 2,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `After I saw ____, I needed ____.`,
      draw: 0,
      pick: 2,
      watermark: `VS`
    });
    await queryRunner.delete('black_card', {
      text: `There's ____ in my soup.`,
      draw: 0,
      pick: 1,
      watermark: `VS`
    });

    await queryRunner.delete('white_card', {
      text: `Show me your tits!`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Thanking your sex slaves.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Dickcheese.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Googly eyes on a cock.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Typing with your genitals.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Pirate hookers.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Poopcake.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Mandatory Sex Party.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `A WHOLE GALLON.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Games you can play with bricks.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Lewhora.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Fancy tampons.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Very Serious Island.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `COLLIN.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Ferngully.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Velociraptor.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Thundercunting.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Werewolf.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Cultist.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Vejazzled vagina.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `HODOR.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Simple dog.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Butt oranges.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Sweater kittens.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Baby batter.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Meat curtains.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Strawberry Shortcake sexing up a Carebear and giving birth to NyanCat.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Blowjob Jesus.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `GOATS.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Welcome Taco.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Boobs.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Moobs.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Tinychat.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Centaur Therapist Jesus.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `LOUD NOISES.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `THE GODDAMN BATMAN.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Swinging an axe in the air while cornholing a bear.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `WIIINES.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `A Wende head tilt.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Chris Gaines.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Fuck you, I'm a bear.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Doctor Who.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `EXTERMINATE.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Landshark.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Bearshark.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `SCIENCE!!1!`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `The Great Dildo, Thor.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Just the tip!`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Daddy foam.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `PooooooP!`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Buttpirate Pokemon.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `A really good booby weight.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Tubemonster.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Bevis.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Trouser snakes.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `A WHOLE GALLON OF BOOBS.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Barfstab.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `LYNCH LUPUS.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Drinking on live TV.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Shooting heroin into my eyeballs.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Skittering ovaries.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Ricardo.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `The Power of Greyskull.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `The revolution.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `The establishment.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Queer Lesbian Jesus.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Hello Kitty.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Readying my torch for burnination.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Tots.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Getting drunk before noon.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `In a sneaky hate spiral.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Clown strippers.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `KERMIT FLAIL.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Certified Breast Maintenance Engineer.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `A test tube baby.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Dancing naked.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Moist and Juicy.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Orgy.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Premature ejaculation.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Bounty, the Quicker Picker Upper.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Lotion.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Rapey dolphin.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Werepoo.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Handbra.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `A moose giving birth in Maggly's yard.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `More bandaids.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Fuckweasel.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Curious hands.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Spagbag.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Tears of manly pain.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Cthulu.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Surprise penis.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `SEX.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Mr. Tinycheeks.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `A spoon that is too big.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Bleeding Anuses.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Not being pregnant.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `An Olive Ewe.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Hookers and blow.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Dropbears.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Standing next to short people to use them as armrests.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Making a random guess in Werewolf that gets you killed later.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `INTERNET FOREVER!`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `The jitters you get before a meetup.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Shenaniganty.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `I AM HOW BABIES ARE MADE.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Noble whore.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Kangaroo stripper.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Droopums.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Nonni's mantis.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Ginger baby.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Drunk foruming.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Thundercunt.`,
      watermark: `VS`
    });

    await queryRunner.delete('card_set', {
      name: `[C] Very Serious`,
      baseDeck: false,
      description: `http://forum.verysrs.com/`,
      weight: 501,
      active: true
    });
  }
}
