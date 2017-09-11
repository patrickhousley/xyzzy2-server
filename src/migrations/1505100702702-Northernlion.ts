/* tslint:disable:no-non-null-assertion no-unsafe-any no-any */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Northernlion1505100702702 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const insertResult = await queryRunner.insert('card_set', {
      name: `[C] Northernlion`,
      baseDeck: false,
      description: `http://www.youtube.com/user/Northernlion`,
      weight: 502,
      active: true
    });

    await queryRunner.insert('black_card', {
      text: `____ caused Northernlion to take stupid damage.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ Is the best item in The Binding of Isaac.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ is the worst item in The Binding of Isaac.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ is/are Northernlion's worst nightmare.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ sounds like a great alternative rock band.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____: The Northernlion Story.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____? Well, I won't look a gift horse in the mouth on that one.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____. Everything else is uncivilized.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `"Hey everybody and welcome to Let's Look At ____!"`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `As always, I will ____ you next time!`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Best game of 2013? ____, of course.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `But that ____ has sailed.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Even ____ is/are better at video games than Northernlion.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Everything's coming up ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Finding something like ____ would turn this run around.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Fuck the haters, this is ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Get in my ____ zone.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `How do you get your dog to stop humping your leg?`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I can do ____ and die immediately afterward.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I don't even see ____ anymore; all I see are blondes, brunettes, redheads...`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I'm in the permanent ____ state.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `If sloth ____ are wrong I don’t want to be right.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Invaded the world of ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `It's ____, ya dangus!`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `JSmithOTI: Total ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Legend has it, the Thug of Porn was arrested for ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Let's Look At: ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Northernlion's latest novelty Twitter account is @____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `More like the Duke of ____, right?`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `No one man should have all that ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Northernlion has been facing ridicule for calling ____ a rogue-like.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Northernlion always forgets the name of ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Northernlion's refusal to Let's Play ____ was probably a good call.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Of all the things that Ryan and Josh have in common, they bond together through their mutual love of ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Oh god, I can't believe we ate ____ at PAX.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `One thing Northernlion was right about was ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Only in Korea can you see ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Praise the ____!`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Recently, Northernlion has felt woefully insecure due to ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Roguelike? How about ___-like.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Sometimes, a man's just gotta ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The hero of the stream was ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The stream was going well until ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The Youtube chat proved ineffective, so instead we had to communicate via ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____? It's a DLC item.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `This new game is an interesting ____-like-like.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `We're rolling in ____!`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Whenever I ___, take a drink.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Today's trivia topic is ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What do you give to the CEO of Youtube as a gift?`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The only way NL is ever going to make it to Hell in Spelunky is by using ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Welcome back to The Binding of Isaac. Today's challenge run will be based on  ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Well there's nothing wrong with ____ by any stretch of the imagination.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I'd sacrifice ____ at the Altar.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Fox would still be here if not for ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The Holy Trinity: ____, ____, and ____!`,
      draw: 2,
      pick: 3,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I wasn't even that drunk! I just had some ____, ____, and ____.`,
      draw: 2,
      pick: 3,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ was indicted on account of ____.`,
      draw: 0,
      pick: 2,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____: The ____ Story.`,
      draw: 0,
      pick: 2,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Hello everybody, welcome to a new episode of ____ plays ____.`,
      draw: 0,
      pick: 2,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I beat Blue Baby with only ____ and ____!`,
      draw: 0,
      pick: 2,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Northernlion has alienated fans of ____ by calling them ____.`,
      draw: 0,
      pick: 2,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Northernlion was fired from his teaching job and had to flee South Korea after an incident involving  ____ and ____.`,
      draw: 0,
      pick: 2,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `When I was a kid, all we had in Lunchables were three ____ and ____.`,
      draw: 0,
      pick: 2,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `On its last dying breath, ____ sent out a cry for help. A bunch of ____ heard the cry.`,
      draw: 0,
      pick: 2,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Northernlion's doctor diagnosed him today with ____, an unfortunate condition that would lead to ____.`,
      draw: 0,
      pick: 2,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `And now we're going to be fighting ____ on ____.`,
      draw: 0,
      pick: 2,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Dang it, ____!`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ was full of leeches.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Pimp your ___!`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `My apologies to the ____ estate.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What interrupted the #NLSS?`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Travel by ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The stream broke when Ryuka stepped on the ____ key.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Say that to my face one more time and I'll start ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Oh my god, he's using ____ magic!`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Krazy Mike lost to ____!`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What would you do if Ohm really did just die?`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ has invaded!`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `We're having technical difficulties due to ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `JSmithOTI is referred to as a Scumlord, but his friends call him ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Ohmwrecker is known for his MLG online play. What people don't know is that he's also MLG at ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Follow MichaelALFox on Twitter and you can see pictures of ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `After Mars, ____ is the next furthest planet from the sun.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What would Ohm do?`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The next movie reading will be of ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `How did Northernlion unite Scotland?`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Green loves the new Paranautical Activity item ____, but keeps comparing it to the crossbow.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ is really essential to completing the game.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `My channel is youtube.com/____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Northernlion's cat Ryuka is known for ____ while he records.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What gave Ohmwrecker his gaming powers?`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Hello anybody, I am ____Patrol.`,
      draw: 0,
      pick: 1,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I have ____, can you ____ me?`,
      draw: 0,
      pick: 2,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____! Get off the ____!`,
      draw: 0,
      pick: 2,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `My name is ____ and today we'll be checking out ____.`,
      draw: 0,
      pick: 2,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `It's true that Green9090 is ____, but we must all admit that Ohm is better at ____`,
      draw: 0,
      pick: 2,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `That's the way ____ did it, that's the way ____ does it, and it''s worked out pretty well so far.`,
      draw: 0,
      pick: 2,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Today on Crusader Kings 2, NL plays King ____ the ____.`,
      draw: 0,
      pick: 2,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `After winning yet another race, Josh made ____ tweet about ____.`,
      draw: 0,
      pick: 2,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `This time on ____ vs. ____, we're playing ____.`,
      draw: 2,
      pick: 3,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });

    await queryRunner.insert('white_card', {
      text: `Steven Docking.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `/r/Letsplay.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `/r/sloths.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `#Krazymike.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Bane impression.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A big wet pink laser sword.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A brief moment of aptitude.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A bunch of jabronies.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A butt egg.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A delicious baby.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A docking sleeve.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A little bit of added defense.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A street cleaning simulator.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An old man carrying a box of glass down stairs.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Anything from http://www.thenorthernlionstory.com/.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Beating it on camera.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Being terrible at games.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bejeweed.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Big Hat Logan.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Blondes, brunettes, and redheads.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Blue Baby.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `BOOYAH!`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bow to your sensei!`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Brimstone.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Butt meat.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Checking the wiki.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cheeseysaurus Rex.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Classic Northernlion.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Coming on Milhouse.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Corner fucking.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Crazy Mike.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cross-dimensional fucking.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dark holes.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Detroit Dock City.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Docking.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `DockLeeSmile.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dung pies.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dying in a hang gliding accident. `,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Excuse me?`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Eyeless ooze guys.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Falling down the stairs with a bag full of glass.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fat Robert Downey Jr.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Feline eugenics.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fuck tables.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fucking during a Diphtheria epidemic.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Garglebutts.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting corner fucked.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting wood.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Greed.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Harry Potter and the Chamber of a Salty Surprise.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hookers, blow, and JSmithOTI.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Infomercials.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `John Madden.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `JSmithOTI.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Kate's Mario Party skills.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Krazy Mike doing a backflip, throwing a talking nut, and chanting "Hello!"`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Krazy Mike.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Like you, but not rogue-like you.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Losing to Monstro after 300 hours of experience.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The backroom casting couch.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The fuck zone.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Losing to Quelaag 12 times in 72 minutes.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Maple syrup.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Michael Caine's spider collection.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Michaelalfox.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Michaelalfox's love of cheese.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Michaelalfox's muscles.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A mile-long penis.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Milking the poop for red hearts.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mom's knife.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mom's pad.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Monty.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A motherfucker.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Motherfucking.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nipple hair.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Northernlion.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Northernlion's cancelled Assassin's Creed II let's play.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Northernlion's coffee maker.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Northernlion's hair.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Northernlion's pooping album.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Not Satan, I promise.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Novelty Twitter accounts.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Olmec.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Permanent Polaroid invincibility.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Poison Mushroom.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Poutine-induced diabetes.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pretending youtube let's playing is a real job.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Projectile annoyance.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Putting your balls in her butt.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Puzzle platformers with rogue-like elements.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Quelaag's Furysword.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Reddit.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Residue.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `RockLeeSmile.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Rogue-like likes.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Roll Fizzlebeef.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ronald McDonald.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sex.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Shit happens.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Shooting the poop.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Solaire of Astora.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `South Korea.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Stream lag.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Stupid damage.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A tactical backflip.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Northernlion Story.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Whispering sweet nothings into your rear.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The notorious Grey's Anatomy let's play.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Binding of Isaac wiki.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Thornforg.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `When you fuck a dog in the ass and it shits all over your dick.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The USS Buttfucker.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Vaginal silk worms.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Anor Londo Archers.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `YouTube.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The saga of Krazy Mike.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A urination break.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The World Docking Champion.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Type-C Tetris music.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Thug of Porn.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `That damned HDPVR.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The NLSS: drawing unwanted attention from the actual docking community.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Patrick Dempsey thrusting violently into my midsection.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Well, what is it?`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Four Horsemen of The Apocolypse.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Talking nuts.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Ozymandias head.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A total scumbag.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Striking fear into the hearts of your enemies.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Using the tears of an abused toddler to conquer my foes.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A beef swarm.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A butt pooping upwards an egg.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `JSmith's salty nuts.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `#ShotsFired.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Banana bread.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Butterjail.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A DraculaFetus animation.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A profile pic that looks like a dick and balls.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Spy Party racism.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The ghost of Ohmwrecker.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Shooting the black guy.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ohm's mindgames.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `DOTA 2.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Magic: The Gathering.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A failed challenge run.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Setting the world on fire.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pot magic.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Josh's washing machine.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dang it, Bobby!`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Up in the air like a George Clooney movie.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A lemon mishap.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `This cat, I swear to god.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ohmwrecker.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `youtube.com/Ohmwrecker.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Drinkable fire.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ohmsdrawings.tumblr.com.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Soul level 1 invasions.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ryuka.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The blue candle.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `JSmith's laundry.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mount Your Friends: Docking Edition.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Childlike bukakke.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A water supply full of leeches.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Travelling by bones.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `AlpacaPatrol.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Zen.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Green9090.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `#MikeBithell.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `RedPandaGamer.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ohm, our god.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lara Croft.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.delete('black_card', {
      text: `____ caused Northernlion to take stupid damage.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `____ Is the best item in The Binding of Isaac.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `____ is the worst item in The Binding of Isaac.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `____ is/are Northernlion's worst nightmare.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `____ sounds like a great alternative rock band.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `____: The Northernlion Story.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `____? Well, I won't look a gift horse in the mouth on that one.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `____. Everything else is uncivilized.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `"Hey everybody and welcome to Let's Look At ____!"`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `As always, I will ____ you next time!`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `Best game of 2013? ____, of course.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `But that ____ has sailed.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `Even ____ is/are better at video games than Northernlion.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `Everything's coming up ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `Finding something like ____ would turn this run around.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `Fuck the haters, this is ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `Get in my ____ zone.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `How do you get your dog to stop humping your leg?`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `I can do ____ and die immediately afterward.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `I don't even see ____ anymore; all I see are blondes, brunettes, redheads...`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `I'm in the permanent ____ state.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `If sloth ____ are wrong I don’t want to be right.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `Invaded the world of ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `It's ____, ya dangus!`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `JSmithOTI: Total ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `Legend has it, the Thug of Porn was arrested for ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `Let's Look At: ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `Northernlion's latest novelty Twitter account is @____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `More like the Duke of ____, right?`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `No one man should have all that ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `Northernlion has been facing ridicule for calling ____ a rogue-like.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `Northernlion always forgets the name of ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `Northernlion's refusal to Let's Play ____ was probably a good call.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `Of all the things that Ryan and Josh have in common, they bond together through their mutual love of ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `Oh god, I can't believe we ate ____ at PAX.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `One thing Northernlion was right about was ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `Only in Korea can you see ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `Praise the ____!`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `Recently, Northernlion has felt woefully insecure due to ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `Roguelike? How about ___-like.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `Sometimes, a man's just gotta ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `The hero of the stream was ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `The stream was going well until ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `The Youtube chat proved ineffective, so instead we had to communicate via ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `____? It's a DLC item.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `This new game is an interesting ____-like-like.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `We're rolling in ____!`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `Whenever I ___, take a drink.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `Today's trivia topic is ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `What do you give to the CEO of Youtube as a gift?`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `The only way NL is ever going to make it to Hell in Spelunky is by using ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `Welcome back to The Binding of Isaac. Today's challenge run will be based on  ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `Well there's nothing wrong with ____ by any stretch of the imagination.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `I'd sacrifice ____ at the Altar.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `Fox would still be here if not for ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `The Holy Trinity: ____, ____, and ____!`,
      draw: 2,
      pick: 3,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `I wasn't even that drunk! I just had some ____, ____, and ____.`,
      draw: 2,
      pick: 3,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `____ was indicted on account of ____.`,
      draw: 0,
      pick: 2,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `____: The ____ Story.`,
      draw: 0,
      pick: 2,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `Hello everybody, welcome to a new episode of ____ plays ____.`,
      draw: 0,
      pick: 2,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `I beat Blue Baby with only ____ and ____!`,
      draw: 0,
      pick: 2,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `Northernlion has alienated fans of ____ by calling them ____.`,
      draw: 0,
      pick: 2,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `Northernlion was fired from his teaching job and had to flee South Korea after an incident involving  ____ and ____.`,
      draw: 0,
      pick: 2,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `When I was a kid, all we had in Lunchables were three ____ and ____.`,
      draw: 0,
      pick: 2,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `On its last dying breath, ____ sent out a cry for help. A bunch of ____ heard the cry.`,
      draw: 0,
      pick: 2,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `Northernlion's doctor diagnosed him today with ____, an unfortunate condition that would lead to ____.`,
      draw: 0,
      pick: 2,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `And now we're going to be fighting ____ on ____.`,
      draw: 0,
      pick: 2,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `Dang it, ____!`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `____ was full of leeches.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `Pimp your ___!`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `My apologies to the ____ estate.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `What interrupted the #NLSS?`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `Travel by ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `The stream broke when Ryuka stepped on the ____ key.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `Say that to my face one more time and I'll start ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `Oh my god, he's using ____ magic!`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `Krazy Mike lost to ____!`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `What would you do if Ohm really did just die?`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `____ has invaded!`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `We're having technical difficulties due to ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `JSmithOTI is referred to as a Scumlord, but his friends call him ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `Ohmwrecker is known for his MLG online play. What people don't know is that he's also MLG at ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `Follow MichaelALFox on Twitter and you can see pictures of ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `After Mars, ____ is the next furthest planet from the sun.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `What would Ohm do?`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `The next movie reading will be of ____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `How did Northernlion unite Scotland?`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `Green loves the new Paranautical Activity item ____, but keeps comparing it to the crossbow.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `____ is really essential to completing the game.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `My channel is youtube.com/____.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `Northernlion's cat Ryuka is known for ____ while he records.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `What gave Ohmwrecker his gaming powers?`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `Hello anybody, I am ____Patrol.`,
      draw: 0,
      pick: 1,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `I have ____, can you ____ me?`,
      draw: 0,
      pick: 2,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `____! Get off the ____!`,
      draw: 0,
      pick: 2,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `My name is ____ and today we'll be checking out ____.`,
      draw: 0,
      pick: 2,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `It's true that Green9090 is ____, but we must all admit that Ohm is better at ____`,
      draw: 0,
      pick: 2,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `That's the way ____ did it, that's the way ____ does it, and it''s worked out pretty well so far.`,
      draw: 0,
      pick: 2,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `Today on Crusader Kings 2, NL plays King ____ the ____.`,
      draw: 0,
      pick: 2,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `After winning yet another race, Josh made ____ tweet about ____.`,
      draw: 0,
      pick: 2,
      watermark: `NL`
    });
    await queryRunner.delete('black_card', {
      text: `This time on ____ vs. ____, we're playing ____.`,
      draw: 2,
      pick: 3,
      watermark: `NL`
    });

    await queryRunner.delete('white_card', {
      text: `Steven Docking.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `/r/Letsplay.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `/r/sloths.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `#Krazymike.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `A Bane impression.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `A big wet pink laser sword.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `A brief moment of aptitude.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `A bunch of jabronies.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `A butt egg.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `A delicious baby.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `A docking sleeve.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `A little bit of added defense.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `A street cleaning simulator.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `An old man carrying a box of glass down stairs.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Anything from http://www.thenorthernlionstory.com/.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Beating it on camera.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Being terrible at games.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Bejeweed.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Big Hat Logan.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Blondes, brunettes, and redheads.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Blue Baby.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `BOOYAH!`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Bow to your sensei!`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Brimstone.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Butt meat.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Checking the wiki.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Cheeseysaurus Rex.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Classic Northernlion.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Coming on Milhouse.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Corner fucking.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Crazy Mike.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Cross-dimensional fucking.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Dark holes.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Detroit Dock City.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Docking.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `DockLeeSmile.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Dung pies.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Dying in a hang gliding accident. `,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Excuse me?`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Eyeless ooze guys.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Falling down the stairs with a bag full of glass.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Fat Robert Downey Jr.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Feline eugenics.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Fuck tables.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Fucking during a Diphtheria epidemic.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Garglebutts.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Getting corner fucked.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Getting wood.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Greed.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Harry Potter and the Chamber of a Salty Surprise.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Hookers, blow, and JSmithOTI.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Infomercials.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `John Madden.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `JSmithOTI.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Kate's Mario Party skills.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Krazy Mike doing a backflip, throwing a talking nut, and chanting "Hello!"`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Krazy Mike.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Like you, but not rogue-like you.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Losing to Monstro after 300 hours of experience.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `The backroom casting couch.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `The fuck zone.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Losing to Quelaag 12 times in 72 minutes.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Maple syrup.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Michael Caine's spider collection.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Michaelalfox.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Michaelalfox's love of cheese.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Michaelalfox's muscles.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `A mile-long penis.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Milking the poop for red hearts.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Mom's knife.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Mom's pad.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Monty.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `A motherfucker.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Motherfucking.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Nipple hair.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Northernlion.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Northernlion's cancelled Assassin's Creed II let's play.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Northernlion's coffee maker.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Northernlion's hair.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Northernlion's pooping album.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Not Satan, I promise.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Novelty Twitter accounts.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Olmec.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Permanent Polaroid invincibility.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Poison Mushroom.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Poutine-induced diabetes.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Pretending youtube let's playing is a real job.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Projectile annoyance.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Putting your balls in her butt.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Puzzle platformers with rogue-like elements.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Quelaag's Furysword.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Reddit.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Residue.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `RockLeeSmile.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Rogue-like likes.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Roll Fizzlebeef.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Ronald McDonald.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Sex.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Shit happens.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Shooting the poop.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Solaire of Astora.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `South Korea.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Stream lag.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Stupid damage.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `A tactical backflip.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `The Northernlion Story.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Whispering sweet nothings into your rear.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `The notorious Grey's Anatomy let's play.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `The Binding of Isaac wiki.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Thornforg.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `When you fuck a dog in the ass and it shits all over your dick.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `The USS Buttfucker.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Vaginal silk worms.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `The Anor Londo Archers.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `YouTube.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `The saga of Krazy Mike.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `A urination break.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `The World Docking Champion.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Type-C Tetris music.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `The Thug of Porn.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `That damned HDPVR.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `The NLSS: drawing unwanted attention from the actual docking community.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Patrick Dempsey thrusting violently into my midsection.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Well, what is it?`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `The Four Horsemen of The Apocolypse.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Talking nuts.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `The Ozymandias head.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `A total scumbag.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Striking fear into the hearts of your enemies.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Using the tears of an abused toddler to conquer my foes.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `A beef swarm.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `A butt pooping upwards an egg.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `JSmith's salty nuts.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `#ShotsFired.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Banana bread.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Butterjail.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `A DraculaFetus animation.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `A profile pic that looks like a dick and balls.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Spy Party racism.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `The ghost of Ohmwrecker.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Shooting the black guy.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Ohm's mindgames.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `DOTA 2.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Magic: The Gathering.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `A failed challenge run.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Setting the world on fire.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Pot magic.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Josh's washing machine.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Dang it, Bobby!`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Up in the air like a George Clooney movie.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `A lemon mishap.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `This cat, I swear to god.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Ohmwrecker.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `youtube.com/Ohmwrecker.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Drinkable fire.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Ohmsdrawings.tumblr.com.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Soul level 1 invasions.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Ryuka.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `The blue candle.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `JSmith's laundry.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Mount Your Friends: Docking Edition.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Childlike bukakke.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `A water supply full of leeches.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Travelling by bones.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `AlpacaPatrol.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Zen.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Green9090.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `#MikeBithell.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `RedPandaGamer.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Ohm, our god.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Lara Croft.`,
      watermark: `NL`
    });

    await queryRunner.delete('card_set', {
      name: `[C] Northernlion`,
      baseDeck: false,
      description: `http://www.youtube.com/user/Northernlion`,
      weight: 502,
      active: true
    });
  }
}
