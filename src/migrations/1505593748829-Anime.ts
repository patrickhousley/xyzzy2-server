/* tslint:disable:no-non-null-assertion no-unsafe-any no-any no-unnecessary-type-assertion */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Anime1505593748829 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const insertResult = await queryRunner.insert('card_set', {
      name: `[C] Anime`,
      baseDeck: true,
      description: `http://www.desudesbrigade.com/`,
      weight: 506,
      active: true
    });

    await queryRunner.insert('black_card', {
      text: `Vegeta, what does the scouter say?`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____. BELIEVE IT!`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Make a contract with me, and become ____!`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `You guys are so wrong. Obviously, ____ is best waifu.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In the latest chapter of Toriko, our hero hunts down, kills, and eats a creature made entirely of ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `THIS ____ HAS BEEN PASSED DOWN THE ARMSTRONG FAMILY LINE FOR GENERATIONS!!!`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `My favorite episode of ____ is the one with ____.`,
      draw: 0,
      pick: 2,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Make a yaoi shipping.`,
      draw: 0,
      pick: 2,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `This doujinshi I just bought has ____ and ____ getting it on, hardcore.`,
      draw: 0,
      pick: 2,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `On the next episode of Dragon Ball Z, ____ is forced to do the fusion dance with ____.`,
      draw: 0,
      pick: 2,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `You are already ____.`,
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
      text: `____. YOU SHOULD BE WATCHING.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Fresh from Japan: The new smash hit single by ____ titled ____.`,
      draw: 0,
      pick: 2,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ vs. ____. BEST. FIGHT. EVER.`,
      draw: 0,
      pick: 2,
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
      text: `When it comes to hentai, nothing gets me hotter than ____.`,
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
      text: `S-Shut up!! I-It's not like I'm ____ or anything.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The English dub of ____ sucks worse than ____.`,
      draw: 0,
      pick: 2,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What is mo&eacute;?`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Hayao Miyazaki's latest family film is about a young boy befriending ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Congratulations, ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `By far the best panel at any anime convention is the one for ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `One thing you almost never see in anime is ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The rarest Pok&eacute;mon in my collection is ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What do I hate most about anime?`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Mamoru Oshii's latest film is a slow-paced, two hour-long cerebral piece about the horrors of ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What do I love most about anime?`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `This morning, hundreds of Japanese otaku lined up outside their favorite store to buy the limited collector's edition of ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Every now and then, I like to participate in the time-honored Japanese tradition of ____.`,
      draw: 0,
      pick: 1,
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
      text: `Watch it! Or I'll take your ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `New from Studio GAINAX: ____ the Animation.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Using my power of Geass, I command you to do... THIS!`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Chicks. Dig. ____. <i>Nice.</i>`,
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
      text: `The next big Tokusatsu show: "Super Sentai ____ Ranger!"`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In the name of the moon, I will punish ____!`,
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
      text: `Don't worry, he's okay! He survived thanks to ____.`,
      draw: 0,
      pick: 1,
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
      text: `In the latest chapter of Golgo 13, he kills his target with ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Welcome home, Master! Is there anything your servant girl can bring you today?`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In the latest episode of Case Closed, Conan deduces that it was ____ who killed ____ because of ____.`,
      draw: 2,
      pick: 3,
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
      text: `Take this! My love, my anger, and all of my ____!`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Karaoke night! I'm totally gonna sing my favorite song, ____.`,
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
      text: `Now! Face my ultimate attack!`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Behold the name of my Zanpakuto, ____!`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `From the twisted mind of Nabeshin: An anime about ____, ____, and ____.`,
      draw: 2,
      pick: 3,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____. Only on Toonami`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I am in despair! ____ has left me in despair!`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The new manga from ____ is about a highschool girl discovering ____.`,
      draw: 0,
      pick: 2,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `To save the world, you must collect all 7 ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Sasuke has ____ implants.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In truth, the EVA units are actually powered by the souls of ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Dreaming! Don't give it up ____! Dreaming! Don't give it up ____! Dreaming! Don't give it up ____!`,
      draw: 2,
      pick: 3,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Lupin the III's latest caper involves him trying to steal ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The new Gurren Lagann blurays from Aniplex will literally cost you ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The most overused anime cliche is ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The inspiration behind the latest hit show is ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `While writing Dragon Ball, Akira Toriyama would occasionally take a break from working to enjoy ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The show was great, until ____ showed up.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Nothing ruins a good anime faster than ____.`,
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
      text: `I want to be the very best, like no one ever was! ____ is my real test, ____ is my cause!`,
      draw: 0,
      pick: 2,
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
      text: `Who are you callin' ____ so short he can't see over his own ____?!?!`,
      draw: 0,
      pick: 2,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `If you ask me, there need to be more shows about ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____. That is the kind of man I was.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I'm sorry! I'm sorry! I didn't mean to accidentally walk in on you while you were ____!`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `After a long, arduous battle, ____ finally met their end by ____.`,
      draw: 0,
      pick: 2,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `This is our final battle. Mark my words, I will defeat you, ____!`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `You used ____. It's super effective!`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The best English dub I've ever heard is the one for ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I know of opinions and all that, but I just don't understand how anyone could actually enjoy ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____. HE DEDD.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `She'll thaw out if you try ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `You see, I'm simply ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Yoko Kanno's latest musical score features a song sung entirely by ____.`,
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
      text: `This year, I totally lucked out and found ____ in the dealer's room.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `How did I avoid your attack? Simple. By ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `If I was a magical girl, my cute mascot sidekick would be ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `From the creators of Tiger &amp; Bunny: ____ &amp; ____!!`,
      draw: 0,
      pick: 2,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In the future of 199X, the barrier between our world and the demon world is broken, and thousands of monsters invade our realm to feed upon ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Animation studio ____ is perhaps best known for ____.`,
      draw: 0,
      pick: 2,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____. So kawaii!! &lt;3 &lt;3`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The most annoying kind of anime fans are ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Cooking is so fun! Cooking is so fun! Now it's time to take a break and see what we have done! ____. YAY! IT'S READY!!`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `My favorite hentai is the one where ____ is held down and violated by ____.`,
      draw: 0,
      pick: 2,
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
      text: `This year, I'm totally gonna cosplay as ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Coming to Neon Alley: ____, completely UNCUT &amp; UNCENSORED.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `No matter how many times I see it, ____ always brings a tear to my eye.`,
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
      text: `Who placed first in the most recent Shonen Jump popularity poll?`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Someday when I have kids, I want to share with them the joys of ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `So, what have you learned from all of this?`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In this episode of Master Keaton, Keaton builds ____ out of ____ and ____.`,
      draw: 2,
      pick: 3,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The World Line was changed when I sent a D-mail to myself about ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `My ____ is the ____ that will pierce the heavens!!  <i>*same white card used for both blanks*</i>`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `After years of searching, the crew of the Thousand Sunny finally found out that the One Piece is actually ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `When I found all 7 Dragon Balls, Shenron granted me my wish for ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The best part of my ____ costume is ____.`,
      draw: 0,
      pick: 2,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Cards Against Anime: It's more fun than ____!`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `On the mean streets of Tokyo, everyone knows that ____ is the leader of the ________ Gang.`,
      draw: 0,
      pick: 2,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `He might just save the universe, if he only had some ____!`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `So just who is this Henry Goto fellow, anyway?`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `When Henry Goto is alone and thinks that no one's looking, he secretly enjoys ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Dr. Black Jack, please hurry! The patient is suffering from a terminal case of ____!`,
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
      text: `Make a love triangle.`,
      draw: 2,
      pick: 3,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `This ____ of mine glows with an awesome power! Its ____ tells me to defeat you!`,
      draw: 0,
      pick: 2,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Yo-Ho-Ho! He took a bite of ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`,
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
      text: `Kyubey.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Weeaboos.`,
      watermark: `AN`,
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
      text: `Aniplex of America.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Steve Motherfuckin' Blum.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Norio Wakamoto.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tentacle rape.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Eating an entire box of Pocky in a single bite.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lolis.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hot-blooded shonen protagonists.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Crispin Freeman.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A fuck-mothering vampire.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A big-breasted 14-year-old wearing a bikini and sucking on a popsicle.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Henry Goto being savagely raped by a bear.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Yet another goddamn Goku vs. Superman argument.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `FANSERVICE!!!`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Gen Fukunaga counting his money.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `FUNimation.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hatsune Miku.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Strangling hardcore otaku nerds with razor wire.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Aya Hirano being gang-banged by her entire band.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bukkake.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `OVER 9000!!`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Little Kuriboh.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bulma's panties.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mami getting her head bitten off.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Captain Harlock body pillow.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Onii-chan.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `MAWNING LESCUE!!!`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Idiots who don't seem to realize that Avatar: The Last Airbender isn't really an anime.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Christopher R. Sabat.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `PASTAAAAA!!!!`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Johnny Yong Bosch.`,
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
      text: `$300 anime bluray boxsets.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Man-Faye.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `DAN GREEN.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `"WE UNDERSTAND ANIME FAN WANTS!!"`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dio Brando.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hokuto! Hyakurestu-ken!`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Vic Micderpaderp.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Goku.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Soldier A.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Red-headed tsunderes.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `That sound effect in every hentai when the guy ejaculates.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sarah Fuckin' Palin.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Edward Wong Hau Pepelu Tivruski IV.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `"Bang."`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Prof's legs.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Naruto.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Wendee Lee.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Rice balls.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Monkey D. Luffy.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `JesuOtaku's ginormous lips.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Princess Tutu.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fujiko's boobs.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Vash the Stampede.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Shinji being a whiny little bitch.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Third Impact.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Kenshiro.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Puella Magi Madoka Magica.`,
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
      text: `Taking a potato chip... and EATING IT.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Unreasonably long transformation sequences.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ass dance!! Ass dance!!`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Stupid fucking Kululu.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `CENTURY SOOOOUUUP!!!!!`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Gripper.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Thinking Misty from Pok&eacute;mon is... kinda sexy.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Garzey's Wing.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Reverse harems.`,
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
      text: `Sir Integra Fairbrook Wingates Hellsing.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Wearing panties on the head.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Brina Palencia as an angsty teenage boy, Monica Rial as his bratty little sister, and Shelley Calene-Black as their hot mom.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `CARD GAMES ON MOTORCYCLES.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nice boat.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Boku no Pico.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The One Piece rap.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Bleach hentai doujin where Rukia rapes Ichigo.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Walpurgisnacht.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bludgeoning Haruhi Suzumiya to death with a tire iron.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Girls with glasses.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Eating the wrong end of a chocolate cornet.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Being eaten by a titan.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Casca's hairy unshaven vag.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tits on your hand.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `That little fat kid from Accel World.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Death Note.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A "read the manga" style ending.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Giant robots.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Osamu Tezuka.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Studio Ghibli.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Masa! <3`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `THE MAN-POLE OF <i>DOOOOOOOOOM!!!</i>`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ladd Russo.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Home For Infinite Losers (HFIL).`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Moe Moe Kyun!`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `El Psy Congroo.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sailor Moon and the 7 Ballz.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Gratuitous panty shots.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sucking Kyle Hebert's dick for hamburgers.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cartoon buttholes.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Muscle-bound shirtless MEN.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Recap episodes.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An overly defensive fanbase.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fuckin' Bronies.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Groping strangers on a train.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `My Cresta.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nerdy kids in Speedos.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bad K-on! fanart.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `That stupid opening song from Steel Angel Kurumi getting stuck in your head.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mamoru Miyano.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Hello Kitty! vibrator.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `TETSUOOOOOO!!!`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Wibble.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Black cosplayers.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fake Nendoroids.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Eating ramen noodles for a month because you HAD to have that out of print Macross boxset.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Showing Serial Experiments Lain to toddlers.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A mindfuck.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A puppy being beaten to death with a flower pot.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Gantz. Just.... Gantz.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Snapping the nipple off of a prostitute's breast and eating it.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Panty &amp; Stocking with Garterbelt.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Punching a man so hard his clothes fly off.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Banana sushi.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Oro?`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Creamy Mami.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Whatever the hell the Utena movie was about.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Carl Macek.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The ungodly abomination that is Robotech.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Kira worshippers.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The thousands upon thousands of women that Golgo 13 has slept with.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Uguu...`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Old man dragon dick.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Apocalypse Zero.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ikki Tousen.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `". . . ."`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The inevitable beach episode.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Japanese schoolgirl covered head-to-toe in semen.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Satoshi Kon.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Kigurumi.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Good ol' fashioned Japanese sexism.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Guro.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dr. Who fans showing up at anime cons despite not being invited.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Plot armor.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nekomimi.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pure grade-A opium.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Banging 1,000 dudes.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A drunken Japanese businessman.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Maid cafes.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Host clubs.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Shooting out nearly an entire liter of cum.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Hare Hare Yukai dance.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Shining Finger!`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The inkvasion.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `School swimsuits.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Underpants. Underpants. Underpants. Underpants. Under-`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Acidic breast milk.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Kamen Rider.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Major's hips and bust.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Captain Bravo.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Kirino's ass.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Crystal Boy's creepy smile.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Gackt.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Used panty vending machines.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Butt sniffing.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Vegeta's sweet goatee.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sub-only releases.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting drunk on sake.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Flying Vortex of Fear.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fishcake.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Go Nagai sideburns.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `<i>CHIIIIIIIIN.</i>`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting the bad ending of a visual novel.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Tsukihime anime.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Jacuzzi Splot.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Juvijuvibro.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bear punching, tiger chopping, shark suplexing, &amp; helicopter bodyslamming.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting your penis cut in half.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Stupid sexy Johan.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Naoki Urasawa.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tachikoma-kun.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dancin' on the Planet Dance.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Super Milk-chan.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `You dumbass!`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Being the uke.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The power of friendship.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An arm and a leg.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The entire cast of School Days.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Giant naked Rei.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Masturbating over Asuka's comatose body.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Let's Fighting Love!`,
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
      text: `Making someone's head explode.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Michelle Ru-<br>er, I mean... "Sophie Roberts."`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Calling out the name of your attack.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Multi-episode fights.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `M.D. Geist.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Blue Water Studios.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Darrel Guilbeau trying to act.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Highschool of the Dead.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Girls with guns.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The goddamn Maho.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fat, sweaty otaku.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ganguro girls.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Magical girls.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hot female bass players.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Goku, Luffy, Toriko, and Lina Inverse in an eating contest.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `BlackStar`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `KING!!! KING!!! KING GAINER!!!<br><i>*does the Monkey*</i>`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `You cactus bastard!`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Underwater Ray Romano.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sexy schoolteacher types.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tig ol' bitties.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lesbian subtext.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Watching FLCL while tripping on acid.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Inspector Zenigata.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pure fighting spirit.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The GARtender.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mad Bull 34.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sticking your finger up her ass.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Freddie riding to school on a wild black stallion.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Whatever turns you on, big guy.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Standing outside the gates of the White House completely naked with a revolver in your hand.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `I'LL ANSWER THE PHONE FROM NOW ON, LILY!!`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `KITTEH. :3`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Manly tears of manliness.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Zetman.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Giant mutant cockroaches.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bible Black.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Rape fantasies.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Keith David's voice.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Scott McNeil.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The eternal pervert, Eric Vale.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Irresponsible Captain Tylor.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Birdy the Mighty.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Prying SpacemanHardy's Master Keaton boxset from his cold, dead hands.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Satan worshipping Christians.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hunting down every single copy of Ninja Resurrection and setting them on fire.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `R-R-R-R-R-REDLINE!!!`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Catholic priests who drink, smoke, and carry guns.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Badass 15-year-olds.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Losing 20 gallons of blood... and surviving.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `One HELL of a butler.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Being beaten to a bloody pulp by a middle school student.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Anime News Network.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Having blackmail sex with your teacher.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A large paper fan.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Shikon Jewel.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `"INUYASHA!!"<br>"KAGOME!!"`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sneaking a peek at the girls' open bath.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Revy Two-Hands.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Claymore swimsuit issue.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A samurai terminator.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Physics.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Gangnam Style.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `MUNGLE!!<br><i>*shakes fist*</i>`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A talking motorcycle.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Rie Kugimiya.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Animatrix.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Your virgin soul.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Franky's awesome Speedo dance.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Soul traveling.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Production I.G.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `GONZO.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Really shitty CGI effects.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The hot buttered sex voice of Patrick Seitz.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sticking a chopstick in your pee-hole.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A copy of Trigun signed by Micah Solusod.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Gilgamesh.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `That one guy who always dresses up as the Red Ranger.`,
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
      text: `Madhouse.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `ARMS.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mr. Tadakichi.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Showing episodes of Toriko to starving children.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Governor Ishihara.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Shrine maidens.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Taking a shit in the shrine's donation box.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Farting... tadpoles?`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Heavily-tattooed yakuza henchmen.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The life-sized Gundam statue.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Forcing someone to watch every episode of Dragon Ball GT.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `ZA WARUDO.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Eating a banana all sexy-like.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Awesome Prussia.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ora! Ora! Ora! Ora! Ora! Ora! Ora! Ora! Ora! Ora! Ora! Ora! Ora! Ora! Ora! Ora! Ora! Ora! Ora! Ora! Ora! Ora! Ora! Ora!`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A shitload of yen.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Johannes Krauser II.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Raccoon testicles.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Beautiful bishonen boys.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Rule 63'd Death the Kid.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hetalia porn.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `1,000 years of pain.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Rally Vincent firing a gun in her underwear.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Maka Chop.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Twincest.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Broken-ass Aizen.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Garden of Sinners.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Romi Paku.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `My Johnny!`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Petite Princess Yucie.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ice cold water<br>(and it's only a dollar).`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Me wearing a penguin suit.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Farting on your cat.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Combat afros.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A brand new, mint condition copy of JoJo's Bizarre Adventure vol. 4, still in shrinkwrap.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Grave of the Fireflies.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Strapping hand grenades to your pubes.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Toilet worship.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `My badass numchucks.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Trying to get your die-cast Gundam model through airport security.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Black&#x2605;Star`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Octopus balls.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting in a fistfight with an earthquake.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `WcDonald's.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Undead body-swapping space vampire teens.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The alpha bitch.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Eating someone else's drool.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `My hot zombie girlfriend..`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Puppets made from the skin of children.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Swallowing an entire carton of cigarettes before barfing them back up.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Giving a girl an orgasm using only your shoulderpads.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Being accidentally turned into a girl by aliens.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ghosts that come out of your asscrack.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `#DesuDes4Life.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fucking a nun.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Raping Tokyo Tower.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A succubus living inside your testes.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Saber Starblast.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An argument lasting over an hour about what mo&eacute; really is.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Kotetsu T. Kaburagi, aka. "The D.I.L.F."`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Japanese Spider-Man.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A bass guitar straight to the face.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sonny Strait's manly parts.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Asian cock.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Guts.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Holy dildos.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Finger nigiri.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dragon Balls.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Drills for hands.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Suplexing your teacher.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A leopard print fundoshi.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Breast envy.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The entire last episode of Blood-C.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Origami sex toys.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `ALL OF THE HOMO!`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Japanese rope bondage.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Griffith's mysterious disappearing penis.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Naughty geishas.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ninjas!`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pubic hair needle attack.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sexy jutsu.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting your fingernails ripped out.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Shinichiro Watanabe single-handedly curing cancer, ending world hunger, and bringing peace to the Middle East.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Love Machine.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Rapping samurai.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Putting all the condiments on your steak. ALL OF THEM.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Naga's extremely annoying laugh.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A dolphin in a mech suit.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Flying Nimbus.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Strikeman and his "Balls of Justice".`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A busty, blonde, blue-eyed, dumb-as-rocks American.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Running during the credits.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Red bean paste.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Gender-swapped Oda Nobunaga.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cutting off a finger to restore your honor.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Robots with tits.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Henry Goto.`,
      watermark: `AN:HG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Henry Goto having an accident in his pants during the live Aniplex of America panel.`,
      watermark: `AN:HG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Henry Goto's massive peyote &amp; wine cooler addiction.`,
      watermark: `AN:HG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Henry Goto, John Sirabella, and Stu Levy in a three man fight to the death.`,
      watermark: `AN:HG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Henry Goto fapping to a photograph of himself.`,
      watermark: `AN:HG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Henry Goto being eaten by a group of backwoods hillbilly cannibals.`,
      watermark: `AN:HG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Henry Goto ending up homeless on the streets and sucking dick for coke.`,
      watermark: `AN:HG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Two gallons of elephant shit being dropped on Henry Goto's desk.`,
      watermark: `AN:HG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Henry Goto falling down the stairs, receiving a massive head injury, and believing he's really Sailor Moon.`,
      watermark: `AN:HG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Henry Goto joke that no one will laugh at other than SpacemanHardy.`,
      watermark: `AN:HG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Henry Goto bleeding profusely from his groin after having his penis bitten off by a 15-year-old Vietnamese prostitute.`,
      watermark: `AN:HG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A 30-year-old man who's obsessed with K-on!`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `LAZAR!`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `I AM AWESOME!!`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting kicked in the nuts by a mermaid.`,
      watermark: `AN`,
      cardSetId: insertResult.result![0].id
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.delete('black_card', {
      text: `Vegeta, what does the scouter say?`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `____. BELIEVE IT!`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `Make a contract with me, and become ____!`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `You guys are so wrong. Obviously, ____ is best waifu.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `In the latest chapter of Toriko, our hero hunts down, kills, and eats a creature made entirely of ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `THIS ____ HAS BEEN PASSED DOWN THE ARMSTRONG FAMILY LINE FOR GENERATIONS!!!`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `My favorite episode of ____ is the one with ____.`,
      draw: 0,
      pick: 2,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `Make a yaoi shipping.`,
      draw: 0,
      pick: 2,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `This doujinshi I just bought has ____ and ____ getting it on, hardcore.`,
      draw: 0,
      pick: 2,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `On the next episode of Dragon Ball Z, ____ is forced to do the fusion dance with ____.`,
      draw: 0,
      pick: 2,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `You are already ____.`,
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
      text: `____. YOU SHOULD BE WATCHING.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `Fresh from Japan: The new smash hit single by ____ titled ____.`,
      draw: 0,
      pick: 2,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `____ vs. ____. BEST. FIGHT. EVER.`,
      draw: 0,
      pick: 2,
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
      text: `When it comes to hentai, nothing gets me hotter than ____.`,
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
      text: `S-Shut up!! I-It's not like I'm ____ or anything.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `The English dub of ____ sucks worse than ____.`,
      draw: 0,
      pick: 2,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `What is mo&eacute;?`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `Hayao Miyazaki's latest family film is about a young boy befriending ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `Congratulations, ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `By far the best panel at any anime convention is the one for ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `One thing you almost never see in anime is ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `The rarest Pok&eacute;mon in my collection is ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `What do I hate most about anime?`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `Mamoru Oshii's latest film is a slow-paced, two hour-long cerebral piece about the horrors of ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `What do I love most about anime?`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `This morning, hundreds of Japanese otaku lined up outside their favorite store to buy the limited collector's edition of ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `Every now and then, I like to participate in the time-honored Japanese tradition of ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `There are guilty pleasures. And then there's ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `Watch it! Or I'll take your ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `New from Studio GAINAX: ____ the Animation.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `Using my power of Geass, I command you to do... THIS!`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `Chicks. Dig. ____. <i>Nice.</i>`,
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
      text: `The next big Tokusatsu show: "Super Sentai ____ Ranger!"`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `In the name of the moon, I will punish ____!`,
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
      text: `Don't worry, he's okay! He survived thanks to ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `____. Goddammit, Japan.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `In the latest chapter of Golgo 13, he kills his target with ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `Welcome home, Master! Is there anything your servant girl can bring you today?`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `In the latest episode of Case Closed, Conan deduces that it was ____ who killed ____ because of ____.`,
      draw: 2,
      pick: 3,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `I have never in my life laughed harder than the first time I watched ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `Take this! My love, my anger, and all of my ____!`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `Karaoke night! I'm totally gonna sing my favorite song, ____.`,
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
      text: `Now! Face my ultimate attack!`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `Behold the name of my Zanpakuto, ____!`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `From the twisted mind of Nabeshin: An anime about ____, ____, and ____.`,
      draw: 2,
      pick: 3,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `____. Only on Toonami`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `I am in despair! ____ has left me in despair!`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `The new manga from ____ is about a highschool girl discovering ____.`,
      draw: 0,
      pick: 2,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `To save the world, you must collect all 7 ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `Sasuke has ____ implants.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `In truth, the EVA units are actually powered by the souls of ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `Dreaming! Don't give it up ____! Dreaming! Don't give it up ____! Dreaming! Don't give it up ____!`,
      draw: 2,
      pick: 3,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `Lupin the III's latest caper involves him trying to steal ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `The new Gurren Lagann blurays from Aniplex will literally cost you ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `The most overused anime cliche is ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `The inspiration behind the latest hit show is ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `While writing Dragon Ball, Akira Toriyama would occasionally take a break from working to enjoy ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `The show was great, until ____ showed up.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `Nothing ruins a good anime faster than ____.`,
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
      text: `I want to be the very best, like no one ever was! ____ is my real test, ____ is my cause!`,
      draw: 0,
      pick: 2,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `Okay, I'll admit it. I would totally go gay for ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `Who are you callin' ____ so short he can't see over his own ____?!?!`,
      draw: 0,
      pick: 2,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `If you ask me, there need to be more shows about ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `____. That is the kind of man I was.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `I'm sorry! I'm sorry! I didn't mean to accidentally walk in on you while you were ____!`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `After a long, arduous battle, ____ finally met their end by ____.`,
      draw: 0,
      pick: 2,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `This is our final battle. Mark my words, I will defeat you, ____!`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `You used ____. It's super effective!`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `The best English dub I've ever heard is the one for ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `I know of opinions and all that, but I just don't understand how anyone could actually enjoy ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `____. HE DEDD.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `She'll thaw out if you try ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `You see, I'm simply ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `Yoko Kanno's latest musical score features a song sung entirely by ____.`,
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
      text: `This year, I totally lucked out and found ____ in the dealer's room.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `How did I avoid your attack? Simple. By ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `If I was a magical girl, my cute mascot sidekick would be ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `From the creators of Tiger &amp; Bunny: ____ &amp; ____!!`,
      draw: 0,
      pick: 2,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `In the future of 199X, the barrier between our world and the demon world is broken, and thousands of monsters invade our realm to feed upon ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `Animation studio ____ is perhaps best known for ____.`,
      draw: 0,
      pick: 2,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `____. So kawaii!! &lt;3 &lt;3`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `The most annoying kind of anime fans are ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `Cooking is so fun! Cooking is so fun! Now it's time to take a break and see what we have done! ____. YAY! IT'S READY!!`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `My favorite hentai is the one where ____ is held down and violated by ____.`,
      draw: 0,
      pick: 2,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `The government of Japan recently passed a law that effectively forbids all forms of ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `This year, I'm totally gonna cosplay as ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `Coming to Neon Alley: ____, completely UNCUT &amp; UNCENSORED.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `No matter how many times I see it, ____ always brings a tear to my eye.`,
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
      text: `Who placed first in the most recent Shonen Jump popularity poll?`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `Someday when I have kids, I want to share with them the joys of ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `So, what have you learned from all of this?`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `In this episode of Master Keaton, Keaton builds ____ out of ____ and ____.`,
      draw: 2,
      pick: 3,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `The World Line was changed when I sent a D-mail to myself about ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `My ____ is the ____ that will pierce the heavens!!  <i>*same white card used for both blanks*</i>`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `After years of searching, the crew of the Thousand Sunny finally found out that the One Piece is actually ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `When I found all 7 Dragon Balls, Shenron granted me my wish for ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `The best part of my ____ costume is ____.`,
      draw: 0,
      pick: 2,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `Cards Against Anime: It's more fun than ____!`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `On the mean streets of Tokyo, everyone knows that ____ is the leader of the ________ Gang.`,
      draw: 0,
      pick: 2,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `He might just save the universe, if he only had some ____!`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `So just who is this Henry Goto fellow, anyway?`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `When Henry Goto is alone and thinks that no one's looking, he secretly enjoys ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `Dr. Black Jack, please hurry! The patient is suffering from a terminal case of ____!`,
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
      text: `Make a love triangle.`,
      draw: 2,
      pick: 3,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `This ____ of mine glows with an awesome power! Its ____ tells me to defeat you!`,
      draw: 0,
      pick: 2,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `Yo-Ho-Ho! He took a bite of ____.`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });
    await queryRunner.delete('black_card', {
      text: `Mom, I swear! Despite its name, ____ is NOT a porno!`,
      draw: 0,
      pick: 1,
      watermark: `AN`
    });

    await queryRunner.delete('white_card', {
      text: `Kyubey.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Weeaboos.`,
      watermark: `AN`
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
      text: `Aniplex of America.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Steve Motherfuckin' Blum.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Norio Wakamoto.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Tentacle rape.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Eating an entire box of Pocky in a single bite.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Lolis.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Hot-blooded shonen protagonists.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Crispin Freeman.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `A fuck-mothering vampire.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `A big-breasted 14-year-old wearing a bikini and sucking on a popsicle.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Henry Goto being savagely raped by a bear.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Yet another goddamn Goku vs. Superman argument.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `FANSERVICE!!!`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Gen Fukunaga counting his money.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `FUNimation.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Hatsune Miku.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Strangling hardcore otaku nerds with razor wire.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Aya Hirano being gang-banged by her entire band.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Bukkake.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `OVER 9000!!`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Little Kuriboh.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Bulma's panties.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Mami getting her head bitten off.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `A Captain Harlock body pillow.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Onii-chan.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `MAWNING LESCUE!!!`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Idiots who don't seem to realize that Avatar: The Last Airbender isn't really an anime.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Christopher R. Sabat.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `PASTAAAAA!!!!`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Johnny Yong Bosch.`,
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
      text: `$300 anime bluray boxsets.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Man-Faye.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `DAN GREEN.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `"WE UNDERSTAND ANIME FAN WANTS!!"`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Dio Brando.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Hokuto! Hyakurestu-ken!`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Vic Micderpaderp.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Goku.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Soldier A.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Red-headed tsunderes.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `That sound effect in every hentai when the guy ejaculates.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Sarah Fuckin' Palin.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Edward Wong Hau Pepelu Tivruski IV.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `"Bang."`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Prof's legs.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Naruto.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Wendee Lee.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Rice balls.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Monkey D. Luffy.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `JesuOtaku's ginormous lips.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Princess Tutu.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Fujiko's boobs.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Vash the Stampede.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Shinji being a whiny little bitch.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Third Impact.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Kenshiro.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Puella Magi Madoka Magica.`,
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
      text: `Taking a potato chip... and EATING IT.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Unreasonably long transformation sequences.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Ass dance!! Ass dance!!`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Stupid fucking Kululu.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `CENTURY SOOOOUUUP!!!!!`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `The Gripper.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Thinking Misty from Pok&eacute;mon is... kinda sexy.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Garzey's Wing.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Reverse harems.`,
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
      text: `Sir Integra Fairbrook Wingates Hellsing.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Wearing panties on the head.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Brina Palencia as an angsty teenage boy, Monica Rial as his bratty little sister, and Shelley Calene-Black as their hot mom.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `CARD GAMES ON MOTORCYCLES.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Nice boat.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Boku no Pico.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `The One Piece rap.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `A Bleach hentai doujin where Rukia rapes Ichigo.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Walpurgisnacht.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Bludgeoning Haruhi Suzumiya to death with a tire iron.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Girls with glasses.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Eating the wrong end of a chocolate cornet.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Being eaten by a titan.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Casca's hairy unshaven vag.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Tits on your hand.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `That little fat kid from Accel World.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `The Death Note.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `A "read the manga" style ending.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Giant robots.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Osamu Tezuka.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Studio Ghibli.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Masa! <3`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `THE MAN-POLE OF <i>DOOOOOOOOOM!!!</i>`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Ladd Russo.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Home For Infinite Losers (HFIL).`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Moe Moe Kyun!`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `El Psy Congroo.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Sailor Moon and the 7 Ballz.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Gratuitous panty shots.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Sucking Kyle Hebert's dick for hamburgers.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Cartoon buttholes.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Muscle-bound shirtless MEN.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Recap episodes.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `An overly defensive fanbase.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Fuckin' Bronies.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Groping strangers on a train.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `My Cresta.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Nerdy kids in Speedos.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Bad K-on! fanart.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `That stupid opening song from Steel Angel Kurumi getting stuck in your head.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Mamoru Miyano.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `A Hello Kitty! vibrator.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `TETSUOOOOOO!!!`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Wibble.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Black cosplayers.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Fake Nendoroids.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Eating ramen noodles for a month because you HAD to have that out of print Macross boxset.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Showing Serial Experiments Lain to toddlers.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `A mindfuck.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `A puppy being beaten to death with a flower pot.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Gantz. Just.... Gantz.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Snapping the nipple off of a prostitute's breast and eating it.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Panty &amp; Stocking with Garterbelt.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Punching a man so hard his clothes fly off.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Banana sushi.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Oro?`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Creamy Mami.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Whatever the hell the Utena movie was about.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Carl Macek.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `The ungodly abomination that is Robotech.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Kira worshippers.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `The thousands upon thousands of women that Golgo 13 has slept with.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Uguu...`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Old man dragon dick.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Apocalypse Zero.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Ikki Tousen.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `". . . ."`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `The inevitable beach episode.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `A Japanese schoolgirl covered head-to-toe in semen.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Satoshi Kon.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Kigurumi.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Good ol' fashioned Japanese sexism.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Guro.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Dr. Who fans showing up at anime cons despite not being invited.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Plot armor.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Nekomimi.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Pure grade-A opium.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Banging 1,000 dudes.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `A drunken Japanese businessman.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Maid cafes.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Host clubs.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Shooting out nearly an entire liter of cum.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `The Hare Hare Yukai dance.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Shining Finger!`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `The inkvasion.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `School swimsuits.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Underpants. Underpants. Underpants. Underpants. Under-`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Acidic breast milk.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Kamen Rider.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `The Major's hips and bust.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Captain Bravo.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Kirino's ass.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Crystal Boy's creepy smile.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Gackt.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Used panty vending machines.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Butt sniffing.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Vegeta's sweet goatee.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Sub-only releases.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Getting drunk on sake.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Flying Vortex of Fear.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Fishcake.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Go Nagai sideburns.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `<i>CHIIIIIIIIN.</i>`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Getting the bad ending of a visual novel.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `The Tsukihime anime.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Jacuzzi Splot.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Juvijuvibro.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Bear punching, tiger chopping, shark suplexing, &amp; helicopter bodyslamming.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Getting your penis cut in half.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Stupid sexy Johan.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Naoki Urasawa.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Tachikoma-kun.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Dancin' on the Planet Dance.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Super Milk-chan.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `You dumbass!`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Being the uke.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `The power of friendship.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `An arm and a leg.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `The entire cast of School Days.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Giant naked Rei.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Masturbating over Asuka's comatose body.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Let's Fighting Love!`,
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
      text: `Making someone's head explode.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Michelle Ru-<br>er, I mean... "Sophie Roberts."`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Calling out the name of your attack.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Multi-episode fights.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `M.D. Geist.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Blue Water Studios.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Darrel Guilbeau trying to act.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Highschool of the Dead.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Girls with guns.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `The goddamn Maho.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Fat, sweaty otaku.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Ganguro girls.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Magical girls.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Hot female bass players.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Goku, Luffy, Toriko, and Lina Inverse in an eating contest.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `BlackStar`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `KING!!! KING!!! KING GAINER!!!<br><i>*does the Monkey*</i>`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `You cactus bastard!`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Underwater Ray Romano.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Sexy schoolteacher types.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Tig ol' bitties.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Lesbian subtext.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Watching FLCL while tripping on acid.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Inspector Zenigata.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Pure fighting spirit.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `The GARtender.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Mad Bull 34.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Sticking your finger up her ass.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Freddie riding to school on a wild black stallion.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Whatever turns you on, big guy.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Standing outside the gates of the White House completely naked with a revolver in your hand.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `I'LL ANSWER THE PHONE FROM NOW ON, LILY!!`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `KITTEH. :3`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Manly tears of manliness.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Zetman.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Giant mutant cockroaches.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Bible Black.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Rape fantasies.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Keith David's voice.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Scott McNeil.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `The eternal pervert, Eric Vale.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `The Irresponsible Captain Tylor.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Birdy the Mighty.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Prying SpacemanHardy's Master Keaton boxset from his cold, dead hands.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Satan worshipping Christians.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Hunting down every single copy of Ninja Resurrection and setting them on fire.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `R-R-R-R-R-REDLINE!!!`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Catholic priests who drink, smoke, and carry guns.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Badass 15-year-olds.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Losing 20 gallons of blood... and surviving.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `One HELL of a butler.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Being beaten to a bloody pulp by a middle school student.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Anime News Network.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Having blackmail sex with your teacher.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `A large paper fan.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `The Shikon Jewel.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `"INUYASHA!!"<br>"KAGOME!!"`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Sneaking a peek at the girls' open bath.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Revy Two-Hands.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `A Claymore swimsuit issue.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `A samurai terminator.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Physics.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Gangnam Style.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `MUNGLE!!<br><i>*shakes fist*</i>`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `A talking motorcycle.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Rie Kugimiya.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `The Animatrix.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Your virgin soul.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Franky's awesome Speedo dance.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Soul traveling.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Production I.G.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `GONZO.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Really shitty CGI effects.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `The hot buttered sex voice of Patrick Seitz.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Sticking a chopstick in your pee-hole.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `A copy of Trigun signed by Micah Solusod.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Gilgamesh.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `That one guy who always dresses up as the Red Ranger.`,
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
      text: `Madhouse.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `ARMS.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Mr. Tadakichi.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Showing episodes of Toriko to starving children.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Governor Ishihara.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Shrine maidens.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Taking a shit in the shrine's donation box.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Farting... tadpoles?`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Heavily-tattooed yakuza henchmen.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `The life-sized Gundam statue.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Forcing someone to watch every episode of Dragon Ball GT.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `ZA WARUDO.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Eating a banana all sexy-like.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Awesome Prussia.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Ora! Ora! Ora! Ora! Ora! Ora! Ora! Ora! Ora! Ora! Ora! Ora! Ora! Ora! Ora! Ora! Ora! Ora! Ora! Ora! Ora! Ora! Ora! Ora!`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `A shitload of yen.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Johannes Krauser II.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Raccoon testicles.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Beautiful bishonen boys.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Rule 63'd Death the Kid.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Hetalia porn.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `1,000 years of pain.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Rally Vincent firing a gun in her underwear.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `A Maka Chop.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Twincest.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Broken-ass Aizen.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `The Garden of Sinners.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Romi Paku.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `My Johnny!`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Petite Princess Yucie.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Ice cold water<br>(and it's only a dollar).`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Me wearing a penguin suit.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Farting on your cat.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Combat afros.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `A brand new, mint condition copy of JoJo's Bizarre Adventure vol. 4, still in shrinkwrap.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Grave of the Fireflies.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Strapping hand grenades to your pubes.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Toilet worship.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `My badass numchucks.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Trying to get your die-cast Gundam model through airport security.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Black&#x2605;Star`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Octopus balls.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Getting in a fistfight with an earthquake.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `WcDonald's.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Undead body-swapping space vampire teens.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `The alpha bitch.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Eating someone else's drool.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `My hot zombie girlfriend..`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Puppets made from the skin of children.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Swallowing an entire carton of cigarettes before barfing them back up.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Giving a girl an orgasm using only your shoulderpads.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Being accidentally turned into a girl by aliens.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Ghosts that come out of your asscrack.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `#DesuDes4Life.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Fucking a nun.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Raping Tokyo Tower.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `A succubus living inside your testes.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Saber Starblast.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `An argument lasting over an hour about what mo&eacute; really is.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Kotetsu T. Kaburagi, aka. "The D.I.L.F."`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Japanese Spider-Man.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `A bass guitar straight to the face.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Sonny Strait's manly parts.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Asian cock.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Guts.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Holy dildos.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Finger nigiri.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Dragon Balls.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Drills for hands.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Suplexing your teacher.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `A leopard print fundoshi.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Breast envy.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `The entire last episode of Blood-C.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Origami sex toys.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `ALL OF THE HOMO!`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Japanese rope bondage.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Griffith's mysterious disappearing penis.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Naughty geishas.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Ninjas!`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Pubic hair needle attack.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Sexy jutsu.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Getting your fingernails ripped out.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Shinichiro Watanabe single-handedly curing cancer, ending world hunger, and bringing peace to the Middle East.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Love Machine.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Rapping samurai.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Putting all the condiments on your steak. ALL OF THEM.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Naga's extremely annoying laugh.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `A dolphin in a mech suit.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Flying Nimbus.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Strikeman and his "Balls of Justice".`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `A busty, blonde, blue-eyed, dumb-as-rocks American.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Running during the credits.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Red bean paste.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Gender-swapped Oda Nobunaga.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Cutting off a finger to restore your honor.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Robots with tits.`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Henry Goto.`,
      watermark: `AN:HG`
    });
    await queryRunner.delete('white_card', {
      text: `Henry Goto having an accident in his pants during the live Aniplex of America panel.`,
      watermark: `AN:HG`
    });
    await queryRunner.delete('white_card', {
      text: `Henry Goto's massive peyote &amp; wine cooler addiction.`,
      watermark: `AN:HG`
    });
    await queryRunner.delete('white_card', {
      text: `Henry Goto, John Sirabella, and Stu Levy in a three man fight to the death.`,
      watermark: `AN:HG`
    });
    await queryRunner.delete('white_card', {
      text: `Henry Goto fapping to a photograph of himself.`,
      watermark: `AN:HG`
    });
    await queryRunner.delete('white_card', {
      text: `Henry Goto being eaten by a group of backwoods hillbilly cannibals.`,
      watermark: `AN:HG`
    });
    await queryRunner.delete('white_card', {
      text: `Henry Goto ending up homeless on the streets and sucking dick for coke.`,
      watermark: `AN:HG`
    });
    await queryRunner.delete('white_card', {
      text: `Two gallons of elephant shit being dropped on Henry Goto's desk.`,
      watermark: `AN:HG`
    });
    await queryRunner.delete('white_card', {
      text: `Henry Goto falling down the stairs, receiving a massive head injury, and believing he's really Sailor Moon.`,
      watermark: `AN:HG`
    });
    await queryRunner.delete('white_card', {
      text: `A Henry Goto joke that no one will laugh at other than SpacemanHardy.`,
      watermark: `AN:HG`
    });
    await queryRunner.delete('white_card', {
      text: `Henry Goto bleeding profusely from his groin after having his penis bitten off by a 15-year-old Vietnamese prostitute.`,
      watermark: `AN:HG`
    });
    await queryRunner.delete('white_card', {
      text: `A 30-year-old man who's obsessed with K-on!`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `LAZAR!`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `I AM AWESOME!!`,
      watermark: `AN`
    });
    await queryRunner.delete('white_card', {
      text: `Getting kicked in the nuts by a mermaid.`,
      watermark: `AN`
    });

    await queryRunner.delete('card_set', {
      name: `[C] Anime`,
      baseDeck: true,
      description: `http://www.desudesbrigade.com/`,
      weight: 506,
      active: true
    });
  }
}
