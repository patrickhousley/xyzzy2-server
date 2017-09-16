/* tslint:disable:no-non-null-assertion no-unsafe-any no-any */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Homestuck1505599308465 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const insertResult = await queryRunner.insert('card_set', {
      name: `[C] Cards Against Homestuck`,
      baseDeck: false,
      description: null,
      weight: 526,
      active: true
    });

    await queryRunner.insert('black_card', {
      text: `What is your OT3?`,
      draw: 2,
      pick: 3,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ makes the Homestuck fandom uncomfortable.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ stays awake at night, crying over ____.`,
      draw: 0,
      pick: 2,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____. It keeps happening!`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `"Sacred leggings" was a mistranslation. The Sufferer actually died in Sacred ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `After throwing ____ at Karkat's head, Dave made the intriguing discover that troll horns are very sensitive.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `AG: Who needs luck when you have ____?`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `All ____. All of it!`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Alternia's political system was based upon ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Believe it or not, Kankri's biggest trigger is ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Dave Strider likes ____, but only ironically.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Equius beats up Eridan for ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Feferi secretly hates ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `For Betty Crocker's latest ad campaign/brainwashing scheme, she is using ____ as inspiration.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `For his birthday, Dave gave John ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Fuckin' ____. How do they work?`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Gamzee not only likes using his clubs for juggling and strifing, he also uses them for____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Getting a friend to read Homestuck is like ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `How do I live without ____?`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Hussie died on his quest bed and rose as the fully realized ____ of ____.`,
      draw: 0,
      pick: 2,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Hussie unintentionally revealed that Homestuck will end with ____ and ____ consummating their relationship at last.`,
      draw: 0,
      pick: 2,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I am ____. It's me.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I finally became Tumblr famous when I released a gifset of ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I just found ____ in my closet it is like fucking christmas up in here.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I warned you about ____, bro! I told you, dog!`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In the final battle, John distracts Lord English by showing him ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `It's hard, being ____. It's hard and no one understands.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `John is a good boy. And he loves ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `John may not be a homosexual, but he has a serious thing for ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Kanaya reached into her dead lusus's stomach and retrieved ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Kanaya tells Karkat about ____ to cheer him up.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Karkat gave our universe ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Latula and Porrin have decided to teach Kankri about the wonders of ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Little did they know, the key to defeating Lord English was actually ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Little known fact: Kurloz's stitching is actually made out of ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Nanna baked a cake for John to commemorate ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Nepeta only likes Karkat for his ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Nepeta's secret OTP is ____ with ____.`,
      draw: 0,
      pick: 2,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The next thing Hussie will turn into a sex joke will be ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Nobody was surprised to find ____ under Jade's skirt. The surprise was she used it for/on ____.`,
      draw: 0,
      pick: 2,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The only way to beat Vriska in an eating contest is to put ____ on the table.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Porrim made Kankri a sweater to cover his ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Problem Sleuth had a hard time investigating ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The real reason Terezi stabbed Vriska was to punish her for ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Rose was rather disgusted when she started reading about ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The secret way to achieve God Tier is to die on top of ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Terezi can top anyone except ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The thing that made Kankri break his vow of celibacy was ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Turns out, pre-entry prototyping with ____ was not the best idea.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Vriska killed Spidermom with ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Vriska roleplays ____ with Terezi as ____.`,
      draw: 0,
      pick: 2,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Vriska's greatest regret is ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Wear  ____. Be ____.`,
      draw: 0,
      pick: 2,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What did Jake get Dirk for his birthday?`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What is the worst thing that Terezi ever licked?`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What makes your kokoro go "doki doki"?`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What's in the box, Jack?`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `When a bucket is unavailable, trolls with use ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `When Dave received ____ from his Bro for his 9th birthday, be felt a little warm inside.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The hole in Kanaya's stomach is so large, she can fit ____ in it.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `where doing it man. where MAKING ____ HAPEN!`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Your name is JOHN EGBERT and boy do you love ____!`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____. On the roof. Now.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ totally makes me question my sexuality.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Whenever I see ____ on MSPARP, I disconnect immediately.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Calliborn wants you to draw pornography of ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Everybody out of the god damn way. You've got a heart full of ____, a soul full of ____, and a body full of ____.`,
      draw: 2,
      pick: 3,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });

    await queryRunner.insert('white_card', {
      text: `... . .-. . -. .. - -.—  (Serenity)`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Rails with pails.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `"Apple Juice."`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The 7th Gate.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Accidentally touching Gamze's enormous codpiece.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An acrobatic fucking pirouette.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Alternian fine art.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Alternian rainbow-drinker romance novels.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Andrew Hussie.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Andrew Hussie's lips.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The animes.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Anonymous Soporifics Support.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Apple Juice.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Aradia Bot.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Aradia Megido.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Aradia's charred, rotting corpse.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Aranea Serket.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Aranea's exposition stand.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Arguing over troll sexuality.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `ARquiusprite's muscles.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Arthour the lusus.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `AVATAR.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Baby Dave.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bard Quest.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bec Noir.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Becoming Tumblr famous.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Being fuck deep in meowcats.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Being in a relationship with a non-Homestuck.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Being locked in a Prospitian prison.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Being the other guy.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `BETTY FUCKING CROCKER.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Binge reading every fanfiction for a pairing and then hating yourself a little bit.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `BL1ND JUST1C3.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Blackrom orgies.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bro and Dave banging while Rose watches.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bro.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bro's rapping ventriloquism act.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bro's death.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `BUCKETS.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A bull penis cane.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Butler Island.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `C4NDY R3D BLOOD &gt;:]`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Caledscratch.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Caliborn.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Caliginous speed dating.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Calliope.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Can Town.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cards Against Alternia.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Carlos Maraka.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Casey.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Centaur milk.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Charging down halls, shouting profanities and being silly.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cherub m-preg.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cherub mating rituals.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Chest of WHIMSY.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A chip in your heart that forces you to love.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cliched JohnKat fanfiction.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cod Palace.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cod Tier Gamzee.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Communism!`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Condesce's crotch.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Condesce's selfies.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Constantly breaking Hussie's copyright.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cosplay sex.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cosplayers who do photo shoots in bondage (God bless them).`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cosplayers who don't seal their paint.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Crabdad.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Creative uses for Aradia's whip.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cronus Ampora.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dad Egbert/Dad Crocker.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dad's pipe.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dad's fedora.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Damara Megido wearing white at her wedding.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Damara Megido.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Damara Megido's existence.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dante Basco.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dating exclusively within the fandom.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dave Strider.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dave's throbbing beef truncheon.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A dead Ms. Paint.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Destroying clocks.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Developing a deep fear of the sound of clown horns after becoming a Homestuck.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Dildo of Oglogoth.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dirk Strider.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dirk's self-insert MLP fan character.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Disciple.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Discovering Sollux is red-blue colorblind.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Doc Scratch.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Dolorosa.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A dominant Kankri.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Drawing pornography for Caliborn.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The E%ecutor/Expatri8 Darkleer.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Elf tears.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Equius Zahhak.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Equius's choice ass.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Equius's copy of "Fifty Shades of Neigh."`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Equius's towel.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Equius's used towel pile.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Eridan Ampora.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Eridan crying after pailing Vriska for the first time.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Eridan stripping to make rent.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Eridan's cape.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Eridan's empty quadrants.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Eridan's lowwer half.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Eridan's upper half.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Exiles.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fat Vriska.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Faygo.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Feferi Peixes.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Felt.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fiduspawn.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fifty fucking Nepetas.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Filling all of your quadrants.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Finding grey paint on your bathroom door three weeks after the last meetup.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A five minute video of Cronus giving Kankri a blowjob.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Flighty broads.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Flipping the fuck out.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Game Bro Magazine.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Gamzee Makara.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Gamzee's clown horns.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `gAmZeE'S pOtIoNs: 420 bOoNbUcKs.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Geromy.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Gl'bgolyb. AKA Feferi's fucking lusus.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The glory that is BroJohn.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Going to the bark side.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Grand Highblood.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Grandpa Harley/Grandma English.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Great Hiatus of 2013.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The green sun.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Grimbark Jade.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Groincobblers.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Gross misinterpretations of your favorite character.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The guy who fingered an Ampora.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Handmaid.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hateclown on the side.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Having STRONG surprise buttsex.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hellmurder Island.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The hemospectrum.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hemostuck.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Her Imperious Condescenscion.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Her Imperious Condescension's royal butt-plug collection.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Hilarocaust.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Homesmut Voices.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Homestuck drinking game (do a shot every time someone dies!)`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Homestuck stealing all the fans from Hetalia and then subsequently watching all its fans leave for OFF and Danganronpa.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Homestuck.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Homosuck.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `HONK HONK, MOTHER FUCKER.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Horsearoni.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Horuss Zahhak.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hunk Rump Magazine.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hussie constantly breaking copyright and then telling his fans to not break his copyright.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hussie constantly breaking copyright.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hussie jacking it to our tears of anguish.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Insane Clown Posse.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Jade Harley.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Jade's dog penis and knot.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Jailbreak.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Jake English.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Jake English's assless chaps.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Jake English's choice ass.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Jake English's manhood.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Jane Crocker.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `John Egbert.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `John's Prankster's Gambit.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Just KNOWING that Slick is going to stab Ms. Paint.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Kanaya destroying Cantown.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Kanaya Maryam.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Kanaya's ashen promiscuity.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Kanaya's chainsaw.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Kankri Vantas.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Karkat actually topping, for once.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Karkat and Jade's adorable little of mpreg puppies.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Karkat dying of a burst blood vessel mid-rant.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Karkat going through puberty before every other troll and being, like, nine feet tall.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Karkat Tantrum Bingo.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Karkat Vantas.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Karkat's ragegasm.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Kawaii Yaoi.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Kurloz Makara.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lame bucket jokes.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Latula Pyrope.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Laying back and thinking of Alternia.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Leprechaun m-preg.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Liberty. Reason. Justice. Civility. Edification. Perfection. MAIL.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lil' Cal's dead eyes.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lil' Cal.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lil' Cal's raging boner.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lil' Hal.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lil' Seb.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Little children who poop hard in their baby ass diapers.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The little red arm-swingy-dealy thing or whatever it is called.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lord English.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lord English's peg leg.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lucky Charms.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Maid Equius.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Maple Hoof.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `March Eridan.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Marquise Spinneret Mindfang.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Masturbating while thinking of your OTP.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Maxing out your credit cards to buy Homestuck merchandise.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Mayor.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Meenah Piexes.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The mere concept of the Olive Garden.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Meulin Leijon.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Midnight Crew.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mierfa Durgas.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mierfa Durgas' troll-horn nunchakus.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A mighty wwizard of wwhite science.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mind honey.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mister Dude, Sir Brah, Dood Dude, Vitamin D, Dude Esquire.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mituna Captor.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mom.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `MS Paint Adventures.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Murdering angels.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Muscle beasts.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `My Little Hoofbeast: Moirailigence Is Magic.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nektan Whelan.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Neophyte Redglare.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nepeta Leijon.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nepeta's heat cycle.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nepeta's shipping chart.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Never being able to look at apple juice, milk, buckets, or knitting needles without feeling a little bit uncormfortable.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Never dating a Serket.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nic Cage saying "boner."`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Nicolas Cage body pillow.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Noping the fuck out of there.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Not shipping it.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Only cosplaying male characters when you get pregnant.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Orphaner Dualscar.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Overtaking entire conventions.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A painting of a horse attacking a football player.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `PantsKat.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Paradox slime.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Petstuck.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `PipeFan413.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Plush Rump Magazine.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Plush rump.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Porrim Maryam.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Porrim's condom stash.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Porrim's motherly affections.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Post-apocalyptic shroudwear.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Problem Sleuth.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Psiionic.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A rapist cuttlefish.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Recuperacoon.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The ridiculous fact that some people communicate without luminous rear ends.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Rose and Kanaya snuggling.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Rose Lalonde.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Rose telling John she's a lesbian and they will never be together.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Rose's review of "My Immortal."`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Roxy Lalonde.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Rufio.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Rufioh Nitram.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sacred leggings.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `SBAHJ hentai doujinshi.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Schrödinger's Nepeta.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `SCIENCE WAND!`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Seadweller dick fins.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Shippers.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Shipping it.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Shipping Olympics.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Shipping the fuck out of something.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ships ending in -cest.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Shitty swords.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Shopping with Terezi.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sick fires.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The significant purposes, biologically speaking, of troll nipples.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Skipping to Act 5.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The slammer.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A slaughtered sperm whale.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sleeping ten people to a room at conventions.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sloppy inter-species makeouts.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A smuppet in Dirk's pants.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Smuppets.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sobbing uncontrollably while reading fanfiction.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sollux Captor.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sollux's bifurcated bone bulge.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sopor pies.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `SORD.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Soul portraits.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Species-swap fanfics.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Spidermom.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Staying up to three AM, cleaning the grey off every surface of your hotel room in a desperate bid to not get fined.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Stealing Tavros's wheelchair.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Strider sandwich.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Stridercest.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Sufferer/The Signless.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sugoi Yuri.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Summoner.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The sweat-drenched, rippling muscles of several truly majestically endowed hoofbeasts.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `sweet bro and hell jeff.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `TAB.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tavros Nitram.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tavros's wheelchair.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Telling Sollux what happens to male bees after sex.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tentabulges.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tentative thank-you stabs.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Terezi Pyrope.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `That dead crow with the sword through it.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `That human vacation with the giant red chimney-ass-hole.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `That shitty apple.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `That wonderful feeling when you take off your binder.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The "special attachments" we ALL know that Equius gave to AradiaBot.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Toilet displacement.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Topping from the bottom.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Triggers.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Troll blood.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Troll horns.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Troll Will Smith.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Trolls misunderstanding what "Bucket List" means.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tumblr spoilers.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tumblr user Egberts.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tumblr user Pizza.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tumblr.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Unreal air.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `UPD8!!!!!!!!`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `UPS delivery woman Nepeta.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Viceroy Bubbles von Salamancer.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Vodka Mutini.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Vodka.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Vriska dying after being stabbed by Terezi.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Vriska Serket.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Vriska's SEXY sex tips for having SEXY SEX!`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A VrisKan waffle.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Warhammer of Zillyhoo.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `What pumpkin?`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `When your favorite character dies.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `where MAKING THIS HAPEN`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Willingly filling buckets with Eridan.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `World building!`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Wrinklefucker.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Your 300 pound matronly freight-train.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Your lusus giving you "The Talk."`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Your Mary Sue fantroll.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Your privilege.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Your significant other coming home and finding you in full grey cosplay.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Beating the shit out of Terezi.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Jake English standing there like a fucking idiot.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Falling into a pool of lava.`,
      watermark: `MSPA`,
      cardSetId: insertResult.result![0].id
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.delete('black_card', {
      text: `What is your OT3?`,
      draw: 2,
      pick: 3,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `____ makes the Homestuck fandom uncomfortable.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `____ stays awake at night, crying over ____.`,
      draw: 0,
      pick: 2,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `____. It keeps happening!`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `"Sacred leggings" was a mistranslation. The Sufferer actually died in Sacred ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `After throwing ____ at Karkat's head, Dave made the intriguing discover that troll horns are very sensitive.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `AG: Who needs luck when you have ____?`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `All ____. All of it!`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `Alternia's political system was based upon ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `Believe it or not, Kankri's biggest trigger is ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `Dave Strider likes ____, but only ironically.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `Equius beats up Eridan for ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `Feferi secretly hates ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `For Betty Crocker's latest ad campaign/brainwashing scheme, she is using ____ as inspiration.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `For his birthday, Dave gave John ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `Fuckin' ____. How do they work?`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `Gamzee not only likes using his clubs for juggling and strifing, he also uses them for____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `Getting a friend to read Homestuck is like ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `How do I live without ____?`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `Hussie died on his quest bed and rose as the fully realized ____ of ____.`,
      draw: 0,
      pick: 2,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `Hussie unintentionally revealed that Homestuck will end with ____ and ____ consummating their relationship at last.`,
      draw: 0,
      pick: 2,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `I am ____. It's me.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `I finally became Tumblr famous when I released a gifset of ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `I just found ____ in my closet it is like fucking christmas up in here.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `I warned you about ____, bro! I told you, dog!`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `In the final battle, John distracts Lord English by showing him ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `It's hard, being ____. It's hard and no one understands.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `John is a good boy. And he loves ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `John may not be a homosexual, but he has a serious thing for ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `Kanaya reached into her dead lusus's stomach and retrieved ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `Kanaya tells Karkat about ____ to cheer him up.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `Karkat gave our universe ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `Latula and Porrin have decided to teach Kankri about the wonders of ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `Little did they know, the key to defeating Lord English was actually ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `Little known fact: Kurloz's stitching is actually made out of ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `Nanna baked a cake for John to commemorate ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `Nepeta only likes Karkat for his ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `Nepeta's secret OTP is ____ with ____.`,
      draw: 0,
      pick: 2,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `The next thing Hussie will turn into a sex joke will be ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `Nobody was surprised to find ____ under Jade's skirt. The surprise was she used it for/on ____.`,
      draw: 0,
      pick: 2,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `The only way to beat Vriska in an eating contest is to put ____ on the table.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `Porrim made Kankri a sweater to cover his ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `Problem Sleuth had a hard time investigating ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `The real reason Terezi stabbed Vriska was to punish her for ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `Rose was rather disgusted when she started reading about ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `The secret way to achieve God Tier is to die on top of ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `Terezi can top anyone except ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `The thing that made Kankri break his vow of celibacy was ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `Turns out, pre-entry prototyping with ____ was not the best idea.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `Vriska killed Spidermom with ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `Vriska roleplays ____ with Terezi as ____.`,
      draw: 0,
      pick: 2,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `Vriska's greatest regret is ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `Wear  ____. Be ____.`,
      draw: 0,
      pick: 2,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `What did Jake get Dirk for his birthday?`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `What is the worst thing that Terezi ever licked?`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `What makes your kokoro go "doki doki"?`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `What's in the box, Jack?`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `When a bucket is unavailable, trolls with use ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `When Dave received ____ from his Bro for his 9th birthday, be felt a little warm inside.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `The hole in Kanaya's stomach is so large, she can fit ____ in it.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `where doing it man. where MAKING ____ HAPEN!`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `Your name is JOHN EGBERT and boy do you love ____!`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `____. On the roof. Now.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `____ totally makes me question my sexuality.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `Whenever I see ____ on MSPARP, I disconnect immediately.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `Calliborn wants you to draw pornography of ____.`,
      draw: 0,
      pick: 1,
      watermark: `MSPA`
    });
    await queryRunner.delete('black_card', {
      text: `Everybody out of the god damn way. You've got a heart full of ____, a soul full of ____, and a body full of ____.`,
      draw: 2,
      pick: 3,
      watermark: `MSPA`
    });

    await queryRunner.delete('white_card', {
      text: `... . .-. . -. .. - -.—  (Serenity)`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Rails with pails.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `"Apple Juice."`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `The 7th Gate.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Accidentally touching Gamze's enormous codpiece.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `An acrobatic fucking pirouette.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Alternian fine art.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Alternian rainbow-drinker romance novels.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Andrew Hussie.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Andrew Hussie's lips.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `The animes.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Anonymous Soporifics Support.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Apple Juice.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Aradia Bot.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Aradia Megido.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Aradia's charred, rotting corpse.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Aranea Serket.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Aranea's exposition stand.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Arguing over troll sexuality.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `ARquiusprite's muscles.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Arthour the lusus.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `AVATAR.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Baby Dave.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Bard Quest.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Bec Noir.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Becoming Tumblr famous.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Being fuck deep in meowcats.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Being in a relationship with a non-Homestuck.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Being locked in a Prospitian prison.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Being the other guy.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `BETTY FUCKING CROCKER.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Binge reading every fanfiction for a pairing and then hating yourself a little bit.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `BL1ND JUST1C3.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Blackrom orgies.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Bro and Dave banging while Rose watches.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Bro.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Bro's rapping ventriloquism act.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Bro's death.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `BUCKETS.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `A bull penis cane.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Butler Island.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `C4NDY R3D BLOOD &gt;:]`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Caledscratch.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Caliborn.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Caliginous speed dating.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Calliope.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Can Town.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Cards Against Alternia.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Carlos Maraka.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Casey.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Centaur milk.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Charging down halls, shouting profanities and being silly.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Cherub m-preg.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Cherub mating rituals.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Chest of WHIMSY.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `A chip in your heart that forces you to love.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Cliched JohnKat fanfiction.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Cod Palace.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Cod Tier Gamzee.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Communism!`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `The Condesce's crotch.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `The Condesce's selfies.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Constantly breaking Hussie's copyright.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Cosplay sex.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Cosplayers who do photo shoots in bondage (God bless them).`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Cosplayers who don't seal their paint.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Crabdad.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Creative uses for Aradia's whip.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Cronus Ampora.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Dad Egbert/Dad Crocker.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Dad's pipe.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Dad's fedora.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Damara Megido wearing white at her wedding.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Damara Megido.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Damara Megido's existence.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Dante Basco.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Dating exclusively within the fandom.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Dave Strider.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Dave's throbbing beef truncheon.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `A dead Ms. Paint.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Destroying clocks.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Developing a deep fear of the sound of clown horns after becoming a Homestuck.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `The Dildo of Oglogoth.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Dirk Strider.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Dirk's self-insert MLP fan character.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `The Disciple.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Discovering Sollux is red-blue colorblind.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Doc Scratch.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `The Dolorosa.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `A dominant Kankri.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Drawing pornography for Caliborn.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `The E%ecutor/Expatri8 Darkleer.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Elf tears.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Equius Zahhak.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Equius's choice ass.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Equius's copy of "Fifty Shades of Neigh."`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Equius's towel.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Equius's used towel pile.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Eridan Ampora.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Eridan crying after pailing Vriska for the first time.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Eridan stripping to make rent.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Eridan's cape.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Eridan's empty quadrants.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Eridan's lowwer half.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Eridan's upper half.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `The Exiles.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Fat Vriska.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Faygo.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Feferi Peixes.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `The Felt.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Fiduspawn.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Fifty fucking Nepetas.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Filling all of your quadrants.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Finding grey paint on your bathroom door three weeks after the last meetup.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `A five minute video of Cronus giving Kankri a blowjob.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Flighty broads.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Flipping the fuck out.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Game Bro Magazine.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Gamzee Makara.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Gamzee's clown horns.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `gAmZeE'S pOtIoNs: 420 bOoNbUcKs.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Geromy.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Gl'bgolyb. AKA Feferi's fucking lusus.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `The glory that is BroJohn.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Going to the bark side.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `The Grand Highblood.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Grandpa Harley/Grandma English.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `The Great Hiatus of 2013.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `The green sun.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Grimbark Jade.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Groincobblers.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Gross misinterpretations of your favorite character.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `The guy who fingered an Ampora.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `The Handmaid.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Hateclown on the side.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Having STRONG surprise buttsex.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Hellmurder Island.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `The hemospectrum.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Hemostuck.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Her Imperious Condescenscion.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Her Imperious Condescension's royal butt-plug collection.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `The Hilarocaust.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Homesmut Voices.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `The Homestuck drinking game (do a shot every time someone dies!)`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Homestuck stealing all the fans from Hetalia and then subsequently watching all its fans leave for OFF and Danganronpa.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Homestuck.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Homosuck.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `HONK HONK, MOTHER FUCKER.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Horsearoni.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Horuss Zahhak.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Hunk Rump Magazine.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Hussie constantly breaking copyright and then telling his fans to not break his copyright.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Hussie constantly breaking copyright.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Hussie jacking it to our tears of anguish.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `The Insane Clown Posse.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Jade Harley.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Jade's dog penis and knot.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Jailbreak.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Jake English.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Jake English's assless chaps.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Jake English's choice ass.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Jake English's manhood.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Jane Crocker.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `John Egbert.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `John's Prankster's Gambit.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Just KNOWING that Slick is going to stab Ms. Paint.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Kanaya destroying Cantown.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Kanaya Maryam.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Kanaya's ashen promiscuity.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Kanaya's chainsaw.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Kankri Vantas.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Karkat actually topping, for once.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Karkat and Jade's adorable little of mpreg puppies.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Karkat dying of a burst blood vessel mid-rant.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Karkat going through puberty before every other troll and being, like, nine feet tall.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Karkat Tantrum Bingo.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Karkat Vantas.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Karkat's ragegasm.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Kawaii Yaoi.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Kurloz Makara.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Lame bucket jokes.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Latula Pyrope.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Laying back and thinking of Alternia.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Leprechaun m-preg.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Liberty. Reason. Justice. Civility. Edification. Perfection. MAIL.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Lil' Cal's dead eyes.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Lil' Cal.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Lil' Cal's raging boner.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Lil' Hal.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Lil' Seb.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Little children who poop hard in their baby ass diapers.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `The little red arm-swingy-dealy thing or whatever it is called.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Lord English.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Lord English's peg leg.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Lucky Charms.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Maid Equius.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Maple Hoof.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `March Eridan.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `The Marquise Spinneret Mindfang.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Masturbating while thinking of your OTP.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Maxing out your credit cards to buy Homestuck merchandise.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `The Mayor.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Meenah Piexes.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `The mere concept of the Olive Garden.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Meulin Leijon.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `The Midnight Crew.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Mierfa Durgas.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Mierfa Durgas' troll-horn nunchakus.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `A mighty wwizard of wwhite science.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Mind honey.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Mister Dude, Sir Brah, Dood Dude, Vitamin D, Dude Esquire.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Mituna Captor.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Mom.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `MS Paint Adventures.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Murdering angels.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Muscle beasts.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `My Little Hoofbeast: Moirailigence Is Magic.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Nektan Whelan.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Neophyte Redglare.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Nepeta Leijon.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Nepeta's heat cycle.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Nepeta's shipping chart.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Never being able to look at apple juice, milk, buckets, or knitting needles without feeling a little bit uncormfortable.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Never dating a Serket.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Nic Cage saying "boner."`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `A Nicolas Cage body pillow.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Noping the fuck out of there.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Not shipping it.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Only cosplaying male characters when you get pregnant.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `The Orphaner Dualscar.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Overtaking entire conventions.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `A painting of a horse attacking a football player.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `PantsKat.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Paradox slime.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Petstuck.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `PipeFan413.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Plush Rump Magazine.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Plush rump.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Porrim Maryam.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Porrim's condom stash.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Porrim's motherly affections.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Post-apocalyptic shroudwear.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Problem Sleuth.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `The Psiionic.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `A rapist cuttlefish.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Recuperacoon.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `The ridiculous fact that some people communicate without luminous rear ends.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Rose and Kanaya snuggling.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Rose Lalonde.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Rose telling John she's a lesbian and they will never be together.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Rose's review of "My Immortal."`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Roxy Lalonde.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Rufio.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Rufioh Nitram.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Sacred leggings.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `SBAHJ hentai doujinshi.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Schrödinger's Nepeta.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `SCIENCE WAND!`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Seadweller dick fins.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Shippers.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Shipping it.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `The Shipping Olympics.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Shipping the fuck out of something.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Ships ending in -cest.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Shitty swords.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Shopping with Terezi.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Sick fires.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `The significant purposes, biologically speaking, of troll nipples.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Skipping to Act 5.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `The slammer.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `A slaughtered sperm whale.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Sleeping ten people to a room at conventions.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Sloppy inter-species makeouts.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `A smuppet in Dirk's pants.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Smuppets.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Sobbing uncontrollably while reading fanfiction.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Sollux Captor.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Sollux's bifurcated bone bulge.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Sopor pies.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `SORD.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Soul portraits.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Species-swap fanfics.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Spidermom.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Staying up to three AM, cleaning the grey off every surface of your hotel room in a desperate bid to not get fined.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Stealing Tavros's wheelchair.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `A Strider sandwich.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Stridercest.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `The Sufferer/The Signless.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Sugoi Yuri.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `The Summoner.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `The sweat-drenched, rippling muscles of several truly majestically endowed hoofbeasts.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `sweet bro and hell jeff.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `TAB.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Tavros Nitram.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Tavros's wheelchair.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Telling Sollux what happens to male bees after sex.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Tentabulges.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Tentative thank-you stabs.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Terezi Pyrope.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `That dead crow with the sword through it.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `That human vacation with the giant red chimney-ass-hole.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `That shitty apple.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `That wonderful feeling when you take off your binder.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `The "special attachments" we ALL know that Equius gave to AradiaBot.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Toilet displacement.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Topping from the bottom.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Triggers.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Troll blood.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Troll horns.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Troll Will Smith.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Trolls misunderstanding what "Bucket List" means.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Tumblr spoilers.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Tumblr user Egberts.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Tumblr user Pizza.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Tumblr.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Unreal air.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `UPD8!!!!!!!!`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `UPS delivery woman Nepeta.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Viceroy Bubbles von Salamancer.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Vodka Mutini.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Vodka.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Vriska dying after being stabbed by Terezi.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Vriska Serket.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Vriska's SEXY sex tips for having SEXY SEX!`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `A VrisKan waffle.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Warhammer of Zillyhoo.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `What pumpkin?`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `When your favorite character dies.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `where MAKING THIS HAPEN`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Willingly filling buckets with Eridan.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `World building!`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `The Wrinklefucker.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Your 300 pound matronly freight-train.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Your lusus giving you "The Talk."`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Your Mary Sue fantroll.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Your privilege.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Your significant other coming home and finding you in full grey cosplay.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Beating the shit out of Terezi.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Jake English standing there like a fucking idiot.`,
      watermark: `MSPA`
    });
    await queryRunner.delete('white_card', {
      text: `Falling into a pool of lava.`,
      watermark: `MSPA`
    });

    await queryRunner.delete('card_set', {
      name: `[C] Cards Against Homestuck`,
      baseDeck: false,
      description: null,
      weight: 526,
      active: true
    });
  }
}
