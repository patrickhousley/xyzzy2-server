/* tslint:disable:no-non-null-assertion no-unsafe-any no-any */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Imgur1505597359197 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const insertResult = await queryRunner.insert('card_set', {
      name: `[C] Imgur`,
      baseDeck: false,
      description: null,
      weight: 522,
      active: true
    });

    await queryRunner.insert('black_card', {
      text: `I always ____ ass - razor1000.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ for temperature. `,
      draw: 0,
      pick: 1,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Not asking for upvotes but ____.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I got ____ to the frontpage `,
      draw: 0,
      pick: 1,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I know this is going to get downvoted to hell but ____.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I know this is a selfie but ____.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Imgur: where the points don’t matter and the ____ is made up.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `If you could stop ____, that’d be greeeeattt. `,
      draw: 0,
      pick: 1,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `ERMAGERD! ____.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Not sure if Imgur reference or ____.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Having a bit of fun with the new ____.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Press 0 twice for ____.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `No, no, you leave ____. We no like you.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `FOR ____!!!!`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `If ____ happens because of ____, I will eat my socks.`,
      draw: 0,
      pick: 2,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Put that ____ back where it came from or so help me.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Yer a wizard ____`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Am I the only one around here who ____?`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Confession Bear: When I was 6, I ____ on my ____.`,
      draw: 0,
      pick: 2,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Actual Advice Mallard: Always ____.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `For every upvote I will ____.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____. Awkward boner. `,
      draw: 0,
      pick: 1,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____. Forever Alone.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____. TOO SAD AND TOO TINY!`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I’ve never seen anyone so ____ while ____.`,
      draw: 0,
      pick: 2,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `OH MY GOD ____. ARE YOU FUCKING KIDDING ME!?`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `You know nothing ____.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Most of the time you can only fit one____ in there.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `That ____ tasted so bad, I needed a Jolly Rancher. `,
      draw: 0,
      pick: 1,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I don’t always ____. But when I do____..`,
      draw: 0,
      pick: 2,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `=+1 for ____.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `SAY GOODBYE TO____.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `When I found ____ in usersubmitted, I was flabbergasted. `,
      draw: 0,
      pick: 1,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `France is ____`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The ____ for this ____ is TOO DAMN HIGH. `,
      draw: 0,
      pick: 2,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Any love for ____?`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In Japan, ____ is the new sexual trend.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I love bacon as much as ____ loves ____.`,
      draw: 0,
      pick: 2,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `A hipster needs a ____ as much as a fish needs a ____.`,
      draw: 0,
      pick: 2,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Justin Bieber is a ____.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Are you my ____?`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Weasley is our ____.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I have a bad feeling about ____.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I am a leaf on the ____.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `That was more awkward than ____.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Boardgame Online is more fun than ____.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I hate My Little Pony more than ____ hates ____.`,
      draw: 0,
      pick: 2,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I love My Little Pony more than ____ loves ____.`,
      draw: 0,
      pick: 2,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Cat gifs are cuter than ____. `,
      draw: 0,
      pick: 1,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `If it fits, I ____. `,
      draw: 0,
      pick: 1,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____. My moon and my stars. `,
      draw: 0,
      pick: 1,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `A ____ always pays his debts. `,
      draw: 0,
      pick: 1,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `My ovaries just exploded because of ____. `,
      draw: 0,
      pick: 1,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Chewie, ____ it!`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Steven Moffat has no ____. `,
      draw: 0,
      pick: 1,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Dobby is ____!!`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });

    await queryRunner.insert('white_card', {
      text: `Ewoks.`,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `OP Delivers.`,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `#SOCKS.`,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Oh look! A cat!`,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `I am not a clever man.`,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Banana.`,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Read me 10 for all coffee.`,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Juan.`,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sir Patrick Stewart.`,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Troy and Abed.`,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `MOON MOON.`,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nathan Fillion.`,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Felica Day.`,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `9`,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `10`,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `11`,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `BOOM! Pregnant.`,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tesla.`,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Jon Snow.`,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ass.`,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Theon Greyjoy’s dismembered member.`,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Not since the accident.`,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lechuga.`,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Edward Macaroni Fork.`,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Imgurgiraffe.`,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `ANUSTART.`,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `This was a grave mistake.`,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `BAZINGA!`,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cousin Maeby.`,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `STEVE HOLT.`,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nevernudes.`,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tard.`,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Potato. `,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bacon.`,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Erotic fiction featuring Snape and Hermione.`,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sonic Screwdriver. `,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Chak´s homemade maple bacon jam.`,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Moisturize me.`,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mummy.`,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Expelliarmus!`,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hagrid.`,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Buckbeak.`,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Luke Skywalker making out with his sister, Leia.`,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `NobodySaysThis.`,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nargles.`,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Annie´s boobs.`,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An overpriced cup of coffee.`,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Demonstrating how to properly put on a condom using a cucumber as substitute for a penis.`,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Katie the Cock Cozy.`,
      watermark: `Imgur`,
      cardSetId: insertResult.result![0].id
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.delete('black_card', {
      text: `I always ____ ass - razor1000.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `____ for temperature. `,
      draw: 0,
      pick: 1,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `Not asking for upvotes but ____.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `I got ____ to the frontpage `,
      draw: 0,
      pick: 1,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `I know this is going to get downvoted to hell but ____.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `I know this is a selfie but ____.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `Imgur: where the points don’t matter and the ____ is made up.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `If you could stop ____, that’d be greeeeattt. `,
      draw: 0,
      pick: 1,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `ERMAGERD! ____.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `Not sure if Imgur reference or ____.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `Having a bit of fun with the new ____.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `Press 0 twice for ____.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `No, no, you leave ____. We no like you.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `FOR ____!!!!`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `If ____ happens because of ____, I will eat my socks.`,
      draw: 0,
      pick: 2,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `Put that ____ back where it came from or so help me.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `Yer a wizard ____`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `Am I the only one around here who ____?`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `Confession Bear: When I was 6, I ____ on my ____.`,
      draw: 0,
      pick: 2,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `Actual Advice Mallard: Always ____.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `For every upvote I will ____.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `____. Awkward boner. `,
      draw: 0,
      pick: 1,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `____. Forever Alone.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `____. TOO SAD AND TOO TINY!`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `I’ve never seen anyone so ____ while ____.`,
      draw: 0,
      pick: 2,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `OH MY GOD ____. ARE YOU FUCKING KIDDING ME!?`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `You know nothing ____.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `Most of the time you can only fit one____ in there.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `That ____ tasted so bad, I needed a Jolly Rancher. `,
      draw: 0,
      pick: 1,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `I don’t always ____. But when I do____..`,
      draw: 0,
      pick: 2,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `=+1 for ____.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `SAY GOODBYE TO____.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `When I found ____ in usersubmitted, I was flabbergasted. `,
      draw: 0,
      pick: 1,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `France is ____`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `The ____ for this ____ is TOO DAMN HIGH. `,
      draw: 0,
      pick: 2,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `Any love for ____?`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `In Japan, ____ is the new sexual trend.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `I love bacon as much as ____ loves ____.`,
      draw: 0,
      pick: 2,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `A hipster needs a ____ as much as a fish needs a ____.`,
      draw: 0,
      pick: 2,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `Justin Bieber is a ____.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `Are you my ____?`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `Weasley is our ____.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `I have a bad feeling about ____.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `I am a leaf on the ____.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `That was more awkward than ____.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `Boardgame Online is more fun than ____.`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `I hate My Little Pony more than ____ hates ____.`,
      draw: 0,
      pick: 2,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `I love My Little Pony more than ____ loves ____.`,
      draw: 0,
      pick: 2,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `Cat gifs are cuter than ____. `,
      draw: 0,
      pick: 1,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `If it fits, I ____. `,
      draw: 0,
      pick: 1,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `____. My moon and my stars. `,
      draw: 0,
      pick: 1,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `A ____ always pays his debts. `,
      draw: 0,
      pick: 1,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `My ovaries just exploded because of ____. `,
      draw: 0,
      pick: 1,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `Chewie, ____ it!`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `Steven Moffat has no ____. `,
      draw: 0,
      pick: 1,
      watermark: `Imgur`
    });
    await queryRunner.delete('black_card', {
      text: `Dobby is ____!!`,
      draw: 0,
      pick: 1,
      watermark: `Imgur`
    });

    await queryRunner.delete('white_card', {
      text: `Ewoks.`,
      watermark: `Imgur`
    });
    await queryRunner.delete('white_card', {
      text: `OP Delivers.`,
      watermark: `Imgur`
    });
    await queryRunner.delete('white_card', {
      text: `#SOCKS.`,
      watermark: `Imgur`
    });
    await queryRunner.delete('white_card', {
      text: `Oh look! A cat!`,
      watermark: `Imgur`
    });
    await queryRunner.delete('white_card', {
      text: `I am not a clever man.`,
      watermark: `Imgur`
    });
    await queryRunner.delete('white_card', {
      text: `Banana.`,
      watermark: `Imgur`
    });
    await queryRunner.delete('white_card', {
      text: `Read me 10 for all coffee.`,
      watermark: `Imgur`
    });
    await queryRunner.delete('white_card', {
      text: `Juan.`,
      watermark: `Imgur`
    });
    await queryRunner.delete('white_card', {
      text: `Sir Patrick Stewart.`,
      watermark: `Imgur`
    });
    await queryRunner.delete('white_card', {
      text: `Troy and Abed.`,
      watermark: `Imgur`
    });
    await queryRunner.delete('white_card', {
      text: `MOON MOON.`,
      watermark: `Imgur`
    });
    await queryRunner.delete('white_card', {
      text: `Nathan Fillion.`,
      watermark: `Imgur`
    });
    await queryRunner.delete('white_card', {
      text: `Felica Day.`,
      watermark: `Imgur`
    });
    await queryRunner.delete('white_card', {
      text: `9`,
      watermark: `Imgur`
    });
    await queryRunner.delete('white_card', {
      text: `10`,
      watermark: `Imgur`
    });
    await queryRunner.delete('white_card', {
      text: `11`,
      watermark: `Imgur`
    });
    await queryRunner.delete('white_card', {
      text: `BOOM! Pregnant.`,
      watermark: `Imgur`
    });
    await queryRunner.delete('white_card', {
      text: `Tesla.`,
      watermark: `Imgur`
    });
    await queryRunner.delete('white_card', {
      text: `Jon Snow.`,
      watermark: `Imgur`
    });
    await queryRunner.delete('white_card', {
      text: `Ass.`,
      watermark: `Imgur`
    });
    await queryRunner.delete('white_card', {
      text: `Theon Greyjoy’s dismembered member.`,
      watermark: `Imgur`
    });
    await queryRunner.delete('white_card', {
      text: `Not since the accident.`,
      watermark: `Imgur`
    });
    await queryRunner.delete('white_card', {
      text: `Lechuga.`,
      watermark: `Imgur`
    });
    await queryRunner.delete('white_card', {
      text: `Edward Macaroni Fork.`,
      watermark: `Imgur`
    });
    await queryRunner.delete('white_card', {
      text: `Imgurgiraffe.`,
      watermark: `Imgur`
    });
    await queryRunner.delete('white_card', {
      text: `ANUSTART.`,
      watermark: `Imgur`
    });
    await queryRunner.delete('white_card', {
      text: `This was a grave mistake.`,
      watermark: `Imgur`
    });
    await queryRunner.delete('white_card', {
      text: `BAZINGA!`,
      watermark: `Imgur`
    });
    await queryRunner.delete('white_card', {
      text: `Cousin Maeby.`,
      watermark: `Imgur`
    });
    await queryRunner.delete('white_card', {
      text: `STEVE HOLT.`,
      watermark: `Imgur`
    });
    await queryRunner.delete('white_card', {
      text: `Nevernudes.`,
      watermark: `Imgur`
    });
    await queryRunner.delete('white_card', {
      text: `Tard.`,
      watermark: `Imgur`
    });
    await queryRunner.delete('white_card', {
      text: `Potato. `,
      watermark: `Imgur`
    });
    await queryRunner.delete('white_card', {
      text: `Bacon.`,
      watermark: `Imgur`
    });
    await queryRunner.delete('white_card', {
      text: `Erotic fiction featuring Snape and Hermione.`,
      watermark: `Imgur`
    });
    await queryRunner.delete('white_card', {
      text: `Sonic Screwdriver. `,
      watermark: `Imgur`
    });
    await queryRunner.delete('white_card', {
      text: `Chak´s homemade maple bacon jam.`,
      watermark: `Imgur`
    });
    await queryRunner.delete('white_card', {
      text: `Moisturize me.`,
      watermark: `Imgur`
    });
    await queryRunner.delete('white_card', {
      text: `Mummy.`,
      watermark: `Imgur`
    });
    await queryRunner.delete('white_card', {
      text: `Expelliarmus!`,
      watermark: `Imgur`
    });
    await queryRunner.delete('white_card', {
      text: `Hagrid.`,
      watermark: `Imgur`
    });
    await queryRunner.delete('white_card', {
      text: `Buckbeak.`,
      watermark: `Imgur`
    });
    await queryRunner.delete('white_card', {
      text: `Luke Skywalker making out with his sister, Leia.`,
      watermark: `Imgur`
    });
    await queryRunner.delete('white_card', {
      text: `NobodySaysThis.`,
      watermark: `Imgur`
    });
    await queryRunner.delete('white_card', {
      text: `Nargles.`,
      watermark: `Imgur`
    });
    await queryRunner.delete('white_card', {
      text: `Annie´s boobs.`,
      watermark: `Imgur`
    });
    await queryRunner.delete('white_card', {
      text: `An overpriced cup of coffee.`,
      watermark: `Imgur`
    });
    await queryRunner.delete('white_card', {
      text: `Demonstrating how to properly put on a condom using a cucumber as substitute for a penis.`,
      watermark: `Imgur`
    });
    await queryRunner.delete('white_card', {
      text: `Katie the Cock Cozy.`,
      watermark: `Imgur`
    });

    await queryRunner.delete('card_set', {
      name: `[C] Imgur`,
      baseDeck: false,
      description: null,
      weight: 522,
      active: true
    });
  }
}
