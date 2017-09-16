/* tslint:disable:no-non-null-assertion no-unsafe-any no-any */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class RoosterTeeth1505595593412 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const insertResult = await queryRunner.insert('card_set', {
      name: `[C] Rooster Teeth`,
      baseDeck: false,
      description: null,
      weight: 519,
      active: true
    });

    await queryRunner.insert('black_card', {
      text: `____ is probably a Venusaur kind of guy.`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ is the greatest Canadian.`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ is the worst on the Podcast.`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____. That's top.`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `After getting wasted at PAX, Burnie announced that "I am ____!"`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Barbara sucks ____.`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Close up of my ____.`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Come to Fort ____!`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Describe yourself in one word/phrase.`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Detective ____ is down!`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Does our house say "We love ____?"`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Dude, I got sixteen ____!`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Fight, fight, fight, ____?`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Fuck it, I mean ____, right?`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I'ma smother you in my ____!`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `If Jack was frog and you kissed him, what would he turn into?`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `If you could fuck anyone in the world, who would you choose?`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `If you could have any superpower, what would it be?`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `If you were allowed to do one illegal thing, what would it be? `,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `It's a ____ out there.`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `It's not my fault. Somebody put ____ in my way.`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Joel plays ____.`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Let's do ____ again! This is fun!`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Lindsay could fuck up ____.`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `LLLLLLLLLLLLLET'S ____!`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `My ____ is trying to die.`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `On tonight's Let's Play, the AH crew plays ____.`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `People like ____.`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `RT Recap, featuring ____!`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Shout out to ____!`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Shout out to my mom. Called my Teddy Bear ____.`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `So, I was just walking along, until suddenly ____ came along and attacked me.`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Thanks to ____ for this week's theme song.`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The next RvB cameo will be voiced by ____.`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `They questioned Ryan's sanity after finding ____ in his house.`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `This week on AHWU, ____.`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `This week on Immersion, we are going to test ____.`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What are fire hydrants called in England?`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What does Ryan's kid listen to?`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What is Game Night?`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What is the meaning of life?`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What is the saddest thing you've ever seen?`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What is the worst thing anyone could say in front of the police?`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What is your biggest feature?`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What is your favorite book?`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What is your mating call?`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What makes Caboose angry?`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What makes Michael the angriest?`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What mysteries lie beyond Jack's beard? `,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What would be your chosen catchphrase?`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What's in Gavin's desk?`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Where are we going for lunch?`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Where does Ray belong?`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Who has a fake Internet girlfriend?`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Why are we here?`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Why is Geoff cool?`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Why was Michael screaming at Gavin?`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Would you guys still like me if my name was ____?`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `You threw it against the wall like a ____!`,
      draw: 0,
      pick: 1,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ is ____ as dicks.`,
      draw: 0,
      pick: 2,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ is the best ____ ever. Of all time.`,
      draw: 0,
      pick: 2,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ wins! ____ is a horse!`,
      draw: 0,
      pick: 2,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `If you got $1,000,000 per week, would you ____, but in the next day, you'd have to ____?`,
      draw: 0,
      pick: 2,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `My name is ____, and I hate ____!`,
      draw: 0,
      pick: 2,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `No one in the office expected the bromance between ____ and ____.`,
      draw: 0,
      pick: 2,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Select two cards to create your team name.`,
      draw: 0,
      pick: 2,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `This week on VS, ____ challenges ____ to a game of ____.`,
      draw: 2,
      pick: 3,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The war's over. We're holding a parade in ____'s honor. ____ drives the float, and ____ is in charge of confetti.`,
      draw: 2,
      pick: 3,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Why are there six ____ when there are only four ____?`,
      draw: 0,
      pick: 2,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });

    await queryRunner.insert('white_card', {
      text: `Slo Mo Guys.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Man-Gobbler, the turkey bestiality movie.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `RoosterTeeth.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Michael Jones.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Gavin Free.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Surgeon Simulator 2013.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ray Narvaez, Jr.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Burnie Burns.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Geoff Lazer Ramsey.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Jack Pattillo.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ryan Haywood.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Gus Sorola.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The cardboard cutout of Gus.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Joel Heyman.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Going cakeless.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Headlight fluid.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Playing Hitler twice.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sarge.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lopez la Pesado.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Franklin Delano Donut.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dexter Grif.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dick Simmons.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Agent Washington.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Andy the bomb.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Picking up chicks in a tank.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Michael J. Caboose.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sheila the tank.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Leonard Church.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lavernius Tucker.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Agent Texas / Allison.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Omega / O'Malley.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Agent Maine / the Meta.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Frank "Doc" DuFresne.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Screen looking.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A wet paper towel.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Minecraft.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `MOGAR!`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `X-Ray and Vav.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `#DantheMan.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Joe the cat.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pongo.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Soggy bread.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Rage Quit.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Achievement Hunter.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Team-killing fucktards.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Calling dibs on a spaceship.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sarge's funeral.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Camping, as a legitimate strategy.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Epsilon's laser face.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `MOTHERFUCKING TRIPLE SPIKES!`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Because people like grapes.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Upside-down Kerry.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ray's sombrero.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Doing a dig-down.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mark Nutt.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `AHWU.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Throwing shit at the AHWU announcer.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Red vs. Blue.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Geoff's cancer-curing laugh.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Tower of Pimps.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Frienderman.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Beating a man to death with his own skull.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fighting to the death on pigback.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `RWBY.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `RT Shorts.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `RT Animated Adventures.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mega64.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Immersion.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Reaching a billion total views on YouTube.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Doing a double barrel roll and immediately running someone over.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Ray-Cam masturbation moment.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tackling Gavin to stop him from winning.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Losing an hour's worth of footage to a brief blackout.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fails of the Weak.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Achievement HORSE.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Trials PIG.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Slapping the controller out of a competitor's hands.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cockbites.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Achievement City.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Two bases in the middle of a box canyon. Whoop-dee-fuckin'-doo.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Blood Gulch.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Parkour.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Faffy Waffle.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Something that is top.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A plan that involves Grif dying.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Using CPR to treat a bullet wound to the head.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Front flip for style!`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Trying to eat a five-pound gummy bear in one sitting.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `RTX.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Randy Newman.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Slenderman.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The R&R Connection.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Internet Box.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Performing surgery in space.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Jack's dick.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Crev.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Team Nice Dynamite.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Team Lads.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Team Gents.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Plan G.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Team Neighborhood Watch.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ray winning.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Edgar the cow.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Gavin's Trophy Room of Victory.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Jack's beard.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Being trapped in a dog cage.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Geoff's hobo beard.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Killing Gavin.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Discovering your long-lost Creeper parents.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A megalomaniac with a beard.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ray's douche-cut.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The adventures of Batman and Randy Newman.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Because they'd like it.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Knobs.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Gubbins.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Meatspin.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Flynt Coal.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tupperware.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A miniature Tower of Pimps.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Giving up and building a house.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Gavin's dick.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Wearing your headphones backwards during a podcast week after week.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Flicking the bean.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting minged up your quelch.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Grand Theft Auto IV.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ray's wet sponge.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bankrupting your company over a crane game.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A bag of dicks.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `ENDERMAN!!!`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lightish red.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `In denial.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Enwrong.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Papa BrownMan.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Caleb's house.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Evil Ryan.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Randy Savage.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `RT Confessions.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Two dumb cunts.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Smegpot.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Guffpap.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Launching dump trucks off an unfinished bridge.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Because bitches ain't shit.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Gavino.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Monoray.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Montages no one will watch.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A gay cave. A gayve.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A squid orgy.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting boned.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `300,000 Gamerscore.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Team Magnum Dong.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lindsay Tuggey.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Barbara Dunkelman.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mavin slash fiction.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Caleb Denecour.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Monty Oum.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.delete('black_card', {
      text: `____ is probably a Venusaur kind of guy.`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `____ is the greatest Canadian.`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `____ is the worst on the Podcast.`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `____. That's top.`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `After getting wasted at PAX, Burnie announced that "I am ____!"`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `Barbara sucks ____.`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `Close up of my ____.`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `Come to Fort ____!`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `Describe yourself in one word/phrase.`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `Detective ____ is down!`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `Does our house say "We love ____?"`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `Dude, I got sixteen ____!`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `Fight, fight, fight, ____?`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `Fuck it, I mean ____, right?`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `I'ma smother you in my ____!`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `If Jack was frog and you kissed him, what would he turn into?`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `If you could fuck anyone in the world, who would you choose?`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `If you could have any superpower, what would it be?`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `If you were allowed to do one illegal thing, what would it be? `,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `It's a ____ out there.`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `It's not my fault. Somebody put ____ in my way.`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `Joel plays ____.`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `Let's do ____ again! This is fun!`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `Lindsay could fuck up ____.`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `LLLLLLLLLLLLLET'S ____!`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `My ____ is trying to die.`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `On tonight's Let's Play, the AH crew plays ____.`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `People like ____.`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `RT Recap, featuring ____!`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `Shout out to ____!`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `Shout out to my mom. Called my Teddy Bear ____.`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `So, I was just walking along, until suddenly ____ came along and attacked me.`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `Thanks to ____ for this week's theme song.`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `The next RvB cameo will be voiced by ____.`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `They questioned Ryan's sanity after finding ____ in his house.`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `This week on AHWU, ____.`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `This week on Immersion, we are going to test ____.`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `What are fire hydrants called in England?`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `What does Ryan's kid listen to?`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `What is Game Night?`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `What is the meaning of life?`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `What is the saddest thing you've ever seen?`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `What is the worst thing anyone could say in front of the police?`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `What is your biggest feature?`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `What is your favorite book?`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `What is your mating call?`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `What makes Caboose angry?`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `What makes Michael the angriest?`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `What mysteries lie beyond Jack's beard? `,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `What would be your chosen catchphrase?`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `What's in Gavin's desk?`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `Where are we going for lunch?`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `Where does Ray belong?`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `Who has a fake Internet girlfriend?`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `Why are we here?`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `Why is Geoff cool?`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `Why was Michael screaming at Gavin?`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `Would you guys still like me if my name was ____?`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `You threw it against the wall like a ____!`,
      draw: 0,
      pick: 1,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `____ is ____ as dicks.`,
      draw: 0,
      pick: 2,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `____ is the best ____ ever. Of all time.`,
      draw: 0,
      pick: 2,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `____ wins! ____ is a horse!`,
      draw: 0,
      pick: 2,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `If you got $1,000,000 per week, would you ____, but in the next day, you'd have to ____?`,
      draw: 0,
      pick: 2,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `My name is ____, and I hate ____!`,
      draw: 0,
      pick: 2,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `No one in the office expected the bromance between ____ and ____.`,
      draw: 0,
      pick: 2,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `Select two cards to create your team name.`,
      draw: 0,
      pick: 2,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `This week on VS, ____ challenges ____ to a game of ____.`,
      draw: 2,
      pick: 3,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `The war's over. We're holding a parade in ____'s honor. ____ drives the float, and ____ is in charge of confetti.`,
      draw: 2,
      pick: 3,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `Why are there six ____ when there are only four ____?`,
      draw: 0,
      pick: 2,
      watermark: `RT`
    });

    await queryRunner.delete('white_card', {
      text: `Slo Mo Guys.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Man-Gobbler, the turkey bestiality movie.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `RoosterTeeth.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Michael Jones.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Gavin Free.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Surgeon Simulator 2013.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Ray Narvaez, Jr.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Burnie Burns.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Geoff Lazer Ramsey.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Jack Pattillo.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Ryan Haywood.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Gus Sorola.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `The cardboard cutout of Gus.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Joel Heyman.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Going cakeless.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Headlight fluid.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Playing Hitler twice.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Sarge.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Lopez la Pesado.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Franklin Delano Donut.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Dexter Grif.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Dick Simmons.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Agent Washington.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Andy the bomb.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Picking up chicks in a tank.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Michael J. Caboose.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Sheila the tank.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Leonard Church.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Lavernius Tucker.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Agent Texas / Allison.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Omega / O'Malley.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Agent Maine / the Meta.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Frank "Doc" DuFresne.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Screen looking.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `A wet paper towel.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Minecraft.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `MOGAR!`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `X-Ray and Vav.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `#DantheMan.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Joe the cat.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Pongo.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Soggy bread.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Rage Quit.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Achievement Hunter.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Team-killing fucktards.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Calling dibs on a spaceship.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Sarge's funeral.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Camping, as a legitimate strategy.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Epsilon's laser face.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `MOTHERFUCKING TRIPLE SPIKES!`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Because people like grapes.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Upside-down Kerry.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Ray's sombrero.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Doing a dig-down.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Mark Nutt.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `AHWU.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Throwing shit at the AHWU announcer.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Red vs. Blue.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Geoff's cancer-curing laugh.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `The Tower of Pimps.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `The Frienderman.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Beating a man to death with his own skull.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Fighting to the death on pigback.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `RWBY.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `RT Shorts.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `RT Animated Adventures.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Mega64.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Immersion.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Reaching a billion total views on YouTube.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Doing a double barrel roll and immediately running someone over.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `A Ray-Cam masturbation moment.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Tackling Gavin to stop him from winning.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Losing an hour's worth of footage to a brief blackout.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Fails of the Weak.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Achievement HORSE.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Trials PIG.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Slapping the controller out of a competitor's hands.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Cockbites.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Achievement City.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Two bases in the middle of a box canyon. Whoop-dee-fuckin'-doo.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Blood Gulch.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Parkour.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Faffy Waffle.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Something that is top.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `A plan that involves Grif dying.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Using CPR to treat a bullet wound to the head.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Front flip for style!`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Trying to eat a five-pound gummy bear in one sitting.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `RTX.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Randy Newman.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Slenderman.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `The R&R Connection.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `The Internet Box.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Performing surgery in space.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Jack's dick.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `The Crev.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Team Nice Dynamite.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Team Lads.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Team Gents.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Plan G.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Team Neighborhood Watch.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Ray winning.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Edgar the cow.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Gavin's Trophy Room of Victory.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Jack's beard.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Being trapped in a dog cage.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Geoff's hobo beard.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Killing Gavin.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Discovering your long-lost Creeper parents.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `A megalomaniac with a beard.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Ray's douche-cut.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `The adventures of Batman and Randy Newman.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Because they'd like it.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Knobs.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Gubbins.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Meatspin.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Flynt Coal.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Tupperware.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `A miniature Tower of Pimps.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Giving up and building a house.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Gavin's dick.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Wearing your headphones backwards during a podcast week after week.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Flicking the bean.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Getting minged up your quelch.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Grand Theft Auto IV.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Ray's wet sponge.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Bankrupting your company over a crane game.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `A bag of dicks.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `ENDERMAN!!!`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Lightish red.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `In denial.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Enwrong.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Papa BrownMan.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Caleb's house.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Evil Ryan.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Randy Savage.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `RT Confessions.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Two dumb cunts.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Smegpot.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Guffpap.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Launching dump trucks off an unfinished bridge.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Because bitches ain't shit.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Gavino.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Monoray.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Montages no one will watch.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `A gay cave. A gayve.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `A squid orgy.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Getting boned.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `300,000 Gamerscore.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Team Magnum Dong.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Lindsay Tuggey.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Barbara Dunkelman.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Mavin slash fiction.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Caleb Denecour.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `Monty Oum.`,
      watermark: `RT`
    });

    await queryRunner.delete('card_set', {
      name: `[C] Rooster Teeth`,
      baseDeck: false,
      description: null,
      weight: 519,
      active: true
    });
  }
}
