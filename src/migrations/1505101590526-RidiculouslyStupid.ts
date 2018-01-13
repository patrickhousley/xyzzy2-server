/* tslint:disable:no-non-null-assertion no-unsafe-any no-any no-unnecessary-type-assertion */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class RidiculouslyStupid1505101590526 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const insertResult = await queryRunner.insert('card_set', {
      name: `[C] Ridiculously Stupid`,
      baseDeck: false,
      description: null,
      weight: 504,
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
      text: `____ 2012.`,
      draw: 0,
      pick: 1,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What is Curious George so curious about?`,
      draw: 0,
      pick: 1,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What is the next big sideshow attraction?`,
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
      text: `Keith Richards enjoys ____ on his food.`,
      draw: 0,
      pick: 1,
      watermark: `RS`,
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
      text: `The victim was found with ____.`,
      draw: 0,
      pick: 1,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What is love without ____?`,
      draw: 0,
      pick: 1,
      watermark: `RS`,
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
      text: `Lady Gaga has revealed her new dress will be made of ____.`,
      draw: 0,
      pick: 1,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Justin Beiber's new song is all about ____.`,
      draw: 0,
      pick: 1,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The new fad diet is all about making people do ____ and eat ____.`,
      draw: 0,
      pick: 2,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Grand Theft Auto&trade;: ____.`,
      draw: 0,
      pick: 1,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I whip my ____ back and forth.`,
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
      text: `What is literally worse than Hitler?`,
      draw: 0,
      pick: 1,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ ruined many people's childhood.`,
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
      text: `Who needs college when you have ____.`,
      draw: 0,
      pick: 1,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `When short on money, you can always ____.`,
      draw: 0,
      pick: 1,
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
      text: `The next pokemon will combine ____ and ____.`,
      draw: 0,
      pick: 2,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Who is GLaDOS's next test subject?`,
      draw: 0,
      pick: 1,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Instead of playing Cards Against Humanity, you could be ____.`,
      draw: 0,
      pick: 1,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The next Assassin's Creed game will take place in ____.`,
      draw: 0,
      pick: 1,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I wouldn't fuck ____ with ____'s dick.`,
      draw: 0,
      pick: 2,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `One does not simply walk into ____.`,
      draw: 0,
      pick: 1,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In the next Punch Out!!, ____ will be the secret final boss.`,
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
      text: `What is the answer to life's question?`,
      draw: 0,
      pick: 1,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I've got the whole world in my ____.`,
      draw: 0,
      pick: 1,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I never thought ____ would be so enjoyable.`,
      draw: 0,
      pick: 1,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In his second term, Obama will rid America of ____.`,
      draw: 0,
      pick: 1,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What is Japan's national pastime?`,
      draw: 0,
      pick: 1,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In the future, ____ will fuel our cars.`,
      draw: 0,
      pick: 1,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The lion, the witch, and ____.`,
      draw: 0,
      pick: 1,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In the next episode, SpongeBob gets introduced to ____. `,
      draw: 0,
      pick: 1,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ Game of the Year Edition.`,
      draw: 0,
      pick: 1,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What was going through Osama Bin Laden's head before he died?`,
      draw: 0,
      pick: 1,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In a news conference, Obama pulled out ____, to everyone's surprise.`,
      draw: 0,
      pick: 1,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Nights filled with ____.`,
      draw: 0,
      pick: 1,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });

    await queryRunner.insert('white_card', {
      text: `Canadian Kindness.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The world's tallest midget.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The shitty remains of Taco Bell&reg;.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Master Chief.`,
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
      text: `Walt Disney's frozen head.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sponge baths.`,
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
      text: `Getting high on bath salts.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Snorting Pixie Stix.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Poorly written Star Wars&reg; fan fiction.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The final circle of Hell.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Bible.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Borat's one piece.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `LOOK AT THIS PHOTOGRAPH!`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A 1971 Ford Pinto.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Shitting on the White House lawn.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mountain Dew&reg; Baja Blast.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nessie.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Princess Peach's Cake.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Two midgets stacked up pretending to be one person.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Apples to Apples&reg;.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The tears of a college student.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mr. Hankey the Christmas Poo.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Columbine Shooting.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Shag carpeting.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Eiffel Tower.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Chicken and Waffles.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Oculus Rift.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Banana Hammocks.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dirty hippies.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hey Arnold!`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Air Bud.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Yankee Stadium.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hump Day.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sheepskin Condoms.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cranky Kong.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The DK Rap.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Donkey Shows.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hordes of zombies.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Monkeys throwing shit.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Rainbows and magic.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tits.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The brown note.`,
      watermark: `RS`,
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
      text: `ALL the things!`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hitler's mustache.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Gerudo Valley.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Song of Storms.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bill Gates pissing on Steve Jobs's grave.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A giant purple dildo sword.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hipsters on their iPhones at Starbucks.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Catdog.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A boat load of cocaine.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Smooth jazz.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lemon grenades.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Blue Waffles.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `360 no scopes.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Soviet Russia.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Mushroom Kingdom.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Outsourcing jobs to India.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hooters.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Hokey Pokey.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Kaizo Mario.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `FrankerZ.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Spontaneous Combustion.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Kappa.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Insane Clown Posse.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nu Metal.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Wiggles.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Blue's Clues.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Using hot sauce as lube.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mating season.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Ouya.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Jew-Fros.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fruit Fuckers.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Blowing your hand off with a firework.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Beer Pong.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Duke Nukem Forever.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Rule 34.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Made-for-TV movies.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Spanish soap operas.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Teh Urn.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Viking Metal.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tickle Me Elmo.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Barney's rape dungeon.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nurse Joy.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Canadian tuxedo.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hungry Hungry Hippos.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The smallest, whitest dick.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Abusive fathers.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Rich, chocolatey Ovaltine&reg;.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ringworm.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The hero of time.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Terabytes of horse porn.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Blowing the President.`,
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
      text: `Demi Moore's bush.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Eating 120 White Castle burgers&reg;.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A walrus with a beret.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Speedrunning life.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The truffle shuffle.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An 8-ball.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Quiznos&reg;.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bong hits for Jesus.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Penn and Teller.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Indentured servants.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sex in your mouth.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hoola hoops.`,
      watermark: `RS`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Scotsmen marrying their sheep.`,
      watermark: `RS`,
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
      text: `____ 2012.`,
      draw: 0,
      pick: 1,
      watermark: `RS`
    });
    await queryRunner.delete('black_card', {
      text: `What is Curious George so curious about?`,
      draw: 0,
      pick: 1,
      watermark: `RS`
    });
    await queryRunner.delete('black_card', {
      text: `What is the next big sideshow attraction?`,
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
      text: `Keith Richards enjoys ____ on his food.`,
      draw: 0,
      pick: 1,
      watermark: `RS`
    });
    await queryRunner.delete('black_card', {
      text: `What can you always find in between the couch cushions?`,
      draw: 0,
      pick: 1,
      watermark: `RS`
    });
    await queryRunner.delete('black_card', {
      text: `The victim was found with ____.`,
      draw: 0,
      pick: 1,
      watermark: `RS`
    });
    await queryRunner.delete('black_card', {
      text: `What is love without ____?`,
      draw: 0,
      pick: 1,
      watermark: `RS`
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
      text: `Lady Gaga has revealed her new dress will be made of ____.`,
      draw: 0,
      pick: 1,
      watermark: `RS`
    });
    await queryRunner.delete('black_card', {
      text: `Justin Beiber's new song is all about ____.`,
      draw: 0,
      pick: 1,
      watermark: `RS`
    });
    await queryRunner.delete('black_card', {
      text: `The new fad diet is all about making people do ____ and eat ____.`,
      draw: 0,
      pick: 2,
      watermark: `RS`
    });
    await queryRunner.delete('black_card', {
      text: `Grand Theft Auto&trade;: ____.`,
      draw: 0,
      pick: 1,
      watermark: `RS`
    });
    await queryRunner.delete('black_card', {
      text: `I whip my ____ back and forth.`,
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
      text: `What is literally worse than Hitler?`,
      draw: 0,
      pick: 1,
      watermark: `RS`
    });
    await queryRunner.delete('black_card', {
      text: `____ ruined many people's childhood.`,
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
      text: `Who needs college when you have ____.`,
      draw: 0,
      pick: 1,
      watermark: `RS`
    });
    await queryRunner.delete('black_card', {
      text: `When short on money, you can always ____.`,
      draw: 0,
      pick: 1,
      watermark: `RS`
    });
    await queryRunner.delete('black_card', {
      text: `What will Xyzzy take over the world with?`,
      draw: 0,
      pick: 1,
      watermark: `RS`
    });
    await queryRunner.delete('black_card', {
      text: `The next pokemon will combine ____ and ____.`,
      draw: 0,
      pick: 2,
      watermark: `RS`
    });
    await queryRunner.delete('black_card', {
      text: `Who is GLaDOS's next test subject?`,
      draw: 0,
      pick: 1,
      watermark: `RS`
    });
    await queryRunner.delete('black_card', {
      text: `Instead of playing Cards Against Humanity, you could be ____.`,
      draw: 0,
      pick: 1,
      watermark: `RS`
    });
    await queryRunner.delete('black_card', {
      text: `The next Assassin's Creed game will take place in ____.`,
      draw: 0,
      pick: 1,
      watermark: `RS`
    });
    await queryRunner.delete('black_card', {
      text: `I wouldn't fuck ____ with ____'s dick.`,
      draw: 0,
      pick: 2,
      watermark: `RS`
    });
    await queryRunner.delete('black_card', {
      text: `One does not simply walk into ____.`,
      draw: 0,
      pick: 1,
      watermark: `RS`
    });
    await queryRunner.delete('black_card', {
      text: `In the next Punch Out!!, ____ will be the secret final boss.`,
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
      text: `What is the answer to life's question?`,
      draw: 0,
      pick: 1,
      watermark: `RS`
    });
    await queryRunner.delete('black_card', {
      text: `I've got the whole world in my ____.`,
      draw: 0,
      pick: 1,
      watermark: `RS`
    });
    await queryRunner.delete('black_card', {
      text: `I never thought ____ would be so enjoyable.`,
      draw: 0,
      pick: 1,
      watermark: `RS`
    });
    await queryRunner.delete('black_card', {
      text: `In his second term, Obama will rid America of ____.`,
      draw: 0,
      pick: 1,
      watermark: `RS`
    });
    await queryRunner.delete('black_card', {
      text: `What is Japan's national pastime?`,
      draw: 0,
      pick: 1,
      watermark: `RS`
    });
    await queryRunner.delete('black_card', {
      text: `In the future, ____ will fuel our cars.`,
      draw: 0,
      pick: 1,
      watermark: `RS`
    });
    await queryRunner.delete('black_card', {
      text: `The lion, the witch, and ____.`,
      draw: 0,
      pick: 1,
      watermark: `RS`
    });
    await queryRunner.delete('black_card', {
      text: `In the next episode, SpongeBob gets introduced to ____. `,
      draw: 0,
      pick: 1,
      watermark: `RS`
    });
    await queryRunner.delete('black_card', {
      text: `____ Game of the Year Edition.`,
      draw: 0,
      pick: 1,
      watermark: `RS`
    });
    await queryRunner.delete('black_card', {
      text: `What was going through Osama Bin Laden's head before he died?`,
      draw: 0,
      pick: 1,
      watermark: `RS`
    });
    await queryRunner.delete('black_card', {
      text: `In a news conference, Obama pulled out ____, to everyone's surprise.`,
      draw: 0,
      pick: 1,
      watermark: `RS`
    });
    await queryRunner.delete('black_card', {
      text: `Nights filled with ____.`,
      draw: 0,
      pick: 1,
      watermark: `RS`
    });

    await queryRunner.delete('white_card', {
      text: `Canadian Kindness.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `The world's tallest midget.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `The shitty remains of Taco Bell&reg;.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Master Chief.`,
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
      text: `Walt Disney's frozen head.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Sponge baths.`,
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
      text: `Getting high on bath salts.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Snorting Pixie Stix.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Poorly written Star Wars&reg; fan fiction.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `The final circle of Hell.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `The Bible.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Borat's one piece.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `LOOK AT THIS PHOTOGRAPH!`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `A 1971 Ford Pinto.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Shitting on the White House lawn.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Mountain Dew&reg; Baja Blast.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Nessie.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Princess Peach's Cake.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Two midgets stacked up pretending to be one person.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Apples to Apples&reg;.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `The tears of a college student.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Mr. Hankey the Christmas Poo.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `The Columbine Shooting.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Shag carpeting.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `The Eiffel Tower.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Chicken and Waffles.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `The Oculus Rift.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Banana Hammocks.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Dirty hippies.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Hey Arnold!`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Air Bud.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Yankee Stadium.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Hump Day.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Sheepskin Condoms.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Cranky Kong.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `The DK Rap.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Donkey Shows.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Hordes of zombies.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Monkeys throwing shit.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Rainbows and magic.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Tits.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `The brown note.`,
      watermark: `RS`
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
      text: `ALL the things!`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Hitler's mustache.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Gerudo Valley.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Song of Storms.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Bill Gates pissing on Steve Jobs's grave.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `A giant purple dildo sword.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Hipsters on their iPhones at Starbucks.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Catdog.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `A boat load of cocaine.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Smooth jazz.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Lemon grenades.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Blue Waffles.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `360 no scopes.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Soviet Russia.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `The Mushroom Kingdom.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Outsourcing jobs to India.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Hooters.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `The Hokey Pokey.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Kaizo Mario.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `FrankerZ.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Spontaneous Combustion.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Kappa.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Insane Clown Posse.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Nu Metal.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `The Wiggles.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Blue's Clues.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Using hot sauce as lube.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Mating season.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `The Ouya.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Jew-Fros.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Fruit Fuckers.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Blowing your hand off with a firework.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Beer Pong.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Duke Nukem Forever.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Rule 34.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Made-for-TV movies.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Spanish soap operas.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Teh Urn.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Viking Metal.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Tickle Me Elmo.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Barney's rape dungeon.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Nurse Joy.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Canadian tuxedo.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Hungry Hungry Hippos.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `The smallest, whitest dick.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Abusive fathers.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Rich, chocolatey Ovaltine&reg;.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Ringworm.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `The hero of time.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Terabytes of horse porn.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Blowing the President.`,
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
      text: `Demi Moore's bush.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Eating 120 White Castle burgers&reg;.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `A walrus with a beret.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Speedrunning life.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `The truffle shuffle.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `An 8-ball.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Quiznos&reg;.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Bong hits for Jesus.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Penn and Teller.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Indentured servants.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Sex in your mouth.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Hoola hoops.`,
      watermark: `RS`
    });
    await queryRunner.delete('white_card', {
      text: `Scotsmen marrying their sheep.`,
      watermark: `RS`
    });

    await queryRunner.delete('card_set', {
      name: `[C] Ridiculously Stupid`,
      baseDeck: false,
      description: null,
      weight: 504,
      active: true
    });
  }
}
