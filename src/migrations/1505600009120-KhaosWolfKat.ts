/* tslint:disable:no-non-null-assertion no-unsafe-any no-any */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class KhaosWolfKat1505600009120 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const insertResult = await queryRunner.insert('card_set', {
      name: `[C] Khaos WolfKat`,
      baseDeck: false,
      description: null,
      weight: 528,
      active: true
    });

    await queryRunner.insert('black_card', {
      text: `Honey badger don't give a ____!`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `My next video turorial covers ____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `We found a map Charlie! A map to ____ Mountain!`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `For the love of GOD, and all that is HOLY, ____!!`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The new Operating System will be called ____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I used to be an adventurer like you, then I took a/an ____ in the ____.`,
      draw: 0,
      pick: 2,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `You've got to check out ____ Fluxx!`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Call of Duty Modern Warfare 37: War of ____!`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In brightest day, in blackest night, no ____ shall escape my sight.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Yes, Mr. Death... I'll play you a game! But not chess! My game is ____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I cannot preach hate and warfare when I am a disciple of ____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `With great power comes great ____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Don't make me ____. You wouldn't like me when I'm ____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Fighting a never-ending battle for truth, justice, and the American ____!`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Faster than a speeding ____! More powerful than a ____!`,
      draw: 0,
      pick: 2,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Able to leap ____ in a single bound! `,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Disguised as ____, mild-mannered ____. `,
      draw: 0,
      pick: 2,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Patriotism doesn't automatically equal ____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I'm loyal to nothing, General - except the ____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Alright you Primitive Screwheads, listen up! You see this? This... is my ____!`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Shop smart. Shop ____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Hail to the ____, baby.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Good. Bad. I'm the guy with the ____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `How will we stop an army of the dead at our castle walls?`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I seek The Holy ____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I see you have the machine that goes ____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Every sperm is ____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `An African or European ____?`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Well you can't expect to wield supreme executive power just 'cause some watery tart threw a ____ at you!`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `"____!" "It's only a model."`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Good night. Sleep well. I'll most likely ____ you in the morning.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I am The Dread Pirate ____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Do you want me to send you back to where you were, ____ in ____?`,
      draw: 0,
      pick: 2,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I see ____ people`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____? We don't need no stinking ____!`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `These aren't the ____ you're looking for.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `We're gonna need a bigger ____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Beavis and Butthead Do ____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I, for one, welcome our new ____ overlords.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `You know, there's a million fine looking women in the world, dude. But they don't all bring you ____ at work. Most of 'em just ____.`,
      draw: 0,
      pick: 2,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Teenage Mutant Ninja ____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Achy Breaky ____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I'm not a ____, but I play one on TV`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____'s latest music video features a dozen ____ on ____.`,
      draw: 0,
      pick: 3,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____. Like a boss!`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In Soviet ____, ____ ____s you.`,
      draw: 2,
      pick: 3,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____. It's not just for breakfast anymore.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____. It's what's for dinner!`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____. Part of this nutritious breakfast.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____. Breakfast of champions!`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Where's the beef?`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Oh my god! They killed ____!`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I am not fat! I'm just ____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Two by two, hands of ____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The anxiously awaited new season of Firefly is rumoured to kick off with an action packed scene, featuring River Tam's amazing feats of ____!`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I swear by my pretty floral  ____, I will ____ you.`,
      draw: 0,
      pick: 2,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Wendy's ____ & Juicy.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I HATE it when ____(s) crawl(s) up my ____!`,
      draw: 0,
      pick: 2,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `At ____, where every day is ____ day!`,
      draw: 0,
      pick: 2,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ at last! ____ at last! Thank God almighty, I'm ____ at last! `,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I have a dream that one day this nation will rise up and live out the true meaning of its creed:`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `This year's ____ guest of honour is ____.`,
      draw: 0,
      pick: 2,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `This will be the greatest ____con ever!`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ is the new ____.`,
      draw: 0,
      pick: 2,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Bitches LOVE ____!`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The only good ____ is a dead ____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `A vote for ____ is a vote for ____.`,
      draw: 0,
      pick: 2,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Thou shalt not____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I am the King of ____!`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Team ____!`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `We went to a workshop on tantric ____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `My safeword is ____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I like ____, but ____ is a hard limit!`,
      draw: 0,
      pick: 2,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I ____, therefore I ____.`,
      draw: 0,
      pick: 2,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Welcome to my secret lair. I call it The Fortress of ____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `These are my minions of ____!`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });

    await queryRunner.insert('white_card', {
      text: `Godwin's law.`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nope! Chuck Testa.`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pedo-bear.`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Honey badger.`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Linux.`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Unix.`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `My ANUS is bleeding!`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `My spoon is too big.`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Badger badger badger badger badger...`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Candy Mountain.`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pewdiepie.`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Black Mesa.`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Umbrella Corporation.`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Gordon Freeman.`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Head Crabs.`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `GLaDOS's cake recipe.`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An arrow to the knee.`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `All your base.`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Wood for sheep.`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Wonder Woman's invisible chopper`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Tick.`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `SHAZAM!`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Being tied up with Wonder Woman's Magic Lasso.`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Batmobile!`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Outrunning The Flash!`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting caught in Spiderman's sticky, sticky... web.`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting caught between Green Lantern creating an anvil and Sinestro creating a hammer.`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pissing in the suit`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A REALLY cool cape and tights`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Content.`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Good Ash`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Evil Ash`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `My boomstick`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `S-Mart`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Necronomiconexmortis`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `We're coming to get you, Barbara!`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Groovy`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A shrubbery!`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The machine that goes "Ping!"`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A herring!`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Holy Grail`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Camelot`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Morgan Freeman`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Inconceivable!!`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `To the pain`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Iocane powder`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Orgazmorator`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Damn dirty ape`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cowboys from Hell`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Festively plump`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ants in the Pants`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mecha-Streisand`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Snookie`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Honey Boo Boo`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Like a boss!`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mutton Vindaloo Beast`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Queeg 500`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Talkie Toaster`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Droid Rot`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Athlete's Hand`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Anti-Matter Chopsticks`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Groinal Exploder`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Shiny!`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `River Tam`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Browncoats`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting raped to death by reavers`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `I'll be in my bunk!`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Alliance`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A bigger, blacker deck`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Necronomicon`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fruit flies`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fruit bat`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Traumatic insemination`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bagpipes`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Metal!`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `All the ass in the world!`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Prehensile nipples`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `No pants`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Locusts`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A tantrum`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fifi the dancing poodle`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Wal-Mart`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Rape culture`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cultural misappropriation`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Soggy biscuit`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A gang of bikers`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cake`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lice`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The walk of shame`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Rough trade`,
      watermark: `KHAOS`,
      cardSetId: insertResult.result![0].id
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.delete('black_card', {
      text: `Honey badger don't give a ____!`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `My next video turorial covers ____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `We found a map Charlie! A map to ____ Mountain!`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `For the love of GOD, and all that is HOLY, ____!!`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `The new Operating System will be called ____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `I used to be an adventurer like you, then I took a/an ____ in the ____.`,
      draw: 0,
      pick: 2,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `You've got to check out ____ Fluxx!`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `Call of Duty Modern Warfare 37: War of ____!`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `In brightest day, in blackest night, no ____ shall escape my sight.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `Yes, Mr. Death... I'll play you a game! But not chess! My game is ____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `I cannot preach hate and warfare when I am a disciple of ____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `With great power comes great ____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `Don't make me ____. You wouldn't like me when I'm ____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `Fighting a never-ending battle for truth, justice, and the American ____!`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `Faster than a speeding ____! More powerful than a ____!`,
      draw: 0,
      pick: 2,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `Able to leap ____ in a single bound! `,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `Disguised as ____, mild-mannered ____. `,
      draw: 0,
      pick: 2,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `Patriotism doesn't automatically equal ____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `I'm loyal to nothing, General - except the ____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `Alright you Primitive Screwheads, listen up! You see this? This... is my ____!`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `Shop smart. Shop ____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `Hail to the ____, baby.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `Good. Bad. I'm the guy with the ____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `How will we stop an army of the dead at our castle walls?`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `I seek The Holy ____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `I see you have the machine that goes ____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `Every sperm is ____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `An African or European ____?`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `Well you can't expect to wield supreme executive power just 'cause some watery tart threw a ____ at you!`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `"____!" "It's only a model."`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `Good night. Sleep well. I'll most likely ____ you in the morning.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `I am The Dread Pirate ____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `Do you want me to send you back to where you were, ____ in ____?`,
      draw: 0,
      pick: 2,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `I see ____ people`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `____? We don't need no stinking ____!`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `These aren't the ____ you're looking for.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `We're gonna need a bigger ____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `Beavis and Butthead Do ____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `I, for one, welcome our new ____ overlords.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `You know, there's a million fine looking women in the world, dude. But they don't all bring you ____ at work. Most of 'em just ____.`,
      draw: 0,
      pick: 2,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `Teenage Mutant Ninja ____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `Achy Breaky ____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `I'm not a ____, but I play one on TV`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `____'s latest music video features a dozen ____ on ____.`,
      draw: 0,
      pick: 3,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `____. Like a boss!`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `In Soviet ____, ____ ____s you.`,
      draw: 2,
      pick: 3,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `____. It's not just for breakfast anymore.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `____. It's what's for dinner!`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `____. Part of this nutritious breakfast.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `____. Breakfast of champions!`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `Where's the beef?`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `Oh my god! They killed ____!`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `I am not fat! I'm just ____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `Two by two, hands of ____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `The anxiously awaited new season of Firefly is rumoured to kick off with an action packed scene, featuring River Tam's amazing feats of ____!`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `I swear by my pretty floral  ____, I will ____ you.`,
      draw: 0,
      pick: 2,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `Wendy's ____ & Juicy.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `I HATE it when ____(s) crawl(s) up my ____!`,
      draw: 0,
      pick: 2,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `At ____, where every day is ____ day!`,
      draw: 0,
      pick: 2,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `____ at last! ____ at last! Thank God almighty, I'm ____ at last! `,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `I have a dream that one day this nation will rise up and live out the true meaning of its creed:`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `This year's ____ guest of honour is ____.`,
      draw: 0,
      pick: 2,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `This will be the greatest ____con ever!`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `____ is the new ____.`,
      draw: 0,
      pick: 2,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `Bitches LOVE ____!`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `The only good ____ is a dead ____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `A vote for ____ is a vote for ____.`,
      draw: 0,
      pick: 2,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `Thou shalt not____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `I am the King of ____!`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `Team ____!`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `We went to a workshop on tantric ____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `My safeword is ____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `I like ____, but ____ is a hard limit!`,
      draw: 0,
      pick: 2,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `I ____, therefore I ____.`,
      draw: 0,
      pick: 2,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `Welcome to my secret lair. I call it The Fortress of ____.`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });
    await queryRunner.delete('black_card', {
      text: `These are my minions of ____!`,
      draw: 0,
      pick: 1,
      watermark: `KHAOS`
    });

    await queryRunner.delete('white_card', {
      text: `Godwin's law.`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Nope! Chuck Testa.`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Pedo-bear.`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Honey badger.`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Linux.`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Unix.`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `My ANUS is bleeding!`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `My spoon is too big.`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Badger badger badger badger badger...`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Candy Mountain.`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Pewdiepie.`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Black Mesa.`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `The Umbrella Corporation.`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Gordon Freeman.`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Head Crabs.`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `GLaDOS's cake recipe.`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `An arrow to the knee.`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `All your base.`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Wood for sheep.`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Wonder Woman's invisible chopper`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `The Tick.`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `SHAZAM!`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Being tied up with Wonder Woman's Magic Lasso.`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `The Batmobile!`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Outrunning The Flash!`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Getting caught in Spiderman's sticky, sticky... web.`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Getting caught between Green Lantern creating an anvil and Sinestro creating a hammer.`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Pissing in the suit`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `A REALLY cool cape and tights`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Content.`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Good Ash`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Evil Ash`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `My boomstick`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `S-Mart`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `The Necronomiconexmortis`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `We're coming to get you, Barbara!`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Groovy`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `A shrubbery!`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `The machine that goes "Ping!"`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `A herring!`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `The Holy Grail`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Camelot`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Morgan Freeman`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Inconceivable!!`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `To the pain`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Iocane powder`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `The Orgazmorator`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Damn dirty ape`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Cowboys from Hell`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Festively plump`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Ants in the Pants`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Mecha-Streisand`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Snookie`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Honey Boo Boo`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Like a boss!`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Mutton Vindaloo Beast`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Queeg 500`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Talkie Toaster`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Droid Rot`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Athlete's Hand`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Anti-Matter Chopsticks`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Groinal Exploder`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Shiny!`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `River Tam`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Browncoats`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Getting raped to death by reavers`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `I'll be in my bunk!`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `The Alliance`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `A bigger, blacker deck`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `The Necronomicon`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Fruit flies`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Fruit bat`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Traumatic insemination`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Bagpipes`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `The Metal!`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `All the ass in the world!`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Prehensile nipples`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `No pants`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Locusts`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `A tantrum`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Fifi the dancing poodle`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Wal-Mart`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Rape culture`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Cultural misappropriation`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Soggy biscuit`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `A gang of bikers`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Cake`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Lice`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `The walk of shame`,
      watermark: `KHAOS`
    });
    await queryRunner.delete('white_card', {
      text: `Rough trade`,
      watermark: `KHAOS`
    });

    await queryRunner.delete('card_set', {
      name: `[C] Khaos WolfKat`,
      baseDeck: false,
      description: null,
      weight: 528,
      active: true
    });
  }
}
