/* tslint:disable:no-non-null-assertion no-unsafe-any no-any */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class PAXPrime20131505098554418 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const insertResult = await queryRunner.insert('card_set', {
      name: `PAX Prime 2013`,
      baseDeck: false,
      description: `PAX Prime 2013`,
      weight: 33,
      active: true
    });

    await queryRunner.insert('black_card', {
      text: `The most controversial game at PAX this year is an 8-bit indie platformer about ____.<span class="cardnum">38 / 44</span>`,
      draw: 0,
      pick: 1,
      watermark: `13PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What made Spock cry?<span class="cardnum">39 / 44</span>`,
      draw: 0,
      pick: 1,
      watermark: `13PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____: Achievement unlocked.<span class="cardnum">40 / 44</span>`,
      draw: 0,
      pick: 1,
      watermark: `13PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What's the latest bullshit that's troubling this quaint fantasy town?<span class="cardnum">43 / 44</span>`,
      draw: 0,
      pick: 1,
      watermark: `13PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `There was a riot at the Gearbox panel when they gave the attendees ____.<span class="cardnum">41 / 44</span>`,
      draw: 0,
      pick: 1,
      watermark: `13PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In the new DLC for Mass Effect, Shepard must save the galaxy from ____.<span class="cardnum">42 / 44</span>`,
      draw: 0,
      pick: 1,
      watermark: `13PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `No Enforcer wants to manage the panel on ____.<span class="cardnum">44 / 44</span>`,
      draw: 0,
      pick: 1,
      watermark: `13PAX`,
      cardSetId: insertResult.result![0].id
    });

    await queryRunner.insert('white_card', {
      text: `Reading the comments.<span class="cardnum">3 / 44</span>`,
      watermark: `13PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The collective wail of every Magic player suddenly realizing that they've spent hundreds of dollars on pieces of cardboard.<span class="cardnum">8 / 44</span>`,
      watermark: `13PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Being an attractive elf trapped in an unattractive human's body.<span class="cardnum">9 / 44</span>`,
      watermark: `13PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Temporary invincibility.<span class="cardnum">10 / 44</span>`,
      watermark: `13PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mario Kart rage.<span class="cardnum">14 / 44</span>`,
      watermark: `13PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A homemade, cum-stained Star Trek uniform.<span class="cardnum">20 / 44</span>`,
      watermark: `13PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Never watching, discussing, or thinking about My Little Pony.<span class="cardnum">23 / 44</span>`,
      watermark: `13PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Turn-of-the-century sky racists.<span class="cardnum">24 / 44</span>`,
      watermark: `13PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A fully-dressed female videogame character.<span class="cardnum">26 / 44</span>`,
      watermark: `13PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Buying virtual clothes for a Sim family instead of real clothes for a real family.<span class="cardnum">27 / 44</span>`,
      watermark: `13PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Google Glass + e-cigarette: Ultimate Combo!<span class="cardnum">28 / 44</span>`,
      watermark: `13PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Full HD.<span class="cardnum">1 / 44</span>`,
      watermark: `13PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Allowing nacho cheese to curdle in your beard while you creep in League of Legends.<span class="cardnum">5 / 44</span>`,
      watermark: `13PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Sarlacc.<span class="cardnum">11 / 44</span>`,
      watermark: `13PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nude-modding Super Mario World.<span class="cardnum">15 / 44</span>`,
      watermark: `13PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An angry stone head that stomps on the floor every three seconds.<span class="cardnum">16 / 44</span>`,
      watermark: `13PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Yoshi's huge egg-laying cloaca.<span class="cardnum">17 / 44</span>`,
      watermark: `13PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Cock Ring of Alacrity.<span class="cardnum">18 / 44</span>`,
      watermark: `13PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Offering sexual favors for an ore and a sheep.<span class="cardnum">19 / 44</span>`,
      watermark: `13PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Unlocking a new sex position.<span class="cardnum">21 / 44</span>`,
      watermark: `13PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The boner hatch in the Iron Man suit.<span class="cardnum">22 / 44</span>`,
      watermark: `13PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The decade of legal inquests following a single hour of Grand Theft Auto.<span class="cardnum">25 / 44</span>`,
      watermark: `13PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Legendary Creature &ndash; Robert Khoo.<span class="cardnum">31 / 44</span>`,
      watermark: `13PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Winning the approval of Cooking Mama that you never got from actual mama.<span class="cardnum">32 / 44</span>`,
      watermark: `13PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tapping Sara Angel.<span class="cardnum">29 / 44</span>`,
      watermark: `13PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Charles Barkley Shut Up and Jam!<span class="cardnum">30 / 44</span>`,
      watermark: `13PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting into a situation with an owlbear.<span class="cardnum">34 / 44</span>`,
      watermark: `13PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Grand Theft Auto: Fort Lauderdale.<span class="cardnum">35 / 44</span>`,
      watermark: `13PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A madman who lives in a policebox and kidnaps women.<span class="cardnum">36 / 44</span>`,
      watermark: `13PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `SNES cartridge cleaning fluid.<span class="cardnum">37 / 44</span>`,
      watermark: `13PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Eating a pizza that's lying on the street to gain health.<span class="cardnum">33 / 44</span>`,
      watermark: `13PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The gravity gun.<span class="cardnum">2 / 44</span>`,
      watermark: `13PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Achieving the manual dexterity and tactical brilliance of a 12-year-old Korean boy.<span class="cardnum">6 / 44</span>`,
      watermark: `13PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Rolling a D20 to save a failing marriage.<span class="cardnum">7 / 44</span>`,
      watermark: `13PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bowser's aching heart.<span class="cardnum">13 / 44</span>`,
      watermark: `13PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Filling every pouch of a UtiliKilt&trade; with pizza.<span class="cardnum">12 / 44</span>`,
      watermark: `13PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `70,000 gamers sweating and farting inside an airtight steel dome.<span class="cardnum">4 / 44</span>`,
      watermark: `13PAX`,
      cardSetId: insertResult.result![0].id
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.delete('black_card', {
      text: `The most controversial game at PAX this year is an 8-bit indie platformer about ____.<span class="cardnum">38 / 44</span>`,
      draw: 0,
      pick: 1,
      watermark: `13PAX`
    });
    await queryRunner.delete('black_card', {
      text: `What made Spock cry?<span class="cardnum">39 / 44</span>`,
      draw: 0,
      pick: 1,
      watermark: `13PAX`
    });
    await queryRunner.delete('black_card', {
      text: `____: Achievement unlocked.<span class="cardnum">40 / 44</span>`,
      draw: 0,
      pick: 1,
      watermark: `13PAX`
    });
    await queryRunner.delete('black_card', {
      text: `What's the latest bullshit that's troubling this quaint fantasy town?<span class="cardnum">43 / 44</span>`,
      draw: 0,
      pick: 1,
      watermark: `13PAX`
    });
    await queryRunner.delete('black_card', {
      text: `There was a riot at the Gearbox panel when they gave the attendees ____.<span class="cardnum">41 / 44</span>`,
      draw: 0,
      pick: 1,
      watermark: `13PAX`
    });
    await queryRunner.delete('black_card', {
      text: `In the new DLC for Mass Effect, Shepard must save the galaxy from ____.<span class="cardnum">42 / 44</span>`,
      draw: 0,
      pick: 1,
      watermark: `13PAX`
    });
    await queryRunner.delete('black_card', {
      text: `No Enforcer wants to manage the panel on ____.<span class="cardnum">44 / 44</span>`,
      draw: 0,
      pick: 1,
      watermark: `13PAX`
    });

    await queryRunner.delete('white_card', {
      text: `Reading the comments.<span class="cardnum">3 / 44</span>`,
      watermark: `13PAX`
    });
    await queryRunner.delete('white_card', {
      text: `The collective wail of every Magic player suddenly realizing that they've spent hundreds of dollars on pieces of cardboard.<span class="cardnum">8 / 44</span>`,
      watermark: `13PAX`
    });
    await queryRunner.delete('white_card', {
      text: `Being an attractive elf trapped in an unattractive human's body.<span class="cardnum">9 / 44</span>`,
      watermark: `13PAX`
    });
    await queryRunner.delete('white_card', {
      text: `Temporary invincibility.<span class="cardnum">10 / 44</span>`,
      watermark: `13PAX`
    });
    await queryRunner.delete('white_card', {
      text: `Mario Kart rage.<span class="cardnum">14 / 44</span>`,
      watermark: `13PAX`
    });
    await queryRunner.delete('white_card', {
      text: `A homemade, cum-stained Star Trek uniform.<span class="cardnum">20 / 44</span>`,
      watermark: `13PAX`
    });
    await queryRunner.delete('white_card', {
      text: `Never watching, discussing, or thinking about My Little Pony.<span class="cardnum">23 / 44</span>`,
      watermark: `13PAX`
    });
    await queryRunner.delete('white_card', {
      text: `Turn-of-the-century sky racists.<span class="cardnum">24 / 44</span>`,
      watermark: `13PAX`
    });
    await queryRunner.delete('white_card', {
      text: `A fully-dressed female videogame character.<span class="cardnum">26 / 44</span>`,
      watermark: `13PAX`
    });
    await queryRunner.delete('white_card', {
      text: `Buying virtual clothes for a Sim family instead of real clothes for a real family.<span class="cardnum">27 / 44</span>`,
      watermark: `13PAX`
    });
    await queryRunner.delete('white_card', {
      text: `Google Glass + e-cigarette: Ultimate Combo!<span class="cardnum">28 / 44</span>`,
      watermark: `13PAX`
    });
    await queryRunner.delete('white_card', {
      text: `Full HD.<span class="cardnum">1 / 44</span>`,
      watermark: `13PAX`
    });
    await queryRunner.delete('white_card', {
      text: `Allowing nacho cheese to curdle in your beard while you creep in League of Legends.<span class="cardnum">5 / 44</span>`,
      watermark: `13PAX`
    });
    await queryRunner.delete('white_card', {
      text: `The Sarlacc.<span class="cardnum">11 / 44</span>`,
      watermark: `13PAX`
    });
    await queryRunner.delete('white_card', {
      text: `Nude-modding Super Mario World.<span class="cardnum">15 / 44</span>`,
      watermark: `13PAX`
    });
    await queryRunner.delete('white_card', {
      text: `An angry stone head that stomps on the floor every three seconds.<span class="cardnum">16 / 44</span>`,
      watermark: `13PAX`
    });
    await queryRunner.delete('white_card', {
      text: `Yoshi's huge egg-laying cloaca.<span class="cardnum">17 / 44</span>`,
      watermark: `13PAX`
    });
    await queryRunner.delete('white_card', {
      text: `The Cock Ring of Alacrity.<span class="cardnum">18 / 44</span>`,
      watermark: `13PAX`
    });
    await queryRunner.delete('white_card', {
      text: `Offering sexual favors for an ore and a sheep.<span class="cardnum">19 / 44</span>`,
      watermark: `13PAX`
    });
    await queryRunner.delete('white_card', {
      text: `Unlocking a new sex position.<span class="cardnum">21 / 44</span>`,
      watermark: `13PAX`
    });
    await queryRunner.delete('white_card', {
      text: `The boner hatch in the Iron Man suit.<span class="cardnum">22 / 44</span>`,
      watermark: `13PAX`
    });
    await queryRunner.delete('white_card', {
      text: `The decade of legal inquests following a single hour of Grand Theft Auto.<span class="cardnum">25 / 44</span>`,
      watermark: `13PAX`
    });
    await queryRunner.delete('white_card', {
      text: `Legendary Creature &ndash; Robert Khoo.<span class="cardnum">31 / 44</span>`,
      watermark: `13PAX`
    });
    await queryRunner.delete('white_card', {
      text: `Winning the approval of Cooking Mama that you never got from actual mama.<span class="cardnum">32 / 44</span>`,
      watermark: `13PAX`
    });
    await queryRunner.delete('white_card', {
      text: `Tapping Sara Angel.<span class="cardnum">29 / 44</span>`,
      watermark: `13PAX`
    });
    await queryRunner.delete('white_card', {
      text: `Charles Barkley Shut Up and Jam!<span class="cardnum">30 / 44</span>`,
      watermark: `13PAX`
    });
    await queryRunner.delete('white_card', {
      text: `Getting into a situation with an owlbear.<span class="cardnum">34 / 44</span>`,
      watermark: `13PAX`
    });
    await queryRunner.delete('white_card', {
      text: `Grand Theft Auto: Fort Lauderdale.<span class="cardnum">35 / 44</span>`,
      watermark: `13PAX`
    });
    await queryRunner.delete('white_card', {
      text: `A madman who lives in a policebox and kidnaps women.<span class="cardnum">36 / 44</span>`,
      watermark: `13PAX`
    });
    await queryRunner.delete('white_card', {
      text: `SNES cartridge cleaning fluid.<span class="cardnum">37 / 44</span>`,
      watermark: `13PAX`
    });
    await queryRunner.delete('white_card', {
      text: `Eating a pizza that's lying on the street to gain health.<span class="cardnum">33 / 44</span>`,
      watermark: `13PAX`
    });
    await queryRunner.delete('white_card', {
      text: `The gravity gun.<span class="cardnum">2 / 44</span>`,
      watermark: `13PAX`
    });
    await queryRunner.delete('white_card', {
      text: `Achieving the manual dexterity and tactical brilliance of a 12-year-old Korean boy.<span class="cardnum">6 / 44</span>`,
      watermark: `13PAX`
    });
    await queryRunner.delete('white_card', {
      text: `Rolling a D20 to save a failing marriage.<span class="cardnum">7 / 44</span>`,
      watermark: `13PAX`
    });
    await queryRunner.delete('white_card', {
      text: `Bowser's aching heart.<span class="cardnum">13 / 44</span>`,
      watermark: `13PAX`
    });
    await queryRunner.delete('white_card', {
      text: `Filling every pouch of a UtiliKilt&trade; with pizza.<span class="cardnum">12 / 44</span>`,
      watermark: `13PAX`
    });
    await queryRunner.delete('white_card', {
      text: `70,000 gamers sweating and farting inside an airtight steel dome.<span class="cardnum">4 / 44</span>`,
      watermark: `13PAX`
    });

    await queryRunner.delete('card_set', {
      name: `PAX Prime 2013`,
      baseDeck: false,
      description: `PAX Prime 2013`,
      weight: 33,
      active: true
    });
  }
}
