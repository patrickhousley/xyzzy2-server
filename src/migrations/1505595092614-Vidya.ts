/* tslint:disable:no-non-null-assertion no-unsafe-any no-any no-unnecessary-type-assertion */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class Vidya1505595092614 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const insertResult = await queryRunner.insert('card_set', {
      name: `[C] Vidya`,
      baseDeck: false,
      description: `by Sl0nderman`,
      weight: 517,
      active: true
    });

    await queryRunner.insert('black_card', {
      text: `Why are you making chocolate pudding at 4 in the morning?`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The newest feature of the Xbox One is ____.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `PS3: It only does  ____.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The new TF2 promo items are based on ____.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `If Gordon Freeman spoke, what would he talk about?`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `&gt;tfw when ____.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `All you had to do was follow the damn ____, CJ!`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Liquid! How can you still be alive?`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What can change the nature of a man?`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: ` Microsoft revealed that the Xbox One's demos had actually been running on ____ `,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What if ____ was a girl?`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What did I preorder at gamestop?`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ confirmed for Super Smash Bros!`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Based ____.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The newest IP from Nintendo, Super ____ Bros. `,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ only, no items, Final Destination. `,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Enjoy ____ while you play your Xbox one!`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The future of gaming lies with the ____.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The best way to be comfy when playing video games is with ____.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ has no games.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `PC gamers have made a petition to get ____ on their platform.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The new Nintendo ____ is a big gimmick. `,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `&gt;implying you aren't ____`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `WHAT IS A MAN?`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What is a ___ but a ____?`,
      draw: 0,
      pick: 2,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `WE WILL DRAG THIS ___ INTO THE 21ST CENTURY.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Wake up, Mr. Freeman. Wake up and ____.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `All your ____ are belong to us`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I'm in ur base, ____`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Pop Quiz: Beatles Song- ___ terday.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: ` ___ would like to play.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `A mod of doom was made that was based off of ____.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I really didn't like what they did with the ____ Movie adaption.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `"HEY, GOLLEN PALACE? HOW U SAY ____ IN CHINESE?"`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Pumpkin doesn't want this.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `NEXT TIME ON GAME GRUMPS: ____.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I used to be an adventurer like you, until ____.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Yeah, well, my dad works for ____.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Kotaku addresses sexism in ____ in their latest article.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Get double XP for Halo 3 with purchase of ____.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Sorry Mario, but ____ is in another castle.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `LoL stole their new character design off of ____.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ is the cancer killing video games.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Suffer, like ____ did.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `It's like ____ with guns!`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Is a man not entitiled to ____?`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ has changed.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `But you can call me ____ the ____. Has a nice ring to it dontcha think?`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Objective: ____`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `EA Sports! It's ____.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ is waiting for your challenge!`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ sappin' my sentry. `,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I'm here to ____ and chew bubble gum, and I'm all out of gum.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I've covered ____, you know.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `It's dangerous to go alone! Take this:`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `You were almost a ____ sandwich!`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `That's the second biggest ____ I've ever seen!`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____. ____ never changes.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ has changed. `,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `You have been banned. Reason: ____.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The newest trope against women in video games: ____.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Fans started a kickstarter for a new ____ game. `,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Huh? What was that noise?`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Viral marketers are trying to push the new ____.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I wouldn't call it a Battlestation, more like a ____.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____: Gotta go fast!`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The best final fantasy game was ____.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I love the ____, it's so bad`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Valve is going to make ____ 2 before they release HL3.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ is a pretty cool guy`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Ah! Your rival! What was his name again?`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What's in the box, /v/?`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Why is the ____ fandom the worst?`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Achievement Unlocked: ____ !`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I'm ____ under the table right now!`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `brb guys, ____ break`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `OH MY GOD JC, A ____`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `wooooooow, it took all 3 of you to ____`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Rev up those ____, because I am sure hungry for one- HELP! HELP!`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ is 2deep and edgy for you.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Only casuals like ____.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The princess is in another ____`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I have the bigger ____.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ TEAM RULES!!`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `When you see it... you don't see ____.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `HEY, GOLLEN PALACE? HOW U SAY ____ IN CHINESE?`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `WHAT THE FUCK DID YOU SAY ABOUT ME YOU ____?`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `This will be the 6th time we've posted ____; we've become increasingly efficient at it.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `appealing to a larger audience`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `we must embrace ____ and burn it as fuel for out journey.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In Kingdom Hearts, Donald Duck will be replaced with ____ .`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `&gt;walk into gamestop<br>&gt;see ____<br>&gt;walk out`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ is a lie.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Because of the lastest school shooting, ____ is being blamed for making kids too violent.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Here lies ____: peperony and chease`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Throwaway round: Get rid of those shit cards you don't want. Thanks for all the suggestions, /v/`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The president has been kidnapped by ____. Are you a bad enough dude to rescue the president?`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `We ____ now.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What is the new mustard paste?`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `&gt;____<br>&gt;____<br>&gt;2011<br>&gt;ISHYGDDT`,
      draw: 0,
      pick: 2,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `All you had to do was ____ the damn ____!`,
      draw: 0,
      pick: 2,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The new ititeration in the Call of Duty franchise has players fighting off ____ deep in the jungles of ____ `,
      draw: 0,
      pick: 2,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Check your privilege, you ____ ____.`,
      draw: 0,
      pick: 2,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Jill, here's a ____. It might come in handy if you, the master of ____, take it with you. `,
      draw: 0,
      pick: 2,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ is a pretty cool guy, eh ____ and doesn't afraid of anything.`,
      draw: 0,
      pick: 2,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `It's like ____with ____!`,
      draw: 0,
      pick: 2,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Ironic ____ is still ____.<br><br>(same in both blanks)`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });

    await queryRunner.insert('white_card', {
      text: `the 8 million jews.`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `George Costanza`,
      watermark: `Viyda`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Honk! Honk!`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hideo Kojima`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Alright`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `LIQUID!`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `BROTHER!`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Gaben`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Kirby's Air Ride`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Yume Nikki`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `HL3 confirmed!`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `That feel`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tim Buckley`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bum Tickley`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Star Wars: Battlefront`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Wii U`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `the PS4`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `the NES`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `the SNES`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `the SEGA Genesis`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `the PSX`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Silent Hill`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Harry Mason`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `James Sunderland`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `the plot of MGS4`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Kramer`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `no games`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Words, Words, Words`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Le /v/ culture`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mods`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Furfags`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `HERESY!`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `My waifu`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Jews`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `the duck hunt dog`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Max Payne`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `L.A. Noire`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Call of Duty 4`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cowadooty Franchise`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Master Chef`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Samus Aran`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Kamiya`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The red ring of death`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Toady`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `the mustard race`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Klonies`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Valve`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `source engine`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Wii-tier graphics`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `brown and bloom`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `FUCKING GAMESTOP`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mountain Dew`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Doritoes`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dante, but you an call him Dante the demon killer`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `FUCK YOU`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Princess Peach`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ronnie`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Wreck-It Ralph`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Destroy-It Dan`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Rape-It Randy`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bayonetta`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fifa 2014`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Superman 64`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `E.T. for Atari`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dark Souls`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Devil May Cry`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Wubs`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `a custom built PC`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `making an email to gabe newell one post at a time`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Warioware`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Earthbound`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pikmen`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Duck Hunt`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Egoraptor`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cory in the House`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Katawa Shoujio`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Donte`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `/sp/`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `/pol/`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `/a/`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Traps`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Capitan Falcon`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `knowing that feel`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `my sides`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `wagglan`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `playing vidya`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `being a casual fuck`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `JonTron`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Two Best Friends`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tropes vs Women in Video Games`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Anita`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Wiimote`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Xbox Hueg`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Japan Time`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `the orignal Xbox controller`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Solid Snake's Ass`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Big Boss`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Kirby`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Waluigi`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Geno`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ridley`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `GLaDOS`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Shigeru Miyamoto`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mother 3`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Shigesato Itoi`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Alexey Pajinov`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sam & Max`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Banjo-Kazooie`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hank Hill`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pheonix Wright`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `the orange gem from Bejeweled&trade;`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `thowing bottles of holy water in the original Castlevania`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `using your PC as a heater in the winter`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Wii Fit Trainer`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nanomachines, son`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Creating a LttP vs Majora's Mask`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Following the damn train`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Kotaku`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `checking your privledge`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `having fun`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Call of Cthulhu`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Corruption of Champions`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sanic`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sanic Adventure 2`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Civillization IV`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `League of Legends`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `DoTA 2`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `HoN`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `asking br? when joining a server`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Geralt`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Halo`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Doomguy`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Regginator`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `tfw no qt gf`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Atelier`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Asura`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Obsidrones`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nintenyearolds`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Xbots`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sonyggers`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hitscan`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `xX420blazeitXx`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sakurai`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `blowing into a catridge`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dragon Dildos`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nintendo`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sony`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Microsoft`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sega`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Konami`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Game Freak`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fez`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cave Story`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Wololololololololo`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `pirating games because you hate the government`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `New Super Luigi Bros`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `the Demoman (who takes skill)`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `the Pyro (who takes skill)`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `on disk DLC`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `sports games the come out year after year`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ass Creed`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `playing counterstrike too seriously`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Minecraft`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Notch`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Buzzwords`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `OFF by Mortis Ghost`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `an indie dev that no one knows about`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `the Secret of Monkey Island`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `watching let's plays on youtube`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `grumpy dumpies`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Spaghetti`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `the best Final Fantasy game`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Grayson Hunt`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `not completing all the side quests`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `artificial difficulty`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `padding`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `artificial fun`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Matt and Pat`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hamberger Helper`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Yahtzee`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `iJustine`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Jack Thompson`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `rebbit`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The /v/idya gaem awards`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Emi (from Katawa Shoujo)`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Rin (from Katawa Shuojo)`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lilly (from Katawa Shuojo)`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hanako (from Katawa Shuojo)`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Shizune (from Katawa Shuojo)`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Misha (from Katawa Shuojo)`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Kenji (from Katawa Shuojo)`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Last of Us`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `/v/`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Video Games`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `NSA`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Christopher Robin`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Master Race`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `/mlp/`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bronies`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `/vg/`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `/vr/`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `/vp/`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `p2w`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `the delay time of Duke Nukem Forever`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Duke Nukem`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `WoW`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Worth the Weight`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `anything but video games`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tom Preston`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Andrew Dobson`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `nogames`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `2spooky`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `599 US Dollars `,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Eight Point Eight`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `RAGE`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.delete('black_card', {
      text: `Why are you making chocolate pudding at 4 in the morning?`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `The newest feature of the Xbox One is ____.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `PS3: It only does  ____.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `The new TF2 promo items are based on ____.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `If Gordon Freeman spoke, what would he talk about?`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `&gt;tfw when ____.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `All you had to do was follow the damn ____, CJ!`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `Liquid! How can you still be alive?`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `What can change the nature of a man?`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: ` Microsoft revealed that the Xbox One's demos had actually been running on ____ `,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `What if ____ was a girl?`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `What did I preorder at gamestop?`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `____ confirmed for Super Smash Bros!`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `Based ____.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `The newest IP from Nintendo, Super ____ Bros. `,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `____ only, no items, Final Destination. `,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `Enjoy ____ while you play your Xbox one!`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `The future of gaming lies with the ____.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `The best way to be comfy when playing video games is with ____.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `____ has no games.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `PC gamers have made a petition to get ____ on their platform.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `The new Nintendo ____ is a big gimmick. `,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `&gt;implying you aren't ____`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `WHAT IS A MAN?`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `What is a ___ but a ____?`,
      draw: 0,
      pick: 2,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `WE WILL DRAG THIS ___ INTO THE 21ST CENTURY.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `Wake up, Mr. Freeman. Wake up and ____.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `All your ____ are belong to us`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `I'm in ur base, ____`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `Pop Quiz: Beatles Song- ___ terday.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: ` ___ would like to play.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `A mod of doom was made that was based off of ____.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `I really didn't like what they did with the ____ Movie adaption.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `"HEY, GOLLEN PALACE? HOW U SAY ____ IN CHINESE?"`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `Pumpkin doesn't want this.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `NEXT TIME ON GAME GRUMPS: ____.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `I used to be an adventurer like you, until ____.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `Yeah, well, my dad works for ____.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `Kotaku addresses sexism in ____ in their latest article.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `Get double XP for Halo 3 with purchase of ____.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `Sorry Mario, but ____ is in another castle.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `LoL stole their new character design off of ____.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `____ is the cancer killing video games.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `Suffer, like ____ did.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `It's like ____ with guns!`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `Is a man not entitiled to ____?`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `____ has changed.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `But you can call me ____ the ____. Has a nice ring to it dontcha think?`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `Objective: ____`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `EA Sports! It's ____.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `____ is waiting for your challenge!`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `____ sappin' my sentry. `,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `I'm here to ____ and chew bubble gum, and I'm all out of gum.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `I've covered ____, you know.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `It's dangerous to go alone! Take this:`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `You were almost a ____ sandwich!`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `That's the second biggest ____ I've ever seen!`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `____. ____ never changes.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `____ has changed. `,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `You have been banned. Reason: ____.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `The newest trope against women in video games: ____.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `Fans started a kickstarter for a new ____ game. `,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `Huh? What was that noise?`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `Viral marketers are trying to push the new ____.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `I wouldn't call it a Battlestation, more like a ____.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `____: Gotta go fast!`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `The best final fantasy game was ____.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `I love the ____, it's so bad`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `Valve is going to make ____ 2 before they release HL3.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `____ is a pretty cool guy`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `Ah! Your rival! What was his name again?`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `What's in the box, /v/?`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `Why is the ____ fandom the worst?`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `Achievement Unlocked: ____ !`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `I'm ____ under the table right now!`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `brb guys, ____ break`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `OH MY GOD JC, A ____`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `wooooooow, it took all 3 of you to ____`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `Rev up those ____, because I am sure hungry for one- HELP! HELP!`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `____ is 2deep and edgy for you.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `Only casuals like ____.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `The princess is in another ____`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `I have the bigger ____.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `____ TEAM RULES!!`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `When you see it... you don't see ____.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `HEY, GOLLEN PALACE? HOW U SAY ____ IN CHINESE?`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `WHAT THE FUCK DID YOU SAY ABOUT ME YOU ____?`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `This will be the 6th time we've posted ____; we've become increasingly efficient at it.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `appealing to a larger audience`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `we must embrace ____ and burn it as fuel for out journey.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `In Kingdom Hearts, Donald Duck will be replaced with ____ .`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `&gt;walk into gamestop<br>&gt;see ____<br>&gt;walk out`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `____ is a lie.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `Because of the lastest school shooting, ____ is being blamed for making kids too violent.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `Here lies ____: peperony and chease`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `Throwaway round: Get rid of those shit cards you don't want. Thanks for all the suggestions, /v/`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `The president has been kidnapped by ____. Are you a bad enough dude to rescue the president?`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `We ____ now.`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `What is the new mustard paste?`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `&gt;____<br>&gt;____<br>&gt;2011<br>&gt;ISHYGDDT`,
      draw: 0,
      pick: 2,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `All you had to do was ____ the damn ____!`,
      draw: 0,
      pick: 2,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `The new ititeration in the Call of Duty franchise has players fighting off ____ deep in the jungles of ____ `,
      draw: 0,
      pick: 2,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `Check your privilege, you ____ ____.`,
      draw: 0,
      pick: 2,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `Jill, here's a ____. It might come in handy if you, the master of ____, take it with you. `,
      draw: 0,
      pick: 2,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `____ is a pretty cool guy, eh ____ and doesn't afraid of anything.`,
      draw: 0,
      pick: 2,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `It's like ____with ____!`,
      draw: 0,
      pick: 2,
      watermark: `Vidya`
    });
    await queryRunner.delete('black_card', {
      text: `Ironic ____ is still ____.<br><br>(same in both blanks)`,
      draw: 0,
      pick: 1,
      watermark: `Vidya`
    });

    await queryRunner.delete('white_card', {
      text: `the 8 million jews.`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `George Costanza`,
      watermark: `Viyda`
    });
    await queryRunner.delete('white_card', {
      text: `Honk! Honk!`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Hideo Kojima`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Alright`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `LIQUID!`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `BROTHER!`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Gaben`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Kirby's Air Ride`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Yume Nikki`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `HL3 confirmed!`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `That feel`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Tim Buckley`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Bum Tickley`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Star Wars: Battlefront`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `The Wii U`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `the PS4`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `the NES`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `the SNES`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `the SEGA Genesis`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `the PSX`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Silent Hill`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Harry Mason`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `James Sunderland`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `the plot of MGS4`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Kramer`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `no games`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Words, Words, Words`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Le /v/ culture`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Mods`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Furfags`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `HERESY!`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `My waifu`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Jews`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `the duck hunt dog`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Max Payne`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `L.A. Noire`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Call of Duty 4`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Cowadooty Franchise`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Master Chef`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Samus Aran`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Kamiya`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `The red ring of death`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Toady`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `the mustard race`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Klonies`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Valve`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `source engine`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Wii-tier graphics`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `brown and bloom`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `FUCKING GAMESTOP`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Mountain Dew`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Doritoes`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Dante, but you an call him Dante the demon killer`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `FUCK YOU`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Princess Peach`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Ronnie`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Wreck-It Ralph`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Destroy-It Dan`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Rape-It Randy`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Bayonetta`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Fifa 2014`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Superman 64`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `E.T. for Atari`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Dark Souls`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Devil May Cry`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Wubs`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `a custom built PC`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `making an email to gabe newell one post at a time`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Warioware`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Earthbound`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Pikmen`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Duck Hunt`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Egoraptor`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Cory in the House`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Katawa Shoujio`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Donte`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `/sp/`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `/pol/`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `/a/`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Traps`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Capitan Falcon`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `knowing that feel`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `my sides`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `wagglan`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `playing vidya`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `being a casual fuck`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `JonTron`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Two Best Friends`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Tropes vs Women in Video Games`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Anita`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Wiimote`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Xbox Hueg`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Japan Time`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `the orignal Xbox controller`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Solid Snake's Ass`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Big Boss`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Kirby`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Waluigi`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Geno`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Ridley`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `GLaDOS`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Shigeru Miyamoto`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Mother 3`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Shigesato Itoi`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Alexey Pajinov`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Sam & Max`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Banjo-Kazooie`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Hank Hill`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Pheonix Wright`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `the orange gem from Bejeweled&trade;`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `thowing bottles of holy water in the original Castlevania`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `using your PC as a heater in the winter`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Wii Fit Trainer`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Nanomachines, son`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Creating a LttP vs Majora's Mask`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Following the damn train`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Kotaku`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `checking your privledge`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `having fun`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Call of Cthulhu`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Corruption of Champions`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Sanic`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Sanic Adventure 2`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Civillization IV`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `League of Legends`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `DoTA 2`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `HoN`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `asking br? when joining a server`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Geralt`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Halo`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Doomguy`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Regginator`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `tfw no qt gf`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Atelier`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Asura`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Obsidrones`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Nintenyearolds`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Xbots`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Sonyggers`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Hitscan`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `xX420blazeitXx`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Sakurai`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `blowing into a catridge`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Dragon Dildos`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Nintendo`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Sony`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Microsoft`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Sega`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Konami`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Game Freak`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Fez`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Cave Story`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Wololololololololo`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `pirating games because you hate the government`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `New Super Luigi Bros`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `the Demoman (who takes skill)`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `the Pyro (who takes skill)`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `on disk DLC`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `sports games the come out year after year`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Ass Creed`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `playing counterstrike too seriously`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Minecraft`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Notch`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Buzzwords`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `OFF by Mortis Ghost`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `an indie dev that no one knows about`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `the Secret of Monkey Island`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `watching let's plays on youtube`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `grumpy dumpies`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Spaghetti`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `the best Final Fantasy game`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Grayson Hunt`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `not completing all the side quests`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `artificial difficulty`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `padding`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `artificial fun`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Matt and Pat`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Hamberger Helper`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Yahtzee`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `iJustine`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Jack Thompson`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `rebbit`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `The /v/idya gaem awards`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Emi (from Katawa Shoujo)`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Rin (from Katawa Shuojo)`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Lilly (from Katawa Shuojo)`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Hanako (from Katawa Shuojo)`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Shizune (from Katawa Shuojo)`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Misha (from Katawa Shuojo)`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Kenji (from Katawa Shuojo)`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `The Last of Us`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `/v/`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Video Games`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `NSA`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Christopher Robin`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `The Master Race`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `/mlp/`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Bronies`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `/vg/`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `/vr/`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `/vp/`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `p2w`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `the delay time of Duke Nukem Forever`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Duke Nukem`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `WoW`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Worth the Weight`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `anything but video games`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Tom Preston`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Andrew Dobson`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `nogames`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `2spooky`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `599 US Dollars `,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `Eight Point Eight`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `RAGE`,
      watermark: `Vidya`
    });

    await queryRunner.delete('card_set', {
      name: `[C] Vidya`,
      baseDeck: false,
      description: `by Sl0nderman`,
      weight: 517,
      active: true
    });
  }
}
