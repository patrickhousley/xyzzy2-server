/* tslint:disable:no-non-null-assertion no-unsafe-any no-any no-unnecessary-type-assertion */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class AnimeExpansion11505594331134 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const insertResult = await queryRunner.insert('card_set', {
      name: `[C] Anime Expansion #1`,
      baseDeck: false,
      description: `http://www.desudesbrigade.com/`,
      weight: 507,
      active: true
    });

    await queryRunner.insert('black_card', {
      text: `What does Alucard have nightmares about?`,
      draw: 0,
      pick: 1,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I've always wanted to become a voice actor, so I could play the role of ____.`,
      draw: 0,
      pick: 1,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `If the anime industry is dying, what will be the final nail in it's coffin?`,
      draw: 0,
      pick: 1,
      watermark: `ANX1`,
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
      text: `Don't stand behind him, if you value your ____.`,
      draw: 0,
      pick: 1,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What the hell is "Juvijuvibro"?!`,
      draw: 0,
      pick: 1,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `As part of a recent promotion, Japanese KFCs are now dressing their Colonel Sanders statues up as ____.`,
      draw: 0,
      pick: 1,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Fighting ____ by moonlight! Winning ____ by daylight! Never running from a real fight! She is the one named ____!`,
      draw: 2,
      pick: 3,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `It's no secret.  Deep down, everybody wants to fuck ____.`,
      draw: 0,
      pick: 1,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Behold! My trap card, ____!`,
      draw: 0,
      pick: 1,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `After eating a Devil Fruit, I now have the power of ____.`,
      draw: 0,
      pick: 1,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `By far, the most mind-bogglingly awesome thing I've ever seen in anime is ____.`,
      draw: 0,
      pick: 1,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `My Little Sister Can't Be ____!`,
      draw: 0,
      pick: 1,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `No matter how I look at it, it's your fault I'm not ____!`,
      draw: 0,
      pick: 1,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `They are the prey, and we are the ____.`,
      draw: 0,
      pick: 1,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `My love for you is like ____.  BERSERKER!`,
      draw: 0,
      pick: 1,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `IT'S ____ TIME!`,
      draw: 0,
      pick: 1,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `It has been said... That there are entire forests of ____, made from the sweetest ____.`,
      draw: 0,
      pick: 2,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Attention, duelists: My hair is ____.`,
      draw: 0,
      pick: 1,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What do otaku smell like?`,
      draw: 0,
      pick: 1,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Madoka Kyouno's nickname for Muginami's older brother is ____.`,
      draw: 0,
      pick: 1,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `"____."<br>"What the hell, man?!"<br>"____."<br>"Oh, okay."`,
      draw: 0,
      pick: 2,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `And from Kyoto Animation, a show about cute girls doing ____.`,
      draw: 0,
      pick: 1,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Anime has taught me that classic literature can always be improved by adding ____.`,
      draw: 0,
      pick: 1,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The mo&eacute; debate was surprisingly civil until someone mentioned ____.`,
      draw: 0,
      pick: 1,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `That's not a squid!  It's ____!`,
      draw: 0,
      pick: 1,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The Chocolate Underground stopped the Good For You Party by capturing their ____ and exposing their leader as ____.`,
      draw: 0,
      pick: 2,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Who cares about the printing press, did that medieval peasant girl just invent ____?!`,
      draw: 0,
      pick: 1,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The court finds the defendant, ____, guilty of ____, and sentences them to a lifetime of ____.`,
      draw: 2,
      pick: 3,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });

    await queryRunner.insert('white_card', {
      text: `Rock-hard, glistening abs.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A diet consisting almost entirely of potatoes.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mamoru Oshii's dog love.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An 8 million yen debt to a club of rich pretty boys.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hideaki Anno's poor, tortured therapist.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fucking postcards as a cheap-ass pack-in gift.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Wild Tiger's Hundred Power.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Totoro.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Traps.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Korean Jesus.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Astro Boy.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Jacking off into a bottle of formaldehyde and calling it our firstborn.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Valvrape the Dominator.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Piles of dead children.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An unending, unquenchable thirst for orange Fanta.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Breaking the fourth wall to kill the mangaka.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hentai voice acting.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A vampire ninja.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A potato committing seppuku.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A giant robot German suplex.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Godzilla attack.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Eating KFC on Christmas day.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hello Kitty! pregnancy doujins.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Waving it around all willy-nilly.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hot anime moms.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pissing yourself.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `GAO! GAI! GAR!!!`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Vocaloid death metal.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Dark Lord Shawne Kleckner.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Yaoi paddles.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bad Steven Foster dubs.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mr. Satan.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An actual, honest-to-God black guy.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `4,000 tacos, and one Diet Coke.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sick with the cancer.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Black and white samurai movies.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A promotional crossover with Pizza Hut.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Transvestite police officers.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Con funk.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Star-shaped nipples.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A laser horse.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Girls with guns AND glasses.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Teenaged miniskirt-wearing space pirates.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Gas station sushi.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Jerry Jewell's serial killer face.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A FUCKING DRAGONITE, MOTHERFUCKER!!`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A school bus orgy.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Super Aryan Hitler.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Having sex with a dragon.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Manga Jesus.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Manly pink sparkles.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `7 ft. tall red-headed Alexander the Great.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Training a dinosaur to ride a ball.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Samba-dancing dinosaurs.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An armored truck full of shit.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Togepi omelet.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Puchuu.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dying over and over again.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fuckingham Palace.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Epic old bald dudes.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A smashed-in face.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Dragon Slave.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Zelgadis' flame-proof bikini briefs.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Morphin'.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A naughty nurse outfit.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A sweaty shirtless man holding a large, writhing fish against his chest.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Millionaire Beaver.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dick Saucer.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A couple that spends over 30 manga volumes trying to get to first base.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Alice in Sexland.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Succubus-on-futanari action.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `High-stakes mahjong.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Garbage collectors... IN SPACE!!`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Magical friendship lasers.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The War on Pants.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An ending where everyone dies.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A cyborg assassin dressed as a magical girl fighting a talking lion and a floating psychic electric jellyfish.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `J-pop idols.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Chest-hair afros.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cowboy Andy.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A chainsaw-wielding male magical girl zombie.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Inoue Kikoku, 17-years old.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fujoshi.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Matrix boobs.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Completely losing your shit over Endless Eight.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Violently beating your friends to death with a baseball bat.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Clothing-dissolving slime.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Involuntary crossdressing.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting sucked into a fantasy world.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hentai artists who don't change their pen name when they go legit.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Masamune Shirou artbook.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Loli in a box.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Romance of the Three Kingdoms, but everyone is gender-swapped.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mo&eacute; schoolgirl Hitler.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Franken Fran.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A washpan falling onto someone's head from out of nowhere.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `SHAFT being SHAFT.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A third-grader seducing her 23-year-old teacher.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Shotas.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `One a them bamboo things that goes "doonk".`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Banging your adopted daughter.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tripping, falling, and landing with your face in a girl's breasts.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A bunny girl having a lightsaber duel with Darth Vader.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A 10-year old with boobs twice the size of her head.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An ancient vampire who looks like she's 10.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Literally ripping your own heart out.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Japanese-style elf ears.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Flamboyantly gay William Shakespeare.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Gen "The Uro-Butcher".`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mikuru Beam!`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tons and tons of close-up underaged schoolgirl ass-shots.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Starfish Hitler.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pok&eacute;mon tears.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pok&eacute;sexuality.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Chopstick-based martial arts.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `All the gayness in GetBackers.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Naming yourself after the method of your suicide.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Chupacabra.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Blowing a child's head off with a rocket launcher.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Erotic incestuous toothbrushing.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An artbox that feels like human skin.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Polygamy jokes in a kid's show.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Urd, Kana, and Misato in a drinking contest.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cute stuff.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A robot having an orgasm.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Villagulio.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dangling Pok&eacute;balls.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Having a giant drill for a dick.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Going Super Saiyan.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Going Super Saiyan during orgasm.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Going Super Saiyan while taking a massive dump.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Angry naked people.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Literally spanking a monkey.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `My daikon.`,
      watermark: `ANX1`,
      cardSetId: insertResult.result![0].id
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.delete('black_card', {
      text: `What does Alucard have nightmares about?`,
      draw: 0,
      pick: 1,
      watermark: `ANX1`
    });
    await queryRunner.delete('black_card', {
      text: `I've always wanted to become a voice actor, so I could play the role of ____.`,
      draw: 0,
      pick: 1,
      watermark: `ANX1`
    });
    await queryRunner.delete('black_card', {
      text: `If the anime industry is dying, what will be the final nail in it's coffin?`,
      draw: 0,
      pick: 1,
      watermark: `ANX1`
    });
    await queryRunner.delete('black_card', {
      text: `Ladies and gentlemen, I give you ____... COVERED IN BEES!!!`,
      draw: 0,
      pick: 1,
      watermark: `ANX1`
    });
    await queryRunner.delete('black_card', {
      text: `Don't stand behind him, if you value your ____.`,
      draw: 0,
      pick: 1,
      watermark: `ANX1`
    });
    await queryRunner.delete('black_card', {
      text: `What the hell is "Juvijuvibro"?!`,
      draw: 0,
      pick: 1,
      watermark: `ANX1`
    });
    await queryRunner.delete('black_card', {
      text: `As part of a recent promotion, Japanese KFCs are now dressing their Colonel Sanders statues up as ____.`,
      draw: 0,
      pick: 1,
      watermark: `ANX1`
    });
    await queryRunner.delete('black_card', {
      text: `Fighting ____ by moonlight! Winning ____ by daylight! Never running from a real fight! She is the one named ____!`,
      draw: 2,
      pick: 3,
      watermark: `ANX1`
    });
    await queryRunner.delete('black_card', {
      text: `It's no secret.  Deep down, everybody wants to fuck ____.`,
      draw: 0,
      pick: 1,
      watermark: `ANX1`
    });
    await queryRunner.delete('black_card', {
      text: `Behold! My trap card, ____!`,
      draw: 0,
      pick: 1,
      watermark: `ANX1`
    });
    await queryRunner.delete('black_card', {
      text: `After eating a Devil Fruit, I now have the power of ____.`,
      draw: 0,
      pick: 1,
      watermark: `ANX1`
    });
    await queryRunner.delete('black_card', {
      text: `By far, the most mind-bogglingly awesome thing I've ever seen in anime is ____.`,
      draw: 0,
      pick: 1,
      watermark: `ANX1`
    });
    await queryRunner.delete('black_card', {
      text: `My Little Sister Can't Be ____!`,
      draw: 0,
      pick: 1,
      watermark: `ANX1`
    });
    await queryRunner.delete('black_card', {
      text: `No matter how I look at it, it's your fault I'm not ____!`,
      draw: 0,
      pick: 1,
      watermark: `ANX1`
    });
    await queryRunner.delete('black_card', {
      text: `They are the prey, and we are the ____.`,
      draw: 0,
      pick: 1,
      watermark: `ANX1`
    });
    await queryRunner.delete('black_card', {
      text: `My love for you is like ____.  BERSERKER!`,
      draw: 0,
      pick: 1,
      watermark: `ANX1`
    });
    await queryRunner.delete('black_card', {
      text: `IT'S ____ TIME!`,
      draw: 0,
      pick: 1,
      watermark: `ANX1`
    });
    await queryRunner.delete('black_card', {
      text: `It has been said... That there are entire forests of ____, made from the sweetest ____.`,
      draw: 0,
      pick: 2,
      watermark: `ANX1`
    });
    await queryRunner.delete('black_card', {
      text: `Attention, duelists: My hair is ____.`,
      draw: 0,
      pick: 1,
      watermark: `ANX1`
    });
    await queryRunner.delete('black_card', {
      text: `What do otaku smell like?`,
      draw: 0,
      pick: 1,
      watermark: `ANX1`
    });
    await queryRunner.delete('black_card', {
      text: `Madoka Kyouno's nickname for Muginami's older brother is ____.`,
      draw: 0,
      pick: 1,
      watermark: `ANX1`
    });
    await queryRunner.delete('black_card', {
      text: `"____."<br>"What the hell, man?!"<br>"____."<br>"Oh, okay."`,
      draw: 0,
      pick: 2,
      watermark: `ANX1`
    });
    await queryRunner.delete('black_card', {
      text: `And from Kyoto Animation, a show about cute girls doing ____.`,
      draw: 0,
      pick: 1,
      watermark: `ANX1`
    });
    await queryRunner.delete('black_card', {
      text: `Anime has taught me that classic literature can always be improved by adding ____.`,
      draw: 0,
      pick: 1,
      watermark: `ANX1`
    });
    await queryRunner.delete('black_card', {
      text: `The mo&eacute; debate was surprisingly civil until someone mentioned ____.`,
      draw: 0,
      pick: 1,
      watermark: `ANX1`
    });
    await queryRunner.delete('black_card', {
      text: `That's not a squid!  It's ____!`,
      draw: 0,
      pick: 1,
      watermark: `ANX1`
    });
    await queryRunner.delete('black_card', {
      text: `The Chocolate Underground stopped the Good For You Party by capturing their ____ and exposing their leader as ____.`,
      draw: 0,
      pick: 2,
      watermark: `ANX1`
    });
    await queryRunner.delete('black_card', {
      text: `Who cares about the printing press, did that medieval peasant girl just invent ____?!`,
      draw: 0,
      pick: 1,
      watermark: `ANX1`
    });
    await queryRunner.delete('black_card', {
      text: `The court finds the defendant, ____, guilty of ____, and sentences them to a lifetime of ____.`,
      draw: 2,
      pick: 3,
      watermark: `ANX1`
    });

    await queryRunner.delete('white_card', {
      text: `Rock-hard, glistening abs.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `A diet consisting almost entirely of potatoes.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Mamoru Oshii's dog love.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `An 8 million yen debt to a club of rich pretty boys.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Hideaki Anno's poor, tortured therapist.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Fucking postcards as a cheap-ass pack-in gift.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Wild Tiger's Hundred Power.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Totoro.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Traps.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Korean Jesus.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Astro Boy.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Jacking off into a bottle of formaldehyde and calling it our firstborn.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Valvrape the Dominator.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Piles of dead children.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `An unending, unquenchable thirst for orange Fanta.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Breaking the fourth wall to kill the mangaka.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Hentai voice acting.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `A vampire ninja.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `A potato committing seppuku.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `A giant robot German suplex.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `A Godzilla attack.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Eating KFC on Christmas day.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Hello Kitty! pregnancy doujins.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Waving it around all willy-nilly.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Hot anime moms.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Pissing yourself.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `GAO! GAI! GAR!!!`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Vocaloid death metal.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `The Dark Lord Shawne Kleckner.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Yaoi paddles.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Bad Steven Foster dubs.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Mr. Satan.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `An actual, honest-to-God black guy.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `4,000 tacos, and one Diet Coke.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Sick with the cancer.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Black and white samurai movies.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `A promotional crossover with Pizza Hut.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Transvestite police officers.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Con funk.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Star-shaped nipples.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `A laser horse.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Girls with guns AND glasses.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Teenaged miniskirt-wearing space pirates.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Gas station sushi.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Jerry Jewell's serial killer face.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `A FUCKING DRAGONITE, MOTHERFUCKER!!`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `A school bus orgy.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Super Aryan Hitler.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Having sex with a dragon.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Manga Jesus.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Manly pink sparkles.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `7 ft. tall red-headed Alexander the Great.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Training a dinosaur to ride a ball.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Samba-dancing dinosaurs.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `An armored truck full of shit.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `A Togepi omelet.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `The Puchuu.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Dying over and over again.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Fuckingham Palace.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Epic old bald dudes.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `A smashed-in face.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `A Dragon Slave.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Zelgadis' flame-proof bikini briefs.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Morphin'.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `A naughty nurse outfit.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `A sweaty shirtless man holding a large, writhing fish against his chest.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Millionaire Beaver.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Dick Saucer.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `A couple that spends over 30 manga volumes trying to get to first base.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Alice in Sexland.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Succubus-on-futanari action.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `High-stakes mahjong.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Garbage collectors... IN SPACE!!`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Magical friendship lasers.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `The War on Pants.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `An ending where everyone dies.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `A cyborg assassin dressed as a magical girl fighting a talking lion and a floating psychic electric jellyfish.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `J-pop idols.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Chest-hair afros.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Cowboy Andy.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `A chainsaw-wielding male magical girl zombie.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Inoue Kikoku, 17-years old.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Fujoshi.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Matrix boobs.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Completely losing your shit over Endless Eight.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Violently beating your friends to death with a baseball bat.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Clothing-dissolving slime.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Involuntary crossdressing.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Getting sucked into a fantasy world.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Hentai artists who don't change their pen name when they go legit.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `A Masamune Shirou artbook.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Loli in a box.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Romance of the Three Kingdoms, but everyone is gender-swapped.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Mo&eacute; schoolgirl Hitler.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Franken Fran.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `A washpan falling onto someone's head from out of nowhere.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `SHAFT being SHAFT.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `A third-grader seducing her 23-year-old teacher.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Shotas.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `One a them bamboo things that goes "doonk".`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Banging your adopted daughter.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Tripping, falling, and landing with your face in a girl's breasts.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `A bunny girl having a lightsaber duel with Darth Vader.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `A 10-year old with boobs twice the size of her head.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `An ancient vampire who looks like she's 10.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Literally ripping your own heart out.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Japanese-style elf ears.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Flamboyantly gay William Shakespeare.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Gen "The Uro-Butcher".`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Mikuru Beam!`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Tons and tons of close-up underaged schoolgirl ass-shots.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Starfish Hitler.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Pok&eacute;mon tears.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Pok&eacute;sexuality.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Chopstick-based martial arts.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `All the gayness in GetBackers.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Naming yourself after the method of your suicide.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `The Chupacabra.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Blowing a child's head off with a rocket launcher.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Erotic incestuous toothbrushing.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `An artbox that feels like human skin.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Polygamy jokes in a kid's show.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Urd, Kana, and Misato in a drinking contest.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Cute stuff.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `A robot having an orgasm.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Villagulio.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Dangling Pok&eacute;balls.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Having a giant drill for a dick.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Going Super Saiyan.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Going Super Saiyan during orgasm.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Going Super Saiyan while taking a massive dump.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Angry naked people.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `Literally spanking a monkey.`,
      watermark: `ANX1`
    });
    await queryRunner.delete('white_card', {
      text: `My daikon.`,
      watermark: `ANX1`
    });

    await queryRunner.delete('card_set', {
      name: `[C] Anime Expansion #1`,
      baseDeck: false,
      description: `http://www.desudesbrigade.com/`,
      weight: 507,
      active: true
    });
  }
}
