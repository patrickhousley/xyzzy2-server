/* tslint:disable:no-non-null-assertion no-unsafe-any no-any no-unnecessary-type-assertion */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class FiMFiction1505100374612 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const insertResult = await queryRunner.insert('card_set', {
      name: `[C] FiMFiction.net`,
      baseDeck: false,
      description: `For FiMFiction.net users, by Cola_Bubble_Gum.`,
      weight: 500,
      active: true
    });

    await queryRunner.insert('black_card', {
      text: `That fucking idiot ____ ragequit the fandom over ____.`,
      draw: 1,
      pick: 2,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ ____ Divided By ____.`,
      draw: 2,
      pick: 3,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ <br>~Skeeter The Lurker`,
      draw: 0,
      pick: 1,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ adds a thread in the Anti-____ group, and everybody loses their fucking minds.`,
      draw: 1,
      pick: 2,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ is Best Pony.`,
      draw: 0,
      pick: 1,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ is the least autistic ____ on Fimfiction.`,
      draw: 1,
      pick: 2,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ posted that they're not working on fics for a while, because ____.`,
      draw: 1,
      pick: 2,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ signalled the end of the ____ Age of FiMfiction.net.`,
      draw: 1,
      pick: 2,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ signalled the end of the Golden Age of FiMfiction.net.`,
      draw: 0,
      pick: 1,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ was a strong stallion.`,
      draw: 0,
      pick: 1,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____, ____, and ____ in a sexy circlejerk.`,
      draw: 2,
      pick: 3,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `A clopfic about ____ with ____, and ____ is a sexy orphan.`,
      draw: 2,
      pick: 3,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `An alternate universe where ____ is instead ____.`,
      draw: 1,
      pick: 2,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Fallout Equestria is ____ and tends to overdramaticize its ____.`,
      draw: 0,
      pick: 2,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Hey, let's cross over ____ and MLP! Why the fuck not?`,
      draw: 0,
      pick: 1,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I commissioned a picture of ____ violating ____ with ____'s dick.`,
      draw: 2,
      pick: 3,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I hope someone writes a fic about ____ because I am too fucking lazy to do it myself.`,
      draw: 0,
      pick: 1,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I just read a fic where ____ was fucking ____.`,
      draw: 1,
      pick: 2,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I just started the ____verse.`,
      draw: 0,
      pick: 1,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I swear I'm going to quit the fandom if ____ happens.`,
      draw: 0,
      pick: 1,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `If only people bothered to read Ezn's ____ Guide!`,
      draw: 0,
      pick: 1,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `knighty's new blogpost is about ____`,
      draw: 0,
      pick: 1,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `My ____ Pony`,
      draw: 0,
      pick: 1,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `My Little Dashie? How about My Little ____?`,
      draw: 0,
      pick: 1,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `My OTP is ____ and ____.`,
      draw: 1,
      pick: 2,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Oh, fuck, someone made a group about ____.`,
      draw: 0,
      pick: 1,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Oh, look, ____ made a fan group for themselves.`,
      draw: 0,
      pick: 1,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `RainbowBob's newest clopfic: ____ X ____`,
      draw: 0,
      pick: 2,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Remember when ____ was on every page?`,
      draw: 0,
      pick: 1,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Short Skirts and ____.`,
      draw: 0,
      pick: 1,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Someone should write a clopfic of ____ fucking ____, using ____ as lubricant.`,
      draw: 2,
      pick: 3,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The ____ Bureau.`,
      draw: 0,
      pick: 1,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The ____ Group of ____ Excellence.`,
      draw: 1,
      pick: 2,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The cardinal sin of FiMFic noobs: _____ without ______`,
      draw: 0,
      pick: 2,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The Incredible ____ Of A Winning ____.`,
      draw: 1,
      pick: 2,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `There's a crossover fic about ____ and ____ in the FB.`,
      draw: 0,
      pick: 2,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });

    await queryRunner.insert('white_card', {
      text: `Alicorn OCs.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An End of Ponies update.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Another ball-greasing 502 error, for fuck's sake! Goddamnit!`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Assholes who hate foalcon.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Big Macintosh's gaping, sloppy-wet boycunt.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Blackjack.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bronies.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Chuckward, before he was banned.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cola's ass.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Columbine. Dear fucking Celestia, Columbine.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Crotchtits.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `darf.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `darf's corpse, Faust rest his soul.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dollhouse.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Eakin.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Equestria Daily.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fallout: Equestria: Project Horizons.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fallout: Equestria.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `FelixDawn.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fillyfooler.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Foalcon.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fucking 502 errors.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fucking Anthro.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Goddamned crossover fics.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Goddamned unnecessary futa.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Horsedick.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Humancunt.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Humanized.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `IJAB.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Kaidan.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `knighty.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `knighty's dribbling dick.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lacinias.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Littlepip.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mares with dicks.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Meeester`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mods.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `More 502 errors, christ.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `My Little Dashie, even though it's a piece of shit.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `NSFW blogposts filled with guro and incest.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nyx, the ultimate Mary Sue.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Obselescence.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `On A Cross And An Arrow.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `para's sweaty nutsack.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `parasprite.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ponycunt.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `RainbowBob.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `RBDash47's latest blog post.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Regidar, again, the little shit.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Regidar.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Riffing.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Rule 63.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sethisto.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Short Skirts and Explosions.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sick freaks who love foalcon.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Skeeter The Lurker.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Stallions with cunts.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `That jackass Aegis Shield.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `That jackass Silent Bob.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Conversion Bureau.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Featured Box.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Great NSFW Purge Of 2013.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Mature Featured Box.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Noble Jury.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Pony Fiction Vault, before it fucked off into the sunset.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Train Wreck Explorers.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Writer's Group.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Those doucheslurping Adsense assholes.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Twilacorn Autism.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Twilacorn.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Twilight Sparkle, the ultimate Mary Sue.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Twilight Sparkle's massive, throbbing princesshood.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Twilight's Library`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Wanderer D.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Xenophilia.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Your bullshit OTP.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Your shitty OC.`,
      watermark: `FiM1`,
      cardSetId: insertResult.result![0].id
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.delete('black_card', {
      text: `That fucking idiot ____ ragequit the fandom over ____.`,
      draw: 1,
      pick: 2,
      watermark: `FiM1`
    });
    await queryRunner.delete('black_card', {
      text: `____ ____ Divided By ____.`,
      draw: 2,
      pick: 3,
      watermark: `FiM1`
    });
    await queryRunner.delete('black_card', {
      text: `____ <br>~Skeeter The Lurker`,
      draw: 0,
      pick: 1,
      watermark: `FiM1`
    });
    await queryRunner.delete('black_card', {
      text: `____ adds a thread in the Anti-____ group, and everybody loses their fucking minds.`,
      draw: 1,
      pick: 2,
      watermark: `FiM1`
    });
    await queryRunner.delete('black_card', {
      text: `____ is Best Pony.`,
      draw: 0,
      pick: 1,
      watermark: `FiM1`
    });
    await queryRunner.delete('black_card', {
      text: `____ is the least autistic ____ on Fimfiction.`,
      draw: 1,
      pick: 2,
      watermark: `FiM1`
    });
    await queryRunner.delete('black_card', {
      text: `____ posted that they're not working on fics for a while, because ____.`,
      draw: 1,
      pick: 2,
      watermark: `FiM1`
    });
    await queryRunner.delete('black_card', {
      text: `____ signalled the end of the ____ Age of FiMfiction.net.`,
      draw: 1,
      pick: 2,
      watermark: `FiM1`
    });
    await queryRunner.delete('black_card', {
      text: `____ signalled the end of the Golden Age of FiMfiction.net.`,
      draw: 0,
      pick: 1,
      watermark: `FiM1`
    });
    await queryRunner.delete('black_card', {
      text: `____ was a strong stallion.`,
      draw: 0,
      pick: 1,
      watermark: `FiM1`
    });
    await queryRunner.delete('black_card', {
      text: `____, ____, and ____ in a sexy circlejerk.`,
      draw: 2,
      pick: 3,
      watermark: `FiM1`
    });
    await queryRunner.delete('black_card', {
      text: `A clopfic about ____ with ____, and ____ is a sexy orphan.`,
      draw: 2,
      pick: 3,
      watermark: `FiM1`
    });
    await queryRunner.delete('black_card', {
      text: `An alternate universe where ____ is instead ____.`,
      draw: 1,
      pick: 2,
      watermark: `FiM1`
    });
    await queryRunner.delete('black_card', {
      text: `Fallout Equestria is ____ and tends to overdramaticize its ____.`,
      draw: 0,
      pick: 2,
      watermark: `FiM1`
    });
    await queryRunner.delete('black_card', {
      text: `Hey, let's cross over ____ and MLP! Why the fuck not?`,
      draw: 0,
      pick: 1,
      watermark: `FiM1`
    });
    await queryRunner.delete('black_card', {
      text: `I commissioned a picture of ____ violating ____ with ____'s dick.`,
      draw: 2,
      pick: 3,
      watermark: `FiM1`
    });
    await queryRunner.delete('black_card', {
      text: `I hope someone writes a fic about ____ because I am too fucking lazy to do it myself.`,
      draw: 0,
      pick: 1,
      watermark: `FiM1`
    });
    await queryRunner.delete('black_card', {
      text: `I just read a fic where ____ was fucking ____.`,
      draw: 1,
      pick: 2,
      watermark: `FiM1`
    });
    await queryRunner.delete('black_card', {
      text: `I just started the ____verse.`,
      draw: 0,
      pick: 1,
      watermark: `FiM1`
    });
    await queryRunner.delete('black_card', {
      text: `I swear I'm going to quit the fandom if ____ happens.`,
      draw: 0,
      pick: 1,
      watermark: `FiM1`
    });
    await queryRunner.delete('black_card', {
      text: `If only people bothered to read Ezn's ____ Guide!`,
      draw: 0,
      pick: 1,
      watermark: `FiM1`
    });
    await queryRunner.delete('black_card', {
      text: `knighty's new blogpost is about ____`,
      draw: 0,
      pick: 1,
      watermark: `FiM1`
    });
    await queryRunner.delete('black_card', {
      text: `My ____ Pony`,
      draw: 0,
      pick: 1,
      watermark: `FiM1`
    });
    await queryRunner.delete('black_card', {
      text: `My Little Dashie? How about My Little ____?`,
      draw: 0,
      pick: 1,
      watermark: `FiM1`
    });
    await queryRunner.delete('black_card', {
      text: `My OTP is ____ and ____.`,
      draw: 1,
      pick: 2,
      watermark: `FiM1`
    });
    await queryRunner.delete('black_card', {
      text: `Oh, fuck, someone made a group about ____.`,
      draw: 0,
      pick: 1,
      watermark: `FiM1`
    });
    await queryRunner.delete('black_card', {
      text: `Oh, look, ____ made a fan group for themselves.`,
      draw: 0,
      pick: 1,
      watermark: `FiM1`
    });
    await queryRunner.delete('black_card', {
      text: `RainbowBob's newest clopfic: ____ X ____`,
      draw: 0,
      pick: 2,
      watermark: `FiM1`
    });
    await queryRunner.delete('black_card', {
      text: `Remember when ____ was on every page?`,
      draw: 0,
      pick: 1,
      watermark: `FiM1`
    });
    await queryRunner.delete('black_card', {
      text: `Short Skirts and ____.`,
      draw: 0,
      pick: 1,
      watermark: `FiM1`
    });
    await queryRunner.delete('black_card', {
      text: `Someone should write a clopfic of ____ fucking ____, using ____ as lubricant.`,
      draw: 2,
      pick: 3,
      watermark: `FiM1`
    });
    await queryRunner.delete('black_card', {
      text: `The ____ Bureau.`,
      draw: 0,
      pick: 1,
      watermark: `FiM1`
    });
    await queryRunner.delete('black_card', {
      text: `The ____ Group of ____ Excellence.`,
      draw: 1,
      pick: 2,
      watermark: `FiM1`
    });
    await queryRunner.delete('black_card', {
      text: `The cardinal sin of FiMFic noobs: _____ without ______`,
      draw: 0,
      pick: 2,
      watermark: `FiM1`
    });
    await queryRunner.delete('black_card', {
      text: `The Incredible ____ Of A Winning ____.`,
      draw: 1,
      pick: 2,
      watermark: `FiM1`
    });
    await queryRunner.delete('black_card', {
      text: `There's a crossover fic about ____ and ____ in the FB.`,
      draw: 0,
      pick: 2,
      watermark: `FiM1`
    });

    await queryRunner.delete('white_card', {
      text: `Alicorn OCs.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `An End of Ponies update.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Another ball-greasing 502 error, for fuck's sake! Goddamnit!`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Assholes who hate foalcon.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Big Macintosh's gaping, sloppy-wet boycunt.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Blackjack.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Bronies.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Chuckward, before he was banned.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Cola's ass.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Columbine. Dear fucking Celestia, Columbine.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Crotchtits.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `darf.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `darf's corpse, Faust rest his soul.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Dollhouse.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Eakin.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Equestria Daily.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Fallout: Equestria: Project Horizons.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Fallout: Equestria.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `FelixDawn.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Fillyfooler.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Foalcon.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Fucking 502 errors.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Fucking Anthro.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Goddamned crossover fics.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Goddamned unnecessary futa.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Horsedick.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Humancunt.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Humanized.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `IJAB.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Kaidan.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `knighty.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `knighty's dribbling dick.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Lacinias.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Littlepip.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Mares with dicks.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Meeester`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Mods.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `More 502 errors, christ.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `My Little Dashie, even though it's a piece of shit.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `NSFW blogposts filled with guro and incest.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Nyx, the ultimate Mary Sue.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Obselescence.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `On A Cross And An Arrow.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `para's sweaty nutsack.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `parasprite.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Ponycunt.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `RainbowBob.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `RBDash47's latest blog post.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Regidar, again, the little shit.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Regidar.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Riffing.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Rule 63.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Sethisto.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Short Skirts and Explosions.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Sick freaks who love foalcon.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Skeeter The Lurker.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Stallions with cunts.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `That jackass Aegis Shield.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `That jackass Silent Bob.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `The Conversion Bureau.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `The Featured Box.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `The Great NSFW Purge Of 2013.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `The Mature Featured Box.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `The Noble Jury.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `The Pony Fiction Vault, before it fucked off into the sunset.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `The Train Wreck Explorers.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `The Writer's Group.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Those doucheslurping Adsense assholes.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Twilacorn Autism.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Twilacorn.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Twilight Sparkle, the ultimate Mary Sue.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Twilight Sparkle's massive, throbbing princesshood.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Twilight's Library`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Wanderer D.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Xenophilia.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Your bullshit OTP.`,
      watermark: `FiM1`
    });
    await queryRunner.delete('white_card', {
      text: `Your shitty OC.`,
      watermark: `FiM1`
    });

    await queryRunner.delete('card_set', {
      name: `[C] FiMFiction.net`,
      baseDeck: false,
      description: `For FiMFiction.net users, by Cola_Bubble_Gum.`,
      weight: 500,
      active: true
    });
  }
}
