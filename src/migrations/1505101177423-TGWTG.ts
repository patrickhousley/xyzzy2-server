/* tslint:disable:no-non-null-assertion no-unsafe-any no-any no-unnecessary-type-assertion */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class TGWTG1505101177423 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const insertResult = await queryRunner.insert('card_set', {
      name: `[C] That Guy With The Glasses`,
      baseDeck: true,
      description: `http://thatguywiththeglasses.com/`,
      weight: 503,
      active: true
    });

    await queryRunner.insert('black_card', {
      text: `To top One More Day, future comic writers will use ____ to break up a relationship.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The real reason MAGFest was ruined was ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The reason Linkara doesn't like milk in his cereal is ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The secret of Linkara's magic gun is ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `For the next Anniversary event, the TGWTG producers must battle ____ to get ____.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `If a dog and a dolphin can get along, why not ____ and ____?`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `If I wanted to see ____, I'll stick with ____, thank you very much.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I asked Linkara to retweet ____, but instead, he retweeted ____.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I write slash fanfiction pairing ____ with ____.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Next time on Obscurus Lupa Presents: " ____ IV: The Return of ____".`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Todd in the Shadows broke the Not a Rhyme button when the singer tried to rhyme ____ with ____.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Welshy is to ____ as Sad Panda is to ____.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Linkara's next story arc will involve him defeating ____ with the power of  ____.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Rock and Roll is nothing but ____ and the rage of ____!`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Being fed up with reviewing lamps, what obscure topic did Linkara review next?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What did the commenters bitch about next to Doug?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The next crossover will have ____ and ____ review ____.`,
      draw: 2,
      pick: 3,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `We all made a mistake when we ate ____ at MAGFest.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Kyle's next student film will focus on ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The RDA chat knew Nash was trolling them when he played ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Why does Linkara have all of those Cybermats?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ will be the subject of the next TGWTG panel at MAGFest.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `At his next con appearance, Linkara will cosplay as ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `WAIT!  I have an idea!  It involves using ____!`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What does Linkara eat with his chicken strips?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Why was Radio Dead Air shut down this time?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `If you value your life, never mention ____ around Oancitizen.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Arlo P. Arlo's newest weapon combines ____ and ____!`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ and ____ are in the worst comic Linkara ever read.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ is only on the site because of ____.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The newest fanfic trend is turning ____ into ____.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ is the reason Linkara doesn't like to swear.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ was completely avoidable!`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ will live!`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ is something else Diamanda Hagan has to live with every day.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ should be on TGWTG.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ was the first thing to go when Hagan took over the world.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____! What are you doing here?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____! You know, for kids.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I love ____. It's so bad.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____. With onions.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ is the theme of this year's anniversary crossover.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `A ____ Credit Card!?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Blip checks are way smaller in January so I'll spend the month riffing on ____ to gain more views.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Brad Tries ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Doug still regrets the day he decided to do a Let's Play video for "Bart Simpson's ____ Adventure".`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Enemies of Diamanda Hagan have been known to receive strange packages filled with  ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `High and away on a wing and a prayer, who could it be? Believe it or not, it's just ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What broke Nash this week?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I ____ so you don't have to.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I AM THE VOICELESS. THE NEVER SHOULD. I AM ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I prefer for MY exploitation films to have ____, thank you very much.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I watch movies just to see if I can find a Big Lipped ____ Moment.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I'm looking forward to Jesuotaku's playthrough of Fire Emblem: ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In his latest review, Phelous was killed by ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `It was all going well until they found ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `JW confirms, you can play ____,`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Next January, the Nostalgia Critic is doing ____ Month.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `No one wants to see your ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Of Course! Don't you know anything about ____?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `OH MY GOD THIS IS THE GREATEST ____ I'VE EVER SEEN IN MY LIFE!`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `On the other side of the Plot Hole, the Nostalgia Critic found ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Reactions were mixed when ____ joined TGWTG.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Sage has presented JO with the new ecchi series ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Sean got his head stuck in ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `STOP OR I WILL ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The invasion of Molassia was tragically thwarted by ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The newest reviewer addition to the site specializes in ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The next person to leave Channel Awesome will announce their departure via ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The next Renegade Cut is about ____ in a beloved children's movie.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The Nostalgia Critic will NEVER review ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The only thing Linkara would sell his soul for is ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What is the real reason Demo Reel failed?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `This weekend, the nation of Haganistan will once again commence its annual celebration of ____.  `,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `To troll the RDA chat this time, Todd requested a song by ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Todd knew he didn't have a chance after trying to seduce Lupa with ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Turns out, that wasn't tea in MikeJ's cup, it was ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Viewers were shocked when Paw declared ____ the best song of the movie.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `WE WERE FIGHTING LIKE ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Well, I've read enough fanfic about ____ and Lupa to last a lifetime.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What does Nash like to sing about?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What does Todd look like under his mask?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What doesn't go there?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What doesn't work that way?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What else does Diamanda Hagan have to live with every day?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What is in Sci Fi Guy's vest?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What the fuck is wrong with you?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What will Tara name her next hippo?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What's holding up the site redesign?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What's really inside the Plot Hole?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What's the real reason nobody has ever played the TGWTG Panel Drinking Game?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What's up next on WTFIWWY?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `When the JesuOtaku stream got to the "awful part of the night," the GreatSG video featured ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Why can't Film Brain stop extending his final vowels?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `90's Kid's favorite comic is ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Because poor literacy is ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `He is a glitch. He is missing. He is ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In a surprise twist, the villain of Linkara's next story arc turned out to be ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Linkara now prefers to say ____ in lieu of "fuck".`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Of course!  Don't you know anything about ___?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Snowflame feels no ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Snowflame found a new love besides cocaine. What is it?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `So let's dig into ____ #1.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Where'd he purchase that?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `When is the next History of Power Rangers coming out?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What is as low as the standards of the 90's Kid?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What delayed the next History of Power Rangers?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `A piece of ____ is missing.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What do Brad and Floyd like to do after a long day?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `At least he didn't fuck ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Hello, and welcome to Atop ____, where ____ burns.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Hello, I'm the Nostalgia Critic. I remember ____ so you don't have to!`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `If you are able to deflect ____ with ____, we refer to it as "Frying ____".`,
      draw: 2,
      pick: 3,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In her newest review, Diamanda Hagan finds herself in the body of ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Last time I took bath salts, I ended up ____ in ____.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Tara taught me that if you're going to engage in ____, then ____ isn't a good idea.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The website was almost called "thatguywith____.com".`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `They even took ____! Who does that?!`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `You may be a robot, but I AM ____!`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ didn't make it onto the first AT4W DVD.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ is part of the WTFIWWY wheelhouse.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ is the subject of the Critic's newest review.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ is the subject of the missing short from The Uncanny Valley.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ needs more gay.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ will be Linkara's next cosplay.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ wound up in this week's top WTFIWWY story.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `After getting snowed in at MAGfest, the reviewers were stuck with ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `ALL OF ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `An intervention was staged for Linkara after ____ was discovered in his hat.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `As a way of apologizing for a poorly received episode, E Rod promised to review ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Being done with My Little Pony, 8-Bit Mickey has moved onto ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Birdemic 3: ____`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `E Rod has a new dance move called ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Even Kyle thinks ____ is pretentious.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Florida's new crazy is about ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Hello, I'm a ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Here There Be ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Hey kids, I'm Nash, and I couldn't make ____ up if I tried.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Hey Nash, whatcha playin'?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `How is Bennett going to creep out Ask That Guy this time? `,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In his most recent Avatar vlog, Doug's favorite thing about the episode was ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In the newest Cheap Damage, CR looks at the trading card game version of ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `IT'S NOT ____!`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `It's not nudity if there's ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Leon Thomas almost named his show Renegade ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Linkara was shocked when he found out Insano was secretly ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Linkara's Yu-Gi-Oh deck is built up with nothing but ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Luke Mochrie proved he was still part of the site by____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `MikeJ's next sexual conquest is ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Nash had a long day at work, so tonight he'll stream ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Nash rejected yet another RDA request for ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Nash's recent rant about Microsoft led to ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Nash's Reviewer Spotlight featured ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `New rule in the RDA Drinking Game:  Every time ____ happens, take a shot!`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `On the next WTFIWWY, Nash will give us a brief history of ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The best Bad Movie Beatdown sketch is where Film Brain ropes Lordhebe into ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The controversy over ad-blocking could be easily solved by ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The easiest way to counteract a DMCA takedown notice is with ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The last time Welshy and Film Brain were in a room together, they ended up ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The new site that will overtake TGWTG is ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The newest Rap Libs makes extensive use of the phrase "____."`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The theme of this week's WTFIWWY is ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `This week, Nash's beer is made with ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What did Doug bring to the set of To Boldly Flee?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What does Ven have to do now?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What hot, trendy new dance will feature in Paw's next Dance Spectacular?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What is hidden in Linkara's hat?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What is literally the only thing tastier than a dragon's soul?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What is Snowflame's only known weakness?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What is the name of the next new Channel Awesome contributor?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What killed Harvey Finevoice's son?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What made Dodger ban someone from the RDA chat this week?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What new upgrade did Nash give Laura?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What was the first sign that Linkara was turning evil?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What will Nash try to kill next with his hammer?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `When Arlo The Orc turns into a werewolf, he likes to snack on ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `When interviewing Linkara, be sure to ask him about ____!`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `When not reviewing or ruling Haganistan with an iron fist, Hagan's hobby is ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Who REALLY called Oancitizen to help him snap out of his ennui?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Whose ass did Zodann kick this time?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Why did Nash go to Chicago?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Why doesn't Doug ever attend MAGFest?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Why doesn't Film Brain have an actual reviewer costume?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The MAGFest Nerf War took a dark turn when ____ was waylaid by ____.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `For a late night snack, Nash made a sandwich of ____ and ____.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The next TGWTG porn spoof?  ____ with ____!`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Putting ____ in ____? That doesn't go there!`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In trying to ban ____, Florida accidentally banned ____.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `If ____ got to direct an Uncanny Valley short, it would have featured ____.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `At ConBravo, ____ will be hosting a panel on ____.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `At MAGFest, ____ will host a panel focusing on ____.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `"Greetings, dear listeners.  Won't you join ____ for ____?"`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Sad Panda is actually ____ and  ____.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I'm going to die watching ____ review ____.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In a new latest announcement video, ____ has announced an appearance at ____.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `After ____, Phelous regenerated into ____. `,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ and ____ would make awesome siblings.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Some fangirls lay awake all night thinking of ____ and ____ together.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In my new show, I review ____ while dressed like ____.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Luke's newest character is ____, the Inner ____.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Good evening! I am ____ of  ____.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ is the reason that ____ picked "AIDS."`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Nash's newest made-up curse word is ____-____-____! `,
      draw: 2,
      pick: 3,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Using alchemy, combine ____ and ____ to make ____! `,
      draw: 2,
      pick: 3,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Write Linkara's next storyline as a haiku.`,
      draw: 2,
      pick: 3,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Nash will build his next contraption with just ____, ____, and ____.`,
      draw: 2,
      pick: 3,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: ` ____  did ____ to avoid ____.`,
      draw: 2,
      pick: 3,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Make a WTFIWWY story.`,
      draw: 2,
      pick: 3,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });

    await queryRunner.insert('white_card', {
      text: `Rob Liefeld.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Literally drinking bottled fangirl tears.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `LordKaT's used nipple tassles.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Luke's curly hair.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lupa's brand of hair dye.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ma-Ti being castrated and having his balls shipped to Oancitizen in the mail by Diamanda Hagan.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Magical fairy sex.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Making angry love to a DVD copy of "Neverending Story III".`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mako.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Malachite's Hand.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Maven's secret sparkling vampire dildo.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Melvin, brother of the Joker.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `My mom.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `My penis catching fire.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Naked crazy.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nash breaking his ass.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nash dressed in drag.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nash in a gimp suit.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nash popping a blood vessel over Florida.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nash.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nash's long, long hair.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Newborn porn.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nun fuckery.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Oancitizen.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Over-intrusive fanboys.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Having sex at a screening of Mr. Popper's Penguins.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Phelous making love to his Turtles collection.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Poop, as a plan.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Punching your foe in the stomach and screaming "I AM A MAN!"`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `PushingUpRoses' bird tattoos.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Putting sexy pantyhose on your dog.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Radio Dead Air.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Reading fan fiction on a live stream.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Reading the comments.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Requesting John Cage's "4'33" on Radio Dead Air.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Reviewer dibs.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Robotic sex slaves that are made to feel sadness.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Rule 34 of Linkara and a lamp.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sad Panda.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Santa Christ.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Santa Christ's raging boner.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sharkleberry Finn-flavored Kool-Aid.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Shooting colored corn syrup up your nose.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Slightly creepy comments about Tara's hair.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Smoking kittens.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Snowdicking.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Snowflame, feeling no pain.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sodomizing a loved one with a baseball bat.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Space Guy.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Spoony's fans.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Stick figure porn.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Stickboy.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Storing your dead friend's ashes into a Quaker Oats can.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Suggestively eating a banana at the sight of David Bowie.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `SYMBOLISM!`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Taking someone by the shoulders, throwing them on the bed and riding them like a stallion.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `That Aussie Guy.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `That goddamned Colossus roar.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `That one guy with snails.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Angry Video Game Nerd.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Blockbuster Buster.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Cinema Snob Movie DVD.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `THE COCK.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Continuity Alarm.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The elephant in the room.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Film Renegado.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The five months when the Nostalgia Critic was dead.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The LAAAAAAAAAAAAAAAAAAAAAW!`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Makeover Fairy.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Nostalgia Critic.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The pig fucking movie.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The plot hole.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Power Glove.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The RDA drinking game.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The RDA IRC channel.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Spocker.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The TGWTG site redesign.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Wunder Boner.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `This fecal matter you call "Fluttershy".`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Throwing a Baby Tumbles Surprise down a staircase.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Time travel.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Timing.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Todd's unmasked visage.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Using Crystal Pepsi as a substitute for lube.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Using your underwear to shoplift raw meat from your local Wal-Mart.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Vigorously shagging your sister while holding a mug of warm tea.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Welshy.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Whatever the hell Barfiesta was supposed to be.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Yet another Thunderdome reference.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Your mom.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Zodan The Unbouncable.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `90's Kid's comic collection.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Linkara cameo.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A plushie cybermat.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `ALL THE COCAINE!!!`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bees!`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Harvey Finevoice's fine voice.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Killing clowns.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Linkara crying in his Gatorade made of cybermat tears.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Linkara stalking Gail Simone on Twitter.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Linkara's cybermat invasion force.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Linkara's fangirl support group.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Linkara's magic gun.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Linkara's masculine arms.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `MAGfest.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Marzkara fanfiction.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mechakara's phallic drill.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Reviews of $20 lamps.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A baseball to the nuts.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A bat credit card.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Big Lipped Alligator Moment.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A big long pink ding dong penis.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A bird fucking a horse.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Blip check.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A bootleg ninja turtle action figure possessed by Satan.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A car landing on a roof.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A case of disappearing bears.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Chia-Child.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A congregation of bums.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Crystal Pepsi&reg;-flavored enema.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A drugged Oancitizen in a schoolgirl outfit.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A greased-up meth guy.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A killer rabbit.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A mexican car wash.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A misguided Tumblr activism campaign.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A mobile meth lab in your pants.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A novelty slot machine.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Pan-Galactic Gargle Blaster.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A poorly-written ugly mess.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A really pimped out DeLorean.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A talking snail in a suit.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A tiny white dick.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A titanic, undead, six-headed space dragon spewing bubbles.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A zombie fisherman.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Accidentally punching your cohost in the face.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `ALL OF THE DICKS.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Almost dying at Sesame Street.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An art film Kyle's reviewed.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An autoclitorodectomy.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An obscure reference only two people will get.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Anal tearing.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Andrew Dickman.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Angrily playing piano.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ash.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ash and Checkers.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ask That Guy raped by Ma-Ti live.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `ASS ASS ASS ASS ASS ASS ASS ASS.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ass demons.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Awkward pity sex with a sparkly teenage Cthulu.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Because no one wants to see your dick.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Because the Kool-Aid Man is red.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Because there's nothing sexy at the Wal-Mart.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bees. My God.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Being frozen today.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Beppo the Invisible Monkey.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `BETRAYAL!`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Big Jim Slade.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Blockbuster Buster busting a nut.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Breaking someone's spine by fucking.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Carl Copenhagen.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Casper.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Chuck Norris.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Confusing The Last Angry Geek and Linkara.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `CR's collection of My Little Pony pins.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Creepy fans at cons buying expensive stuff for MarzGurl.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Creepy guys in the RDA chat hitting on Tara.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nash's creepy face.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Crying your eyes out at a bunch of online reviewers.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Crystal Pepsi&reg;.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dark Nella.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `David Bowie's package.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Diamanda Hagan's sexbot.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Diamanda's copy of Cockhammer.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Disney's Anne Frank.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dogs wearing pantyhose.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dolphin rape.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A douchequake.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dr. Insano.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dr. Wiki.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Explosively masturbating with Malachite's Hand.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ferdinand Von Turrell.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Film Brain's lovely accent.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Finding out that "it's not Pop Tarts!"`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Firing a blue shell at the opposing house ship.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Florida.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Florida Man.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Flying sex snakes in monocles and bow ties.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fort Super-Awesome.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `FOUR HOURS?!`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fuck yeah, SPARKLE SPARKLE SPARKLE!`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fuck you, I do what I want.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `FUCK YOU, I'M SPIDERMAN!`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fucking bubbles.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting buggered by a giant hamster.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting mauled by a mountain lion AND a grizzly bear at the same time.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Glenn Beck being torn apart by zombies.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Going full retard.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Going through the effort to build a wall in your back yard just to bash your head into it over and over again.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Gooby.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hagan's dictator tendencies.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hagan's make up artist.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hagan's masturbating minion.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ham?`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hippo Queen Tara.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hitler without the mustache.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Humping a can of trash.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `I AM A MAN!`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Invading a micronation in Nevada and making it your own.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `JewWario's solar penis.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Kickassia.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Kitler.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Kyle humping a trashcan.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Linkara's 'special' comic books.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Linkara's hat.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Superboy Prime.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Entity.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The legendary MAGFest orgy.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The most important job, reviewing a crappy comic book.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The next History of Power Rangers.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Youngblood's disease.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Twin clones of Hitler.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A disembodied orgasm hippo.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A doppelganger in black leather with a sword.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A guest appearance by Giovanni Jones, the talking lobster.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A naked rampage.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An awkward slash fic between The Nostalgia Critic and The Angry Video Game Nerd.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bath salts.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Diamanda Hagan.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Frying the Coke.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Rapidly pounding themselves in the face with a hammer.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sci-Fi Guy's ponytail.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Angry Joe.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Marzgurl.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Chester A. Bum.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ask That Guy With The Glasses.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dominic the Bartender.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Obscurus Lupa.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `ChaosD1.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Skitch.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Y Ruler Of Time.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Linkara.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mechakara.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lord Vyce.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `90's Kid.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Corporate Commander.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `JewWario.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A demonic Teddy Ruxpin doll.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Luke.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Luke's inners.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `PhelousD1.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Phelous.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Filmbrain.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Iron Liz.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Malachite.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Zodd.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Executor.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `PhilBuni.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ven Gethenian.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `That Sci-Fi Guy.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Black Lantern Spoony.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Trousers Cosmic.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nash's folksy, velvety voice.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Australia, Florida of the Pacific.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Angrily eating lettuce.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mary Sewage.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A legion of mechawolves.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Linkara's futon.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Gooby Curse.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `ANCIENT EGYPT!`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An obligatory cameo.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dodger of Zion.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An elevator party.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pants that need to be darkened.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Only being on the site because of the influence of famous acquaintences.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Enoby Dark'ness Dementia Raven TARA Way.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A legion of spiders.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A secret goat porn stash.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `____.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `*liveshot*.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `8-Bit Mickey on an unstoppable merry-go-round.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `80's Dan.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Blip ad for the most embarrassing reality show ever.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Brad Jones impersonation.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A crossover.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Cybermat in a bow tie.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A delicious fried chicken holocaust.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A DMCA takedown notice.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A fan artist.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A FUCKING PONCHO!`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A giant go-fuck-yourself spider.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A half naked, fencing JewWario.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A hand-basket of lobsters.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Mr. T Trading Card.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A pile of skulls.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A pink tutu.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A plushie TARDIS.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A poorly made knockoff action figure.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A REALLY big hoopla about nothing.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Serbian Film.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A smoking, muscled ice cream cone shooting guns and eye lasers.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A speeding NERF dart to the junk.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A squadron of attack Corgis.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A squadron of line-dancing hippos.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A strip-tease from the Nostalgia Critic.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A tauntaun puppy.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A very serious hat.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ambiguously nude Linkara.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An electronic cigarette that resembles a Sonic Screwdriver.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An evangelizing minion.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An existential crisis over internet reviews.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An impassioned plea for understanding.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An unhinged Oancitizen rolling towards the sea.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Angry Joe dancing in a squid suit.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Angry Joe's raging boner.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Another fucking Iron Liz pun.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Another goddamn PhilBuni Vine.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Aplos, or Steve, the Wizard.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Arlo P. Arlo.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Arlo the Orc.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ashens taking a blowtorch to a crappy toy.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ashens.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Because...hippos.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Becoming possessed and insulting your colleague.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Being awkward around your favorite reviewer.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bennett the Sage.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Big Butter Jesus.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Blip.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Brad, drinking a Turkey-flavored Jones Soda.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bruno Matei.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Butchered Dutch.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Comicron One.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `CR.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cynthia Rothrock`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `DEATH FROM ABOOOOOVE!!!`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Derek the Bard.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Derek the Bard's hat.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Disturbing comments in the RDA chat.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dodger's ban chain.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dodging blowjobs.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dr. Tease & Dr. Block.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dragging Oancitizen back home from a wild night of partying.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dump cards.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `E Rod's smooth, smooth dance skills.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Eating the flesh of your foes while howling at the moon.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Evilina.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Evilina's monstrous visage.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Film Brain, dressed tastefully in fashionable clothing.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Film Brain's hair.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Film Renegado creaming himself over Pacific Rim.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Forcing an NPC to haul your crap.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fuckstick the Magic Dragon.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Gargoyle Cat.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Haganistan.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Harmony Korine.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `HIPPOS!`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Holly.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Il Neige in a freakishly accurate Film Brain costume.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Jaeris, the Gunslinger.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Joe Quesada.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Kali.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Kung Tai Ted.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Kyle playing GTA while drunk.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Kyle's "unicorns."`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Laura, the Fender Stratocaster Goddess.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Linkara lying naked on his futon, playing with a Cybermat.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Linkara, dressed as the Green Ranger.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Linkara, dropping an F-Bomb.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Linkara, sexily eating a salad.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Linkara's massive ego.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Little Pluckies Ninja Protects.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Luke Mochrie's trust fund.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Maven of ze Eventide.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mexican Spider-Man.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `MikeJ.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Moarte.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nash, dressed as The Undertaker.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nash, making "vroom vroom" noises.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nash, making train sounds in a bathtub.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nella.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nella's cleavage Altoids.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Not reading the FAQ.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Obelisk Blue Linkara.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Paw.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Paw's soul patch.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Penis whiskers.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Playing TGWTG Cards Against Humanity at stupid o'clock.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pol Pot pies.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Rachel Tietz, trying to Kill the Nostalgia Critic.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ripping off part of your penis.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `ROCKET BOOTS!`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `ROCKET PUNCH!`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sad Panda's lanky, manly chest.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sage's "RAPE!" face.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sean.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sex, violence, and Daffy Duck screaming.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Shouting "FUS-RO-DAH!" at a puppy.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Smarty.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Smarty's special bag of AIDS.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Snowflame's cocaine flavored popsicles.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Snowflame's fuzzy slippers.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Space Core.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Stealing money off dead wolves.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Surprise blowjobs.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tara's tramautic childhood stories.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `That Dude In The Suede.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Adventures of Horsemeat and the Placenta #1.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Amazing Bulk.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Channel Awesome satellite.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Hippo Lantern Corps.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Last Angry Geek.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Longbox of the Damned.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Nostalgia Ranger.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Rap Critic.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The thick, muscular arms of ChaosD1.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Uncanny Valley.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Wal-Mart.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Todd in the Shadows.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Todd trolling Chris Brown on Twitter.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tommy Wiseau.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Turtle.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Using a frontloader to steal deodorant.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Using donation money for weed.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Vangelus`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ven's voice, a gift from the fairies.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Zeo Linkara.`,
      watermark: `TGWTG`,
      cardSetId: insertResult.result![0].id
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.delete('black_card', {
      text: `To top One More Day, future comic writers will use ____ to break up a relationship.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `The real reason MAGFest was ruined was ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `The reason Linkara doesn't like milk in his cereal is ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `The secret of Linkara's magic gun is ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `For the next Anniversary event, the TGWTG producers must battle ____ to get ____.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `If a dog and a dolphin can get along, why not ____ and ____?`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `If I wanted to see ____, I'll stick with ____, thank you very much.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `I asked Linkara to retweet ____, but instead, he retweeted ____.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `I write slash fanfiction pairing ____ with ____.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Next time on Obscurus Lupa Presents: " ____ IV: The Return of ____".`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Todd in the Shadows broke the Not a Rhyme button when the singer tried to rhyme ____ with ____.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Welshy is to ____ as Sad Panda is to ____.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Linkara's next story arc will involve him defeating ____ with the power of  ____.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Rock and Roll is nothing but ____ and the rage of ____!`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Being fed up with reviewing lamps, what obscure topic did Linkara review next?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `What did the commenters bitch about next to Doug?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `The next crossover will have ____ and ____ review ____.`,
      draw: 2,
      pick: 3,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `We all made a mistake when we ate ____ at MAGFest.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Kyle's next student film will focus on ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `The RDA chat knew Nash was trolling them when he played ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Why does Linkara have all of those Cybermats?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `____ will be the subject of the next TGWTG panel at MAGFest.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `At his next con appearance, Linkara will cosplay as ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `WAIT!  I have an idea!  It involves using ____!`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `What does Linkara eat with his chicken strips?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Why was Radio Dead Air shut down this time?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `If you value your life, never mention ____ around Oancitizen.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Arlo P. Arlo's newest weapon combines ____ and ____!`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `____ and ____ are in the worst comic Linkara ever read.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `____ is only on the site because of ____.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `The newest fanfic trend is turning ____ into ____.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `____ is the reason Linkara doesn't like to swear.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `____ was completely avoidable!`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `____ will live!`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `____ is something else Diamanda Hagan has to live with every day.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `____ should be on TGWTG.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `____ was the first thing to go when Hagan took over the world.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `____! What are you doing here?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `____! You know, for kids.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `I love ____. It's so bad.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `____. With onions.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `____ is the theme of this year's anniversary crossover.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `A ____ Credit Card!?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Blip checks are way smaller in January so I'll spend the month riffing on ____ to gain more views.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Brad Tries ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Doug still regrets the day he decided to do a Let's Play video for "Bart Simpson's ____ Adventure".`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Enemies of Diamanda Hagan have been known to receive strange packages filled with  ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `High and away on a wing and a prayer, who could it be? Believe it or not, it's just ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `What broke Nash this week?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `I ____ so you don't have to.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `I AM THE VOICELESS. THE NEVER SHOULD. I AM ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `I prefer for MY exploitation films to have ____, thank you very much.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `I watch movies just to see if I can find a Big Lipped ____ Moment.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `I'm looking forward to Jesuotaku's playthrough of Fire Emblem: ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `In his latest review, Phelous was killed by ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `It was all going well until they found ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `JW confirms, you can play ____,`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Next January, the Nostalgia Critic is doing ____ Month.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `No one wants to see your ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Of Course! Don't you know anything about ____?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `OH MY GOD THIS IS THE GREATEST ____ I'VE EVER SEEN IN MY LIFE!`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `On the other side of the Plot Hole, the Nostalgia Critic found ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Reactions were mixed when ____ joined TGWTG.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Sage has presented JO with the new ecchi series ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Sean got his head stuck in ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `STOP OR I WILL ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `The invasion of Molassia was tragically thwarted by ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `The newest reviewer addition to the site specializes in ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `The next person to leave Channel Awesome will announce their departure via ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `The next Renegade Cut is about ____ in a beloved children's movie.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `The Nostalgia Critic will NEVER review ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `The only thing Linkara would sell his soul for is ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `What is the real reason Demo Reel failed?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `This weekend, the nation of Haganistan will once again commence its annual celebration of ____.  `,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `To troll the RDA chat this time, Todd requested a song by ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Todd knew he didn't have a chance after trying to seduce Lupa with ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Turns out, that wasn't tea in MikeJ's cup, it was ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Viewers were shocked when Paw declared ____ the best song of the movie.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `WE WERE FIGHTING LIKE ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Well, I've read enough fanfic about ____ and Lupa to last a lifetime.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `What does Nash like to sing about?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `What does Todd look like under his mask?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `What doesn't go there?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `What doesn't work that way?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `What else does Diamanda Hagan have to live with every day?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `What is in Sci Fi Guy's vest?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `What the fuck is wrong with you?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `What will Tara name her next hippo?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `What's holding up the site redesign?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `What's really inside the Plot Hole?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `What's the real reason nobody has ever played the TGWTG Panel Drinking Game?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `What's up next on WTFIWWY?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `When the JesuOtaku stream got to the "awful part of the night," the GreatSG video featured ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Why can't Film Brain stop extending his final vowels?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `90's Kid's favorite comic is ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Because poor literacy is ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `He is a glitch. He is missing. He is ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `In a surprise twist, the villain of Linkara's next story arc turned out to be ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Linkara now prefers to say ____ in lieu of "fuck".`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Of course!  Don't you know anything about ___?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Snowflame feels no ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Snowflame found a new love besides cocaine. What is it?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `So let's dig into ____ #1.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Where'd he purchase that?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `When is the next History of Power Rangers coming out?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `What is as low as the standards of the 90's Kid?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `What delayed the next History of Power Rangers?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `A piece of ____ is missing.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `What do Brad and Floyd like to do after a long day?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `At least he didn't fuck ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Hello, and welcome to Atop ____, where ____ burns.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Hello, I'm the Nostalgia Critic. I remember ____ so you don't have to!`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `If you are able to deflect ____ with ____, we refer to it as "Frying ____".`,
      draw: 2,
      pick: 3,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `In her newest review, Diamanda Hagan finds herself in the body of ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Last time I took bath salts, I ended up ____ in ____.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Tara taught me that if you're going to engage in ____, then ____ isn't a good idea.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `The website was almost called "thatguywith____.com".`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `They even took ____! Who does that?!`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `You may be a robot, but I AM ____!`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `____ didn't make it onto the first AT4W DVD.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `____ is part of the WTFIWWY wheelhouse.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `____ is the subject of the Critic's newest review.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `____ is the subject of the missing short from The Uncanny Valley.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `____ needs more gay.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `____ will be Linkara's next cosplay.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `____ wound up in this week's top WTFIWWY story.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `After getting snowed in at MAGfest, the reviewers were stuck with ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `ALL OF ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `An intervention was staged for Linkara after ____ was discovered in his hat.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `As a way of apologizing for a poorly received episode, E Rod promised to review ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Being done with My Little Pony, 8-Bit Mickey has moved onto ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Birdemic 3: ____`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `E Rod has a new dance move called ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Even Kyle thinks ____ is pretentious.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Florida's new crazy is about ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Hello, I'm a ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Here There Be ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Hey kids, I'm Nash, and I couldn't make ____ up if I tried.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Hey Nash, whatcha playin'?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `How is Bennett going to creep out Ask That Guy this time? `,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `In his most recent Avatar vlog, Doug's favorite thing about the episode was ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `In the newest Cheap Damage, CR looks at the trading card game version of ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `IT'S NOT ____!`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `It's not nudity if there's ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Leon Thomas almost named his show Renegade ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Linkara was shocked when he found out Insano was secretly ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Linkara's Yu-Gi-Oh deck is built up with nothing but ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Luke Mochrie proved he was still part of the site by____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `MikeJ's next sexual conquest is ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Nash had a long day at work, so tonight he'll stream ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Nash rejected yet another RDA request for ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Nash's recent rant about Microsoft led to ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Nash's Reviewer Spotlight featured ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `New rule in the RDA Drinking Game:  Every time ____ happens, take a shot!`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `On the next WTFIWWY, Nash will give us a brief history of ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `The best Bad Movie Beatdown sketch is where Film Brain ropes Lordhebe into ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `The controversy over ad-blocking could be easily solved by ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `The easiest way to counteract a DMCA takedown notice is with ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `The last time Welshy and Film Brain were in a room together, they ended up ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `The new site that will overtake TGWTG is ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `The newest Rap Libs makes extensive use of the phrase "____."`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `The theme of this week's WTFIWWY is ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `This week, Nash's beer is made with ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `What did Doug bring to the set of To Boldly Flee?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `What does Ven have to do now?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `What hot, trendy new dance will feature in Paw's next Dance Spectacular?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `What is hidden in Linkara's hat?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `What is literally the only thing tastier than a dragon's soul?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `What is Snowflame's only known weakness?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `What is the name of the next new Channel Awesome contributor?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `What killed Harvey Finevoice's son?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `What made Dodger ban someone from the RDA chat this week?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `What new upgrade did Nash give Laura?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `What was the first sign that Linkara was turning evil?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `What will Nash try to kill next with his hammer?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `When Arlo The Orc turns into a werewolf, he likes to snack on ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `When interviewing Linkara, be sure to ask him about ____!`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `When not reviewing or ruling Haganistan with an iron fist, Hagan's hobby is ____.`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Who REALLY called Oancitizen to help him snap out of his ennui?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Whose ass did Zodann kick this time?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Why did Nash go to Chicago?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Why doesn't Doug ever attend MAGFest?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Why doesn't Film Brain have an actual reviewer costume?`,
      draw: 0,
      pick: 1,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `The MAGFest Nerf War took a dark turn when ____ was waylaid by ____.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `For a late night snack, Nash made a sandwich of ____ and ____.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `The next TGWTG porn spoof?  ____ with ____!`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Putting ____ in ____? That doesn't go there!`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `In trying to ban ____, Florida accidentally banned ____.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `If ____ got to direct an Uncanny Valley short, it would have featured ____.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `At ConBravo, ____ will be hosting a panel on ____.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `At MAGFest, ____ will host a panel focusing on ____.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `"Greetings, dear listeners.  Won't you join ____ for ____?"`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Sad Panda is actually ____ and  ____.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `I'm going to die watching ____ review ____.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `In a new latest announcement video, ____ has announced an appearance at ____.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `After ____, Phelous regenerated into ____. `,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `____ and ____ would make awesome siblings.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Some fangirls lay awake all night thinking of ____ and ____ together.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `In my new show, I review ____ while dressed like ____.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Luke's newest character is ____, the Inner ____.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Good evening! I am ____ of  ____.`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `____ is the reason that ____ picked "AIDS."`,
      draw: 0,
      pick: 2,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Nash's newest made-up curse word is ____-____-____! `,
      draw: 2,
      pick: 3,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Using alchemy, combine ____ and ____ to make ____! `,
      draw: 2,
      pick: 3,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Write Linkara's next storyline as a haiku.`,
      draw: 2,
      pick: 3,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Nash will build his next contraption with just ____, ____, and ____.`,
      draw: 2,
      pick: 3,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: ` ____  did ____ to avoid ____.`,
      draw: 2,
      pick: 3,
      watermark: `TGWTG`
    });
    await queryRunner.delete('black_card', {
      text: `Make a WTFIWWY story.`,
      draw: 2,
      pick: 3,
      watermark: `TGWTG`
    });

    await queryRunner.delete('white_card', {
      text: `Rob Liefeld.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Literally drinking bottled fangirl tears.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `LordKaT's used nipple tassles.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Luke's curly hair.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Lupa's brand of hair dye.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Ma-Ti being castrated and having his balls shipped to Oancitizen in the mail by Diamanda Hagan.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Magical fairy sex.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Making angry love to a DVD copy of "Neverending Story III".`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Mako.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Malachite's Hand.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Maven's secret sparkling vampire dildo.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Melvin, brother of the Joker.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `My mom.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `My penis catching fire.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Naked crazy.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Nash breaking his ass.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Nash dressed in drag.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Nash in a gimp suit.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Nash popping a blood vessel over Florida.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Nash.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Nash's long, long hair.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Newborn porn.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Nun fuckery.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Oancitizen.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Over-intrusive fanboys.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Having sex at a screening of Mr. Popper's Penguins.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Phelous making love to his Turtles collection.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Poop, as a plan.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Punching your foe in the stomach and screaming "I AM A MAN!"`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `PushingUpRoses' bird tattoos.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Putting sexy pantyhose on your dog.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Radio Dead Air.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Reading fan fiction on a live stream.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Reading the comments.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Requesting John Cage's "4'33" on Radio Dead Air.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Reviewer dibs.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Robotic sex slaves that are made to feel sadness.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Rule 34 of Linkara and a lamp.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Sad Panda.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Santa Christ.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Santa Christ's raging boner.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Sharkleberry Finn-flavored Kool-Aid.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Shooting colored corn syrup up your nose.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Slightly creepy comments about Tara's hair.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Smoking kittens.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Snowdicking.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Snowflame, feeling no pain.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Sodomizing a loved one with a baseball bat.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Space Guy.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Spoony's fans.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Stick figure porn.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Stickboy.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Storing your dead friend's ashes into a Quaker Oats can.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Suggestively eating a banana at the sight of David Bowie.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `SYMBOLISM!`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Taking someone by the shoulders, throwing them on the bed and riding them like a stallion.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `That Aussie Guy.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `That goddamned Colossus roar.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `That one guy with snails.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `The Angry Video Game Nerd.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `The Blockbuster Buster.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `The Cinema Snob Movie DVD.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `THE COCK.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `The Continuity Alarm.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `The elephant in the room.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `The Film Renegado.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `The five months when the Nostalgia Critic was dead.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `The LAAAAAAAAAAAAAAAAAAAAAW!`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `The Makeover Fairy.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `The Nostalgia Critic.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `The pig fucking movie.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `The plot hole.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `The Power Glove.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `The RDA drinking game.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `The RDA IRC channel.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `The Spocker.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `The TGWTG site redesign.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `The Wunder Boner.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `This fecal matter you call "Fluttershy".`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Throwing a Baby Tumbles Surprise down a staircase.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Time travel.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Timing.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Todd's unmasked visage.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Using Crystal Pepsi as a substitute for lube.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Using your underwear to shoplift raw meat from your local Wal-Mart.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Vigorously shagging your sister while holding a mug of warm tea.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Welshy.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Whatever the hell Barfiesta was supposed to be.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Yet another Thunderdome reference.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Your mom.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Zodan The Unbouncable.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `90's Kid's comic collection.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A Linkara cameo.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A plushie cybermat.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `ALL THE COCAINE!!!`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Bees!`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Harvey Finevoice's fine voice.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Killing clowns.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Linkara crying in his Gatorade made of cybermat tears.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Linkara stalking Gail Simone on Twitter.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Linkara's cybermat invasion force.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Linkara's fangirl support group.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Linkara's magic gun.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Linkara's masculine arms.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `MAGfest.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Marzkara fanfiction.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Mechakara's phallic drill.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Reviews of $20 lamps.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A baseball to the nuts.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A bat credit card.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A Big Lipped Alligator Moment.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A big long pink ding dong penis.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A bird fucking a horse.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A Blip check.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A bootleg ninja turtle action figure possessed by Satan.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A car landing on a roof.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A case of disappearing bears.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A Chia-Child.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A congregation of bums.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A Crystal Pepsi&reg;-flavored enema.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A drugged Oancitizen in a schoolgirl outfit.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A greased-up meth guy.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A killer rabbit.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A mexican car wash.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A misguided Tumblr activism campaign.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A mobile meth lab in your pants.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A novelty slot machine.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A Pan-Galactic Gargle Blaster.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A poorly-written ugly mess.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A really pimped out DeLorean.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A talking snail in a suit.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A tiny white dick.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A titanic, undead, six-headed space dragon spewing bubbles.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A zombie fisherman.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Accidentally punching your cohost in the face.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `ALL OF THE DICKS.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Almost dying at Sesame Street.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `An art film Kyle's reviewed.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `An autoclitorodectomy.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `An obscure reference only two people will get.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Anal tearing.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Andrew Dickman.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Angrily playing piano.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Ash.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Ash and Checkers.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Ask That Guy raped by Ma-Ti live.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `ASS ASS ASS ASS ASS ASS ASS ASS.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Ass demons.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Awkward pity sex with a sparkly teenage Cthulu.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Because no one wants to see your dick.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Because the Kool-Aid Man is red.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Because there's nothing sexy at the Wal-Mart.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Bees. My God.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Being frozen today.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Beppo the Invisible Monkey.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `BETRAYAL!`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Big Jim Slade.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Blockbuster Buster busting a nut.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Breaking someone's spine by fucking.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Carl Copenhagen.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Casper.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Chuck Norris.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Confusing The Last Angry Geek and Linkara.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `CR's collection of My Little Pony pins.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Creepy fans at cons buying expensive stuff for MarzGurl.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Creepy guys in the RDA chat hitting on Tara.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Nash's creepy face.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Crying your eyes out at a bunch of online reviewers.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Crystal Pepsi&reg;.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Dark Nella.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `David Bowie's package.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Diamanda Hagan's sexbot.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Diamanda's copy of Cockhammer.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Disney's Anne Frank.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Dogs wearing pantyhose.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Dolphin rape.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A douchequake.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Dr. Insano.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Dr. Wiki.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Explosively masturbating with Malachite's Hand.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Ferdinand Von Turrell.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Film Brain's lovely accent.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Finding out that "it's not Pop Tarts!"`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Firing a blue shell at the opposing house ship.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Florida.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Florida Man.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Flying sex snakes in monocles and bow ties.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Fort Super-Awesome.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `FOUR HOURS?!`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Fuck yeah, SPARKLE SPARKLE SPARKLE!`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Fuck you, I do what I want.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `FUCK YOU, I'M SPIDERMAN!`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Fucking bubbles.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Getting buggered by a giant hamster.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Getting mauled by a mountain lion AND a grizzly bear at the same time.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Glenn Beck being torn apart by zombies.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Going full retard.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Going through the effort to build a wall in your back yard just to bash your head into it over and over again.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Gooby.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Hagan's dictator tendencies.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Hagan's make up artist.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Hagan's masturbating minion.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Ham?`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Hippo Queen Tara.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Hitler without the mustache.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Humping a can of trash.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `I AM A MAN!`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Invading a micronation in Nevada and making it your own.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `JewWario's solar penis.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Kickassia.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Kitler.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Kyle humping a trashcan.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Linkara's 'special' comic books.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Linkara's hat.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Superboy Prime.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `The Entity.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `The legendary MAGFest orgy.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `The most important job, reviewing a crappy comic book.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `The next History of Power Rangers.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Youngblood's disease.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Twin clones of Hitler.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A disembodied orgasm hippo.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A doppelganger in black leather with a sword.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A guest appearance by Giovanni Jones, the talking lobster.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A naked rampage.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `An awkward slash fic between The Nostalgia Critic and The Angry Video Game Nerd.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Bath salts.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Diamanda Hagan.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Frying the Coke.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Rapidly pounding themselves in the face with a hammer.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Sci-Fi Guy's ponytail.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Angry Joe.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Marzgurl.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Chester A. Bum.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Ask That Guy With The Glasses.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Dominic the Bartender.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Obscurus Lupa.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `ChaosD1.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Skitch.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Y Ruler Of Time.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Linkara.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Mechakara.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Lord Vyce.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `90's Kid.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Corporate Commander.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `JewWario.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A demonic Teddy Ruxpin doll.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Luke.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Luke's inners.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `PhelousD1.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Phelous.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Filmbrain.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Iron Liz.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Malachite.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Zodd.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `The Executor.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `PhilBuni.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Ven Gethenian.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `That Sci-Fi Guy.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Black Lantern Spoony.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `The Trousers Cosmic.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Nash's folksy, velvety voice.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Australia, Florida of the Pacific.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Angrily eating lettuce.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Mary Sewage.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A legion of mechawolves.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Linkara's futon.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `The Gooby Curse.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `ANCIENT EGYPT!`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `An obligatory cameo.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Dodger of Zion.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `An elevator party.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Pants that need to be darkened.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Only being on the site because of the influence of famous acquaintences.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Enoby Dark'ness Dementia Raven TARA Way.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A legion of spiders.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A secret goat porn stash.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `____.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `*liveshot*.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `8-Bit Mickey on an unstoppable merry-go-round.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `80's Dan.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A Blip ad for the most embarrassing reality show ever.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A Brad Jones impersonation.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A crossover.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A Cybermat in a bow tie.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A delicious fried chicken holocaust.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A DMCA takedown notice.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A fan artist.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A FUCKING PONCHO!`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A giant go-fuck-yourself spider.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A half naked, fencing JewWario.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A hand-basket of lobsters.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A Mr. T Trading Card.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A pile of skulls.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A pink tutu.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A plushie TARDIS.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A poorly made knockoff action figure.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A REALLY big hoopla about nothing.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A Serbian Film.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A smoking, muscled ice cream cone shooting guns and eye lasers.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A speeding NERF dart to the junk.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A squadron of attack Corgis.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A squadron of line-dancing hippos.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A strip-tease from the Nostalgia Critic.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A tauntaun puppy.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `A very serious hat.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Ambiguously nude Linkara.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `An electronic cigarette that resembles a Sonic Screwdriver.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `An evangelizing minion.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `An existential crisis over internet reviews.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `An impassioned plea for understanding.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `An unhinged Oancitizen rolling towards the sea.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Angry Joe dancing in a squid suit.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Angry Joe's raging boner.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Another fucking Iron Liz pun.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Another goddamn PhilBuni Vine.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Aplos, or Steve, the Wizard.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Arlo P. Arlo.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Arlo the Orc.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Ashens taking a blowtorch to a crappy toy.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Ashens.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Because...hippos.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Becoming possessed and insulting your colleague.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Being awkward around your favorite reviewer.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Bennett the Sage.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Big Butter Jesus.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Blip.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Brad, drinking a Turkey-flavored Jones Soda.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Bruno Matei.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Butchered Dutch.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Comicron One.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `CR.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Cynthia Rothrock`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `DEATH FROM ABOOOOOVE!!!`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Derek the Bard.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Derek the Bard's hat.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Disturbing comments in the RDA chat.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Dodger's ban chain.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Dodging blowjobs.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Dr. Tease & Dr. Block.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Dragging Oancitizen back home from a wild night of partying.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Dump cards.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `E Rod's smooth, smooth dance skills.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Eating the flesh of your foes while howling at the moon.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Evilina.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Evilina's monstrous visage.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Film Brain, dressed tastefully in fashionable clothing.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Film Brain's hair.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Film Renegado creaming himself over Pacific Rim.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Forcing an NPC to haul your crap.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Fuckstick the Magic Dragon.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Gargoyle Cat.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Haganistan.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Harmony Korine.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `HIPPOS!`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Holly.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Il Neige in a freakishly accurate Film Brain costume.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Jaeris, the Gunslinger.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Joe Quesada.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Kali.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Kung Tai Ted.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Kyle playing GTA while drunk.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Kyle's "unicorns."`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Laura, the Fender Stratocaster Goddess.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Linkara lying naked on his futon, playing with a Cybermat.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Linkara, dressed as the Green Ranger.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Linkara, dropping an F-Bomb.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Linkara, sexily eating a salad.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Linkara's massive ego.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Little Pluckies Ninja Protects.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Luke Mochrie's trust fund.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Maven of ze Eventide.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Mexican Spider-Man.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `MikeJ.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Moarte.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Nash, dressed as The Undertaker.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Nash, making "vroom vroom" noises.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Nash, making train sounds in a bathtub.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Nella.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Nella's cleavage Altoids.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Not reading the FAQ.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Obelisk Blue Linkara.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Paw.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Paw's soul patch.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Penis whiskers.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Playing TGWTG Cards Against Humanity at stupid o'clock.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Pol Pot pies.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Rachel Tietz, trying to Kill the Nostalgia Critic.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Ripping off part of your penis.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `ROCKET BOOTS!`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `ROCKET PUNCH!`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Sad Panda's lanky, manly chest.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Sage's "RAPE!" face.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Sean.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Sex, violence, and Daffy Duck screaming.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Shouting "FUS-RO-DAH!" at a puppy.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Smarty.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Smarty's special bag of AIDS.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Snowflame's cocaine flavored popsicles.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Snowflame's fuzzy slippers.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Space Core.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Stealing money off dead wolves.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Surprise blowjobs.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Tara's tramautic childhood stories.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `That Dude In The Suede.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `The Adventures of Horsemeat and the Placenta #1.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `The Amazing Bulk.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `The Channel Awesome satellite.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `The Hippo Lantern Corps.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `The Last Angry Geek.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `The Longbox of the Damned.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `The Nostalgia Ranger.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `The Rap Critic.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `The thick, muscular arms of ChaosD1.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `The Uncanny Valley.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `The Wal-Mart.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Todd in the Shadows.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Todd trolling Chris Brown on Twitter.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Tommy Wiseau.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Turtle.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Using a frontloader to steal deodorant.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Using donation money for weed.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Vangelus`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Ven's voice, a gift from the fairies.`,
      watermark: `TGWTG`
    });
    await queryRunner.delete('white_card', {
      text: `Zeo Linkara.`,
      watermark: `TGWTG`
    });

    await queryRunner.delete('card_set', {
      name: `[C] That Guy With The Glasses`,
      baseDeck: true,
      description: `http://thatguywiththeglasses.com/`,
      weight: 503,
      active: true
    });
  }
}
