/* tslint:disable:no-non-null-assertion no-unsafe-any no-any */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Derps1505596663568 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const insertResult = await queryRunner.insert('card_set', {
      name: `[C] Derps Against Humanity`,
      baseDeck: false,
      description: null,
      weight: 520,
      active: true
    });

    await queryRunner.insert('black_card', {
      text: `The comment section was nothing but ____ arguing about ____.`,
      draw: 0,
      pick: 2,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `It took hours to edit ____ into the video.`,
      draw: 0,
      pick: 1,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What's a paladin?`,
      draw: 0,
      pick: 1,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `One of these days i'm just gonna shit my ____.`,
      draw: 0,
      pick: 1,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `You need to ____ your asshole, it's vital to this operation.`,
      draw: 0,
      pick: 1,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I'm sorry Timmy, but I must ____ you.`,
      draw: 0,
      pick: 1,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In this week's gauntlet, Tehsmarty challenges ChilledChaos to ____.`,
      draw: 0,
      pick: 1,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In this week's gauntlet, ChilledChaos challenges Tehsmarty to ____.`,
      draw: 0,
      pick: 1,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I AM THE ____ CZAR!!!`,
      draw: 0,
      pick: 1,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `ZeRoyalViking's up and coming game company, "ZEA" accredits their success to ____.`,
      draw: 0,
      pick: 1,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Tehsmarty loves the smell of ____ in the morning.`,
      draw: 0,
      pick: 1,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The Creatures' next member is ____.`,
      draw: 0,
      pick: 1,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Come on and slam, and welcome to the ____.`,
      draw: 0,
      pick: 1,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____, the one you want to get DDoS'd`,
      draw: 0,
      pick: 1,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `GaLmHD is so pro at almost every game he plays yet he can't play____!`,
      draw: 0,
      pick: 1,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Smarty's darkest fear is ____.`,
      draw: 0,
      pick: 1,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Pewdiepie's going to play ____!?`,
      draw: 0,
      pick: 1,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `And here we have ____. Strike it's weakness for MASSIVE damage!`,
      draw: 0,
      pick: 1,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `But Beardman! Why do you think that ____?`,
      draw: 0,
      pick: 1,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In the next episode of Press Heart to Continue: Dodger talks about ____.`,
      draw: 0,
      pick: 1,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What did Criken do this time to break ARMA III? `,
      draw: 0,
      pick: 1,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What was the big prize this time around at the Thrown Controllers panel?`,
      draw: 0,
      pick: 1,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What did Mitch or Bajan Canadian find in the fridge today?`,
      draw: 0,
      pick: 1,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In ____ We Trust.`,
      draw: 0,
      pick: 1,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `When Sp00n finally removed his horsemask on the livestream, we saw ____.`,
      draw: 0,
      pick: 1,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I give this game a rating of ____.`,
      draw: 0,
      pick: 1,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What did Pewdiepie overreact to on his channel today?`,
      draw: 0,
      pick: 1,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `This time on Brutalmoose's Top 10, his guest was ____.`,
      draw: 0,
      pick: 1,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Only Totalbiscuit would spend an hour long video discussing ____.`,
      draw: 0,
      pick: 1,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Last Thursday, Riorach was identified in public and she proceeded to ____.`,
      draw: 0,
      pick: 1,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `On this episode of PKA Woody and Wings talk about ____.`,
      draw: 0,
      pick: 1,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Bro's Angels. We ____ hard.`,
      draw: 0,
      pick: 1,
      watermark: `DAH`,
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
      text: `GTA shenanigans would not be GTA shenanigans without Seananners dropping ____ on ____.`,
      draw: 0,
      pick: 2,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Knowing Chilled's knowledge with Minecraft, he'll probably use ____ on ____ in his next video.`,
      draw: 0,
      pick: 2,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Oh great, ____ is doing another ____ game LP.`,
      draw: 0,
      pick: 2,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In his new Co-op work SSoHPKC will be playing ____ with ____.`,
      draw: 0,
      pick: 2,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `My name is-a ____ and i likea da ____.`,
      draw: 0,
      pick: 2,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In today's Driftor in-depth episode we shall look at ____.`,
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
      text: `Two Best Friends Play ____.`,
      draw: 0,
      pick: 1,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });

    await queryRunner.insert('white_card', {
      text: `The league of being a big faggot.`,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `GaLm's sunglasses.`,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Card Czar.`,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Inside Shrek's asshole.`,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Solving a rubiks cube with your bare nipples.`,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A canoe with enough room for Phil.`,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Black Seed.`,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `That video of EatMyDiction1 twerking.`,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Sips Co. Dirt Factory.`,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `DarkSydePhil playing Dark Souls.`,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hitler's Train!`,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `That time when Machinima played actual machinima videos.`,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bajan Canadian's fridge.`,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Seananners' dolphin laugh.`,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Chilledchaos' homosexual tendencies.`,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bolshevik the wolf.`,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Diction watching a burly outdoorsman skin a bear while eating honey and crying.`,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Tom Shark.`,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `#TysLeftFoot`,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Seananners joyously dropping "presents" on the African minority in GTA.`,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Jah be dwarfin' it up!`,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tom drunk off his ass.`,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting anally violated by a silverback gorilla.`,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Big 'Ol Bowl of Fruit!`,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An LP Smarty finished.`,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `BEARS!`,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Blue Yeti microphone.`,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Machinima contract.`,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Criken's Fun House.`,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A smart joke.`,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `One of Chuggaconroy's awful puns.`,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Great Youtube Unsubbing of 2012.`,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A robot bird.`,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Time to cancel Smash Fighter.`,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Smash Fighter.`,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Totalbiscuit and Angry Joe frolicking in a meadow.`,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Chilled and Smarty's wedding.`,
      watermark: `DAH`,
      cardSetId: insertResult.result![0].id
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.delete('black_card', {
      text: `The comment section was nothing but ____ arguing about ____.`,
      draw: 0,
      pick: 2,
      watermark: `DAH`
    });
    await queryRunner.delete('black_card', {
      text: `It took hours to edit ____ into the video.`,
      draw: 0,
      pick: 1,
      watermark: `DAH`
    });
    await queryRunner.delete('black_card', {
      text: `What's a paladin?`,
      draw: 0,
      pick: 1,
      watermark: `DAH`
    });
    await queryRunner.delete('black_card', {
      text: `One of these days i'm just gonna shit my ____.`,
      draw: 0,
      pick: 1,
      watermark: `DAH`
    });
    await queryRunner.delete('black_card', {
      text: `You need to ____ your asshole, it's vital to this operation.`,
      draw: 0,
      pick: 1,
      watermark: `DAH`
    });
    await queryRunner.delete('black_card', {
      text: `I'm sorry Timmy, but I must ____ you.`,
      draw: 0,
      pick: 1,
      watermark: `DAH`
    });
    await queryRunner.delete('black_card', {
      text: `In this week's gauntlet, Tehsmarty challenges ChilledChaos to ____.`,
      draw: 0,
      pick: 1,
      watermark: `DAH`
    });
    await queryRunner.delete('black_card', {
      text: `In this week's gauntlet, ChilledChaos challenges Tehsmarty to ____.`,
      draw: 0,
      pick: 1,
      watermark: `DAH`
    });
    await queryRunner.delete('black_card', {
      text: `I AM THE ____ CZAR!!!`,
      draw: 0,
      pick: 1,
      watermark: `DAH`
    });
    await queryRunner.delete('black_card', {
      text: `ZeRoyalViking's up and coming game company, "ZEA" accredits their success to ____.`,
      draw: 0,
      pick: 1,
      watermark: `DAH`
    });
    await queryRunner.delete('black_card', {
      text: `Tehsmarty loves the smell of ____ in the morning.`,
      draw: 0,
      pick: 1,
      watermark: `DAH`
    });
    await queryRunner.delete('black_card', {
      text: `The Creatures' next member is ____.`,
      draw: 0,
      pick: 1,
      watermark: `DAH`
    });
    await queryRunner.delete('black_card', {
      text: `Come on and slam, and welcome to the ____.`,
      draw: 0,
      pick: 1,
      watermark: `DAH`
    });
    await queryRunner.delete('black_card', {
      text: `____, the one you want to get DDoS'd`,
      draw: 0,
      pick: 1,
      watermark: `DAH`
    });
    await queryRunner.delete('black_card', {
      text: `GaLmHD is so pro at almost every game he plays yet he can't play____!`,
      draw: 0,
      pick: 1,
      watermark: `DAH`
    });
    await queryRunner.delete('black_card', {
      text: `Smarty's darkest fear is ____.`,
      draw: 0,
      pick: 1,
      watermark: `DAH`
    });
    await queryRunner.delete('black_card', {
      text: `Pewdiepie's going to play ____!?`,
      draw: 0,
      pick: 1,
      watermark: `DAH`
    });
    await queryRunner.delete('black_card', {
      text: `And here we have ____. Strike it's weakness for MASSIVE damage!`,
      draw: 0,
      pick: 1,
      watermark: `DAH`
    });
    await queryRunner.delete('black_card', {
      text: `But Beardman! Why do you think that ____?`,
      draw: 0,
      pick: 1,
      watermark: `DAH`
    });
    await queryRunner.delete('black_card', {
      text: `In the next episode of Press Heart to Continue: Dodger talks about ____.`,
      draw: 0,
      pick: 1,
      watermark: `DAH`
    });
    await queryRunner.delete('black_card', {
      text: `What did Criken do this time to break ARMA III? `,
      draw: 0,
      pick: 1,
      watermark: `DAH`
    });
    await queryRunner.delete('black_card', {
      text: `What was the big prize this time around at the Thrown Controllers panel?`,
      draw: 0,
      pick: 1,
      watermark: `DAH`
    });
    await queryRunner.delete('black_card', {
      text: `What did Mitch or Bajan Canadian find in the fridge today?`,
      draw: 0,
      pick: 1,
      watermark: `DAH`
    });
    await queryRunner.delete('black_card', {
      text: `In ____ We Trust.`,
      draw: 0,
      pick: 1,
      watermark: `DAH`
    });
    await queryRunner.delete('black_card', {
      text: `When Sp00n finally removed his horsemask on the livestream, we saw ____.`,
      draw: 0,
      pick: 1,
      watermark: `DAH`
    });
    await queryRunner.delete('black_card', {
      text: `I give this game a rating of ____.`,
      draw: 0,
      pick: 1,
      watermark: `DAH`
    });
    await queryRunner.delete('black_card', {
      text: `What did Pewdiepie overreact to on his channel today?`,
      draw: 0,
      pick: 1,
      watermark: `DAH`
    });
    await queryRunner.delete('black_card', {
      text: `This time on Brutalmoose's Top 10, his guest was ____.`,
      draw: 0,
      pick: 1,
      watermark: `DAH`
    });
    await queryRunner.delete('black_card', {
      text: `Only Totalbiscuit would spend an hour long video discussing ____.`,
      draw: 0,
      pick: 1,
      watermark: `DAH`
    });
    await queryRunner.delete('black_card', {
      text: `Last Thursday, Riorach was identified in public and she proceeded to ____.`,
      draw: 0,
      pick: 1,
      watermark: `DAH`
    });
    await queryRunner.delete('black_card', {
      text: `On this episode of PKA Woody and Wings talk about ____.`,
      draw: 0,
      pick: 1,
      watermark: `DAH`
    });
    await queryRunner.delete('black_card', {
      text: `Bro's Angels. We ____ hard.`,
      draw: 0,
      pick: 1,
      watermark: `DAH`
    });
    await queryRunner.delete('black_card', {
      text: `TotalBiscuit's top hat is actually ____. `,
      draw: 0,
      pick: 1,
      watermark: `DAH`
    });
    await queryRunner.delete('black_card', {
      text: `GTA shenanigans would not be GTA shenanigans without Seananners dropping ____ on ____.`,
      draw: 0,
      pick: 2,
      watermark: `DAH`
    });
    await queryRunner.delete('black_card', {
      text: `Knowing Chilled's knowledge with Minecraft, he'll probably use ____ on ____ in his next video.`,
      draw: 0,
      pick: 2,
      watermark: `DAH`
    });
    await queryRunner.delete('black_card', {
      text: `Oh great, ____ is doing another ____ game LP.`,
      draw: 0,
      pick: 2,
      watermark: `DAH`
    });
    await queryRunner.delete('black_card', {
      text: `In his new Co-op work SSoHPKC will be playing ____ with ____.`,
      draw: 0,
      pick: 2,
      watermark: `DAH`
    });
    await queryRunner.delete('black_card', {
      text: `My name is-a ____ and i likea da ____.`,
      draw: 0,
      pick: 2,
      watermark: `DAH`
    });
    await queryRunner.delete('black_card', {
      text: `In today's Driftor in-depth episode we shall look at ____.`,
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
      text: `Two Best Friends Play ____.`,
      draw: 0,
      pick: 1,
      watermark: `DAH`
    });

    await queryRunner.delete('white_card', {
      text: `The league of being a big faggot.`,
      watermark: `DAH`
    });
    await queryRunner.delete('white_card', {
      text: `GaLm's sunglasses.`,
      watermark: `DAH`
    });
    await queryRunner.delete('white_card', {
      text: `The Card Czar.`,
      watermark: `DAH`
    });
    await queryRunner.delete('white_card', {
      text: `Inside Shrek's asshole.`,
      watermark: `DAH`
    });
    await queryRunner.delete('white_card', {
      text: `Solving a rubiks cube with your bare nipples.`,
      watermark: `DAH`
    });
    await queryRunner.delete('white_card', {
      text: `A canoe with enough room for Phil.`,
      watermark: `DAH`
    });
    await queryRunner.delete('white_card', {
      text: `The Black Seed.`,
      watermark: `DAH`
    });
    await queryRunner.delete('white_card', {
      text: `That video of EatMyDiction1 twerking.`,
      watermark: `DAH`
    });
    await queryRunner.delete('white_card', {
      text: `The Sips Co. Dirt Factory.`,
      watermark: `DAH`
    });
    await queryRunner.delete('white_card', {
      text: `DarkSydePhil playing Dark Souls.`,
      watermark: `DAH`
    });
    await queryRunner.delete('white_card', {
      text: `Hitler's Train!`,
      watermark: `DAH`
    });
    await queryRunner.delete('white_card', {
      text: `That time when Machinima played actual machinima videos.`,
      watermark: `DAH`
    });
    await queryRunner.delete('white_card', {
      text: `Bajan Canadian's fridge.`,
      watermark: `DAH`
    });
    await queryRunner.delete('white_card', {
      text: `Seananners' dolphin laugh.`,
      watermark: `DAH`
    });
    await queryRunner.delete('white_card', {
      text: `Chilledchaos' homosexual tendencies.`,
      watermark: `DAH`
    });
    await queryRunner.delete('white_card', {
      text: `Bolshevik the wolf.`,
      watermark: `DAH`
    });
    await queryRunner.delete('white_card', {
      text: `Diction watching a burly outdoorsman skin a bear while eating honey and crying.`,
      watermark: `DAH`
    });
    await queryRunner.delete('white_card', {
      text: `The Tom Shark.`,
      watermark: `DAH`
    });
    await queryRunner.delete('white_card', {
      text: `#TysLeftFoot`,
      watermark: `DAH`
    });
    await queryRunner.delete('white_card', {
      text: `Seananners joyously dropping "presents" on the African minority in GTA.`,
      watermark: `DAH`
    });
    await queryRunner.delete('white_card', {
      text: `Jah be dwarfin' it up!`,
      watermark: `DAH`
    });
    await queryRunner.delete('white_card', {
      text: `Tom drunk off his ass.`,
      watermark: `DAH`
    });
    await queryRunner.delete('white_card', {
      text: `Getting anally violated by a silverback gorilla.`,
      watermark: `DAH`
    });
    await queryRunner.delete('white_card', {
      text: `A Big 'Ol Bowl of Fruit!`,
      watermark: `DAH`
    });
    await queryRunner.delete('white_card', {
      text: `An LP Smarty finished.`,
      watermark: `DAH`
    });
    await queryRunner.delete('white_card', {
      text: `BEARS!`,
      watermark: `DAH`
    });
    await queryRunner.delete('white_card', {
      text: `The Blue Yeti microphone.`,
      watermark: `DAH`
    });
    await queryRunner.delete('white_card', {
      text: `A Machinima contract.`,
      watermark: `DAH`
    });
    await queryRunner.delete('white_card', {
      text: `Criken's Fun House.`,
      watermark: `DAH`
    });
    await queryRunner.delete('white_card', {
      text: `A smart joke.`,
      watermark: `DAH`
    });
    await queryRunner.delete('white_card', {
      text: `One of Chuggaconroy's awful puns.`,
      watermark: `DAH`
    });
    await queryRunner.delete('white_card', {
      text: `The Great Youtube Unsubbing of 2012.`,
      watermark: `DAH`
    });
    await queryRunner.delete('white_card', {
      text: `A robot bird.`,
      watermark: `DAH`
    });
    await queryRunner.delete('white_card', {
      text: `Time to cancel Smash Fighter.`,
      watermark: `DAH`
    });
    await queryRunner.delete('white_card', {
      text: `Smash Fighter.`,
      watermark: `DAH`
    });
    await queryRunner.delete('white_card', {
      text: `Totalbiscuit and Angry Joe frolicking in a meadow.`,
      watermark: `DAH`
    });
    await queryRunner.delete('white_card', {
      text: `Chilled and Smarty's wedding.`,
      watermark: `DAH`
    });

    await queryRunner.delete('card_set', {
      name: `[C] Derps Against Humanity`,
      baseDeck: false,
      description: null,
      weight: 520,
      active: true
    });
  }
}
