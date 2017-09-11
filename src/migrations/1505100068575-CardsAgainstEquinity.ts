/* tslint:disable:no-non-null-assertion no-unsafe-any no-any */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class CardsAgainstEquinity1505100068575 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const insertResult = await queryRunner.insert('card_set', {
      name: `[C] Cards Against Equinity`,
      baseDeck: false,
      description: `My Little Pony themed expansion from the reddit MLP communities.`,
      weight: 499,
      active: true
    });

    await queryRunner.insert('black_card', {
      text: `And that's how Equestria was made!`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Big Mac sleeps soundly whenever ____ is with him.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ has won the national Equestrian award for ____.`,
      draw: 0,
      pick: 2,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ is best pony.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ should ____ ____.`,
      draw: 2,
      pick: 3,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____? That's future Spike's problem.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `After a wild night of crusading, Applebloom learned that ____ was her super special talent.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `After a wild night of partying, Fluttershy awakens to find ____ in her bed.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `After living for thousands of years Celestia can only find pleasure in ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Aloe and Lotus have been experimenting with a radical treatment that utilizes the therapeutic properties of ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `BUY SOME ____!`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `CUTIE MARK CRUSADERS; ____! YAY!`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Daring Do and the quest for ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Dear Princess Celestia, Today I learned about ____. `,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Despite everypony's expectations, Sweetie Belle's cutie mark ended up being ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Equestrian researchers have discovered that ____ is The 7th Element of Harmony.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Every Morning, Princess Celestia Rises ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In a stroke of unparalleled evil, Discord turned ____ into ____.`,
      draw: 0,
      pick: 2,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In a world without humans, saddles are actually made for ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Inexplicably, the only thing the parasprites wouldn't eat was ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `It turns out Hitler's favorite pony was ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `It's not a boulder! It's ____!`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Lauren Faust was shocked to find ____ in her mailbox.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Luna didn't help in the fight against Chrysalis because she was too busy with ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `My cutie mark would be ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Not many people know that Tara Strong is also the voice of ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Nothing makes Pinkie smile more than ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Everypony was shocked to discover that Scootaloo's cutie mark was ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Giggle at ____!`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I never knew what ____ could be, until you all shared its ____ with me.`,
      draw: 0,
      pick: 2,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I'd like to be ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In a fit of rage, Princess Celestia sent ____ to the ____ for ____.`,
      draw: 2,
      pick: 3,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Once upon a time, the land of Equestria was ruled by ____ and ____.`,
      draw: 0,
      pick: 2,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Ponyville is widely known for ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Ponyville was shocked to discover ____ in Fluttershy's shed.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Prince Blueblood's cutie mark represents ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Rainbow Dash has always wanted ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Rainbow Dash is the only pony in all of Equestria who can ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Rainbow Dash received a concussion after flying into ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Rarity has a long forgotten line of clothing inspired by ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Rarity was supposed to have a song about ____, but it was cut.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Rarity's latest dress design was inspired by ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Should the Elements of Harmony fail, ____ is to be used as a last resort.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Super Speedy ____ Squeezy 5000.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Surprisingly, Canterlot has a museum of ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____. That is my fetish.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The Elements of Harmony were originally the Elements of ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The Everfree forest is full of ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The national anthem of Equestria is ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The only way to get Opal in the bath is with ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The worst mishap caused by Princess Cadance was when she made ____ and ____ fall in love.`,
      draw: 0,
      pick: 2,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `To much controversy, Princess Celestia made ____ illegal.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Today, Mayor Mare announced her official campaign position on ____ and ____. No pony was the least bit surprised.`,
      draw: 0,
      pick: 2,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Twilight got bored with the magic of friendship, and now studies the magic of ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Twilight Sparkle owns far more books on ____ than she'd like to admit.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `When Luna got to the moon, she was greeted with ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `When Spike is asleep, Twilight likes to read books about ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Without any warning, Pinkie Pie burst into a song about ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `You're a human transported to Equestria! The first thing you'd look for is ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Zecora is a well known supplier of ____ and ____.`,
      draw: 0,
      pick: 2,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });

    await queryRunner.insert('white_card', {
      text: `Da Magicks.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A daisy sandwich.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A decorative toaster cozy.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A giant horse cock.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A hoof in the ass.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A horny stallion.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A human fetish.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A juice box fetish.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A juice box.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A mare in heat.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A racially pure Cloudsdale.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A sexy saddle.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A sock fetish.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Sonic Raingasm.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A tactical sonic rainnuke.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A tree.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Actually cumming inside Rainbow Dash.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An epic pony war in the distant future.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An extremely horny Granny Smith.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Another doughnut! With extra sprinkles!`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Applebucking.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Applejack.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Avasting Fluttershy's Ass.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Baked Bads.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Banned From Equestria (Daily).`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Being trapped on the Moon for 1000 years.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Best Pony.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Big Macintosh.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `BonBon.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Books.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Celestia's Hoof.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Celestia's massive harem of foals.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cider.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Clopfics.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Clopping.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Crippled foals.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cupcakes.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Daring Do fanfiction.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dark Magicks.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Derpy Hooves.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Diamond Dog roleplay.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Discord.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Equestria.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Facehoofing.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fillidelphia.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Filly fiddling.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fluffy Pony.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fluttershy.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fluttershy's secret stash.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fluttershy's Shed.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fluttertree.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Foal abuse.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Foodmanes.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Friendship.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Futaloo.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Gabby Gums.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Gently stroking the horn.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting 20% cooler!`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Gypsies.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Having hot pony sex with Bloomberg.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Horn Necrosis.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hugging a pony non-sexually.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Jappleack.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Joe's Donut Hole.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `John Joseco.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lesbians.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Zecora's meth lab.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lyra Heartstrings.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Worst pony.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Magic.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Wolfieshy.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Winter Wrap Up.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Making Magic.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Wincest.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Whipping the Earth Pony slaves.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Vinyl Scratch / DJ Pon-3.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Unicorn Privilege.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Man Spike.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Two fillies shitting into a bucket.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Manehatten.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Twist.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mare Supremacy.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Twilight's secret clop stash.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Molestia's sex dungeon.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Twilight Sparkle.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `THE ROYAL CANTERLOT VOICE.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `My OC.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Rainbow Factory.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nightmare Moon.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Pegasus Master Race.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A cutie mark.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Octavia.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Moon.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Orphaned foals.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pants.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Great and Powerful Trixie Lulamoon.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Grand Galloping Gala.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pegasus wing deformities.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Friendship Express.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pinkamena Diane Pie.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Chocolate Mousse Moose.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Cakes.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pinkamena's hacksaw.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `That squee noise.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `That Lyra plushie.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sweetie Bot.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sweetie Belle's virgin marshmallow pussy.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sweetie Belle.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pinkie Pie in full latex.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Surprise.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Stretching those glutes.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pinkie Pie.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Steven Magnets.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Plot.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Spike's understanding of biology.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Speaking Fancy.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Poison Joke.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ponies wearing clothes.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sloppy clop.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Shipping.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Shaking Dat Plot.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Secretly being a changeling all along.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ponies.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Scootabuse.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pony racism.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Scoot, Scoot-A-Loo.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pony-Griffon marriage.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Rarity.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Rainbow Dash.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Rainbow Crash.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ponychan.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Raging wingboners.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Queen Chrysalis.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Princess Molestia.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Princess Celestia.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Princess Mi Amore Cadenza.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Princess Luna.`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ponies with fricken' laser beams attached to their heads!`,
      watermark: `CAE`,
      cardSetId: insertResult.result![0].id
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.delete('black_card', {
      text: `And that's how Equestria was made!`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `Big Mac sleeps soundly whenever ____ is with him.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `____ has won the national Equestrian award for ____.`,
      draw: 0,
      pick: 2,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `____ is best pony.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `____ should ____ ____.`,
      draw: 2,
      pick: 3,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `____? That's future Spike's problem.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `After a wild night of crusading, Applebloom learned that ____ was her super special talent.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `After a wild night of partying, Fluttershy awakens to find ____ in her bed.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `After living for thousands of years Celestia can only find pleasure in ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `Aloe and Lotus have been experimenting with a radical treatment that utilizes the therapeutic properties of ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `BUY SOME ____!`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `CUTIE MARK CRUSADERS; ____! YAY!`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `Daring Do and the quest for ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `Dear Princess Celestia, Today I learned about ____. `,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `Despite everypony's expectations, Sweetie Belle's cutie mark ended up being ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `Equestrian researchers have discovered that ____ is The 7th Element of Harmony.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `Every Morning, Princess Celestia Rises ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `In a stroke of unparalleled evil, Discord turned ____ into ____.`,
      draw: 0,
      pick: 2,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `In a world without humans, saddles are actually made for ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `Inexplicably, the only thing the parasprites wouldn't eat was ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `It turns out Hitler's favorite pony was ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `It's not a boulder! It's ____!`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `Lauren Faust was shocked to find ____ in her mailbox.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `Luna didn't help in the fight against Chrysalis because she was too busy with ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `My cutie mark would be ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `Not many people know that Tara Strong is also the voice of ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `Nothing makes Pinkie smile more than ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `Everypony was shocked to discover that Scootaloo's cutie mark was ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `Giggle at ____!`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `I never knew what ____ could be, until you all shared its ____ with me.`,
      draw: 0,
      pick: 2,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `I'd like to be ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `In a fit of rage, Princess Celestia sent ____ to the ____ for ____.`,
      draw: 2,
      pick: 3,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `Once upon a time, the land of Equestria was ruled by ____ and ____.`,
      draw: 0,
      pick: 2,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `Ponyville is widely known for ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `Ponyville was shocked to discover ____ in Fluttershy's shed.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `Prince Blueblood's cutie mark represents ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `Rainbow Dash has always wanted ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `Rainbow Dash is the only pony in all of Equestria who can ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `Rainbow Dash received a concussion after flying into ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `Rarity has a long forgotten line of clothing inspired by ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `Rarity was supposed to have a song about ____, but it was cut.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `Rarity's latest dress design was inspired by ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `Should the Elements of Harmony fail, ____ is to be used as a last resort.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `Super Speedy ____ Squeezy 5000.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `Surprisingly, Canterlot has a museum of ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `____. That is my fetish.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `The Elements of Harmony were originally the Elements of ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `The Everfree forest is full of ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `The national anthem of Equestria is ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `The only way to get Opal in the bath is with ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `The worst mishap caused by Princess Cadance was when she made ____ and ____ fall in love.`,
      draw: 0,
      pick: 2,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `To much controversy, Princess Celestia made ____ illegal.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `Today, Mayor Mare announced her official campaign position on ____ and ____. No pony was the least bit surprised.`,
      draw: 0,
      pick: 2,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `Twilight got bored with the magic of friendship, and now studies the magic of ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `Twilight Sparkle owns far more books on ____ than she'd like to admit.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `When Luna got to the moon, she was greeted with ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `When Spike is asleep, Twilight likes to read books about ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `Without any warning, Pinkie Pie burst into a song about ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `You're a human transported to Equestria! The first thing you'd look for is ____.`,
      draw: 0,
      pick: 1,
      watermark: `CAE`
    });
    await queryRunner.delete('black_card', {
      text: `Zecora is a well known supplier of ____ and ____.`,
      draw: 0,
      pick: 2,
      watermark: `CAE`
    });

    await queryRunner.delete('white_card', {
      text: `Da Magicks.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `A daisy sandwich.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `A decorative toaster cozy.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `A giant horse cock.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `A hoof in the ass.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `A horny stallion.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `A human fetish.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `A juice box fetish.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `A juice box.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `A mare in heat.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `A racially pure Cloudsdale.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `A sexy saddle.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `A sock fetish.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `A Sonic Raingasm.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `A tactical sonic rainnuke.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `A tree.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Actually cumming inside Rainbow Dash.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `An epic pony war in the distant future.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `An extremely horny Granny Smith.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Another doughnut! With extra sprinkles!`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Applebucking.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Applejack.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Avasting Fluttershy's Ass.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Baked Bads.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Banned From Equestria (Daily).`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Being trapped on the Moon for 1000 years.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Best Pony.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Big Macintosh.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `BonBon.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Books.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Celestia's Hoof.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Celestia's massive harem of foals.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Cider.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Clopfics.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Clopping.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Crippled foals.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Cupcakes.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Daring Do fanfiction.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Dark Magicks.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Derpy Hooves.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Diamond Dog roleplay.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Discord.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Equestria.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Facehoofing.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Fillidelphia.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Filly fiddling.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Fluffy Pony.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Fluttershy.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Fluttershy's secret stash.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Fluttershy's Shed.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Fluttertree.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Foal abuse.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Foodmanes.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Friendship.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Futaloo.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Gabby Gums.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Gently stroking the horn.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Getting 20% cooler!`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Gypsies.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Having hot pony sex with Bloomberg.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Horn Necrosis.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Hugging a pony non-sexually.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Jappleack.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Joe's Donut Hole.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `John Joseco.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Lesbians.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Zecora's meth lab.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Lyra Heartstrings.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Worst pony.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Magic.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Wolfieshy.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Winter Wrap Up.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Making Magic.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Wincest.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Whipping the Earth Pony slaves.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Vinyl Scratch / DJ Pon-3.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Unicorn Privilege.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Man Spike.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Two fillies shitting into a bucket.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Manehatten.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Twist.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Mare Supremacy.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Twilight's secret clop stash.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Molestia's sex dungeon.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Twilight Sparkle.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `THE ROYAL CANTERLOT VOICE.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `My OC.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `The Rainbow Factory.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Nightmare Moon.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `The Pegasus Master Race.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `A cutie mark.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Octavia.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `The Moon.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Orphaned foals.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Pants.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `The Great and Powerful Trixie Lulamoon.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `The Grand Galloping Gala.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Pegasus wing deformities.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `The Friendship Express.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Pinkamena Diane Pie.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `The Chocolate Mousse Moose.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `The Cakes.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Pinkamena's hacksaw.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `That squee noise.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `That Lyra plushie.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Sweetie Bot.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Sweetie Belle's virgin marshmallow pussy.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Sweetie Belle.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Pinkie Pie in full latex.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Surprise.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Stretching those glutes.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Pinkie Pie.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Steven Magnets.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Plot.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Spike's understanding of biology.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Speaking Fancy.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Poison Joke.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Ponies wearing clothes.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Sloppy clop.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Shipping.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Shaking Dat Plot.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Secretly being a changeling all along.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Ponies.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Scootabuse.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Pony racism.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Scoot, Scoot-A-Loo.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Pony-Griffon marriage.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Rarity.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Rainbow Dash.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Rainbow Crash.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Ponychan.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Raging wingboners.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Queen Chrysalis.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Princess Molestia.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Princess Celestia.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Princess Mi Amore Cadenza.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Princess Luna.`,
      watermark: `CAE`
    });
    await queryRunner.delete('white_card', {
      text: `Ponies with fricken' laser beams attached to their heads!`,
      watermark: `CAE`
    });

    await queryRunner.delete('card_set', {
      name: `[C] Cards Against Equinity`,
      baseDeck: false,
      description: `My Little Pony themed expansion from the reddit MLP communities.`,
      weight: 499,
      active: true
    });
  }
}
