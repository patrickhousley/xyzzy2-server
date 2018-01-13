/* tslint:disable:no-non-null-assertion no-unsafe-any no-any no-unnecessary-type-assertion */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class DoctorWho1505599849239 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const insertResult = await queryRunner.insert('card_set', {
      name: `[C] Doctor Who`,
      baseDeck: false,
      description: null,
      weight: 527,
      active: true
    });

    await queryRunner.insert('black_card', {
      text: `They found some more last episodes! They were found in ____.`,
      draw: 0,
      pick: 1,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The Doctor did it! He saved the world again! This time using a ____.`,
      draw: 0,
      pick: 1,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I'd give up ____ to travel with The Doctor.`,
      draw: 0,
      pick: 1,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The next Doctor Who spin-off is going to be called ____.`,
      draw: 0,
      pick: 1,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Who should be the 13th Doctor?`,
      draw: 0,
      pick: 1,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The Chameleon circuit is working again...somewhat. Instead of a phone booth, the TARDIS is now a ____.`,
      draw: 0,
      pick: 1,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Originally, the 50th special was going to have ____ appear, but the BBC decided against it in the end.`,
      draw: 0,
      pick: 1,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `After we watch an episode, I've got some ____-flavored Jelly Babies to hand out.`,
      draw: 0,
      pick: 1,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Wibbly-wobbly, timey-wimey ____.`,
      draw: 0,
      pick: 1,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What's going to be The Doctor's new catchphrase?`,
      draw: 0,
      pick: 1,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Bowties are ____.`,
      draw: 0,
      pick: 1,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Old and busted: EXTERMINATE! New hotness: ____.`,
      draw: 0,
      pick: 1,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `There's a new dance on Gallifrey. It's called the ____.`,
      draw: 0,
      pick: 1,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `They announced a new LEGO Doctor Who game! Rumor has it that ____ is an unlockable character.`,
      draw: 0,
      pick: 1,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `FUN FACT: The Daleks were originally shaped to look like ____.`,
      draw: 0,
      pick: 1,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `At this new Doctor Who themed restaurant, you can get a free ____ if you can eat a plate of bangers and mash in under 3 minutes.`,
      draw: 0,
      pick: 1,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Who is going to be The Doctor's next companion?`,
      draw: 0,
      pick: 1,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I think the BBC is losing it. They just released a Doctor Who themed ____.`,
      draw: 0,
      pick: 1,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `It's a little known fact that if you send a ____ to the BBC, they will send you a picture of The Doctor.`,
      draw: 0,
      pick: 1,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I was ok with all the BAD WOLF graffiti, until someone wrote it on ____.`,
      draw: 0,
      pick: 1,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Jack Harkness, I can't leave you alone for a minute! I turn around and you're trying to seduce ____.`,
      draw: 0,
      pick: 1,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In all of space and time you decide that ____ is a good choice?!`,
      draw: 0,
      pick: 1,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Adipose were thought to be made of fat, but are really made of ____.`,
      draw: 0,
      pick: 1,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I hear the next thing that will cause The Doctor to regenerate is ____.`,
      draw: 0,
      pick: 1,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ was sent to save ____.`,
      draw: 0,
      pick: 2,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `According to the Daleks, ____ is better at ____.`,
      draw: 0,
      pick: 2,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });

    await queryRunner.insert('white_card', {
      text: `Tom Baker, in nothing but a scarf`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Walking in on Jack Harkness doing your mom. And your dad.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The buzzing noise the Sonic Screwdriver makes`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sharing a public restroom with a Weeping Angel`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Just now realizing Torchwood is an anagram of Doctor Who`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fifty years of fanfic.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Wanting to punch that teeny-bopper Whovian that's butthurt the new Doctor isn't in his twenties.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Doctor going back in time to solve a REAL problem: Twilight.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Doctor Who body pillow.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Silence`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Drunkenly drawing tally marks on your face.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Rusty Cyberman`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A shitty Doctor Who knock-knock joke.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Doctor having a chance encounter with a couple of 80s metalheads.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Davros getting up on the wrong side of the bed.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Master, baiting the Doctor into a trap`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Vashta Nerada that just wants a hug.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Wishing you could regenerate.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Kidnapping a barely-legal woman to time travel with.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The poor costume decisions that were the 1970s.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sixteen feet of scarf bondage.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting so much plastic surgery you have to be framed and moisturized.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Quitting this panel after one round because you are afraid of getting typecast.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Mary Jane Adventures.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fondling a Dalek's slippery bits.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Air from my lungs.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Smoking 1,000 cigarettes, just so you can sound like a Dalek when you talk.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Slipping her the ol' plastic Mickey.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Companion Porn.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An acid rain shower on Skaro.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Sonic Screwdriver stuck on the vibrate setting.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pouting in a rain storm and having to take a wicked piss.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The poor decision that is having a staring contest with a weeping angel.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sorry, this answer is only available in the fanfic version of Cards against Con.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Plot holes so wide you could drive a truck through them.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A blinged out TARDIS blasting dubstep when it is traveling.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Rose Tyler's teeth.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Master singing Bad Case of Loving You.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `K-9 humping your leg.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A bigger, bluer TARDIS.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Steven Moffatt taking a big old dump in your Cheerios.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Robot Anne Robinson.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A fez caked with semen.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A GUITARDIS`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Celestial Toymaker's plaything.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Captain Jack Harkness.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Your dyslexic friend that wants you to come watch a marathon of Doctor How.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fapping to Billie Piper portraying a callgirl.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A furry writing BAD WOLF everywhere.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Being used as a plot device by Steven Moffat.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Costco-sized bag of Jelly Babies.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A global simulcast that forces Whovians to see the sunlight for the first time in ages.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `THE END OF TIME ITSELF!`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Finding Autons oddly attractive.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The fuck machine dungeon of the Cybermen.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Glenn Beck convulsively puking as a brood of Daleks swarm in on him.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `River Song.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Low-budget special effects.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Eggs.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dalek porn.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Taking a Doctor Poo.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The big banana in your pocket.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Opening the door of the TARDIS and leaving a deuce in the time-space continuum.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `David Tennant.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Matt Smith.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Christopher Eccleston.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Siltheen farts.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A kid in a gas mask asking if you are his mummy.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fish fingering your custard.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The hideousness that is Raxacoricofallapatorious.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An Ood getting a starring role in a hentai.`,
      watermark: `DW`,
      cardSetId: insertResult.result![0].id
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.delete('black_card', {
      text: `They found some more last episodes! They were found in ____.`,
      draw: 0,
      pick: 1,
      watermark: `DW`
    });
    await queryRunner.delete('black_card', {
      text: `The Doctor did it! He saved the world again! This time using a ____.`,
      draw: 0,
      pick: 1,
      watermark: `DW`
    });
    await queryRunner.delete('black_card', {
      text: `I'd give up ____ to travel with The Doctor.`,
      draw: 0,
      pick: 1,
      watermark: `DW`
    });
    await queryRunner.delete('black_card', {
      text: `The next Doctor Who spin-off is going to be called ____.`,
      draw: 0,
      pick: 1,
      watermark: `DW`
    });
    await queryRunner.delete('black_card', {
      text: `Who should be the 13th Doctor?`,
      draw: 0,
      pick: 1,
      watermark: `DW`
    });
    await queryRunner.delete('black_card', {
      text: `The Chameleon circuit is working again...somewhat. Instead of a phone booth, the TARDIS is now a ____.`,
      draw: 0,
      pick: 1,
      watermark: `DW`
    });
    await queryRunner.delete('black_card', {
      text: `Originally, the 50th special was going to have ____ appear, but the BBC decided against it in the end.`,
      draw: 0,
      pick: 1,
      watermark: `DW`
    });
    await queryRunner.delete('black_card', {
      text: `After we watch an episode, I've got some ____-flavored Jelly Babies to hand out.`,
      draw: 0,
      pick: 1,
      watermark: `DW`
    });
    await queryRunner.delete('black_card', {
      text: `Wibbly-wobbly, timey-wimey ____.`,
      draw: 0,
      pick: 1,
      watermark: `DW`
    });
    await queryRunner.delete('black_card', {
      text: `What's going to be The Doctor's new catchphrase?`,
      draw: 0,
      pick: 1,
      watermark: `DW`
    });
    await queryRunner.delete('black_card', {
      text: `Bowties are ____.`,
      draw: 0,
      pick: 1,
      watermark: `DW`
    });
    await queryRunner.delete('black_card', {
      text: `Old and busted: EXTERMINATE! New hotness: ____.`,
      draw: 0,
      pick: 1,
      watermark: `DW`
    });
    await queryRunner.delete('black_card', {
      text: `There's a new dance on Gallifrey. It's called the ____.`,
      draw: 0,
      pick: 1,
      watermark: `DW`
    });
    await queryRunner.delete('black_card', {
      text: `They announced a new LEGO Doctor Who game! Rumor has it that ____ is an unlockable character.`,
      draw: 0,
      pick: 1,
      watermark: `DW`
    });
    await queryRunner.delete('black_card', {
      text: `FUN FACT: The Daleks were originally shaped to look like ____.`,
      draw: 0,
      pick: 1,
      watermark: `DW`
    });
    await queryRunner.delete('black_card', {
      text: `At this new Doctor Who themed restaurant, you can get a free ____ if you can eat a plate of bangers and mash in under 3 minutes.`,
      draw: 0,
      pick: 1,
      watermark: `DW`
    });
    await queryRunner.delete('black_card', {
      text: `Who is going to be The Doctor's next companion?`,
      draw: 0,
      pick: 1,
      watermark: `DW`
    });
    await queryRunner.delete('black_card', {
      text: `I think the BBC is losing it. They just released a Doctor Who themed ____.`,
      draw: 0,
      pick: 1,
      watermark: `DW`
    });
    await queryRunner.delete('black_card', {
      text: `It's a little known fact that if you send a ____ to the BBC, they will send you a picture of The Doctor.`,
      draw: 0,
      pick: 1,
      watermark: `DW`
    });
    await queryRunner.delete('black_card', {
      text: `I was ok with all the BAD WOLF graffiti, until someone wrote it on ____.`,
      draw: 0,
      pick: 1,
      watermark: `DW`
    });
    await queryRunner.delete('black_card', {
      text: `Jack Harkness, I can't leave you alone for a minute! I turn around and you're trying to seduce ____.`,
      draw: 0,
      pick: 1,
      watermark: `DW`
    });
    await queryRunner.delete('black_card', {
      text: `In all of space and time you decide that ____ is a good choice?!`,
      draw: 0,
      pick: 1,
      watermark: `DW`
    });
    await queryRunner.delete('black_card', {
      text: `Adipose were thought to be made of fat, but are really made of ____.`,
      draw: 0,
      pick: 1,
      watermark: `DW`
    });
    await queryRunner.delete('black_card', {
      text: `I hear the next thing that will cause The Doctor to regenerate is ____.`,
      draw: 0,
      pick: 1,
      watermark: `DW`
    });
    await queryRunner.delete('black_card', {
      text: `____ was sent to save ____.`,
      draw: 0,
      pick: 2,
      watermark: `DW`
    });
    await queryRunner.delete('black_card', {
      text: `According to the Daleks, ____ is better at ____.`,
      draw: 0,
      pick: 2,
      watermark: `DW`
    });

    await queryRunner.delete('white_card', {
      text: `Tom Baker, in nothing but a scarf`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `Walking in on Jack Harkness doing your mom. And your dad.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `The buzzing noise the Sonic Screwdriver makes`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `Sharing a public restroom with a Weeping Angel`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `Just now realizing Torchwood is an anagram of Doctor Who`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `Fifty years of fanfic.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `Wanting to punch that teeny-bopper Whovian that's butthurt the new Doctor isn't in his twenties.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `The Doctor going back in time to solve a REAL problem: Twilight.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `A Doctor Who body pillow.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `The Silence`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `Drunkenly drawing tally marks on your face.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `A Rusty Cyberman`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `A shitty Doctor Who knock-knock joke.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `The Doctor having a chance encounter with a couple of 80s metalheads.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `Davros getting up on the wrong side of the bed.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `The Master, baiting the Doctor into a trap`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `A Vashta Nerada that just wants a hug.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `Wishing you could regenerate.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `Kidnapping a barely-legal woman to time travel with.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `The poor costume decisions that were the 1970s.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `Sixteen feet of scarf bondage.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `Getting so much plastic surgery you have to be framed and moisturized.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `Quitting this panel after one round because you are afraid of getting typecast.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `The Mary Jane Adventures.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `Fondling a Dalek's slippery bits.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `Air from my lungs.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `Smoking 1,000 cigarettes, just so you can sound like a Dalek when you talk.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `Slipping her the ol' plastic Mickey.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `Companion Porn.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `An acid rain shower on Skaro.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `A Sonic Screwdriver stuck on the vibrate setting.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `Pouting in a rain storm and having to take a wicked piss.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `The poor decision that is having a staring contest with a weeping angel.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `Sorry, this answer is only available in the fanfic version of Cards against Con.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `Plot holes so wide you could drive a truck through them.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `A blinged out TARDIS blasting dubstep when it is traveling.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `Rose Tyler's teeth.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `The Master singing Bad Case of Loving You.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `K-9 humping your leg.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `A bigger, bluer TARDIS.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `Steven Moffatt taking a big old dump in your Cheerios.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `Robot Anne Robinson.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `A fez caked with semen.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `A GUITARDIS`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `The Celestial Toymaker's plaything.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `Captain Jack Harkness.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `Your dyslexic friend that wants you to come watch a marathon of Doctor How.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `Fapping to Billie Piper portraying a callgirl.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `A furry writing BAD WOLF everywhere.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `Being used as a plot device by Steven Moffat.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `A Costco-sized bag of Jelly Babies.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `A global simulcast that forces Whovians to see the sunlight for the first time in ages.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `THE END OF TIME ITSELF!`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `Finding Autons oddly attractive.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `The fuck machine dungeon of the Cybermen.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `Glenn Beck convulsively puking as a brood of Daleks swarm in on him.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `River Song.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `Low-budget special effects.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `Eggs.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `Dalek porn.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `Taking a Doctor Poo.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `The big banana in your pocket.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `Opening the door of the TARDIS and leaving a deuce in the time-space continuum.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `David Tennant.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `Matt Smith.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `Christopher Eccleston.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `Siltheen farts.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `A kid in a gas mask asking if you are his mummy.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `Fish fingering your custard.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `The hideousness that is Raxacoricofallapatorious.`,
      watermark: `DW`
    });
    await queryRunner.delete('white_card', {
      text: `An Ood getting a starring role in a hentai.`,
      watermark: `DW`
    });

    await queryRunner.delete('card_set', {
      name: `[C] Doctor Who`,
      baseDeck: false,
      description: null,
      weight: 527,
      active: true
    });
  }
}
