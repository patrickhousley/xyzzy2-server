/* tslint:disable:no-non-null-assertion no-unsafe-any no-any no-unnecessary-type-assertion */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class PAXEast20141505098719191 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const insertResult = await queryRunner.insert('card_set', {
      name: `PAX East 2014`,
      baseDeck: false,
      description: `The "oatmeal" cards from PAX East 2014.`,
      weight: 34,
      active: true
    });

    await queryRunner.insert('black_card', {
      text: `What the hell?! They added a 6/6 with flying, trample, and ____.<span class="cardnum">26 / 27</span>`,
      draw: 0,
      pick: 1,
      watermark: `14PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Unfortunately, Neo, no one can be <i>told</i> what ____ is. You have to see it for yourself.<span class="cardnum">23 / 27</span>`,
      draw: 0,
      pick: 1,
      watermark: `14PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `<i>(Heavy breathing)</i><br/>Luke, I am ____.<span class="cardnum">24 / 27</span>`,
      draw: 0,
      pick: 1,
      watermark: `14PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `You think you have defeated me? Well, let's see how you handle ____!<span class="cardnum">25 / 27</span>`,
      draw: 0,
      pick: 1,
      watermark: `14PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ is way better in ____ mode.<span class="cardnum">27 / 27</span>`,
      draw: 0,
      pick: 2,
      watermark: `14PAX`,
      cardSetId: insertResult.result![0].id
    });

    await queryRunner.insert('white_card', {
      text: `Collecting all seven power crystals.<span class="cardnum">1 / 27</span>`,
      watermark: `14PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Demons and shit.<span class="cardnum">4 / 27</span>`,
      watermark: `14PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The imagination of Peter Jackson.<span class="cardnum">5 / 27</span>`,
      watermark: `14PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Futuristic death sports.<span class="cardnum">6 / 27</span>`,
      watermark: `14PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `KHAAAAAAAAAN!<span class="cardnum">7 / 27</span>`,
      watermark: `14PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Star Wars Universe.<span class="cardnum">8 / 27</span>`,
      watermark: `14PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Taking 2d6 emotional damage.<span class="cardnum">9 / 27</span>`,
      watermark: `14PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A grumpy old Harrison Ford who'd rather be doing anything else.<span class="cardnum">10 / 27</span>`,
      watermark: `14PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `All of the good times and premium gaming entertainment available to you in the Kickstarter room.<span class="cardnum">11 / 27</span>`,
      watermark: `14PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Attacking from Kamchatka.<span class="cardnum">12 / 27</span>`,
      watermark: `14PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Separate drinking fountains for dark elves.<span class="cardnum">13 / 27</span>`,
      watermark: `14PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lagging out.<span class="cardnum">14 / 27</span>`,
      watermark: `14PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mistakenly hitting on a <i>League of Legends</i> statue.<span class="cardnum">16 / 27</span>`,
      watermark: `14PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Whatever <i>Final Fantasy</i> bullshit happened this year.<span class="cardnum">2 / 27</span>`,
      watermark: `14PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Endless ninjas.<span class="cardnum">3 / 27</span>`,
      watermark: `14PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting bitten by a radioactive spider and then battling leukemia for 30 years.<span class="cardnum">15 / 27</span>`,
      watermark: `14PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A giant mechanical bird with a tragic backstory.<span class="cardnum">20 / 27</span>`,
      watermark: `14PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The pure, Zen-like state that exists between micro and macro.<span class="cardnum">21 / 27</span>`,
      watermark: `14PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ser Jorah Mormont's cerulean-blue balls.<span class="cardnum">17 / 27</span>`,
      watermark: `14PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The old gods.<span class="cardnum">18 / 27</span>`,
      watermark: `14PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Stuffing my balls into a Sega Genesis and pressing the power button.<span class="cardnum">19 / 27</span>`,
      watermark: `14PAX`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Xena,<br/>Warrior Princess.<span class="cardnum">22 / 27</span>`,
      watermark: `14PAX`,
      cardSetId: insertResult.result![0].id
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.delete('black_card', {
      text: `What the hell?! They added a 6/6 with flying, trample, and ____.<span class="cardnum">26 / 27</span>`,
      draw: 0,
      pick: 1,
      watermark: `14PAX`
    });
    await queryRunner.delete('black_card', {
      text: `Unfortunately, Neo, no one can be <i>told</i> what ____ is. You have to see it for yourself.<span class="cardnum">23 / 27</span>`,
      draw: 0,
      pick: 1,
      watermark: `14PAX`
    });
    await queryRunner.delete('black_card', {
      text: `<i>(Heavy breathing)</i><br/>Luke, I am ____.<span class="cardnum">24 / 27</span>`,
      draw: 0,
      pick: 1,
      watermark: `14PAX`
    });
    await queryRunner.delete('black_card', {
      text: `You think you have defeated me? Well, let's see how you handle ____!<span class="cardnum">25 / 27</span>`,
      draw: 0,
      pick: 1,
      watermark: `14PAX`
    });
    await queryRunner.delete('black_card', {
      text: `____ is way better in ____ mode.<span class="cardnum">27 / 27</span>`,
      draw: 0,
      pick: 2,
      watermark: `14PAX`
    });

    await queryRunner.delete('white_card', {
      text: `Collecting all seven power crystals.<span class="cardnum">1 / 27</span>`,
      watermark: `14PAX`
    });
    await queryRunner.delete('white_card', {
      text: `Demons and shit.<span class="cardnum">4 / 27</span>`,
      watermark: `14PAX`
    });
    await queryRunner.delete('white_card', {
      text: `The imagination of Peter Jackson.<span class="cardnum">5 / 27</span>`,
      watermark: `14PAX`
    });
    await queryRunner.delete('white_card', {
      text: `Futuristic death sports.<span class="cardnum">6 / 27</span>`,
      watermark: `14PAX`
    });
    await queryRunner.delete('white_card', {
      text: `KHAAAAAAAAAN!<span class="cardnum">7 / 27</span>`,
      watermark: `14PAX`
    });
    await queryRunner.delete('white_card', {
      text: `The Star Wars Universe.<span class="cardnum">8 / 27</span>`,
      watermark: `14PAX`
    });
    await queryRunner.delete('white_card', {
      text: `Taking 2d6 emotional damage.<span class="cardnum">9 / 27</span>`,
      watermark: `14PAX`
    });
    await queryRunner.delete('white_card', {
      text: `A grumpy old Harrison Ford who'd rather be doing anything else.<span class="cardnum">10 / 27</span>`,
      watermark: `14PAX`
    });
    await queryRunner.delete('white_card', {
      text: `All of the good times and premium gaming entertainment available to you in the Kickstarter room.<span class="cardnum">11 / 27</span>`,
      watermark: `14PAX`
    });
    await queryRunner.delete('white_card', {
      text: `Attacking from Kamchatka.<span class="cardnum">12 / 27</span>`,
      watermark: `14PAX`
    });
    await queryRunner.delete('white_card', {
      text: `Separate drinking fountains for dark elves.<span class="cardnum">13 / 27</span>`,
      watermark: `14PAX`
    });
    await queryRunner.delete('white_card', {
      text: `Lagging out.<span class="cardnum">14 / 27</span>`,
      watermark: `14PAX`
    });
    await queryRunner.delete('white_card', {
      text: `Mistakenly hitting on a <i>League of Legends</i> statue.<span class="cardnum">16 / 27</span>`,
      watermark: `14PAX`
    });
    await queryRunner.delete('white_card', {
      text: `Whatever <i>Final Fantasy</i> bullshit happened this year.<span class="cardnum">2 / 27</span>`,
      watermark: `14PAX`
    });
    await queryRunner.delete('white_card', {
      text: `Endless ninjas.<span class="cardnum">3 / 27</span>`,
      watermark: `14PAX`
    });
    await queryRunner.delete('white_card', {
      text: `Getting bitten by a radioactive spider and then battling leukemia for 30 years.<span class="cardnum">15 / 27</span>`,
      watermark: `14PAX`
    });
    await queryRunner.delete('white_card', {
      text: `A giant mechanical bird with a tragic backstory.<span class="cardnum">20 / 27</span>`,
      watermark: `14PAX`
    });
    await queryRunner.delete('white_card', {
      text: `The pure, Zen-like state that exists between micro and macro.<span class="cardnum">21 / 27</span>`,
      watermark: `14PAX`
    });
    await queryRunner.delete('white_card', {
      text: `Ser Jorah Mormont's cerulean-blue balls.<span class="cardnum">17 / 27</span>`,
      watermark: `14PAX`
    });
    await queryRunner.delete('white_card', {
      text: `The old gods.<span class="cardnum">18 / 27</span>`,
      watermark: `14PAX`
    });
    await queryRunner.delete('white_card', {
      text: `Stuffing my balls into a Sega Genesis and pressing the power button.<span class="cardnum">19 / 27</span>`,
      watermark: `14PAX`
    });
    await queryRunner.delete('white_card', {
      text: `Xena,<br/>Warrior Princess.<span class="cardnum">22 / 27</span>`,
      watermark: `14PAX`
    });

    await queryRunner.delete('card_set', {
      name: `PAX East 2014`,
      baseDeck: false,
      description: `The "oatmeal" cards from PAX East 2014.`,
      weight: 34,
      active: true
    });
  }
}
