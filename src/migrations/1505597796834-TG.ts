/* tslint:disable:no-non-null-assertion no-unsafe-any no-any */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class TG1505597796834 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const insertResult = await queryRunner.insert('card_set', {
      name: `[C] /tg/`,
      baseDeck: false,
      description: `/tg/`,
      weight: 523,
      active: true
    });

    await queryRunner.insert('black_card', {
      text: `____: ____ in fiction, ____ on the tabletop.`,
      draw: 1,
      pick: 3,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I proxy ____ using a second-hand ____.`,
      draw: 0,
      pick: 2,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Next up: Lord Lysander's paints ____.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The citizens of Innsmouth are really ____!`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I am Angry, Angry about ____.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In respect to your chapter, the Blood Ravens have dedicated one of their____to ____.`,
      draw: 0,
      pick: 2,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Roll for ____.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I prepared ____ this morning.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The bard nearly got us killed when he rolled to seduce ____.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ causes the Paladin to fall`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The door to the FLGS opens and a ____ walks in!`,
      draw: 0,
      pick: 2,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `GW stores no longer stock____`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The price on ____ Has doubled!`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ falls, everyone dies.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `My GM just made his girlfriend a ____ character. How fucked are we?`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `If you buy a camel, Crazy Hassan is adding in free ____ this week only!`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Around elves, watch ____`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The only good ____ is a dead ____`,
      draw: 1,
      pick: 2,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `...And then he killed the Tarasque with a ____`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `There is a ____ on the roof.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What are we going to argue about today?`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I got a box today. What's inside? ____`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Roll ____ circumference`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What I made: ____.<br>What the DM saw: ____.<br>What I played: ____`,
      draw: 2,
      pick: 3,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ vs. ____: Critical Hit!`,
      draw: 1,
      pick: 2,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Then the barbarian drank from the ____-filled fountain`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____: That was a thing.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `&gt;preferring 3D women over ____`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Where we're going, we won't need ____ to see`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `You encounter a Gazebo. You respond with ____`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `D&amp;D: 6th edition will feature ____ as a main race!`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Your Natural 1 summons ____.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `It would have taken ____ to..... CREEEEEEEEEED!`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Can ____ bloom on the battlefield?`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `&gt;mfw ____.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____? That's ULTRA heretical`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `So I made my chapter insignia ____`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In the grim darkness of the far future there is only ____`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `2e or ____`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Blood for the blood god! ____ for the ____!`,
      draw: 1,
      pick: 2,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____. we don't need other boards anymore!`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ just fucked us`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The guard looks a troubled, uncomfortable glare, like a man who must explain to his ____, that's its dreams of becoming ____ will never happen.`,
      draw: 1,
      pick: 2,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Dwarf Fortress needs more ____`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `My ____ are moving on their own`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Welcome to the ____ Quest Thread.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `You should never let your bard ____.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `That one guy in my group always rolls a chaotic neutral ____.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The lich's phylactery is a  ____!`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Macha was dismayed to find out that ____.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Never fire ____ at the bulkhead!`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ is the only way I can forget about 4e.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I sure hope no one notices that I inserted my ____ fetish into the game.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Behold! White Wolf's newest game: ____: the ____.`,
      draw: 1,
      pick: 2,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `For our upcoming FATAL game, I've assigned ____ as your new character.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The GM has invited his new ____ to join the game. They'll be playing ____.`,
      draw: 1,
      pick: 2,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `0/10 would not ____.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The ____ guides my blade.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Don't touch me ____!`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Mountain, Black lotus, sac, to cast ____.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ followed by gratuitous ____ is how I got kicked out off my last group.`,
      draw: 0,
      pick: 2,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Everybody was surprised when the king's trusted adviser turned out to be ____.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `You and ____ must stop ____ with the ancient artifact ____.`,
      draw: 1,
      pick: 3,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Elf ____ Wat do?`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Magic the Gathering's next set is themed around ____.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `We knew the game was off to a good start when the GM didn't veto a player's decision to play as ____.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `My Kriegers came in a box of ____!`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I had to kill a party member when wasted 2 hours by ____.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `We found ____in the Dragon's hoard.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What's on today's agenda for the mage guild meeting?`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ is the only way to fix 3.5.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What is the BBEG's secret weapon?`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Ach! Hans run! It's the ____!`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The enemy's ____ is down.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Only fags play mono____.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What is better than 3D women?`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I kept getting weird looks at FNM when I brought my new ____ card sleeves.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I like to dress up like ____ and hit people with foam swords.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `You've been cursed by the witch! Your ____ has turned into a ____!`,
      draw: 0,
      pick: 2,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The adventure was going fine until the BBEG put ____ in our path.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Your BBEG is actually ____!`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The last straw was the Chaotic Neutral buying a case of ____.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What won't the Bard fuck?.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____! what was that?`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `You roll 00 for your magical mishap and turn into ____.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `You fool! you fell victim to one of the classic blunders: ____.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `...and then the bastard pulled out ____ and placed it on the table.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I cast magic missile at ____.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Wait! I'm a ____! Let me tell you about my ____!`,
      draw: 0,
      pick: 2,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Whenever we run ____, it's customary that ____ pays for the group's pizza.`,
      draw: 0,
      pick: 2,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });

    await queryRunner.insert('white_card', {
      text: `HERESY!`,
      watermark: `Vidya`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `/sp/`,
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
      text: `Spess mehrines`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Paladin`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Rogue`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Blackguard`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `¡MAGOOOOOOOOOOOS DEL TIEMPOOOOOOOOOOOOOO!`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lich`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Mastercraft Greatsword`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Bag of Holding full of Portable Holes`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Explosive Runes`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Wizard`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pelor`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lady of Pain`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Spelljammer`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Druidic Mysteries`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The MacGuffin`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `My Magical Realm`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Literal White Knight`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Literal Black Knight`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Big, Black Knight`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Bigger, Blacker Knight`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Biggest, Blackest Knight`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Brogan`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `stat me`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `/co/`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `/d/`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `/x/`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The whizzard`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mary Sue`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Crazy Hassan`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `&gt;BLAM`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Gork and Mork`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hour long quest adventures over Omegle`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Skip the bullshit and go straight to banging`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Anthropomorphism in 40K`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Surf ninjas`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Being a motherfucking sorcerer`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fa/tg/uy`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A diaper of holding flamethrower`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Peasant railguns`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sexbots`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Chaotic randumb`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `That guy`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Laughing Eldar`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Your FLGS`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Roll-play`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Goddamn magpies`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Diplomacy`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Metal Boxes`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `That DM`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `LIIVI`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lofn`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `NONE PURER!!!`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Haters gonna hate`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `THIN YOUR PAINTS`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An Imperial titan`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `GMPC`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Elf vaginas`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Subtle pigmen`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Falling Rocks`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Attacking the darkness`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The emprah`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Blood for the blood god`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Thick and luxurious neckbeards`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `KUUUUUUUBOOOOOOOOO!`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `AC Guy's luck`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Canon fanfiction`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Rolling straight 1s`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sexy, barely-legal Thri-kreen`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Overpowered katanas`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting 'Squatted'`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fucking kender`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `TIIIIIMMMME WIIIIZZZZAAAAARRRDDDDs!`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `-4 str`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lenore`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dorfs`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `THAC0`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Your Spiritual Liege, Matt Ward`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Skub`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Vectron, his name be praised.`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Vectron's kindly claw.`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Doomrider and his cocaine`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The GM's girlfriend`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A first edition copy of FATAL`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A vagina full of spiders`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A bear in a disguise`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `DC 80 Escape Artist check`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `DRAGON DILDOS`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Decanter of endless water rocket`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Necronomicon`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Joshua-the embodiment of male self loathing`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `d4 caltrops`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An army made of sprues`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Meatbread`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Xeno scum`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Muckin' about`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Enuff Dakka`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Deep Rot`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Caster Edition Fanboys.`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Monte Cooke's rancid fursuit.`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Kickstarting a /tg/ homebrew only to have it turn out to be shit.`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Waiting for Time Wizards!`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Covering yourself in mountain dew and rolling around the FLGS bathroom.`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A magical piss forest.`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Asking to play a pony in a Game of Thrones rpg.`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Half-fae catboys.`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `SAN loss.`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dakkon Motherfucking Blackblade`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mark Rosewater`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Chimney Imp`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Storm Crow`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Big Blue Boy`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fisk Malks`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Madolche?`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Filthy Casual`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `If only Tom Bombadil gave a fuck.`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Gratuitous Babe Art`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Failing your Privilege Check and taking full damage from the Tumblrdragon's breath weapon`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `People who don't understand THAC0.`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `People who use THAC0.`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Declaring a TIME MOMENT when the TM is about to say something important.`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Coasters`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Moot`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Saying goodbye to Exodia.`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A railroad with no end.`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Edition wars.`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Riding the Jund train at full throttle.`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Metagaming.`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Playing for the story.`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Glorified games of pretend.`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Frost Giants`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A robotic ninja catgirl maid`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Please do not take the items.`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Kord`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Queen of Blades`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Boxcars`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Natural 20`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hypercube`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A falling Paladin`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Children's Card Games`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cardgames on motorcycles.`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mise.`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Crawdaddy.`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Jace:the Wallet Sculptor.`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Grim dark darkness that's grim.`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Virgin Spike.`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Choo choo, motherfucker.`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Squats.`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sabbat Warhero`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Shitting all over the DM's plans.`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Chaos Spawn.`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Satanic rituals and human sacrifice.`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Suggesting GURPS. No matter what.`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Old Man Henderson.`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Monstergirls.`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Grognard`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Scary Spooky Skeletons`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `No sense of right and wrong`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Goblins`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Kharne`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Eldrad`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sister of Battle lesbian hebephilia`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `FATE`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bad at Magic`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Time Cube chess`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Noh`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tankred Endures`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `FOR THE EMPRAH`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `CREEEEEEEEEEED!`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Shitposting`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Kobold princess`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Kebab`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Los Tiburon`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `CLANG!`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Commissar Fuklaw`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `F.A.T.A.L.`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Female Space Marines`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An orc guarding a chest in a 10x10 room`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Captcha`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ruby and Tom`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pun-Pun`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `I CAST FIST!`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cultist-Chan`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `100-ton Atlas-class Mech`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ciaphas Cain`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Oinkbane The Wereboar Assassin`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `orkupy waaaghstreet`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bard dad`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Warhammer 40k`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Warhammer Fantasy`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bloodbowl`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Games Workshop`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dungeons and Dragons`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pathfinder`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Magic: the Gathering`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Engine Heart`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Yu-Gi-Oh`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pokémon TCG`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pokemon: Tabletop Adventures`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Vampire: The Masquerade`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Vampire LARP`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hungarian Larper`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Esh-Esh`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dice Bags`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bitches for Thulsa Doom`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Conan the Librarian`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Conan the Libertarian`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Show me Your Honor`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Blood and Thunder!`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Actually having an intelligent discussion about religion.`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Blood for the Blood God!`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `WAAAAAAAAAAGH!`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Female DM`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Buying GW paints and primer`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Your Other Honor!`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Kromgol`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tyrone the Monk`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mr. Fred Rogers, blessed be his name.`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The ship is all. The ship moves`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Haggard`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Living Saint Inquisitor Grendel`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `METAL BOXES`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `100 Baneblades`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Gav &amp; Bob`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `MR RAGE`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Abaddon the Armless`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sigmar`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cthulhu himself`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nyarlathotep`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Great Race of Yith`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Shub-Niggurath`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Deep Ones`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Yog-Sothoth`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Azathoth`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The King in Yellow`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Queen in Yellow`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Saya no Uta`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Haiyore Nyaruko-San`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A boat`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Faptau`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Shlicktau`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A shoggoth`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Transformation Fetishists`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Scat Fetish`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Watersports Fetish`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Blood Ravens`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ultramarines`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `DJ Phylactery`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Muscle Wizard`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sir Bearington`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `2 cat`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dr. Assmarbles`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `/d/M`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Macha's stash of mon-keigh lewds.`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Tactical Genius.`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Blast Templates.`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Decking from a room in a love hotel.`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Teacup Ride.`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `WHERE IS FELIX RAMIREZ?`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Teaching the newbie about THE SYSTEM.`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dealing Meat Damage.`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `America-san.`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Having a Spy Moment.`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Burning Fate Points to survive.`,
      watermark: `/tg/`,
      cardSetId: insertResult.result![0].id
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.delete('black_card', {
      text: `____: ____ in fiction, ____ on the tabletop.`,
      draw: 1,
      pick: 3,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `I proxy ____ using a second-hand ____.`,
      draw: 0,
      pick: 2,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `Next up: Lord Lysander's paints ____.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `The citizens of Innsmouth are really ____!`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `I am Angry, Angry about ____.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `In respect to your chapter, the Blood Ravens have dedicated one of their____to ____.`,
      draw: 0,
      pick: 2,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `Roll for ____.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `I prepared ____ this morning.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `The bard nearly got us killed when he rolled to seduce ____.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `____ causes the Paladin to fall`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `The door to the FLGS opens and a ____ walks in!`,
      draw: 0,
      pick: 2,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `GW stores no longer stock____`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `The price on ____ Has doubled!`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `____ falls, everyone dies.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `My GM just made his girlfriend a ____ character. How fucked are we?`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `If you buy a camel, Crazy Hassan is adding in free ____ this week only!`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `Around elves, watch ____`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `The only good ____ is a dead ____`,
      draw: 1,
      pick: 2,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `...And then he killed the Tarasque with a ____`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `There is a ____ on the roof.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `What are we going to argue about today?`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `I got a box today. What's inside? ____`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `Roll ____ circumference`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `What I made: ____.<br>What the DM saw: ____.<br>What I played: ____`,
      draw: 2,
      pick: 3,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `____ vs. ____: Critical Hit!`,
      draw: 1,
      pick: 2,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `Then the barbarian drank from the ____-filled fountain`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `____: That was a thing.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `&gt;preferring 3D women over ____`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `Where we're going, we won't need ____ to see`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `You encounter a Gazebo. You respond with ____`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `D&amp;D: 6th edition will feature ____ as a main race!`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `Your Natural 1 summons ____.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `It would have taken ____ to..... CREEEEEEEEEED!`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `Can ____ bloom on the battlefield?`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `&gt;mfw ____.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `____? That's ULTRA heretical`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `So I made my chapter insignia ____`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `In the grim darkness of the far future there is only ____`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `2e or ____`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `Blood for the blood god! ____ for the ____!`,
      draw: 1,
      pick: 2,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `____. we don't need other boards anymore!`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `____ just fucked us`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `The guard looks a troubled, uncomfortable glare, like a man who must explain to his ____, that's its dreams of becoming ____ will never happen.`,
      draw: 1,
      pick: 2,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `Dwarf Fortress needs more ____`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `My ____ are moving on their own`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `Welcome to the ____ Quest Thread.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `You should never let your bard ____.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `That one guy in my group always rolls a chaotic neutral ____.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `The lich's phylactery is a  ____!`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `Macha was dismayed to find out that ____.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `Never fire ____ at the bulkhead!`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `____ is the only way I can forget about 4e.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `I sure hope no one notices that I inserted my ____ fetish into the game.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `Behold! White Wolf's newest game: ____: the ____.`,
      draw: 1,
      pick: 2,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `For our upcoming FATAL game, I've assigned ____ as your new character.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `The GM has invited his new ____ to join the game. They'll be playing ____.`,
      draw: 1,
      pick: 2,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `0/10 would not ____.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `The ____ guides my blade.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `Don't touch me ____!`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `Mountain, Black lotus, sac, to cast ____.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `____ followed by gratuitous ____ is how I got kicked out off my last group.`,
      draw: 0,
      pick: 2,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `Everybody was surprised when the king's trusted adviser turned out to be ____.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `You and ____ must stop ____ with the ancient artifact ____.`,
      draw: 1,
      pick: 3,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `Elf ____ Wat do?`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `Magic the Gathering's next set is themed around ____.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `We knew the game was off to a good start when the GM didn't veto a player's decision to play as ____.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `My Kriegers came in a box of ____!`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `I had to kill a party member when wasted 2 hours by ____.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `We found ____in the Dragon's hoard.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `What's on today's agenda for the mage guild meeting?`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `____ is the only way to fix 3.5.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `What is the BBEG's secret weapon?`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `Ach! Hans run! It's the ____!`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `The enemy's ____ is down.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `Only fags play mono____.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `What is better than 3D women?`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `I kept getting weird looks at FNM when I brought my new ____ card sleeves.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `I like to dress up like ____ and hit people with foam swords.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `You've been cursed by the witch! Your ____ has turned into a ____!`,
      draw: 0,
      pick: 2,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `The adventure was going fine until the BBEG put ____ in our path.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `Your BBEG is actually ____!`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `The last straw was the Chaotic Neutral buying a case of ____.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `What won't the Bard fuck?.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `____! what was that?`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `You roll 00 for your magical mishap and turn into ____.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `You fool! you fell victim to one of the classic blunders: ____.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `...and then the bastard pulled out ____ and placed it on the table.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `I cast magic missile at ____.`,
      draw: 0,
      pick: 1,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `Wait! I'm a ____! Let me tell you about my ____!`,
      draw: 0,
      pick: 2,
      watermark: `/tg/`
    });
    await queryRunner.delete('black_card', {
      text: `Whenever we run ____, it's customary that ____ pays for the group's pizza.`,
      draw: 0,
      pick: 2,
      watermark: `/tg/`
    });

    await queryRunner.delete('white_card', {
      text: `HERESY!`,
      watermark: `Vidya`
    });
    await queryRunner.delete('white_card', {
      text: `/sp/`,
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
      text: `Spess mehrines`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Paladin`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Rogue`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Blackguard`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `¡MAGOOOOOOOOOOOS DEL TIEMPOOOOOOOOOOOOOO!`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Lich`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `A Mastercraft Greatsword`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `A Bag of Holding full of Portable Holes`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Explosive Runes`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Wizard`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Pelor`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Lady of Pain`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Spelljammer`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Druidic Mysteries`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `The MacGuffin`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `My Magical Realm`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `A Literal White Knight`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `A Literal Black Knight`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `A Big, Black Knight`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `A Bigger, Blacker Knight`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `The Biggest, Blackest Knight`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Brogan`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `stat me`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `/co/`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `/d/`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `/x/`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `The whizzard`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Mary Sue`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Crazy Hassan`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `&gt;BLAM`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Gork and Mork`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Hour long quest adventures over Omegle`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Skip the bullshit and go straight to banging`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Anthropomorphism in 40K`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Surf ninjas`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Being a motherfucking sorcerer`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Fa/tg/uy`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `A diaper of holding flamethrower`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Peasant railguns`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Sexbots`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Chaotic randumb`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `That guy`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Laughing Eldar`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Your FLGS`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Roll-play`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Goddamn magpies`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Diplomacy`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Metal Boxes`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `That DM`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `LIIVI`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Lofn`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `NONE PURER!!!`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Haters gonna hate`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `THIN YOUR PAINTS`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `An Imperial titan`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `GMPC`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Elf vaginas`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Subtle pigmen`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Falling Rocks`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Attacking the darkness`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `The emprah`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Blood for the blood god`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Thick and luxurious neckbeards`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `KUUUUUUUBOOOOOOOOO!`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `AC Guy's luck`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Canon fanfiction`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Rolling straight 1s`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Sexy, barely-legal Thri-kreen`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Overpowered katanas`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Getting 'Squatted'`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Fucking kender`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `TIIIIIMMMME WIIIIZZZZAAAAARRRDDDDs!`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `-4 str`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Lenore`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Dorfs`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `THAC0`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Your Spiritual Liege, Matt Ward`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Skub`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Vectron, his name be praised.`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Vectron's kindly claw.`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Doomrider and his cocaine`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `The GM's girlfriend`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `A first edition copy of FATAL`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `A vagina full of spiders`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `A bear in a disguise`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `DC 80 Escape Artist check`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `DRAGON DILDOS`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Decanter of endless water rocket`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Necronomicon`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Joshua-the embodiment of male self loathing`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `d4 caltrops`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `An army made of sprues`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Meatbread`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Xeno scum`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Muckin' about`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Enuff Dakka`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Deep Rot`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Caster Edition Fanboys.`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Monte Cooke's rancid fursuit.`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Kickstarting a /tg/ homebrew only to have it turn out to be shit.`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Waiting for Time Wizards!`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Covering yourself in mountain dew and rolling around the FLGS bathroom.`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `A magical piss forest.`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Asking to play a pony in a Game of Thrones rpg.`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Half-fae catboys.`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `SAN loss.`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Dakkon Motherfucking Blackblade`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Mark Rosewater`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Chimney Imp`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Storm Crow`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Big Blue Boy`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Fisk Malks`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Madolche?`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Filthy Casual`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `If only Tom Bombadil gave a fuck.`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Gratuitous Babe Art`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Failing your Privilege Check and taking full damage from the Tumblrdragon's breath weapon`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `People who don't understand THAC0.`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `People who use THAC0.`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Declaring a TIME MOMENT when the TM is about to say something important.`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Coasters`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Moot`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Saying goodbye to Exodia.`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `A railroad with no end.`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Edition wars.`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Riding the Jund train at full throttle.`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Metagaming.`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Playing for the story.`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Glorified games of pretend.`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Frost Giants`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `A robotic ninja catgirl maid`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Please do not take the items.`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Kord`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Queen of Blades`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Boxcars`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `A Natural 20`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Hypercube`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `A falling Paladin`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Children's Card Games`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Cardgames on motorcycles.`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Mise.`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Crawdaddy.`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Jace:the Wallet Sculptor.`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Grim dark darkness that's grim.`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Virgin Spike.`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Choo choo, motherfucker.`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Squats.`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Sabbat Warhero`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Shitting all over the DM's plans.`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Chaos Spawn.`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Satanic rituals and human sacrifice.`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Suggesting GURPS. No matter what.`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Old Man Henderson.`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Monstergirls.`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Grognard`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Scary Spooky Skeletons`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `No sense of right and wrong`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Goblins`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Kharne`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Eldrad`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Sister of Battle lesbian hebephilia`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `FATE`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Bad at Magic`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Time Cube chess`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Noh`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Tankred Endures`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `FOR THE EMPRAH`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `CREEEEEEEEEEED!`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Shitposting`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `A Kobold princess`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Kebab`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Los Tiburon`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `CLANG!`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Commissar Fuklaw`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `F.A.T.A.L.`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Female Space Marines`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `An orc guarding a chest in a 10x10 room`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Captcha`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Ruby and Tom`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Pun-Pun`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `I CAST FIST!`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Cultist-Chan`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `100-ton Atlas-class Mech`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Ciaphas Cain`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Oinkbane The Wereboar Assassin`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `orkupy waaaghstreet`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Bard dad`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Warhammer 40k`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Warhammer Fantasy`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Bloodbowl`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Games Workshop`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Dungeons and Dragons`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Pathfinder`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Magic: the Gathering`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Engine Heart`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Yu-Gi-Oh`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Pokémon TCG`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Pokemon: Tabletop Adventures`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Vampire: The Masquerade`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Vampire LARP`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Hungarian Larper`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Esh-Esh`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Dice Bags`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Bitches for Thulsa Doom`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Conan the Librarian`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Conan the Libertarian`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Show me Your Honor`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Blood and Thunder!`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Actually having an intelligent discussion about religion.`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Blood for the Blood God!`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `WAAAAAAAAAAGH!`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Female DM`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Buying GW paints and primer`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Your Other Honor!`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Kromgol`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Tyrone the Monk`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Mr. Fred Rogers, blessed be his name.`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `The ship is all. The ship moves`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Haggard`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Living Saint Inquisitor Grendel`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `METAL BOXES`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `100 Baneblades`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Gav &amp; Bob`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `MR RAGE`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Abaddon the Armless`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Sigmar`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Cthulhu himself`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Nyarlathotep`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `The Great Race of Yith`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Shub-Niggurath`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Deep Ones`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Yog-Sothoth`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Azathoth`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `The King in Yellow`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `The Queen in Yellow`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Saya no Uta`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Haiyore Nyaruko-San`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `A boat`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Faptau`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Shlicktau`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `A shoggoth`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Transformation Fetishists`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Scat Fetish`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Watersports Fetish`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Blood Ravens`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Ultramarines`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `DJ Phylactery`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Muscle Wizard`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Sir Bearington`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `2 cat`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Dr. Assmarbles`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `/d/M`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Macha's stash of mon-keigh lewds.`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `A Tactical Genius.`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Blast Templates.`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Decking from a room in a love hotel.`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Teacup Ride.`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `WHERE IS FELIX RAMIREZ?`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Teaching the newbie about THE SYSTEM.`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Dealing Meat Damage.`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `America-san.`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Having a Spy Moment.`,
      watermark: `/tg/`
    });
    await queryRunner.delete('white_card', {
      text: `Burning Fate Points to survive.`,
      watermark: `/tg/`
    });

    await queryRunner.delete('card_set', {
      name: `[C] /tg/`,
      baseDeck: false,
      description: `/tg/`,
      weight: 523,
      active: true
    });
  }
}
