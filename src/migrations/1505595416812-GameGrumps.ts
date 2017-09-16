/* tslint:disable:no-non-null-assertion no-unsafe-any no-any */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class GameGrumps1505595416812 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const insertResult = await queryRunner.insert('card_set', {
      name: `[C] Game Grumps`,
      baseDeck: false,
      description: null,
      weight: 518,
      active: true
    });

    await queryRunner.insert('black_card', {
      text: `Welcome back to ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Welcome to Sonic Team! We make ____, I think!`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What am I willing to put up with today?`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What can be found in Arin's chins?`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What do Mumbo's magic words mean?`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What is the boopinest shit?`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `WHAT THE FUCK IS A ____?!`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What's better than Skyward Sword?`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What's the real reason Jon left?`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `When I look in the mirror I see ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Who replaced Jon when he left GameGrumps?`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
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
      text: `Why is Steam Train so controversial?`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `WOOP WOOP WOOP I'M A ____!`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `You know what fan mail makes me the happiest every time I see it? It's the ones where people are like, "____." `,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `You're ruining my integrity! ____ won't hire me now!`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I've been ____ again!`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Rolling around at the speed of ____!`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `This time on Guest Grumps, we have ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Top five games, go! 1? Mega Man X. 2-5? ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Use your ____!`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Look at this guy, he's like ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Look, it's ____!`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Next time on Game Grumps, ____!`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Nightshade: The Claws of ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Number one! With a bullet! Zoom in on the ____!`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Oh, it's ____!`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `One slice of ____ please.`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Pikachu, use your ____ attack!`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Put a hole in that ____!`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Real talk? ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Jon's mom called him to tell him about ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Kirby has two iconic abilities: suck and ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Listen to the ____ on this shit.`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Jon believes that the most important part of any video game is ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Jon can't get enough of ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Jon can't survive air travel without ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Jon just wants to touch ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Is there anything to gain from this?`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `It's no use! Take ____!`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Jon and Arin suck at ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Jon and Arin win! They realize ____ is more important.`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `If the ____ wasn't there, I would do. But it's there, so it's not.`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `How many ____ does Mega Man get?`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `How many nose hairs does ____ have?`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I certainly can't do it without you, and I know you can't do it without ____!`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I tell you once, I tell you twice! ____ is good for economy!`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I wanna put my ____ in her!`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I'm not even SELLING ____!`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Do you remember the episode where Ash caught a ____?`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Don't throw ____! It's expensive to somebody!`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Dude, real talk? ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Eat your ____, son.`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Egoraptor's fiancee is actually a ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Everybody wants to know about me, but they don't know about my ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Fool me once, I'm mad. Fool me twice? How could you. Fool me three times, you're officially ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `For my first attack, I will juggle ____ to impress you.`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Fuck, I found a ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Game Grumps: sponsored by ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Give ____ a chance! He'll grow on you!`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____? Ten-outta-ten!`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____. I AAAAAAIN’T HAVIN’ THAT SHIT!`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____. It's no use!`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____. MILLIONS ARE DEAD!!!`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____. Put that in, Barry.`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____. This is like one of my Japanese animes!`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `...What the bloody hell are you two talking about?!`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `"These new ____ t-shirts are gonna change some lives, Arin."`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `"You want cheese pizza?" "No. ____."`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `And then, as a fuckin' goof, I'd put a hole in ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `And there it was...Kirby had finally met the ____ of the lost city.`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Arin believes that the most important part of any video game is ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Arin has an adverse reaction to ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Barry entertains himself by watching old episodes of ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Barry, add ____ into the video!`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Barry, we need a replay on ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `BARRY! SHOW ____ AGAIN!`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Barry's sheer skill at ____ is unmatched.`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I don't like the ____ flavor.`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ don't even cost this less!`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ Grumps!`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ has aged really well.`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ is GREAT GREAT GREAT!`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ is Jon's favorite video game of all time.`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ is not Jon's strong suit.`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ Train!`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ WINS!`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____: Better than deer shit!`,
      draw: 0,
      pick: 1,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Welcome back to ____ ____!`,
      draw: 0,
      pick: 2,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Real talk? Is that ____ ____?`,
      draw: 0,
      pick: 2,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Look at that ____-ass ____!`,
      draw: 0,
      pick: 2,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `JON'S ____, SHOW US YOUR ____.`,
      draw: 0,
      pick: 2,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The Grumps' latest silly player names are ____ and ____.`,
      draw: 0,
      pick: 2,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `If you don't know what ____ is, you can't go to ____.`,
      draw: 0,
      pick: 2,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In this corner, ____; in the other corner, ____; it's Game Grumps VS!`,
      draw: 0,
      pick: 2,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `IF I CAN'T BE ____, I SURE AS HELL CAN BE ____!!`,
      draw: 0,
      pick: 2,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `COME ON AND ____, AND WELCOME TO THE ____!`,
      draw: 0,
      pick: 2,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `If ____ evolved from ____, why the fuck is there still ____, dude?!`,
      draw: 2,
      pick: 3,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____? Pretty smart. ____? Pretty fuckin' smart. ____? FUCKING GENIUS!!!!`,
      draw: 2,
      pick: 3,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });

    await queryRunner.insert('white_card', {
      text: `Sonic the Hedgehog.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `...Metal Gear?!`,
      watermark: `GG`,
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
      text: `A humanlike bat with tits.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A little dingle-dang.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A pretty epic poo.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A replay from Barry.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Scottish bloke that talks too fast.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A smaller, whiter dick.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Sonic.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A testicle examination.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A whale making a seal noise.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Accidentally resetting a video game.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An expensive rental costume.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Anne Frank doing a striptease.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Arin actually winning a Game Grumps VS.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Arin Hanson / Egoraptor.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Arin's big floppy penis.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Arin's dicksaber.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Arin's voice acting.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Barry Kramer.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Barry's censorship noises.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Becoming a vegetarian, then becoming clinically depressed.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Being forced to replay the same section of the game over and over.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Birdemic.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Borderline narcissism.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Breaking a basketball net's back board.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Breaking into song.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Brian / Frank / Steve / Willard / Jonathan / Michael IV / Michael III / Michael Jordan / Scott.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bumping butts.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Buying chicken fingers for homeless people.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Carefully escorting Anna.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Catharsis.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cheese pizza.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Chu Chu Rocket.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Chulip.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Comparing someone to a trainwreck.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Completely missing the tutorials and instructions.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cumfaggots.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dan getting some action with one of Egoraptor's action figures.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Danny Sexbang.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Danny's crippling Skittles addiction.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dipping your balls in the sand.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dixon.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Donkey-ass Kong.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Drakkhen's realistic fight sequences.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Drawing the line in the fucking sand.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Eating the Holocaust.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Eating your peas.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Egofaptor.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ending an episode on "Heil Hitler!"`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The eyeless girl demographic.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fart science.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fast-forwarding.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fighting Iblis for the hundredth time.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fooling me three times.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fuckin' Larry.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `FUCKING LEGO CARS!!?!`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Game feel.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Game Grumps remixes.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Game Grumps VS.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Game Grumps.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Garshstostoles.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `GeorgLopez.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting censored by a stampede of elephants.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting diddled again.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting fucking ganked.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting horribly diarrhea'd on by an owl.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting killed by a motherfucking paralyzed Taillow.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting stuck on the ceiling for no explicable reason.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting violently sick at MAGfest.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Goof Troop.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Goofy masturbating in the fields.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Grade A meat.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Grant Kirkhope.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Grant Kirkhope’s knackers.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `GREAT! GREAT! GREAT!`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Grep.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Grumping it.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Güf Troop.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Half the deal for twice the price!`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Having a cough that lasts forever.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Helicopter tits.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hepatitis Sea.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hitting a Nightshade cartridge with Thor’s Hammer only to break the hammer.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Homoerotic subtext between two grown men playing video games.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ice hair.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Incriminating footage of Jon.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Insta-killing your partner with the Select button.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `It being no use.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Jacques.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `JonTron.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Jon winning. AS USUAL.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Jon's soulful singing.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Jon/Arin slash fiction.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `JonTron’s musical theater voice.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Js'keep goin'.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Killing zombies by typing on a keyboard-gun.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Kirby.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Kitty Cat Dance Party.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Learning that your son is dead, but not caring because you didn't want him anyway.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lemon and Bill.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lightsaber Fightsaber.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Literally going to Hell.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mediocrity, as a power.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mega Man.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mike Tyson.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mispronouncing Duran Duran.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mister Mosquito.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `MomTron.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Moundo.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Naughty Bear.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nazi von Killyou.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ninja Sex Party.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nixon.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `NO JON NO.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `NOT FUCKING THIS!`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Not knowing the controls to Nickelodeon GUTS.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Not reading the game's instructions.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Obeying Protoman and burning down a forest.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pacific Rim.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pause balls.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pelistorm.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Playing a terrible game for more than a hundred episodes.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Playing slaps to break a tie.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `PONY.MOV.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Poopy butt.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Poppy Bros.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Princess Elise's octopus face.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Punching a hole in a gingerbread house.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Queefing bombs out of your vagina.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Racial slurs.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Reading the manual.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `RIDIN’ ON CARS!!!`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Robots ordering cheese pizza.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Rocket. To the moon.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Rolling around at the speed of sound.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `RubberRoss.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Rouge's gross bat face.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Screaming out Whitney Houston’s “I Will Always Love You” in primal agony.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sequelitis.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Seven asses.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Signing and destroying a copy of Sonic '06.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Silver the Hedgehog.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sneaking dirty British humour into an unassuming video game about a bear and a bird.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Snow white shit.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Snowboarding uphill`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Solid Snake.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sonic '06.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Spice World.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Spraying compressed air with a bittering agent in your face, and subsequently vomiting.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Stairfax Temperatures.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Staring at a menu while Ross stuffs his disgusting face with candy.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Stasis-ing the drill.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Steam Train.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sticky sap.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Stretch Panic.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `STRGG.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Struggling to fight Silver the Hedgehog.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sucking blood from a Japanese girl's tits.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Suzy the Goose.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `TENOUTTATEN.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `That guy.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Awesome Series.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The band Egoraptor.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Chinless Wonder.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Goshdangodon.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Higgs Boson.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Knuckles wall glitch.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The rarest form of Arin having fun.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The realization that friendship is more important.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Three big feet of pleasure.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tonguing up.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Typing "C D PLAYER" and getting "MODEL CAR."`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `WAAAAAAAVE LAAAAZEEEEEEER.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Walking around in my banana shoes.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `World Dick Barf Syndrome.`,
      watermark: `GG`,
      cardSetId: insertResult.result![0].id
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.delete('black_card', {
      text: `Welcome back to ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `Welcome to Sonic Team! We make ____, I think!`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `What am I willing to put up with today?`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `What can be found in Arin's chins?`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `What do Mumbo's magic words mean?`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `What is the boopinest shit?`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `WHAT THE FUCK IS A ____?!`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `What's better than Skyward Sword?`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `What's the real reason Jon left?`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `When I look in the mirror I see ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `Who replaced Jon when he left GameGrumps?`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `Who's an asshole?`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `Why is Steam Train so controversial?`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `WOOP WOOP WOOP I'M A ____!`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `You know what fan mail makes me the happiest every time I see it? It's the ones where people are like, "____." `,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `You're ruining my integrity! ____ won't hire me now!`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `I've been ____ again!`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `Rolling around at the speed of ____!`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `This time on Guest Grumps, we have ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `Top five games, go! 1? Mega Man X. 2-5? ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `Use your ____!`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `Look at this guy, he's like ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `Look, it's ____!`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `Next time on Game Grumps, ____!`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `Nightshade: The Claws of ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `Number one! With a bullet! Zoom in on the ____!`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `Oh, it's ____!`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `One slice of ____ please.`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `Pikachu, use your ____ attack!`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `Put a hole in that ____!`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `Real talk? ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `Jon's mom called him to tell him about ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `Kirby has two iconic abilities: suck and ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `Listen to the ____ on this shit.`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `Jon believes that the most important part of any video game is ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `Jon can't get enough of ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `Jon can't survive air travel without ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `Jon just wants to touch ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `Is there anything to gain from this?`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `It's no use! Take ____!`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `Jon and Arin suck at ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `Jon and Arin win! They realize ____ is more important.`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `If the ____ wasn't there, I would do. But it's there, so it's not.`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `How many ____ does Mega Man get?`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `How many nose hairs does ____ have?`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `I certainly can't do it without you, and I know you can't do it without ____!`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `I tell you once, I tell you twice! ____ is good for economy!`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `I wanna put my ____ in her!`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `I'm not even SELLING ____!`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `Do you remember the episode where Ash caught a ____?`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `Don't throw ____! It's expensive to somebody!`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `Dude, real talk? ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `Eat your ____, son.`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `Egoraptor's fiancee is actually a ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `Everybody wants to know about me, but they don't know about my ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `Fool me once, I'm mad. Fool me twice? How could you. Fool me three times, you're officially ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `For my first attack, I will juggle ____ to impress you.`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `Fuck, I found a ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `Game Grumps: sponsored by ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `Give ____ a chance! He'll grow on you!`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `____? Ten-outta-ten!`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `____. I AAAAAAIN’T HAVIN’ THAT SHIT!`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `____. It's no use!`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `____. MILLIONS ARE DEAD!!!`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `____. Put that in, Barry.`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `____. This is like one of my Japanese animes!`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `...What the bloody hell are you two talking about?!`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `"These new ____ t-shirts are gonna change some lives, Arin."`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `"You want cheese pizza?" "No. ____."`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `And then, as a fuckin' goof, I'd put a hole in ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `And there it was...Kirby had finally met the ____ of the lost city.`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `Arin believes that the most important part of any video game is ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `Arin has an adverse reaction to ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `Barry entertains himself by watching old episodes of ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `Barry, add ____ into the video!`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `Barry, we need a replay on ____.`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `BARRY! SHOW ____ AGAIN!`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `Barry's sheer skill at ____ is unmatched.`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `I don't like the ____ flavor.`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `____ don't even cost this less!`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `____ Grumps!`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `____ has aged really well.`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `____ is GREAT GREAT GREAT!`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `____ is Jon's favorite video game of all time.`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `____ is not Jon's strong suit.`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `____ Train!`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `____ WINS!`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `____: Better than deer shit!`,
      draw: 0,
      pick: 1,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `Welcome back to ____ ____!`,
      draw: 0,
      pick: 2,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `Real talk? Is that ____ ____?`,
      draw: 0,
      pick: 2,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `Look at that ____-ass ____!`,
      draw: 0,
      pick: 2,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `JON'S ____, SHOW US YOUR ____.`,
      draw: 0,
      pick: 2,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `The Grumps' latest silly player names are ____ and ____.`,
      draw: 0,
      pick: 2,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `If you don't know what ____ is, you can't go to ____.`,
      draw: 0,
      pick: 2,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `In this corner, ____; in the other corner, ____; it's Game Grumps VS!`,
      draw: 0,
      pick: 2,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `IF I CAN'T BE ____, I SURE AS HELL CAN BE ____!!`,
      draw: 0,
      pick: 2,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `COME ON AND ____, AND WELCOME TO THE ____!`,
      draw: 0,
      pick: 2,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `If ____ evolved from ____, why the fuck is there still ____, dude?!`,
      draw: 2,
      pick: 3,
      watermark: `GG`
    });
    await queryRunner.delete('black_card', {
      text: `____? Pretty smart. ____? Pretty fuckin' smart. ____? FUCKING GENIUS!!!!`,
      draw: 2,
      pick: 3,
      watermark: `GG`
    });

    await queryRunner.delete('white_card', {
      text: `Sonic the Hedgehog.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `...Metal Gear?!`,
      watermark: `GG`
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
      text: `A humanlike bat with tits.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `A little dingle-dang.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `A pretty epic poo.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `A replay from Barry.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `A Scottish bloke that talks too fast.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `A smaller, whiter dick.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `A Sonic.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `A testicle examination.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `A whale making a seal noise.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Accidentally resetting a video game.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `An expensive rental costume.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Anne Frank doing a striptease.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Arin actually winning a Game Grumps VS.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Arin Hanson / Egoraptor.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Arin's big floppy penis.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Arin's dicksaber.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Arin's voice acting.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Barry Kramer.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Barry's censorship noises.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Becoming a vegetarian, then becoming clinically depressed.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Being forced to replay the same section of the game over and over.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Birdemic.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Borderline narcissism.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Breaking a basketball net's back board.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Breaking into song.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Brian / Frank / Steve / Willard / Jonathan / Michael IV / Michael III / Michael Jordan / Scott.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Bumping butts.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Buying chicken fingers for homeless people.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Carefully escorting Anna.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Catharsis.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Cheese pizza.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Chu Chu Rocket.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Chulip.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Comparing someone to a trainwreck.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Completely missing the tutorials and instructions.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Cumfaggots.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Dan getting some action with one of Egoraptor's action figures.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Danny Sexbang.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Danny's crippling Skittles addiction.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Dipping your balls in the sand.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Dixon.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Donkey-ass Kong.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Drakkhen's realistic fight sequences.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Drawing the line in the fucking sand.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Eating the Holocaust.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Eating your peas.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Egofaptor.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Ending an episode on "Heil Hitler!"`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `The eyeless girl demographic.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Fart science.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Fast-forwarding.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Fighting Iblis for the hundredth time.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Fooling me three times.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Fuckin' Larry.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `FUCKING LEGO CARS!!?!`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Game feel.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Game Grumps remixes.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Game Grumps VS.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Game Grumps.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Garshstostoles.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `GeorgLopez.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Getting censored by a stampede of elephants.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Getting diddled again.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Getting fucking ganked.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Getting horribly diarrhea'd on by an owl.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Getting killed by a motherfucking paralyzed Taillow.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Getting stuck on the ceiling for no explicable reason.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Getting violently sick at MAGfest.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Goof Troop.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Goofy masturbating in the fields.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Grade A meat.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Grant Kirkhope.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Grant Kirkhope’s knackers.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `GREAT! GREAT! GREAT!`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Grep.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Grumping it.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Güf Troop.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Half the deal for twice the price!`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Having a cough that lasts forever.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Helicopter tits.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Hepatitis Sea.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Hitting a Nightshade cartridge with Thor’s Hammer only to break the hammer.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Homoerotic subtext between two grown men playing video games.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Ice hair.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Incriminating footage of Jon.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Insta-killing your partner with the Select button.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `It being no use.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Jacques.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `JonTron.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Jon winning. AS USUAL.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Jon's soulful singing.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Jon/Arin slash fiction.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `JonTron’s musical theater voice.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Js'keep goin'.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Killing zombies by typing on a keyboard-gun.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Kirby.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Kitty Cat Dance Party.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Learning that your son is dead, but not caring because you didn't want him anyway.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Lemon and Bill.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Lightsaber Fightsaber.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Literally going to Hell.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Mediocrity, as a power.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Mega Man.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Mike Tyson.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Mispronouncing Duran Duran.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Mister Mosquito.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `MomTron.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Moundo.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Naughty Bear.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Nazi von Killyou.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Ninja Sex Party.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Nixon.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `NO JON NO.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `NOT FUCKING THIS!`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Not knowing the controls to Nickelodeon GUTS.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Not reading the game's instructions.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Obeying Protoman and burning down a forest.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Pacific Rim.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Pause balls.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Pelistorm.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Playing a terrible game for more than a hundred episodes.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Playing slaps to break a tie.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `PONY.MOV.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Poopy butt.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Poppy Bros.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Princess Elise's octopus face.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Punching a hole in a gingerbread house.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Queefing bombs out of your vagina.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Racial slurs.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Reading the manual.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `RIDIN’ ON CARS!!!`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Robots ordering cheese pizza.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Rocket. To the moon.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Rolling around at the speed of sound.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `RubberRoss.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Rouge's gross bat face.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Screaming out Whitney Houston’s “I Will Always Love You” in primal agony.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Sequelitis.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Seven asses.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Signing and destroying a copy of Sonic '06.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Silver the Hedgehog.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Sneaking dirty British humour into an unassuming video game about a bear and a bird.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Snow white shit.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Snowboarding uphill`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Solid Snake.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Sonic '06.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Spice World.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Spraying compressed air with a bittering agent in your face, and subsequently vomiting.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Stairfax Temperatures.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Staring at a menu while Ross stuffs his disgusting face with candy.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Stasis-ing the drill.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Steam Train.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Sticky sap.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Stretch Panic.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `STRGG.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Struggling to fight Silver the Hedgehog.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Sucking blood from a Japanese girl's tits.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Suzy the Goose.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `TENOUTTATEN.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `That guy.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `The Awesome Series.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `The band Egoraptor.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `The Chinless Wonder.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `The Goshdangodon.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `The Higgs Boson.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `The Knuckles wall glitch.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `The rarest form of Arin having fun.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `The realization that friendship is more important.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Three big feet of pleasure.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Tonguing up.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Typing "C D PLAYER" and getting "MODEL CAR."`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `WAAAAAAAVE LAAAAZEEEEEEER.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `Walking around in my banana shoes.`,
      watermark: `GG`
    });
    await queryRunner.delete('white_card', {
      text: `World Dick Barf Syndrome.`,
      watermark: `GG`
    });

    await queryRunner.delete('card_set', {
      name: `[C] Game Grumps`,
      baseDeck: false,
      description: null,
      weight: 518,
      active: true
    });
  }
}
