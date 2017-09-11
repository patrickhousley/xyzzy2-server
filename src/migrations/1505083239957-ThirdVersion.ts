/* tslint:disable:no-non-null-assertion no-unsafe-any no-any */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class ThirdVersion1505083239957 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const insertResult = await queryRunner.insert('card_set', {
      name: `Third Version`,
      baseDeck: true,
      description: `Another updated version of the Cards Against Humanity base game.`,
      weight: 3,
      active: true
    });

    await queryRunner.insert('black_card', {
      text: `Why can't I sleep at night?`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What's that smell?`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What's that sound?`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What ended my last relationship?`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What is Batman's guilty pleasure?`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What's a girl's best friend?`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What does Dick Cheney prefer?`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What's the most emo?`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What are my parents hiding from me?`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What will always get you laid?`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What did I bring back from Mexico?`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What will I bring back in time to convince people that I am a powerful wizard?`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `How am I maintaining my relationship status?`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What gives me uncontrollable gas?`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What do old people smell like? `,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What's my secret power?`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What's there a ton of in heaven?`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What would grandma find disturbing, yet oddly charming?`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What did the U.S. airdrop to the children of Afghanistan?`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What helps Obama unwind?`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What did Vin Diesel eat for dinner?`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Why am I sticky?`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What gets better with age?`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What's Teach for America using to inspire inner city students to succeed?`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Make a haiku.`,
      draw: 2,
      pick: 3,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Why do I hurt all over?`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What am I giving up for Lent?`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What's my anti-drug?`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What never fails to liven up the party?`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What's the new fad diet?`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I got 99 problems but ____ ain't one.`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `TSA guidelines now prohibit ____ on airplanes.`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `MTV's new reality show features eight washed-up celebrities living with ____.`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I drink to forget ____.`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I'm sorry, Professor, but I couldn't complete my homework because of ____.`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Alternative medicine is now embracing the curative powers of ____.`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `It's a pity that kids these days are all getting involved with ____.`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____. That's how I want to die.`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In the new Disney Channel Original Movie, Hannah Montana struggles with ____ for the first time.`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Instead of coal, Santa now gives the bad children ____.`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `A romantic, candlelit dinner would be incomplete without ____.`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Next from J.K. Rowling: Harry Potter and the Chamber of ____.`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____. Betcha can't have just one!`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `White people like ____.`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____. High five, bro.`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `During sex, I like to think about ____.`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `BILLY MAYS HERE FOR ____.`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `When I am the President of the United States, I will create the Department of ____.`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Major League Baseball has banned ____ for giving players an unfair advantage.`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `When I am a billionare, I shall erect a 50-foot statue to commemorate ____.`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____. It's a trap!`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Coming to Broadway this season, ____: The Musical.`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `But before I kill you, Mr. Bond, I must show you ____.`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `When Pharaoh remained unmoved, Moses called down a plague of ____.`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The class field trip was completely ruined by ____.`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In Michael Jackson's final moments, he thought about ____.`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Studies show that lab rats navigate mazes 50% faster after being exposed to ____.`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I do not know with which weapons World War III will be fought, but World War IV will be fought with ____.`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____: Good to the last drop.`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____: kid-tested, mother-approved.`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `And the Academy Award for ____ goes to ____.`,
      draw: 0,
      pick: 2,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `For my next trick, I will pull ____ out of ____.`,
      draw: 0,
      pick: 2,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ is a slippery slope that leads to ____.`,
      draw: 0,
      pick: 2,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In M. Night Shyamalan's new movie, Bruce Willis discovers that ____ had really been ____ all along.`,
      draw: 0,
      pick: 2,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In a world ravaged by ____, our only solace is ____.`,
      draw: 0,
      pick: 2,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I never truly understood ____ until I encountered ____.`,
      draw: 0,
      pick: 2,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `When I was tripping on acid, ____ turned into ____.`,
      draw: 0,
      pick: 2,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `That's right, I killed ____. How, you ask? ____.`,
      draw: 0,
      pick: 2,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ + ____ = ____.`,
      draw: 2,
      pick: 3,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What's the next superhero/sidekick duo?`,
      draw: 0,
      pick: 2,
      watermark: `1.2`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Daddy, why is Mommy crying?`,
      draw: 0,
      pick: 1,
      watermark: `B`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Maybe she's born with it. Maybe it's ____.`,
      draw: 0,
      pick: 1,
      watermark: `1.2`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In L.A. County Jail, word is you can trade 200 cigarettes for ____.`,
      draw: 0,
      pick: 1,
      watermark: `1.2`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `After the earthquake, Sean Penn brought ____ to the people of Haiti.`,
      draw: 0,
      pick: 1,
      watermark: `1.2`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Next on ESPN2, the World Series of ____.`,
      draw: 0,
      pick: 1,
      watermark: `1.2`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Step 1: ____. Step 2: ____. Step 3: Profit.`,
      draw: 0,
      pick: 2,
      watermark: `1.2`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Life for American Indians was forever changed when the White Man introduced them to ____.`,
      draw: 0,
      pick: 1,
      watermark: `1.2`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What's the next Happy Meal&reg; toy?`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Lifetime&reg; presents ____, the story of ____.`,
      draw: 0,
      pick: 2,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Dear Abby,<br><br>I'm having some trouble with ____ and would like your advice.`,
      draw: 0,
      pick: 1,
      watermark: `1.2`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `While the United States raced the Soviet Union to the moon, the Mexican government funneled millions of pesos into research on ____.`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `How did I lose my virginity?`,
      draw: 0,
      pick: 1,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Here is the church<br>Here is the steeple<br>Open the doors<br>And there is ____.`,
      draw: 0,
      pick: 1,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `During his childhood, Salvador Dal&iacute; produced hundreds of paintings of ____.`,
      draw: 0,
      pick: 1,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `This is the way the world ends \ This is the way the world ends \ Not with a bang but with ____.`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In 1,000 years, when paper money is a distant memory, how will we pay for goods and services?`,
      draw: 0,
      pick: 1,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `War!<br><br>What is it good for?`,
      draw: 0,
      pick: 1,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What don't you want to find in your Kung Pao chicken?`,
      draw: 0,
      pick: 1,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Rumor has it that Vladimir Putin's favorite delicacy is ____ stuffed with ____.`,
      draw: 0,
      pick: 2,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The Smithsonian Museum of Natural History has just opened an exhibit on ____.`,
      draw: 0,
      pick: 1,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });

    await queryRunner.insert('white_card', {
      text: `Michelle Obama's arms.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `White people.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An erection that lasts longer than four hours.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Panda sex.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A middle-aged man on roller skates.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Coat hanger abortions.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Scrubbing under the folds.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Wearing underwear inside-out to avoid doing laundry.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `MechaHitler.`,
      watermark: `1.2`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting naked and watching Nickelodeon.`,
      watermark: `1.2`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Morgan Freeman's voice.`,
      watermark: `1.2`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Breaking out into song and dance.`,
      watermark: `1.2`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Soup that is too hot.`,
      watermark: `1.2`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Unfathomable stupidity.`,
      watermark: `1.2`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Horrifying laser hair removal accidents.`,
      watermark: `1.2`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Boogers.`,
      watermark: `1.2`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Expecting a burp and vomiting on the floor.`,
      watermark: `1.2`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A defective condom.`,
      watermark: `1.2`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Teenage pregnancy.`,
      watermark: `1.2`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hot cheese.`,
      watermark: `1.2`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A mopey zoo lion.`,
      watermark: `1.2`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Shapeshifters.`,
      watermark: `1.2`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Care Bear Stare.`,
      watermark: `1.2`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Erectile dysfunction.`,
      watermark: `1.2`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The chronic.`,
      watermark: `1.2`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Firing a rifle into the air while balls deep in a squealing hog.`,
      watermark: `1.2`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nicolas Cage.`,
      watermark: `1.2`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dropping a chandelier on your enemies and riding the rope up.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Public ridicule.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A snapping turtle biting the tip of your penis.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Vehicular manslaughter.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The token minority.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A gentle caress of the inner thigh.`,
      watermark: `1.2`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Poor life choices.`,
      watermark: `1.2`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Embryonic stem cells.`,
      watermark: `1.2`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Little Engine That Could.`,
      watermark: `1.2`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lady Gaga.`,
      watermark: `1.2`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A death ray.`,
      watermark: `1.2`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Vigilante justice.`,
      watermark: `1.2`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Exactly what you'd expect.`,
      watermark: `1.2`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Natural male enhancement.`,
      watermark: `1.2`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Passive-aggressive Post-it notes.`,
      watermark: `1.2`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Inappropriate yodeling.`,
      watermark: `1.2`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A homoerotic volleyball montage.`,
      watermark: `1.2`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Actually taking candy from a baby.`,
      watermark: `1.2`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Crystal meth.`,
      watermark: `1.2`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `My inner demons.`,
      watermark: `1.2`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pac-Man uncontrollably guzzling cum.`,
      watermark: `1.2`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `My vagina.`,
      watermark: `1.2`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The true meaning of Christmas.`,
      watermark: `1.2`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Flying sex snakes.`,
      watermark: `1.2`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `German dungeon porn.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Praying the gay away.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dying.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Same-sex ice dancing.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dying of dysentery.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Roofies.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Big Bang.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Amputees.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Men.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Concealing a boner.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Agriculture.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Making a pouty face.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `YOU MUST CONSTRUCT ADDITIONAL PYLONS.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hormone injections.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tom Cruise.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Object permanence.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Being marginalized.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The profoundly handicapped.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nickelback.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Doing the right thing.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The invisible hand.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Heteronormativity.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cuddling.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Raptor attacks.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fear itself.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sniffing glue.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An icepick lobotomy.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Being rich.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The clitoris.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sexy pillow fights.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Michael Jackson.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sexting.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Horse meat.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sunshine and rainbows.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Goblins.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Spectacular abs.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Three-Fifths compromise.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Vigorous jazz hands.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Skeletor.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Vikings.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Genital piercings.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A really cool hat.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An Oedipus complex.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Underground Railroad.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Heartwarming orphans.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cheating in the Special Olympics.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sharing needles.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ethnic cleansing.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Eating all of the cookies before the AIDS bake-sale.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `My humps.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The violation of our most basic human rights.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fingering.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The placenta.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Flightless birds.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Stranger danger.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sean Penn.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A sad handjob.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Self-loathing.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A falcon with a cap on its head.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Historically black colleges.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Aaron Burr.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Former President George W. Bush.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Geese.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mutually-assured destruction.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bling.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Smegma.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The South.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pretending to care.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Arnold Schwarzenegger.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A sausage festival.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Foreskin.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Being a dick to children.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Chainsaws for hands.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Pope.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A balanced breakfast.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Elderly Japanese men.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pictures of boobs.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Science.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A bleached asshole.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Autocannibalism.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `William Shatner.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A micropenis.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bingeing and purging.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Man meat.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Laying an egg.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The terrorists.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A bitch slap.`,
      watermark: `B`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `One trillion dollars.`,
      watermark: `B`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Chunks of dead prostitute.`,
      watermark: `B`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The entire Mormon Tabernacle Choir.`,
      watermark: `B`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The female orgasm.`,
      watermark: `B`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Extremely tight pants.`,
      watermark: `B`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Stormtroopers.`,
      watermark: `B`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Boy Scouts of America.`,
      watermark: `B`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Throwing a virgin into a volcano.`,
      watermark: `B`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Passive-agression.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Guys who don't call.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `AIDS.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Rapture.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Eugenics.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Taking off your shirt.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ronald Reagan.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Jewish fraternities.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `All-you-can-eat shrimp for $4.99.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Scalping.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Edible underpants.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Figgy pudding.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The American Dream.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Testicular torsion.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The folly of man.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The KKK.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The taint; the grundle; the fleshy fun-bridge.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Saxophone solos.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `That thing that electrocutes your abs.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Friends with benefits.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Teaching a robot to love.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Me time.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The heart of a child.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Smallpox blankets.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Yeast.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Full frontal nudity.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Authentic Mexican cuisine.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Licking things to claim them as your own.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Genghis Khan.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The hardworking Mexican.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `RoboCop.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Spontaneous human combustion.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Natural selection.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A good sniff.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nipple blades.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Leaving an awkward voicemail.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Assless chaps.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sweet, sweet vengeance.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Darth Vader.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Necrophilia.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Toni Morrison's vagina.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Preteens.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A cooler full of organs.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Keanu Reeves.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A thermonuclear detonation.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Catapults.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Emotions.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Balls.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Homeless people.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Old-people smell.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Farting and walking away.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The inevitable heat death of the universe.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Rev. Dr. Martin Luther King, Jr.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sperm whales.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A murder most foul.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Daddy issues.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Britney Spears at 55.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Natalie Portman.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Holy Bible.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pulling out.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pixelated bukkake.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Waiting 'til marriage.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The World of Warcraft.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `World peace.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A can of whoop-ass.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A zesty breakfast burrito.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Picking up girls at the abortion clinic.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Land mines.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A time travel paradox.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Seppuku.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Waking up half-naked in a Denny's parking lot.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Christopher Walken.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Gloryholes.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A tiny horse.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A sassy black woman.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Penis envy.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Drinking alone.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hulk Hogan.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Whipping it out.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dental dams.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Gandhi.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `God.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Friction.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A sea of troubles.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Poor people.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Flesh-eating bacteria.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dick Cheney.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lockjaw.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Take-backsies.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Opposable thumbs.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The homosexual agenda.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fiery poops.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cards Against Humanity.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sean Connery.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The milk man.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Chinese gymnastics team.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Eating the last known bison.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Giving 110%.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Friendly fire.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Count Chocula.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Feeding Rosie O'Donnell.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Being a motherfucking sorcerer.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `African children.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Crippling debt.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A disappointing birthday party.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Puppies!`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A windmill full of corpses.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Being on fire.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A lifetime of sadness.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Republicans.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A salty surprise.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Jews.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Incest.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nazis.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Repression.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Attitude.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Passable transvestites.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Puberty.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Swooping.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lactation.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pabst Blue Ribbon.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The gays.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A foul mouth.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A hot mess.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `My collection of high-tech sex toys.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bees?`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting drunk on mouthwash.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The glass ceiling.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sarah Palin.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Frolicking.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Not giving a shit about the Third World.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `My relationship status.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Barack Obama.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mouth herpes.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Wiping her butt.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pedophiles.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Doin' it in the butt.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Being fabulous.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An M. Night Shyamalan plot twist.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A bag of magic beans.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dead parents.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `My sex life.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Riding off into the sunset.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dick fingers.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Virginia Tech Massacre.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Queefing.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tangled Slinkys.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Civilian casualties.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Leprosy.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Grave robbing.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tentacle porn.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bill Nye the Science Guy.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `New Age music.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `72 virgins.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hope.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Passing a kidney stone.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A mime having a stroke.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Classist undertones.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A mating display.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Kool-Aid Man.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Not reciprocating oral sex.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Italians.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `My soul.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A stray pube.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Jerking off into a pool of children's tears.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting really high.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Overcompensation.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Free samples.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Shaquille O'Neal's acting career.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Half-assed foreplay.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Explosions.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `White privilege.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Road head.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Poorly-timed Holocaust jokes.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `8 oz. of sweet Mexican black-tar heroin.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Judge Judy.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Altar boys.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Scientology.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Justin Bieber.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Alcoholism.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `My genitals.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Winking at old people.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Golden showers.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Racism.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Auschwitz.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Kids with ass cancer.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hurricane Katrina.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lumberjack fantasies.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An asymmetric boob job.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Asians who aren't good at math.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Blood of Christ.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A brain tumor.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Prancing.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Hamburglar.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Police brutality.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Estrogen.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A robust mongoloid.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pooping back and forth. Forever.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bitches.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Stephen Hawking talking dirty.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting so angry that you pop a boner.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tasteful sideboob.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Two midgets shitting into a bucket.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Racially-biased SAT questions.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Anal beads.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Surprise sex!`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dead babies.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Masturbation.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Hustle.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Obesity.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Child beauty pageants.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Kamikaze pilots.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Powerful thighs.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Women's suffrage.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `John Wilkes Booth.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Parting the Red Sea.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Harry Potter erotica.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Grandma.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Porn stars.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A monkey smoking a cigar.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lance Armstrong's missing testicle.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Children on leashes.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Multiple stab wounds.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Oompa-Loompas.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Peeing a little bit.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The miracle of childbirth.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Another goddamn vampire movie.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Active listening.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A gassy antelope.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `BATMAN!!!`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Black people.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Serfdom.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Trail of Tears.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ghosts.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Dance of the Sugar Plum Fairy.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Finger painting.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Robert Downey, Jr.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Muhammed (Praise Be Unto Him).`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Famine.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `AXE Body Spray.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Force.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cybernetic enhancements.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mr. Clean, right behind you.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Third base.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A fetus.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Women in yogurt commercials.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Copping a feel.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sexual tension.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dry heaving.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Centaurs.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Wifely duties.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hot people.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Kanye West.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Amish.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `When you fart and a little bit comes out.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Viagra&reg;.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Five-Dollar Footlongs&trade;.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Tempur-Pedic&reg; Swedish Sleep System&trade;.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fancy Feast&reg;.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hot Pockets&reg;.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Domino's&trade; Oreo&trade; Dessert Pizza.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The &Uuml;bermensch.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Adderall&trade;.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `GoGurt&reg;.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Super Soaker&trade; full of cat pee.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lunchables&trade;.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Make-A-Wish&reg; Foundation.`,
      watermark: null,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Bop It&trade;.`,
      watermark: `1.2`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Home video of Oprah sobbing into a Lean Cuisine&reg;.`,
      watermark: `1.2`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Switching to Geico&reg;.`,
      watermark: `1.2`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Advice from a wise, old black man.`,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Devil himself.`,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The art of seduction.`,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Funky fresh rhymes.`,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The light of a billion suns.`,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Destroying the evidence.`,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Silence.`,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Growing a pair.`,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Synergistic management solutions.`,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Wet dreams.`,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A live studio audience.`,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Great Depression.`,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An M16 assault rifle.`,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Poopy diapers.`,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tickling Sean Hannity, even after he tells you to stop.`,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Stalin.`,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A spastic nerd.`,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Rush Limbaugh's soft, shitty body.`,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Capturing Newt Gingrich and forcing him to dance in a monkey suit.`,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Battlefield amputations.`,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Brown people.`,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Rehab.`,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An ugly face.`,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Menstrual rage.`,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An uppercut.`,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Shiny objects.`,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `50,000 volts straight to the nipples.`,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A bucket of fish heads.`,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hospice care.`,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Being fat and stupid.`,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting married, having a few kids, buying some stuff, retiring to Florida, and dying.`,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A pyramid of severed heads.`,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Crucifixion.`,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A subscription to Men's Fitness.`,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Some god-damn peace and quiet.`,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A micropig wearing a tiny raincoat and booties.`,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Used panties.`,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The penny whistle solo from "My Heart Will Go On."`,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A tribe of warrior women.`,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An oversized lollipop.`,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Helplessly giggling at the mention of Hutus and Tutsis.`,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Not wearing pants.`,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Consensual sex.`,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Her Majesty, Queen Elizabeth II.`,
      watermark: `1.3`,
      cardSetId: insertResult.result![0].id
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.delete('black_card', {
      text: `Why can't I sleep at night?`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `What's that smell?`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `What's that sound?`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `What ended my last relationship?`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `What is Batman's guilty pleasure?`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `What's a girl's best friend?`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `What does Dick Cheney prefer?`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `What's the most emo?`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `What are my parents hiding from me?`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `What will always get you laid?`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `What did I bring back from Mexico?`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `What will I bring back in time to convince people that I am a powerful wizard?`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `How am I maintaining my relationship status?`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `What gives me uncontrollable gas?`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `What do old people smell like? `,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `What's my secret power?`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `What's there a ton of in heaven?`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `What would grandma find disturbing, yet oddly charming?`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `What did the U.S. airdrop to the children of Afghanistan?`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `What helps Obama unwind?`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `What did Vin Diesel eat for dinner?`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `Why am I sticky?`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `What gets better with age?`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `What's Teach for America using to inspire inner city students to succeed?`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `Make a haiku.`,
      draw: 2,
      pick: 3,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `Why do I hurt all over?`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `What am I giving up for Lent?`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `What's my anti-drug?`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `What never fails to liven up the party?`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `What's the new fad diet?`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `I got 99 problems but ____ ain't one.`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `TSA guidelines now prohibit ____ on airplanes.`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `MTV's new reality show features eight washed-up celebrities living with ____.`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `I drink to forget ____.`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `I'm sorry, Professor, but I couldn't complete my homework because of ____.`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `Alternative medicine is now embracing the curative powers of ____.`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `It's a pity that kids these days are all getting involved with ____.`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `____. That's how I want to die.`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `In the new Disney Channel Original Movie, Hannah Montana struggles with ____ for the first time.`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `Instead of coal, Santa now gives the bad children ____.`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `A romantic, candlelit dinner would be incomplete without ____.`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `Next from J.K. Rowling: Harry Potter and the Chamber of ____.`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `____. Betcha can't have just one!`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `White people like ____.`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `____. High five, bro.`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `During sex, I like to think about ____.`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `BILLY MAYS HERE FOR ____.`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `When I am the President of the United States, I will create the Department of ____.`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `Major League Baseball has banned ____ for giving players an unfair advantage.`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `When I am a billionare, I shall erect a 50-foot statue to commemorate ____.`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `____. It's a trap!`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `Coming to Broadway this season, ____: The Musical.`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `But before I kill you, Mr. Bond, I must show you ____.`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `When Pharaoh remained unmoved, Moses called down a plague of ____.`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `The class field trip was completely ruined by ____.`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `In Michael Jackson's final moments, he thought about ____.`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `Studies show that lab rats navigate mazes 50% faster after being exposed to ____.`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `I do not know with which weapons World War III will be fought, but World War IV will be fought with ____.`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `____: Good to the last drop.`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `____: kid-tested, mother-approved.`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `And the Academy Award for ____ goes to ____.`,
      draw: 0,
      pick: 2,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `For my next trick, I will pull ____ out of ____.`,
      draw: 0,
      pick: 2,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `____ is a slippery slope that leads to ____.`,
      draw: 0,
      pick: 2,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `In M. Night Shyamalan's new movie, Bruce Willis discovers that ____ had really been ____ all along.`,
      draw: 0,
      pick: 2,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `In a world ravaged by ____, our only solace is ____.`,
      draw: 0,
      pick: 2,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `I never truly understood ____ until I encountered ____.`,
      draw: 0,
      pick: 2,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `When I was tripping on acid, ____ turned into ____.`,
      draw: 0,
      pick: 2,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `That's right, I killed ____. How, you ask? ____.`,
      draw: 0,
      pick: 2,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `____ + ____ = ____.`,
      draw: 2,
      pick: 3,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `What's the next superhero/sidekick duo?`,
      draw: 0,
      pick: 2,
      watermark: `1.2`
    });
    await queryRunner.delete('black_card', {
      text: `Daddy, why is Mommy crying?`,
      draw: 0,
      pick: 1,
      watermark: `B`
    });
    await queryRunner.delete('black_card', {
      text: `Maybe she's born with it. Maybe it's ____.`,
      draw: 0,
      pick: 1,
      watermark: `1.2`
    });
    await queryRunner.delete('black_card', {
      text: `In L.A. County Jail, word is you can trade 200 cigarettes for ____.`,
      draw: 0,
      pick: 1,
      watermark: `1.2`
    });
    await queryRunner.delete('black_card', {
      text: `After the earthquake, Sean Penn brought ____ to the people of Haiti.`,
      draw: 0,
      pick: 1,
      watermark: `1.2`
    });
    await queryRunner.delete('black_card', {
      text: `Next on ESPN2, the World Series of ____.`,
      draw: 0,
      pick: 1,
      watermark: `1.2`
    });
    await queryRunner.delete('black_card', {
      text: `Step 1: ____. Step 2: ____. Step 3: Profit.`,
      draw: 0,
      pick: 2,
      watermark: `1.2`
    });
    await queryRunner.delete('black_card', {
      text: `Life for American Indians was forever changed when the White Man introduced them to ____.`,
      draw: 0,
      pick: 1,
      watermark: `1.2`
    });
    await queryRunner.delete('black_card', {
      text: `What's the next Happy Meal&reg; toy?`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `Lifetime&reg; presents ____, the story of ____.`,
      draw: 0,
      pick: 2,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `Dear Abby,<br><br>I'm having some trouble with ____ and would like your advice.`,
      draw: 0,
      pick: 1,
      watermark: `1.2`
    });
    await queryRunner.delete('black_card', {
      text: `While the United States raced the Soviet Union to the moon, the Mexican government funneled millions of pesos into research on ____.`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `How did I lose my virginity?`,
      draw: 0,
      pick: 1,
      watermark: `1.3`
    });
    await queryRunner.delete('black_card', {
      text: `Here is the church<br>Here is the steeple<br>Open the doors<br>And there is ____.`,
      draw: 0,
      pick: 1,
      watermark: `1.3`
    });
    await queryRunner.delete('black_card', {
      text: `During his childhood, Salvador Dal&iacute; produced hundreds of paintings of ____.`,
      draw: 0,
      pick: 1,
      watermark: `1.3`
    });
    await queryRunner.delete('black_card', {
      text: `This is the way the world ends \ This is the way the world ends \ Not with a bang but with ____.`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `In 1,000 years, when paper money is a distant memory, how will we pay for goods and services?`,
      draw: 0,
      pick: 1,
      watermark: `1.3`
    });
    await queryRunner.delete('black_card', {
      text: `War!<br><br>What is it good for?`,
      draw: 0,
      pick: 1,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `What don't you want to find in your Kung Pao chicken?`,
      draw: 0,
      pick: 1,
      watermark: `1.3`
    });
    await queryRunner.delete('black_card', {
      text: `Rumor has it that Vladimir Putin's favorite delicacy is ____ stuffed with ____.`,
      draw: 0,
      pick: 2,
      watermark: null
    });
    await queryRunner.delete('black_card', {
      text: `The Smithsonian Museum of Natural History has just opened an exhibit on ____.`,
      draw: 0,
      pick: 1,
      watermark: `1.3`
    });

    await queryRunner.delete('white_card', {
      text: `Michelle Obama's arms.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `White people.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `An erection that lasts longer than four hours.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Panda sex.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `A middle-aged man on roller skates.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Coat hanger abortions.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Scrubbing under the folds.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Wearing underwear inside-out to avoid doing laundry.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `MechaHitler.`,
      watermark: `1.2`
    });
    await queryRunner.delete('white_card', {
      text: `Getting naked and watching Nickelodeon.`,
      watermark: `1.2`
    });
    await queryRunner.delete('white_card', {
      text: `Morgan Freeman's voice.`,
      watermark: `1.2`
    });
    await queryRunner.delete('white_card', {
      text: `Breaking out into song and dance.`,
      watermark: `1.2`
    });
    await queryRunner.delete('white_card', {
      text: `Soup that is too hot.`,
      watermark: `1.2`
    });
    await queryRunner.delete('white_card', {
      text: `Unfathomable stupidity.`,
      watermark: `1.2`
    });
    await queryRunner.delete('white_card', {
      text: `Horrifying laser hair removal accidents.`,
      watermark: `1.2`
    });
    await queryRunner.delete('white_card', {
      text: `Boogers.`,
      watermark: `1.2`
    });
    await queryRunner.delete('white_card', {
      text: `Expecting a burp and vomiting on the floor.`,
      watermark: `1.2`
    });
    await queryRunner.delete('white_card', {
      text: `A defective condom.`,
      watermark: `1.2`
    });
    await queryRunner.delete('white_card', {
      text: `Teenage pregnancy.`,
      watermark: `1.2`
    });
    await queryRunner.delete('white_card', {
      text: `Hot cheese.`,
      watermark: `1.2`
    });
    await queryRunner.delete('white_card', {
      text: `A mopey zoo lion.`,
      watermark: `1.2`
    });
    await queryRunner.delete('white_card', {
      text: `Shapeshifters.`,
      watermark: `1.2`
    });
    await queryRunner.delete('white_card', {
      text: `The Care Bear Stare.`,
      watermark: `1.2`
    });
    await queryRunner.delete('white_card', {
      text: `Erectile dysfunction.`,
      watermark: `1.2`
    });
    await queryRunner.delete('white_card', {
      text: `The chronic.`,
      watermark: `1.2`
    });
    await queryRunner.delete('white_card', {
      text: `Firing a rifle into the air while balls deep in a squealing hog.`,
      watermark: `1.2`
    });
    await queryRunner.delete('white_card', {
      text: `Nicolas Cage.`,
      watermark: `1.2`
    });
    await queryRunner.delete('white_card', {
      text: `Dropping a chandelier on your enemies and riding the rope up.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Public ridicule.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `A snapping turtle biting the tip of your penis.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Vehicular manslaughter.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `The token minority.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `A gentle caress of the inner thigh.`,
      watermark: `1.2`
    });
    await queryRunner.delete('white_card', {
      text: `Poor life choices.`,
      watermark: `1.2`
    });
    await queryRunner.delete('white_card', {
      text: `Embryonic stem cells.`,
      watermark: `1.2`
    });
    await queryRunner.delete('white_card', {
      text: `The Little Engine That Could.`,
      watermark: `1.2`
    });
    await queryRunner.delete('white_card', {
      text: `Lady Gaga.`,
      watermark: `1.2`
    });
    await queryRunner.delete('white_card', {
      text: `A death ray.`,
      watermark: `1.2`
    });
    await queryRunner.delete('white_card', {
      text: `Vigilante justice.`,
      watermark: `1.2`
    });
    await queryRunner.delete('white_card', {
      text: `Exactly what you'd expect.`,
      watermark: `1.2`
    });
    await queryRunner.delete('white_card', {
      text: `Natural male enhancement.`,
      watermark: `1.2`
    });
    await queryRunner.delete('white_card', {
      text: `Passive-aggressive Post-it notes.`,
      watermark: `1.2`
    });
    await queryRunner.delete('white_card', {
      text: `Inappropriate yodeling.`,
      watermark: `1.2`
    });
    await queryRunner.delete('white_card', {
      text: `A homoerotic volleyball montage.`,
      watermark: `1.2`
    });
    await queryRunner.delete('white_card', {
      text: `Actually taking candy from a baby.`,
      watermark: `1.2`
    });
    await queryRunner.delete('white_card', {
      text: `Crystal meth.`,
      watermark: `1.2`
    });
    await queryRunner.delete('white_card', {
      text: `My inner demons.`,
      watermark: `1.2`
    });
    await queryRunner.delete('white_card', {
      text: `Pac-Man uncontrollably guzzling cum.`,
      watermark: `1.2`
    });
    await queryRunner.delete('white_card', {
      text: `My vagina.`,
      watermark: `1.2`
    });
    await queryRunner.delete('white_card', {
      text: `The true meaning of Christmas.`,
      watermark: `1.2`
    });
    await queryRunner.delete('white_card', {
      text: `Flying sex snakes.`,
      watermark: `1.2`
    });
    await queryRunner.delete('white_card', {
      text: `German dungeon porn.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Praying the gay away.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Dying.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Same-sex ice dancing.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Dying of dysentery.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Roofies.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `The Big Bang.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Amputees.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Men.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Concealing a boner.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Agriculture.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Making a pouty face.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `YOU MUST CONSTRUCT ADDITIONAL PYLONS.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Hormone injections.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Tom Cruise.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Object permanence.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Being marginalized.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `The profoundly handicapped.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Nickelback.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Doing the right thing.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `The invisible hand.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Heteronormativity.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Cuddling.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Raptor attacks.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Fear itself.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Sniffing glue.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `An icepick lobotomy.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Being rich.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `The clitoris.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Sexy pillow fights.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Michael Jackson.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Sexting.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Horse meat.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Sunshine and rainbows.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Goblins.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Spectacular abs.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `The Three-Fifths compromise.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Vigorous jazz hands.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Skeletor.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Vikings.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Genital piercings.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `A really cool hat.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `An Oedipus complex.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `The Underground Railroad.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Heartwarming orphans.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Cheating in the Special Olympics.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Sharing needles.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Ethnic cleansing.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Eating all of the cookies before the AIDS bake-sale.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `My humps.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `The violation of our most basic human rights.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Fingering.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `The placenta.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Flightless birds.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Stranger danger.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Sean Penn.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `A sad handjob.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Self-loathing.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `A falcon with a cap on its head.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Historically black colleges.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Aaron Burr.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Former President George W. Bush.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Geese.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Mutually-assured destruction.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Bling.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Smegma.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `The South.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Pretending to care.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Arnold Schwarzenegger.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `A sausage festival.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Foreskin.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Being a dick to children.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Chainsaws for hands.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `The Pope.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `A balanced breakfast.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Elderly Japanese men.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Pictures of boobs.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Science.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `A bleached asshole.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Autocannibalism.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `William Shatner.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `A micropenis.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Bingeing and purging.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Man meat.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Laying an egg.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `The terrorists.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `A bitch slap.`,
      watermark: `B`
    });
    await queryRunner.delete('white_card', {
      text: `One trillion dollars.`,
      watermark: `B`
    });
    await queryRunner.delete('white_card', {
      text: `Chunks of dead prostitute.`,
      watermark: `B`
    });
    await queryRunner.delete('white_card', {
      text: `The entire Mormon Tabernacle Choir.`,
      watermark: `B`
    });
    await queryRunner.delete('white_card', {
      text: `The female orgasm.`,
      watermark: `B`
    });
    await queryRunner.delete('white_card', {
      text: `Extremely tight pants.`,
      watermark: `B`
    });
    await queryRunner.delete('white_card', {
      text: `Stormtroopers.`,
      watermark: `B`
    });
    await queryRunner.delete('white_card', {
      text: `The Boy Scouts of America.`,
      watermark: `B`
    });
    await queryRunner.delete('white_card', {
      text: `Throwing a virgin into a volcano.`,
      watermark: `B`
    });
    await queryRunner.delete('white_card', {
      text: `Passive-agression.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Guys who don't call.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `AIDS.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `The Rapture.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Eugenics.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Taking off your shirt.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Ronald Reagan.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Jewish fraternities.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `All-you-can-eat shrimp for $4.99.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Scalping.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Edible underpants.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Figgy pudding.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `The American Dream.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Testicular torsion.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `The folly of man.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `The KKK.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `The taint; the grundle; the fleshy fun-bridge.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Saxophone solos.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `That thing that electrocutes your abs.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Friends with benefits.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Teaching a robot to love.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Me time.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `The heart of a child.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Smallpox blankets.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Yeast.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Full frontal nudity.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Authentic Mexican cuisine.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Licking things to claim them as your own.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Genghis Khan.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `The hardworking Mexican.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `RoboCop.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Spontaneous human combustion.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Natural selection.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `A good sniff.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Nipple blades.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Leaving an awkward voicemail.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Assless chaps.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Sweet, sweet vengeance.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Darth Vader.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Necrophilia.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Toni Morrison's vagina.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Preteens.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `A cooler full of organs.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Keanu Reeves.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `A thermonuclear detonation.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Catapults.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Emotions.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Balls.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Homeless people.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Old-people smell.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Farting and walking away.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `The inevitable heat death of the universe.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `The Rev. Dr. Martin Luther King, Jr.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Sperm whales.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `A murder most foul.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Daddy issues.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Britney Spears at 55.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Natalie Portman.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `The Holy Bible.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Pulling out.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Pixelated bukkake.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Waiting 'til marriage.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `The World of Warcraft.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `World peace.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `A can of whoop-ass.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `A zesty breakfast burrito.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Picking up girls at the abortion clinic.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Land mines.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `A time travel paradox.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Seppuku.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Waking up half-naked in a Denny's parking lot.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Christopher Walken.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Gloryholes.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `A tiny horse.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `A sassy black woman.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Penis envy.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Drinking alone.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Hulk Hogan.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Whipping it out.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Dental dams.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Gandhi.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `God.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Friction.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `A sea of troubles.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Poor people.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Flesh-eating bacteria.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Dick Cheney.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Lockjaw.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Take-backsies.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Opposable thumbs.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `The homosexual agenda.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Fiery poops.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Cards Against Humanity.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Sean Connery.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `The milk man.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `The Chinese gymnastics team.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Eating the last known bison.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Giving 110%.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Friendly fire.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Count Chocula.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Feeding Rosie O'Donnell.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Being a motherfucking sorcerer.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `African children.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Crippling debt.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `A disappointing birthday party.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Puppies!`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `A windmill full of corpses.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Being on fire.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `A lifetime of sadness.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Republicans.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `A salty surprise.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `The Jews.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Incest.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Nazis.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Repression.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Attitude.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Passable transvestites.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Puberty.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Swooping.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Lactation.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Pabst Blue Ribbon.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `The gays.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `A foul mouth.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `A hot mess.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `My collection of high-tech sex toys.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Bees?`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Getting drunk on mouthwash.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `The glass ceiling.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Sarah Palin.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Frolicking.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Not giving a shit about the Third World.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `My relationship status.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Barack Obama.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Mouth herpes.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Wiping her butt.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Pedophiles.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Doin' it in the butt.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Being fabulous.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `An M. Night Shyamalan plot twist.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `A bag of magic beans.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Dead parents.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `My sex life.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Riding off into the sunset.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Dick fingers.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `The Virginia Tech Massacre.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Queefing.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Tangled Slinkys.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Civilian casualties.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Leprosy.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Grave robbing.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Tentacle porn.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Bill Nye the Science Guy.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `New Age music.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `72 virgins.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Hope.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Passing a kidney stone.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `A mime having a stroke.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Classist undertones.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `A mating display.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `The Kool-Aid Man.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Not reciprocating oral sex.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Italians.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `My soul.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `A stray pube.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Jerking off into a pool of children's tears.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Getting really high.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Overcompensation.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Free samples.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Shaquille O'Neal's acting career.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Half-assed foreplay.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Explosions.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `White privilege.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Road head.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Poorly-timed Holocaust jokes.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `8 oz. of sweet Mexican black-tar heroin.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Judge Judy.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Altar boys.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Scientology.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Justin Bieber.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Alcoholism.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `My genitals.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Winking at old people.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Golden showers.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Racism.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Auschwitz.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Kids with ass cancer.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Hurricane Katrina.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Lumberjack fantasies.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `An asymmetric boob job.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Asians who aren't good at math.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `The Blood of Christ.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `A brain tumor.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Prancing.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `The Hamburglar.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Police brutality.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Estrogen.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `A robust mongoloid.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Pooping back and forth. Forever.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Bitches.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Stephen Hawking talking dirty.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Getting so angry that you pop a boner.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Tasteful sideboob.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Two midgets shitting into a bucket.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Racially-biased SAT questions.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Anal beads.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Surprise sex!`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Dead babies.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Masturbation.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `The Hustle.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Obesity.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Child beauty pageants.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Kamikaze pilots.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Powerful thighs.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Women's suffrage.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `John Wilkes Booth.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Parting the Red Sea.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Harry Potter erotica.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Grandma.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Porn stars.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `A monkey smoking a cigar.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Lance Armstrong's missing testicle.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Children on leashes.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Multiple stab wounds.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Oompa-Loompas.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Peeing a little bit.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `The miracle of childbirth.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Another goddamn vampire movie.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Active listening.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `A gassy antelope.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `BATMAN!!!`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Black people.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Serfdom.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `The Trail of Tears.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Ghosts.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `The Dance of the Sugar Plum Fairy.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Finger painting.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Robert Downey, Jr.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Muhammed (Praise Be Unto Him).`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Famine.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `AXE Body Spray.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `The Force.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Cybernetic enhancements.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Mr. Clean, right behind you.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Third base.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `A fetus.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Women in yogurt commercials.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Copping a feel.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Sexual tension.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Dry heaving.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Centaurs.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Wifely duties.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Hot people.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Kanye West.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `The Amish.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `When you fart and a little bit comes out.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Viagra&reg;.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Five-Dollar Footlongs&trade;.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `The Tempur-Pedic&reg; Swedish Sleep System&trade;.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Fancy Feast&reg;.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Hot Pockets&reg;.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Domino's&trade; Oreo&trade; Dessert Pizza.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `The &Uuml;bermensch.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Adderall&trade;.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `GoGurt&reg;.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `A Super Soaker&trade; full of cat pee.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `Lunchables&trade;.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `The Make-A-Wish&reg; Foundation.`,
      watermark: null
    });
    await queryRunner.delete('white_card', {
      text: `A Bop It&trade;.`,
      watermark: `1.2`
    });
    await queryRunner.delete('white_card', {
      text: `Home video of Oprah sobbing into a Lean Cuisine&reg;.`,
      watermark: `1.2`
    });
    await queryRunner.delete('white_card', {
      text: `Switching to Geico&reg;.`,
      watermark: `1.2`
    });
    await queryRunner.delete('white_card', {
      text: `Advice from a wise, old black man.`,
      watermark: `1.3`
    });
    await queryRunner.delete('white_card', {
      text: `The Devil himself.`,
      watermark: `1.3`
    });
    await queryRunner.delete('white_card', {
      text: `The art of seduction.`,
      watermark: `1.3`
    });
    await queryRunner.delete('white_card', {
      text: `Funky fresh rhymes.`,
      watermark: `1.3`
    });
    await queryRunner.delete('white_card', {
      text: `The light of a billion suns.`,
      watermark: `1.3`
    });
    await queryRunner.delete('white_card', {
      text: `Destroying the evidence.`,
      watermark: `1.3`
    });
    await queryRunner.delete('white_card', {
      text: `Silence.`,
      watermark: `1.3`
    });
    await queryRunner.delete('white_card', {
      text: `Growing a pair.`,
      watermark: `1.3`
    });
    await queryRunner.delete('white_card', {
      text: `Synergistic management solutions.`,
      watermark: `1.3`
    });
    await queryRunner.delete('white_card', {
      text: `Wet dreams.`,
      watermark: `1.3`
    });
    await queryRunner.delete('white_card', {
      text: `A live studio audience.`,
      watermark: `1.3`
    });
    await queryRunner.delete('white_card', {
      text: `The Great Depression.`,
      watermark: `1.3`
    });
    await queryRunner.delete('white_card', {
      text: `An M16 assault rifle.`,
      watermark: `1.3`
    });
    await queryRunner.delete('white_card', {
      text: `Poopy diapers.`,
      watermark: `1.3`
    });
    await queryRunner.delete('white_card', {
      text: `Tickling Sean Hannity, even after he tells you to stop.`,
      watermark: `1.3`
    });
    await queryRunner.delete('white_card', {
      text: `Stalin.`,
      watermark: `1.3`
    });
    await queryRunner.delete('white_card', {
      text: `A spastic nerd.`,
      watermark: `1.3`
    });
    await queryRunner.delete('white_card', {
      text: `Rush Limbaugh's soft, shitty body.`,
      watermark: `1.3`
    });
    await queryRunner.delete('white_card', {
      text: `Capturing Newt Gingrich and forcing him to dance in a monkey suit.`,
      watermark: `1.3`
    });
    await queryRunner.delete('white_card', {
      text: `Battlefield amputations.`,
      watermark: `1.3`
    });
    await queryRunner.delete('white_card', {
      text: `Brown people.`,
      watermark: `1.3`
    });
    await queryRunner.delete('white_card', {
      text: `Rehab.`,
      watermark: `1.3`
    });
    await queryRunner.delete('white_card', {
      text: `An ugly face.`,
      watermark: `1.3`
    });
    await queryRunner.delete('white_card', {
      text: `Menstrual rage.`,
      watermark: `1.3`
    });
    await queryRunner.delete('white_card', {
      text: `An uppercut.`,
      watermark: `1.3`
    });
    await queryRunner.delete('white_card', {
      text: `Shiny objects.`,
      watermark: `1.3`
    });
    await queryRunner.delete('white_card', {
      text: `50,000 volts straight to the nipples.`,
      watermark: `1.3`
    });
    await queryRunner.delete('white_card', {
      text: `A bucket of fish heads.`,
      watermark: `1.3`
    });
    await queryRunner.delete('white_card', {
      text: `Hospice care.`,
      watermark: `1.3`
    });
    await queryRunner.delete('white_card', {
      text: `Being fat and stupid.`,
      watermark: `1.3`
    });
    await queryRunner.delete('white_card', {
      text: `Getting married, having a few kids, buying some stuff, retiring to Florida, and dying.`,
      watermark: `1.3`
    });
    await queryRunner.delete('white_card', {
      text: `A pyramid of severed heads.`,
      watermark: `1.3`
    });
    await queryRunner.delete('white_card', {
      text: `Crucifixion.`,
      watermark: `1.3`
    });
    await queryRunner.delete('white_card', {
      text: `A subscription to Men's Fitness.`,
      watermark: `1.3`
    });
    await queryRunner.delete('white_card', {
      text: `Some god-damn peace and quiet.`,
      watermark: `1.3`
    });
    await queryRunner.delete('white_card', {
      text: `A micropig wearing a tiny raincoat and booties.`,
      watermark: `1.3`
    });
    await queryRunner.delete('white_card', {
      text: `Used panties.`,
      watermark: `1.3`
    });
    await queryRunner.delete('white_card', {
      text: `The penny whistle solo from "My Heart Will Go On."`,
      watermark: `1.3`
    });
    await queryRunner.delete('white_card', {
      text: `A tribe of warrior women.`,
      watermark: `1.3`
    });
    await queryRunner.delete('white_card', {
      text: `An oversized lollipop.`,
      watermark: `1.3`
    });
    await queryRunner.delete('white_card', {
      text: `Helplessly giggling at the mention of Hutus and Tutsis.`,
      watermark: `1.3`
    });
    await queryRunner.delete('white_card', {
      text: `Not wearing pants.`,
      watermark: `1.3`
    });
    await queryRunner.delete('white_card', {
      text: `Consensual sex.`,
      watermark: `1.3`
    });
    await queryRunner.delete('white_card', {
      text: `Her Majesty, Queen Elizabeth II.`,
      watermark: `1.3`
    });

    await queryRunner.delete('card_set', {
      name: `Third Version`,
      baseDeck: true,
      description: `Another updated version of the Cards Against Humanity base game.`,
      weight: 3,
      active: true
    });
  }
}
