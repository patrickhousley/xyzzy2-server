/* tslint:disable:no-non-null-assertion no-unsafe-any no-any no-unnecessary-type-assertion */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class RPAnons1505600187049 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const insertResult = await queryRunner.insert('card_set', {
      name: `[C] RPAnons`,
      baseDeck: false,
      description: null,
      weight: 529,
      active: true
    });

    await queryRunner.insert('black_card', {
      text: `____ doesn't need to be judged right now.`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ is a terrible thing to do to the ____!`,
      draw: 0,
      pick: 2,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ &amp; ____: Worst mods ever.`,
      draw: 0,
      pick: 2,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `/____ all over this post.`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `/____ delicately from the butt.`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `/slides hand up your ____.`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ is not an island.`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ runs into the forest, screaming.`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ was better before the anon meme.`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `We'd love to have you at ____ Island!`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Bad news guys, my parents found that thread involving ____.`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `But what are your thoughts on ____?`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Chaos ensued when Wankgate banned ____.`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Cute, fun and ____.`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Does anyone ____? I feel like the only one.`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Excuse me, but I identify as ____.`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Great, another ____ event.`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `How can there be a group of people more ____ than us?`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `How's my driving?`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I can only ____ if I feel a deep emotional connection.`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I can't believe we just spent a whole page wanking about ____.`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I have a PHD in ____.`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I just benchpressed, like, 14 ____.`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I need deets on ____, stat.`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I predict ____ will close by the end of the year.`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I randomly began to ____ and ____ came galloping up the stairs.`,
      draw: 0,
      pick: 2,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I see Wankgate's bitching about ____ again.`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I'm literally shaking and ____ right now.`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I'm married to ____ on the astral plane.`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I'm really into ____, so please don't kinkshame.`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I'm sad we lost ____ in the exodus from LJ to DW.`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I'm starting a game where the characters are stuck in ____.`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I'm taking commissions for ____!`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `How dare you not warn for ____! Don't you know how triggering that is?`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In this world, sexual roles are divided into three categories: the ____, the ____, and the ____`,
      draw: 2,
      pick: 3,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `It's ____ o'clock.`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `ITT: ____.`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Join my new game about ____!`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Keep fucking that ____.`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Let me tell you about ____.`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Log in and ____.`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `My favorite thread is the one where ____ has kinky sex with ____.`,
      draw: 0,
      pick: 2,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `My headcanon is that ____ is ____.`,
      draw: 0,
      pick: 2,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `My OTP: ____ x ____.`,
      draw: 0,
      pick: 2,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `New game idea! You're kidnapped by ____ and forced into ____.`,
      draw: 0,
      pick: 2,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `no actually i don't care at all, i don't even ____. :))))`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `OMG you guys I have so many feels about ____!`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Only ____ would play from ____.`,
      draw: 0,
      pick: 2,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Raising money for ____! Please replurk!`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `RPAnons made me ____.`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `SHUT UP ABOUT YOUR ____.`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Signal boosting for ____!`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Since ____ is on hiatus, fans have migrated to ____.`,
      draw: 0,
      pick: 2,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Someone just stuck their head out of the window and screamed "____'s UP!"`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Someone left a ____ out in the rain.`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `That ____. You know, *that* one.`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The ____ is happy.`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The perfect username for my next character: ____.`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The thing I hate most about RP is ____.`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Their ____ are of age.`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `There are too many memes about ____.`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `There is no ____ in Holly Heights.`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `We need a new post. This one smells like ____.`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Why was I asked for app revisions?`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Why was I banned?`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Who apps ____ to a sex game?`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Who should I play next?`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `You can't fist ____.`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `You sound ____, tbh.`,
      draw: 0,
      pick: 1,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });

    await queryRunner.insert('white_card', {
      text: `Rule 63.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `"The" Hateboner.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `(I glances.)`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `(unsure).`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Too rad to be cis.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A 'shopped vendetta.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A 5-page-long kink list.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A bouquet of dicks.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A creepy Corruption of Champions OC.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A funny name for Benedict Cumberbatch.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A genderswapped vampire AU Cloud Strife.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A glopping noise.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A misfire.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A paid account full of nothing but terrible fanart icons.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A penis approximately the size and shape of a Guinness can.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A shitty urban fantasy OC.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A spooky jamjar.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A tag so boring it makes you want to delete all of your journals.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A tragic Christmas hang-gliding accident.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Accidental video posts.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Alpha/Beta/Omega.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Amatomnes.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An awful fandom OC who's married to the main character.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Anonfailing.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Another boring wank about f/f.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Another fucking TFLN meme.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `App revisions.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ataraxion.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Autistic gypsies.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Baby penis.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bakerstreet.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Begging for asspats.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Being really passive-aggressive because you "don't wanna hurt anyone's feelings".`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Being soulbonded to a Homestuck character.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Broccoli trees.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Butthurt.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Calling long-distance to demand tags from your RP partner.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cape and Cowl.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Changed.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Chronic Lyme disease.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Circlejerking.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `City of Ariel.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cloud being eaten by a chocobo.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cockhopping.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Constructive criticism.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dangan Ronpa's crazy fandom.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dean/Goku.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dear Mun.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Discedo.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Drama Drama Duck.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dropping the thread after two tags because it sucks.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `ECATS? CAT DESK? WE SCAT?`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An incest ship.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Entranceway.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Everyone turning into ponies.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Exit Void.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Exsilium.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `FACT IT!`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fad fandoms.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Falling in love with your RP partner.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Feeling like the only one.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Flouncing. The more dramatic, the better.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fucking that chicken.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Generic white male actor PBs.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Haven.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hellion.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hetalia's annoying fandom.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `High Seas.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Highlandering.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hitting the cervix with your dick.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Holly Heights.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Homestuck's insane fandom.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Icon elitism.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Icons that aren't 100x100.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Kink shaming.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Legbeards.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Literally shaking and crying.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `lol so randumb!!!!111 XD`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lovingly describing your character's throbbing cock.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Luceti.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mpreg.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Musedumping.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Neckbeards.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Needing to lei down.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Not posting deets.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nymphomanic werewolf Rei Ayanami. On rollerskates.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `One-pixel borders.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `One-word replies.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Paradisa.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Passive-aggressive editing.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pigeon superpowers.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pillow queens.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Only playing for ships.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Polychromatic.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Posting to Wankgate logged in.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pregnancy plots.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pretentious, illegible formatting.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Queefing on someone's dick.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Rebutle.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Renne.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Replying to everyone on ATP because you're just that desperate.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Reserving a popular character and never apping.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Roleplaying One Direction slash.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Route 29.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Roxanne Ritchie's vagina.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `RPAnons.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ruby City.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Rushing to dear_mun to post about the latest global tragedy in-character.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `St-stuttered t-typing.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Obviously sameanoning.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sample prompts.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Save The Earth.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Scathing anonymous criticism.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Scrambling to pass AC at the last minute.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Shounen retards.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Signal boosting an obvious hoax.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Slacktivism.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Social justice warriors.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sora and Emperor Palpatine in an awkward, skeezy relationship.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Springing rape scenarios on people without asking.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Stormy's latest alias.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Superwholockvengers.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Surprise futa.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tag nirvana.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tentabulge headcanons.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Terminal Tokyo.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `That Kronk.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `That Patchouli.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Box.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The dominate one.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Love Hotel.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The medium divide.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The myriad of songs you associate with your OTP.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The paid account fairy.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Royal Baby.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Salkia Island award.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The whole game jumping on the villain before they have a chance to be villainous.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `TL;DR.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `TMI public plurks.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Touhou lesbians nobody wants to play with.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tower of Animus.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tryhards.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tittybabies.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tumblrinas.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Two lonely neckbeards playing out futa together because nobody else will.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Two years' worth of semen.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `tYPING LIKE THIS???????? oH MY GKFOODODD??????`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Unironically using the word "kawaii".`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Username elitism.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Username squatting.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Vatheon.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Viewing anoncomms in flat-view like a heathen.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Visualosities.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Wank terriers.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Wankgate.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Wanking about games you aren't in.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Wanking about a private musebox.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `wgar.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Whiteknighting.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Whoremongers.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Wrapping your hands around a penis and twisting in opposite directions.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Yaoi.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Zodion.`,
      watermark: `RP`,
      cardSetId: insertResult.result![0].id
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.delete('black_card', {
      text: `____ doesn't need to be judged right now.`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `____ is a terrible thing to do to the ____!`,
      draw: 0,
      pick: 2,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `____ &amp; ____: Worst mods ever.`,
      draw: 0,
      pick: 2,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `/____ all over this post.`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `/____ delicately from the butt.`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `/slides hand up your ____.`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `____ is not an island.`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `____ runs into the forest, screaming.`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `____ was better before the anon meme.`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `We'd love to have you at ____ Island!`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `Bad news guys, my parents found that thread involving ____.`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `But what are your thoughts on ____?`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `Chaos ensued when Wankgate banned ____.`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `Cute, fun and ____.`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `Does anyone ____? I feel like the only one.`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `Excuse me, but I identify as ____.`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `Great, another ____ event.`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `How can there be a group of people more ____ than us?`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `How's my driving?`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `I can only ____ if I feel a deep emotional connection.`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `I can't believe we just spent a whole page wanking about ____.`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `I have a PHD in ____.`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `I just benchpressed, like, 14 ____.`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `I need deets on ____, stat.`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `I predict ____ will close by the end of the year.`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `I randomly began to ____ and ____ came galloping up the stairs.`,
      draw: 0,
      pick: 2,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `I see Wankgate's bitching about ____ again.`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `I'm literally shaking and ____ right now.`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `I'm married to ____ on the astral plane.`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `I'm really into ____, so please don't kinkshame.`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `I'm sad we lost ____ in the exodus from LJ to DW.`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `I'm starting a game where the characters are stuck in ____.`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `I'm taking commissions for ____!`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `How dare you not warn for ____! Don't you know how triggering that is?`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `In this world, sexual roles are divided into three categories: the ____, the ____, and the ____`,
      draw: 2,
      pick: 3,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `It's ____ o'clock.`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `ITT: ____.`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `Join my new game about ____!`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `Keep fucking that ____.`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `Let me tell you about ____.`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `Log in and ____.`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `My favorite thread is the one where ____ has kinky sex with ____.`,
      draw: 0,
      pick: 2,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `My headcanon is that ____ is ____.`,
      draw: 0,
      pick: 2,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `My OTP: ____ x ____.`,
      draw: 0,
      pick: 2,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `New game idea! You're kidnapped by ____ and forced into ____.`,
      draw: 0,
      pick: 2,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `no actually i don't care at all, i don't even ____. :))))`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `OMG you guys I have so many feels about ____!`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `Only ____ would play from ____.`,
      draw: 0,
      pick: 2,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `Raising money for ____! Please replurk!`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `RPAnons made me ____.`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `SHUT UP ABOUT YOUR ____.`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `Signal boosting for ____!`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `Since ____ is on hiatus, fans have migrated to ____.`,
      draw: 0,
      pick: 2,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `Someone just stuck their head out of the window and screamed "____'s UP!"`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `Someone left a ____ out in the rain.`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `That ____. You know, *that* one.`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `The ____ is happy.`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `The perfect username for my next character: ____.`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `The thing I hate most about RP is ____.`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `Their ____ are of age.`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `There are too many memes about ____.`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `There is no ____ in Holly Heights.`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `We need a new post. This one smells like ____.`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `Why was I asked for app revisions?`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `Why was I banned?`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `Who apps ____ to a sex game?`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `Who should I play next?`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `You can't fist ____.`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });
    await queryRunner.delete('black_card', {
      text: `You sound ____, tbh.`,
      draw: 0,
      pick: 1,
      watermark: `RP`
    });

    await queryRunner.delete('white_card', {
      text: `Rule 63.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `"The" Hateboner.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `(I glances.)`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `(unsure).`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Too rad to be cis.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `A 'shopped vendetta.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `A 5-page-long kink list.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `A bouquet of dicks.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `A creepy Corruption of Champions OC.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `A funny name for Benedict Cumberbatch.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `A genderswapped vampire AU Cloud Strife.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `A glopping noise.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `A misfire.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `A paid account full of nothing but terrible fanart icons.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `A penis approximately the size and shape of a Guinness can.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `A shitty urban fantasy OC.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `A spooky jamjar.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `A tag so boring it makes you want to delete all of your journals.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `A tragic Christmas hang-gliding accident.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Accidental video posts.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Alpha/Beta/Omega.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Amatomnes.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `An awful fandom OC who's married to the main character.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Anonfailing.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Another boring wank about f/f.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Another fucking TFLN meme.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `App revisions.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Ataraxion.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Autistic gypsies.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Baby penis.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Bakerstreet.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Begging for asspats.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Being really passive-aggressive because you "don't wanna hurt anyone's feelings".`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Being soulbonded to a Homestuck character.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Broccoli trees.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Butthurt.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Calling long-distance to demand tags from your RP partner.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Cape and Cowl.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Changed.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Chronic Lyme disease.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Circlejerking.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `City of Ariel.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Cloud being eaten by a chocobo.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Cockhopping.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Constructive criticism.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Dangan Ronpa's crazy fandom.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Dean/Goku.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Dear Mun.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Discedo.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Drama Drama Duck.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Dropping the thread after two tags because it sucks.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `ECATS? CAT DESK? WE SCAT?`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `An incest ship.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Entranceway.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Everyone turning into ponies.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Exit Void.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Exsilium.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `FACT IT!`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Fad fandoms.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Falling in love with your RP partner.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Feeling like the only one.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Flouncing. The more dramatic, the better.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Fucking that chicken.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Generic white male actor PBs.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Haven.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Hellion.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Hetalia's annoying fandom.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `High Seas.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Highlandering.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Hitting the cervix with your dick.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Holly Heights.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Homestuck's insane fandom.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Icon elitism.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Icons that aren't 100x100.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Kink shaming.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Legbeards.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Literally shaking and crying.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `lol so randumb!!!!111 XD`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Lovingly describing your character's throbbing cock.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Luceti.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Mpreg.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Musedumping.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Neckbeards.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Needing to lei down.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Not posting deets.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Nymphomanic werewolf Rei Ayanami. On rollerskates.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `One-pixel borders.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `One-word replies.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Paradisa.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Passive-aggressive editing.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Pigeon superpowers.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Pillow queens.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Only playing for ships.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Polychromatic.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Posting to Wankgate logged in.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Pregnancy plots.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Pretentious, illegible formatting.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Queefing on someone's dick.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Rebutle.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Renne.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Replying to everyone on ATP because you're just that desperate.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Reserving a popular character and never apping.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Roleplaying One Direction slash.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Route 29.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Roxanne Ritchie's vagina.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `RPAnons.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Ruby City.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Rushing to dear_mun to post about the latest global tragedy in-character.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `St-stuttered t-typing.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Obviously sameanoning.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Sample prompts.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Save The Earth.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Scathing anonymous criticism.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Scrambling to pass AC at the last minute.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Shounen retards.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Signal boosting an obvious hoax.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Slacktivism.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Social justice warriors.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Sora and Emperor Palpatine in an awkward, skeezy relationship.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Springing rape scenarios on people without asking.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Stormy's latest alias.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Superwholockvengers.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Surprise futa.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Tag nirvana.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Tentabulge headcanons.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Terminal Tokyo.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `That Kronk.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `That Patchouli.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `The Box.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `The dominate one.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `The Love Hotel.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `The medium divide.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `The myriad of songs you associate with your OTP.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `The paid account fairy.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `The Royal Baby.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `The Salkia Island award.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `The whole game jumping on the villain before they have a chance to be villainous.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `TL;DR.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `TMI public plurks.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Touhou lesbians nobody wants to play with.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Tower of Animus.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Tryhards.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Tittybabies.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Tumblrinas.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Two lonely neckbeards playing out futa together because nobody else will.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Two years' worth of semen.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `tYPING LIKE THIS???????? oH MY GKFOODODD??????`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Unironically using the word "kawaii".`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Username elitism.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Username squatting.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Vatheon.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Viewing anoncomms in flat-view like a heathen.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Visualosities.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Wank terriers.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Wankgate.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Wanking about games you aren't in.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Wanking about a private musebox.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `wgar.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Whiteknighting.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Whoremongers.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Wrapping your hands around a penis and twisting in opposite directions.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Yaoi.`,
      watermark: `RP`
    });
    await queryRunner.delete('white_card', {
      text: `Zodion.`,
      watermark: `RP`
    });

    await queryRunner.delete('card_set', {
      name: `[C] RPAnons`,
      baseDeck: false,
      description: null,
      weight: 529,
      active: true
    });
  }
}
