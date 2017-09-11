/* tslint:disable:no-non-null-assertion no-unsafe-any no-any */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class AdminPicks1505099665952 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const insertResult = await queryRunner.insert('card_set', {
      name: `[C] Admin's Picks`,
      baseDeck: false,
      description: `Custom cards that I think are particularly fitting.`,
      weight: 100,
      active: true
    });

    await queryRunner.insert('black_card', {
      text: `What is the next great Kickstarter project?`,
      draw: 0,
      pick: 1,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Praise ____!`,
      draw: 0,
      pick: 1,
      watermark: `RS`,
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
      text: `Cunnilungus and psychiatry brought us to ____.`,
      draw: 0,
      pick: 1,
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
      text: `What can you always find in between the couch cushions?`,
      draw: 0,
      pick: 1,
      watermark: `RS`,
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
      text: `A wild ____ appeared! It used ____!`,
      draw: 0,
      pick: 2,
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
      text: `____ is the name of my ____ cover band.`,
      draw: 0,
      pick: 2,
      watermark: `SG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Alcoholic games of Clue&reg; lead to ____.`,
      draw: 0,
      pick: 1,
      watermark: `SG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____.tumblr.com`,
      draw: 0,
      pick: 1,
      watermark: `SG`,
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
    await queryRunner.insert('black_card', {
      text: `____ sounds like a great alternative rock band.`,
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
      text: `Best game of 2013? ____, of course.`,
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
      text: `Oh god, I can't believe we ate ____ at PAX.`,
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
      text: `____? It's a DLC item.`,
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
      text: `My life for ____!`,
      draw: 0,
      pick: 1,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Who let the dogs out?`,
      draw: 0,
      pick: 1,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In his next movie, Will Smith saves the world from ____.`,
      draw: 0,
      pick: 1,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `When North Korea gets ____, it will be the end of the world.`,
      draw: 0,
      pick: 1,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Plan a three course meal.`,
      draw: 2,
      pick: 3,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Tastes like ____.`,
      draw: 0,
      pick: 1,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ and ____ are the new hot couple.`,
      draw: 0,
      pick: 2,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What will Xyzzy take over the world with?`,
      draw: 0,
      pick: 1,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Welcome to my secret lair on ____.`,
      draw: 0,
      pick: 1,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Dustin Browder demands more ____ in StarCraft&reg;.`,
      draw: 0,
      pick: 1,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I write slash fanfiction pairing ____ with ____.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Ladies and gentlemen, I give you ____... COVERED IN BEES!!!`,
      draw: 0,
      pick: 1,
      watermark: `ANX1`,
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
      text: `At first I couldn't understand ____, but now it's my biggest kink.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Long story short, I ended up with ____ in my ass.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Who knew I'd be able to make a living off of ____?`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `It's difficult to explain to friends and family why I know so much about ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I can't believe I spent most of my paycheck on ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Hey guys, check out my ____ montage!`,
      draw: 0,
      pick: 1,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____! You know, for kids.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I watch movies just to see if I can find a Big Lipped ____ Moment.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `No one wants to see your ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `OH MY GOD THIS IS THE GREATEST ____ I'VE EVER SEEN IN MY LIFE!`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What doesn't work that way?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What the fuck is wrong with you?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ is camping my lane.`,
      draw: 0,
      pick: 1,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Vegeta, what does the scouter say?`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Who the hell do you think I am?!`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `On the next episode of Dragon Ball Z, Goku has a fierce battle with ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `So wait, ____ was actually ____? Wow, I didn't see that one coming!`,
      draw: 0,
      pick: 2,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Real men watch ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Whenever I'm splashed with cold water, I turn into ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `No matter how you look at it, ultimately ____ is responsible for ____.`,
      draw: 0,
      pick: 2,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `There are guilty pleasures. And then there's ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `When it comes to Japanese cuisine, there's simply nothing better than ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Just announced: The brand new anime adaptation of ____, starring ____ as the voice of ____.`,
      draw: 2,
      pick: 3,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____. Goddammit, Japan.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I have never in my life laughed harder than the first time I watched ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Digimon! Digivolve to: ____-mon!`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `People die when they are ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Okay, I'll admit it. I would totally go gay for ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Truly and without question, ____ is the manliest of all men.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `WANTED: $50,000,000,000 reward for the apprehension of____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The government of Japan recently passed a law that effectively forbids all forms of ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Of my entire collection, my most prized possession is ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I'M-A FIRIN' MAH ____!`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The sad truth is, that at the edge of the universe, there is nothing but ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The Himalayas are filled with many perils, such as ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The road to success is paved with ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `And on his farm he had ____, E-I-E-I-O!`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ is the root of all evil.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The primitive villagers were both shocked and amazed when I showed them ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `And it is said his ghost still wanders these halls, forever searching for his lost ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The best part of waking up is ____ in your cup.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What do I keep hidden in the crawlspace?`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Go-Go-Gadget, ____!`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I finally realized I hit rock bottom when I started digging through dumpsters for ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `And the award for the filthiest scene in an adult film goes to "5 women and ____."`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `"Why Grandma", said Little Red Riding Hood, "What big ____ you have!"`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Who would have guessed that the alien invasion would be easily thwarted by ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `With Democrats and Republicans in a dead heat, the election was snatched by ____ party.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____. That is my fetish.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `All your ____ are belong to us`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Sorry Mario, but ____ is in another castle.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ is a lie.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Who's an asshole?`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
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
      text: `If you could fuck anyone in the world, who would you choose?`,
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
      text: `Why are there six ____ when there are only four ____?`,
      draw: 0,
      pick: 2,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `TotalBiscuit's top hat is actually ____. `,
      draw: 0,
      pick: 1,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The Xbox One's DRM policy isn't half as bad as ____.`,
      draw: 0,
      pick: 1,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What will YouTube add in its next unneeded update?`,
      draw: 0,
      pick: 1,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The seldomly mentioned 4th little pig built his house out of ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Mom, I swear! Despite its name, ____ is NOT a porno!`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });

    await queryRunner.insert('white_card', {
      text: `The world's tallest midget.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Four Loko.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Xyzzy playing around with gender roles.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sonic brutally murdering Mario.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mario brutally murdering Sonic.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Bible.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Two midgets stacked up pretending to be one person.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mr. Hankey the Christmas Poo.`,
      watermark: `RS`,
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
      text: `Mandatory Sex Party.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Games you can play with bricks.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fancy tampons.`,
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
      text: `Just the tip!`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Trouser snakes.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Drinking on live TV.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Power of Greyskull.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hello Kitty.`,
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
      text: `Hookers and blow.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Standing next to short people to use them as armrests.`,
      watermark: `VS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The sound a single ThunderStix&reg; makes.`,
      watermark: `SG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dr. Phil.`,
      watermark: `SG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The biggest, blackest dick.`,
      watermark: `SG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Columbine Shooting.`,
      watermark: `RS`,
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
      text: `A street cleaning simulator.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `John Madden.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Maple syrup.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A mile-long penis.`,
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
      text: `Reddit.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sex.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `South Korea.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `YouTube.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Type-C Tetris music.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hentai.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Indiana Jones.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Smooth jazz.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Soviet Russia.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Using hot sauce as lube.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fruit Fuckers.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Beer Pong.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Rule 34.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The smallest, whitest dick.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Skullcrusher Mountain.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mr. Fancy Pants.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `TotalBiscuit's top hat.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An 8-ball.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Penn and Teller.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `My mom.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `My penis catching fire.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Santa Christ.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Stick figure porn.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Angry Video Game Nerd.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The elephant in the room.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Nostalgia Critic.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Power Glove.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Time travel.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Your mom.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bees!`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A baseball to the nuts.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Big Lipped Alligator Moment.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A bird fucking a horse.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A killer rabbit.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A tiny white dick.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A zombie fisherman.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An obscure reference only two people will get.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Anal tearing.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bees. My God.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Being frozen today.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Chuck Norris.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fuck you, I do what I want.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `FUCK YOU, I'M SPIDERMAN!`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting mauled by a mountain lion AND a grizzly bear at the same time.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Glenn Beck being torn apart by zombies.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Going full retard.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ham?`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An awkward slash fic between The Nostalgia Critic and The Angry Video Game Nerd.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The League of Legends.`,
      watermark: `SG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A tub of Vaseline.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sex with strangers.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `PetSmart.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `StarFox.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sonic the Hedgehog.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `DeviantArt.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `STEAL ALL THE FARM.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `PEEEEEEEEEEEEEEEENIIIISSSSSSSS.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Jumanji.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Wards.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `K-Pop.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Doing Gangnam Style at a funeral.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `125% Reccomended Daily Allowance of cock.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A 3am phone call.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ezreal's hot sugary ass.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Narutards.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dead catgirls.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tentacle rape.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A fuck-mothering vampire.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `FUNimation.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Aya Hirano being gang-banged by her entire band.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `OVER 9000!!`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Idiots who don't seem to realize that Avatar: The Last Airbender isn't really an anime.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Yu-Gi-Oh! The Abridged Series.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A fat middle-aged man in a Sailor Moon costume.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sarah Fuckin' Palin.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Naruto.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Vash the Stampede.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cowboy Bebop.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fullmetal Alchemist.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Futanari.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mewtwo.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tengen Toppa Gurren Lagann.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Being eaten by a titan.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Death Note.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Hello Kitty! vibrator.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A mindfuck.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `". . . ."`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Hare Hare Yukai dance.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting your penis cut in half.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cousin marriage.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `4Kids.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Watching FLCL while tripping on acid.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sticking your finger up her ass.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Standing outside the gates of the White House completely naked with a revolver in your hand.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Catholic priests who drink, smoke, and carry guns.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Your virgin soul.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Engrish.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A dead meme.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Twincest.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Asian cock.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Holy dildos.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Drills for hands.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Taking a seat with Chris Hansen.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Village People.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Cleveland steamer.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A big floppy donkey dick.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Toilet paper.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting off on anime porn.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Teenage Mutant Ninja Turtles.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mining for nose gold.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Laxatives.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Genital warts.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A dead hooker.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A skeptical sheriff.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The crushed dreams of a stripper.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Peanutbutter jelly time.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Granny panties.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Fleshlite&trade;.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A molotov cocktail.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The end of the world.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Don Knotts.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Morbid obesity.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A MILF.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Yellow snow.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Miss. Piggy.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The town drunk.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Fresh Prince of Bel-Air.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Talking like a pirate.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Facebook stalker.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bed wetting.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nuns.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Scotch.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Realizing, too late, that there is no toilet paper left.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Illegal immigrants.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `That one episode of CSI.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A giant horse cock.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A juice box.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A tree.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lesbians.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `George Costanza`,
      watermark: `Viyda`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Wii U`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `the PS4`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `the NES`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `the SNES`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `the SEGA Genesis`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `the PSX`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `the duck hunt dog`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mountain Dew`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Duck Hunt`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Space Core.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Surprise blowjobs.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `DOTA 2.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A beautiful little moment.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A couch stinking of naked people.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A pretty epic poo.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A smaller, whiter dick.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A testicle examination.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An expensive rental costume.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fart science.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Literally going to Hell.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pacific Rim.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Reading the manual.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Surgeon Simulator 2013.`,
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
      text: `A bag of dicks.`,
      watermark: `RT`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Card Czar.`,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lara Croft.`,
      watermark: `NL`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Being banned from /r/pyongyang.`,
      watermark: `SG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The lost city of Atlantis.`,
      watermark: `SG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A fountain of vomit.`,
      watermark: `SG`,
      cardSetId: insertResult.result![0].id
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.delete('black_card', {
      text: `What is the next great Kickstarter project?`,
      draw: 0,
      pick: 1,
      watermark: `RS`
    });
    await queryRunner.delete('black_card', {
      text: `Praise ____!`,
      draw: 0,
      pick: 1,
      watermark: `RS`
    });
    await queryRunner.delete('black_card', {
      text: `____ for president!`,
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
      text: `What can you always find in between the couch cushions?`,
      draw: 0,
      pick: 1,
      watermark: `RS`
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
      text: `A wild ____ appeared! It used ____!`,
      draw: 0,
      pick: 2,
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
      text: `____ is the name of my ____ cover band.`,
      draw: 0,
      pick: 2,
      watermark: `SG`
    });
    await queryRunner.delete('black_card', {
      text: `Alcoholic games of Clue&reg; lead to ____.`,
      draw: 0,
      pick: 1,
      watermark: `SG`
    });
    await queryRunner.delete('black_card', {
      text: `____.tumblr.com`,
      draw: 0,
      pick: 1,
      watermark: `SG`
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
    await queryRunner.delete('black_card', {
      text: `____ sounds like a great alternative rock band.`,
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
      text: `Best game of 2013? ____, of course.`,
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
      text: `Oh god, I can't believe we ate ____ at PAX.`,
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
      text: `____? It's a DLC item.`,
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
      text: `My life for ____!`,
      draw: 0,
      pick: 1,
      watermark: `RS`
    });
    await queryRunner.delete('black_card', {
      text: `Who let the dogs out?`,
      draw: 0,
      pick: 1,
      watermark: `RS`
    });
    await queryRunner.delete('black_card', {
      text: `In his next movie, Will Smith saves the world from ____.`,
      draw: 0,
      pick: 1,
      watermark: `RS`
    });
    await queryRunner.delete('black_card', {
      text: `When North Korea gets ____, it will be the end of the world.`,
      draw: 0,
      pick: 1,
      watermark: `RS`
    });
    await queryRunner.delete('black_card', {
      text: `Plan a three course meal.`,
      draw: 2,
      pick: 3,
      watermark: `RS`
    });
    await queryRunner.delete('black_card', {
      text: `Tastes like ____.`,
      draw: 0,
      pick: 1,
      watermark: `RS`
    });
    await queryRunner.delete('black_card', {
      text: `____ and ____ are the new hot couple.`,
      draw: 0,
      pick: 2,
      watermark: `RS`
    });
    await queryRunner.delete('black_card', {
      text: `What will Xyzzy take over the world with?`,
      draw: 0,
      pick: 1,
      watermark: `RS`
    });
    await queryRunner.delete('black_card', {
      text: `Welcome to my secret lair on ____.`,
      draw: 0,
      pick: 1,
      watermark: `RS`
    });
    await queryRunner.delete('black_card', {
      text: `Dustin Browder demands more ____ in StarCraft&reg;.`,
      draw: 0,
      pick: 1,
      watermark: `RS`
    });
    await queryRunner.delete('black_card', {
      text: `I write slash fanfiction pairing ____ with ____.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Ladies and gentlemen, I give you ____... COVERED IN BEES!!!`,
      draw: 0,
      pick: 1,
      watermark: `ANX1`
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
      text: `At first I couldn't understand ____, but now it's my biggest kink.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `Long story short, I ended up with ____ in my ass.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `Who knew I'd be able to make a living off of ____?`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `It's difficult to explain to friends and family why I know so much about ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `I can't believe I spent most of my paycheck on ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `Hey guys, check out my ____ montage!`,
      draw: 0,
      pick: 1,
      watermark: `GFC`
    });
    await queryRunner.delete('black_card', {
      text: `____! You know, for kids.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `I watch movies just to see if I can find a Big Lipped ____ Moment.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `No one wants to see your ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `OH MY GOD THIS IS THE GREATEST ____ I'VE EVER SEEN IN MY LIFE!`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `What doesn't work that way?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `What the fuck is wrong with you?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `____ is camping my lane.`,
      draw: 0,
      pick: 1,
      watermark: `GFC`
    });
    await queryRunner.delete('black_card', {
      text: `Vegeta, what does the scouter say?`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `Who the hell do you think I am?!`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `On the next episode of Dragon Ball Z, Goku has a fierce battle with ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `So wait, ____ was actually ____? Wow, I didn't see that one coming!`,
      draw: 0,
      pick: 2,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `Real men watch ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `Whenever I'm splashed with cold water, I turn into ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `No matter how you look at it, ultimately ____ is responsible for ____.`,
      draw: 0,
      pick: 2,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `There are guilty pleasures. And then there's ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `When it comes to Japanese cuisine, there's simply nothing better than ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `Just announced: The brand new anime adaptation of ____, starring ____ as the voice of ____.`,
      draw: 2,
      pick: 3,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `____. Goddammit, Japan.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `I have never in my life laughed harder than the first time I watched ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `Digimon! Digivolve to: ____-mon!`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `People die when they are ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `Okay, I'll admit it. I would totally go gay for ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `Truly and without question, ____ is the manliest of all men.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `WANTED: $50,000,000,000 reward for the apprehension of____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `The government of Japan recently passed a law that effectively forbids all forms of ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `Of my entire collection, my most prized possession is ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `I'M-A FIRIN' MAH ____!`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `The sad truth is, that at the edge of the universe, there is nothing but ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `The Himalayas are filled with many perils, such as ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `The road to success is paved with ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `And on his farm he had ____, E-I-E-I-O!`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `____ is the root of all evil.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `The primitive villagers were both shocked and amazed when I showed them ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `And it is said his ghost still wanders these halls, forever searching for his lost ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `The best part of waking up is ____ in your cup.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `What do I keep hidden in the crawlspace?`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `Go-Go-Gadget, ____!`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `I finally realized I hit rock bottom when I started digging through dumpsters for ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `And the award for the filthiest scene in an adult film goes to "5 women and ____."`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `"Why Grandma", said Little Red Riding Hood, "What big ____ you have!"`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `Who would have guessed that the alien invasion would be easily thwarted by ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `With Democrats and Republicans in a dead heat, the election was snatched by ____ party.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `____. That is my fetish.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `All your ____ are belong to us`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `Sorry Mario, but ____ is in another castle.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `____ is a lie.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `Who's an asshole?`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `____ is the greatest Canadian.`,
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
      text: `Why are there six ____ when there are only four ____?`,
      draw: 0,
      pick: 2,
      watermark: `RT`
    });
    await queryRunner.delete('black_card', {
      text: `TotalBiscuit's top hat is actually ____. `,
      draw: 0,
      pick: 1,
      watermark: `DAH`
    });
    await queryRunner.delete('black_card', {
      text: `The Xbox One's DRM policy isn't half as bad as ____.`,
      draw: 0,
      pick: 1,
      watermark: `DAH`
    });
    await queryRunner.delete('black_card', {
      text: `What will YouTube add in its next unneeded update?`,
      draw: 0,
      pick: 1,
      watermark: `DAH`
    });
    await queryRunner.delete('black_card', {
      text: `The seldomly mentioned 4th little pig built his house out of ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `Mom, I swear! Despite its name, ____ is NOT a porno!`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });

    await queryRunner.delete('white_card', {
      text: `The world's tallest midget.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Four Loko.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Xyzzy playing around with gender roles.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Sonic brutally murdering Mario.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Mario brutally murdering Sonic.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `The Bible.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Two midgets stacked up pretending to be one person.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Mr. Hankey the Christmas Poo.`,
      watermark: `RS`
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
      text: `Mandatory Sex Party.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Games you can play with bricks.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Fancy tampons.`,
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
      text: `THE GODDAMN BATMAN.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Swinging an axe in the air while cornholing a bear.`,
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
      text: `Bearshark.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `SCIENCE!!1!`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Just the tip!`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Trouser snakes.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Drinking on live TV.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `The Power of Greyskull.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Hello Kitty.`,
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
      text: `Clown strippers.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `KERMIT FLAIL.`,
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
      text: `Hookers and blow.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `Standing next to short people to use them as armrests.`,
      watermark: `VS`
    });
    await queryRunner.delete('white_card', {
      text: `The sound a single ThunderStix&reg; makes.`,
      watermark: `SG`
    });
    await queryRunner.delete('white_card', {
      text: `Dr. Phil.`,
      watermark: `SG`
    });
    await queryRunner.delete('white_card', {
      text: `The biggest, blackest dick.`,
      watermark: `SG`
    });
    await queryRunner.delete('white_card', {
      text: `The Columbine Shooting.`,
      watermark: `RS`
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
      text: `A butt egg.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `A delicious baby.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `A street cleaning simulator.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `John Madden.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Maple syrup.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `A mile-long penis.`,
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
      text: `Reddit.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Sex.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `South Korea.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `YouTube.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Type-C Tetris music.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Hentai.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Indiana Jones.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Smooth jazz.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Soviet Russia.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Using hot sauce as lube.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Fruit Fuckers.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Beer Pong.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Rule 34.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `The smallest, whitest dick.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Skullcrusher Mountain.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Mr. Fancy Pants.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `TotalBiscuit's top hat.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `An 8-ball.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Penn and Teller.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `My mom.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `My penis catching fire.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Santa Christ.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Stick figure porn.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `The Angry Video Game Nerd.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `The elephant in the room.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `The Nostalgia Critic.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `The Power Glove.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Time travel.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Your mom.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Bees!`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A baseball to the nuts.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A Big Lipped Alligator Moment.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A bird fucking a horse.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A killer rabbit.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A tiny white dick.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A zombie fisherman.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `An obscure reference only two people will get.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Anal tearing.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Bees. My God.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Being frozen today.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Chuck Norris.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Fuck you, I do what I want.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `FUCK YOU, I'M SPIDERMAN!`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Getting mauled by a mountain lion AND a grizzly bear at the same time.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Glenn Beck being torn apart by zombies.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Going full retard.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Ham?`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `An awkward slash fic between The Nostalgia Critic and The Angry Video Game Nerd.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `The League of Legends.`,
      watermark: `SG`
    });
    await queryRunner.delete('white_card', {
      text: `A tub of Vaseline.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Sex with strangers.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `PetSmart.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `StarFox.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Sonic the Hedgehog.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `DeviantArt.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `STEAL ALL THE FARM.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `PEEEEEEEEEEEEEEEENIIIISSSSSSSS.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Jumanji.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Wards.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `K-Pop.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Doing Gangnam Style at a funeral.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `125% Reccomended Daily Allowance of cock.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `A 3am phone call.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Ezreal's hot sugary ass.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Narutards.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Dead catgirls.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Tentacle rape.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `A fuck-mothering vampire.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `FUNimation.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Aya Hirano being gang-banged by her entire band.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `OVER 9000!!`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Idiots who don't seem to realize that Avatar: The Last Airbender isn't really an anime.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Yu-Gi-Oh! The Abridged Series.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `A fat middle-aged man in a Sailor Moon costume.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Sarah Fuckin' Palin.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Naruto.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Vash the Stampede.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Cowboy Bebop.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Fullmetal Alchemist.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Futanari.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Mewtwo.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Tengen Toppa Gurren Lagann.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Being eaten by a titan.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `The Death Note.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `A Hello Kitty! vibrator.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `A mindfuck.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `". . . ."`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `The Hare Hare Yukai dance.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Getting your penis cut in half.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Cousin marriage.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `4Kids.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Watching FLCL while tripping on acid.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Sticking your finger up her ass.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Standing outside the gates of the White House completely naked with a revolver in your hand.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Catholic priests who drink, smoke, and carry guns.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Your virgin soul.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Engrish.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `A dead meme.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Twincest.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Asian cock.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Holy dildos.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Drills for hands.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Taking a seat with Chris Hansen.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `The Village People.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `A Cleveland steamer.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `A big floppy donkey dick.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Toilet paper.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Getting off on anime porn.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `The Teenage Mutant Ninja Turtles.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Mining for nose gold.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Laxatives.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Genital warts.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `A dead hooker.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `A skeptical sheriff.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `The crushed dreams of a stripper.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Peanutbutter jelly time.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Granny panties.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `A Fleshlite&trade;.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `A molotov cocktail.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `The end of the world.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Don Knotts.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Morbid obesity.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `A MILF.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Yellow snow.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Miss. Piggy.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `The town drunk.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `The Fresh Prince of Bel-Air.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Talking like a pirate.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `A Facebook stalker.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Bed wetting.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Nuns.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Scotch.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Realizing, too late, that there is no toilet paper left.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Illegal immigrants.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `That one episode of CSI.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `A giant horse cock.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `A juice box.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `A tree.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Lesbians.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `George Costanza`,
      watermark: `Viyda`
    });
    await queryRunner.delete('white_card', {
      text: `The Wii U`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `the PS4`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `the NES`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `the SNES`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `the SEGA Genesis`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `the PSX`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `the duck hunt dog`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Mountain Dew`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Duck Hunt`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Space Core.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Surprise blowjobs.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `DOTA 2.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `A beautiful little moment.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `A couch stinking of naked people.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `A pretty epic poo.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `A smaller, whiter dick.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `A testicle examination.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `An expensive rental costume.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Fart science.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Literally going to Hell.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Pacific Rim.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Reading the manual.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Surgeon Simulator 2013.`,
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
      text: `A bag of dicks.`,
      watermark: `RT`
    });
    await queryRunner.delete('white_card', {
      text: `The Card Czar.`,
      watermark: `DAH`
    });
    await queryRunner.delete('white_card', {
      text: `Lara Croft.`,
      watermark: `NL`
    });
    await queryRunner.delete('white_card', {
      text: `Being banned from /r/pyongyang.`,
      watermark: `SG`
    });
    await queryRunner.delete('white_card', {
      text: `The lost city of Atlantis.`,
      watermark: `SG`
    });
    await queryRunner.delete('white_card', {
      text: `A fountain of vomit.`,
      watermark: `SG`
    });

    await queryRunner.delete('card_set', {
      name: `[C] Admin's Picks`,
      baseDeck: false,
      description: `Custom cards that I think are particularly fitting.`,
      weight: 100,
      active: true
    });
  }
}
