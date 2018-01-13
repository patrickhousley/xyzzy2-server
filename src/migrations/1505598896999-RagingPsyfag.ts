/* tslint:disable:no-non-null-assertion no-unsafe-any no-any no-unnecessary-type-assertion */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class RagingPsyfag1505598896999 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const insertResult = await queryRunner.insert('card_set', {
      name: `[C] RagingPsyfag's Pack of Shenanigans`,
      baseDeck: false,
      description: null,
      weight: 525,
      active: true
    });

    await queryRunner.insert('black_card', {
      text: `My most shameful orgasm was the time I masturbated to ____.`,
      draw: 0,
      pick: 1,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I got an STD from ____.`,
      draw: 0,
      pick: 1,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ is serious business.`,
      draw: 0,
      pick: 1,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `If you don't pay your Comcast cable bill, they will send ____ after you.`,
      draw: 0,
      pick: 1,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Mewtwo achieved a utopian society when he eliminated ____ once and for all.`,
      draw: 0,
      pick: 1,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The only thing that caused more of a shitfit than Mewtwo's new form is ____.`,
      draw: 0,
      pick: 1,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The idiots in that one room at the Westin finally got kicked out of Anthrocon for ____.`,
      draw: 0,
      pick: 1,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Furaffinity went down for 48 hours because of ____.`,
      draw: 0,
      pick: 1,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Anthrocon was ruined by ____.`,
      draw: 0,
      pick: 1,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I unwatched his FurAffinity page because he kept posting ____.`,
      draw: 0,
      pick: 1,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `You don't want to find ____ in your Furnando's Lasagna Wrap.`,
      draw: 0,
      pick: 1,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ ruined the ____ fandom for all eternity.`,
      draw: 0,
      pick: 2,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I was fapping to ____, but ____ walked in on me.`,
      draw: 0,
      pick: 2,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In recent tech news, computers are now being ruined by ____.`,
      draw: 0,
      pick: 1,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Yu-Gi-Oh players were shocked when the win condition of holding 5 Exodia pieces was replaced by ____, ____, and ____. `,
      draw: 2,
      pick: 3,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What are the worst 3 cards in your hand right now?`,
      draw: 2,
      pick: 3,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });

    await queryRunner.insert('white_card', {
      text: `Mewtwo.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Anthrocon.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Uncle Kage.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The furries.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Furries on the Tyra Banks show.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Midna and Wolf Link.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Paying $3,500 for an oversized novelty fursuiter badge.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `2, the Ranting Gryphon.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Going on a diet for the sole reason of being able to fit in a fursuit.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Waiting over a year for someone to finish your art commission.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A used sock collection.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A small creature being stuffed in a smelly boot.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Being facesat by someone who is holding in a fart.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Licking Cinnabon icing off of your partner's dick.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Being tied up and having a musky foot stuffed in your mouth.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Bad Dragon dildo.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Being pinned to the wall and fucked in a shower.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Trees made out of living tentacles.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tickling someone until they almost piss themself.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Using a save state in a video game so you can fap to it later.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Having every embarrassing kink of yours indulged at one time for a "shamegasm."`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting fucked by the Red Robin.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Horny, stupid livestock.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A fat Russian Blue that pees on the carpet.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Poking cats.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bending a Lucario over and using its dreadlocks as fuckhandles.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Role reversal.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ray Sipe singing about how /v/ doesn't like video games.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A stripper so ugly people throw nickels at her.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lesbrarians.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Umbreon.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Masturbating at work.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Rick Astley.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Poor quality ParkerSteel.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Vodka spiked with GHB.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Chopping up someone's parents and putting them into chili.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting banned from Dave & Buster's.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Finding out your internet stalker's doing 10-30 in federal prison.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Gambling on a fart and losing.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A woman with a double-wide stroller about to mow you down.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A cat trying to stick its nose up your asshole.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Fleshlight full of thumb tacks.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Stayin' Alive.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Sexflesh Venereal Vinnie Suction Cup Diseased Dildo.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `That barrel in Carnival Night Zone at the supposed "dead end".`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Whitney's Miltank.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tourneyfags who turn off all items when playing Super Smash Bros.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Being stalked by a paranoid schizophrenic on Reddit.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Looking up where someone lives because they posted something you didn't like on the internet.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Chance Time.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `CryptoLocker.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Colby 2012.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Petty people.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Paying $1,475 for a bath sponge.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Giovanni's head being suplexed through a floor.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Plush animals that come to life long enough to drink all your rum.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `BLORF.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mewtwo's reveal as a playable character in the next Super Smash Bros. title.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Baconator.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A chinese buffet where everything is wrapped in bacon.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A lifetime supply of Olive Garden breadsticks.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The 52 oz. "Fizzinator" from Sheetz.`,
      watermark: `RPF`,
      cardSetId: insertResult.result![0].id
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.delete('black_card', {
      text: `My most shameful orgasm was the time I masturbated to ____.`,
      draw: 0,
      pick: 1,
      watermark: `RPF`
    });
    await queryRunner.delete('black_card', {
      text: `I got an STD from ____.`,
      draw: 0,
      pick: 1,
      watermark: `RPF`
    });
    await queryRunner.delete('black_card', {
      text: `____ is serious business.`,
      draw: 0,
      pick: 1,
      watermark: `RPF`
    });
    await queryRunner.delete('black_card', {
      text: `If you don't pay your Comcast cable bill, they will send ____ after you.`,
      draw: 0,
      pick: 1,
      watermark: `RPF`
    });
    await queryRunner.delete('black_card', {
      text: `Mewtwo achieved a utopian society when he eliminated ____ once and for all.`,
      draw: 0,
      pick: 1,
      watermark: `RPF`
    });
    await queryRunner.delete('black_card', {
      text: `The only thing that caused more of a shitfit than Mewtwo's new form is ____.`,
      draw: 0,
      pick: 1,
      watermark: `RPF`
    });
    await queryRunner.delete('black_card', {
      text: `The idiots in that one room at the Westin finally got kicked out of Anthrocon for ____.`,
      draw: 0,
      pick: 1,
      watermark: `RPF`
    });
    await queryRunner.delete('black_card', {
      text: `Furaffinity went down for 48 hours because of ____.`,
      draw: 0,
      pick: 1,
      watermark: `RPF`
    });
    await queryRunner.delete('black_card', {
      text: `Anthrocon was ruined by ____.`,
      draw: 0,
      pick: 1,
      watermark: `RPF`
    });
    await queryRunner.delete('black_card', {
      text: `I unwatched his FurAffinity page because he kept posting ____.`,
      draw: 0,
      pick: 1,
      watermark: `RPF`
    });
    await queryRunner.delete('black_card', {
      text: `You don't want to find ____ in your Furnando's Lasagna Wrap.`,
      draw: 0,
      pick: 1,
      watermark: `RPF`
    });
    await queryRunner.delete('black_card', {
      text: `____ ruined the ____ fandom for all eternity.`,
      draw: 0,
      pick: 2,
      watermark: `RPF`
    });
    await queryRunner.delete('black_card', {
      text: `I was fapping to ____, but ____ walked in on me.`,
      draw: 0,
      pick: 2,
      watermark: `RPF`
    });
    await queryRunner.delete('black_card', {
      text: `In recent tech news, computers are now being ruined by ____.`,
      draw: 0,
      pick: 1,
      watermark: `RPF`
    });
    await queryRunner.delete('black_card', {
      text: `Yu-Gi-Oh players were shocked when the win condition of holding 5 Exodia pieces was replaced by ____, ____, and ____. `,
      draw: 2,
      pick: 3,
      watermark: `RPF`
    });
    await queryRunner.delete('black_card', {
      text: `What are the worst 3 cards in your hand right now?`,
      draw: 2,
      pick: 3,
      watermark: `RPF`
    });

    await queryRunner.delete('white_card', {
      text: `Mewtwo.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Anthrocon.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `Uncle Kage.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `The furries.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `Furries on the Tyra Banks show.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `Midna and Wolf Link.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `Paying $3,500 for an oversized novelty fursuiter badge.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `2, the Ranting Gryphon.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `Going on a diet for the sole reason of being able to fit in a fursuit.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `Waiting over a year for someone to finish your art commission.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `A used sock collection.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `A small creature being stuffed in a smelly boot.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `Being facesat by someone who is holding in a fart.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `Licking Cinnabon icing off of your partner's dick.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `Being tied up and having a musky foot stuffed in your mouth.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `A Bad Dragon dildo.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `Being pinned to the wall and fucked in a shower.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `Trees made out of living tentacles.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `Tickling someone until they almost piss themself.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `Using a save state in a video game so you can fap to it later.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `Having every embarrassing kink of yours indulged at one time for a "shamegasm."`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `Getting fucked by the Red Robin.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `Horny, stupid livestock.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `A fat Russian Blue that pees on the carpet.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `Poking cats.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `Bending a Lucario over and using its dreadlocks as fuckhandles.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `Role reversal.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `Ray Sipe singing about how /v/ doesn't like video games.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `A stripper so ugly people throw nickels at her.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `Lesbrarians.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `Umbreon.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `Masturbating at work.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `Rick Astley.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `Poor quality ParkerSteel.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `Vodka spiked with GHB.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `Chopping up someone's parents and putting them into chili.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `Getting banned from Dave & Buster's.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `Finding out your internet stalker's doing 10-30 in federal prison.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `Gambling on a fart and losing.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `A woman with a double-wide stroller about to mow you down.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `A cat trying to stick its nose up your asshole.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `A Fleshlight full of thumb tacks.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `Stayin' Alive.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `The Sexflesh Venereal Vinnie Suction Cup Diseased Dildo.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `That barrel in Carnival Night Zone at the supposed "dead end".`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `Whitney's Miltank.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `Tourneyfags who turn off all items when playing Super Smash Bros.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `Being stalked by a paranoid schizophrenic on Reddit.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `Looking up where someone lives because they posted something you didn't like on the internet.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `Chance Time.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `CryptoLocker.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `Colby 2012.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `Petty people.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `Paying $1,475 for a bath sponge.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `Giovanni's head being suplexed through a floor.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `Plush animals that come to life long enough to drink all your rum.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `BLORF.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `Mewtwo's reveal as a playable character in the next Super Smash Bros. title.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `The Baconator.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `A chinese buffet where everything is wrapped in bacon.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `A lifetime supply of Olive Garden breadsticks.`,
      watermark: `RPF`
    });
    await queryRunner.delete('white_card', {
      text: `The 52 oz. "Fizzinator" from Sheetz.`,
      watermark: `RPF`
    });

    await queryRunner.delete('card_set', {
      name: `[C] RagingPsyfag's Pack of Shenanigans`,
      baseDeck: false,
      description: null,
      weight: 525,
      active: true
    });
  }
}
