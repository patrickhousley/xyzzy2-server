import { MigrationInterface, QueryRunner } from 'typeorm';

export class FourthExpansion1505085001554 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    const insertResult = await queryRunner.insert('card_set', {
      name: `The Fourth Expansion`, baseDeck: true, description: `The official Fourth Expansion.`, weight: 12, active: true
    });

    await queryRunner.insert('black_card', {
      text: `What's fun until it gets weird?`, draw: 0, pick: 1, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Wes Anderson's new film tells the story of a precocious child coming to terms with ____.`, draw: 0, pick: 1, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I'm sorry, sir, but we don't allow ____ at the country club.`, draw: 0, pick: 1, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `How am I compensating for my tiny penis?`, draw: 0, pick: 1, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `You've seen the bearded lady!<br/>You've seen the ring of fire!<br/>Now, ladies and gentlemen, feast your eyes upon ____!`, draw: 0, pick: 1, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `She's up all night for good fun.<br/>I'm up all night for ____.`, draw: 0, pick: 1, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Dear Leader Kim Jong-un,<br/>our village praises your infinite wisdom with a humble offering of ____.`, draw: 0, pick: 1, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Man, this is bullshit. Fuck ____.`, draw: 0, pick: 1, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `You guys, I saw this crazy movie last night. It opens on ____, and then there's some stuff about ____, and then it ends with ____.`, draw: 2, pick: 3, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In return for my soul, the Devil promised me ____, but all I got was ____.`, draw: 0, pick: 2, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The Japanese have developed a smaller, more efficient version of ____.`, draw: 0, pick: 1, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Alright, bros. Our frat house is condemned, and all the hot slampieces are over at Gamma Phi. The time has come to commence Operation ____.`, draw: 0, pick: 1, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `This is the prime of my life. I'm young, hot, and full of ____.`, draw: 0, pick: 1, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I'm pretty sure I'm high right now, because I'm absolutely mesmerized by ____.`, draw: 0, pick: 1, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `It lurks in the night. It hungers for flesh. This summer, no one is safe from ____.`, draw: 0, pick: 1, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `If you can't handle ____, you'd better stay away from ____.`, draw: 0, pick: 2, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Forget everything you know about ____, because now we've supercharged it with ____!`, draw: 0, pick: 2, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Honey, I have a new role-play I want to try tonight! You can be ____, and I'll be ____.`, draw: 0, pick: 2, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `This year's hottest album is "____" by ____.`, draw: 0, pick: 2, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Every step towards ____ gets me a little closer to ____.`, draw: 0, pick: 2, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Do <i>not</i> fuck with me! I am literally ____ right now.`, draw: 0, pick: 1, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `2 AM in the city that never sleeps. The door swings open and <i>she</i> walks in, legs up to here. Something in her eyes tells me she's looking for ____.`, draw: 0, pick: 1, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `As king, how will I keep the peasants in line?`, draw: 0, pick: 1, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I am become ____, destroyer of ____!`, draw: 0, pick: 2, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In the beginning, there was ____.<br/>And the Lord said, "Let there be ____."`, draw: 0, pick: 2, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ will never be the same after ____.`, draw: 0, pick: 2, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `We never did find ____, but along the way we sure learned a lot about ____.`, draw: 0, pick: 2, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ may pass, but ____ will last forever.`, draw: 0, pick: 2, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Adventure.<br/>Romance.<br/>____.<br/><br/>From Paramount Pictures, "____."`, draw: 0, pick: 2, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Oprah's book of the month is "____ For ____: A Story of Hope."`, draw: 0, pick: 2, watermark: `X4`, cardSetId: insertResult.result![0].id
    });

    await queryRunner.insert('white_card', {
      text: `A bunch of idiots playing a card game instead of interacting like normal humans.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A sex goblin with a carnival penis.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lots and lots of abortions.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Injecting speed into one arm and horse tranquilizer into the other.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sharks with legs.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A sex comet from Neptune that plunges the Earth into eternal sexiness.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `How awesome I am.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Smoking crack, for instance.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A dance move that's just sex.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A hopeless amount of spiders.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Drinking responsibly.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Angelheaded hipsters burning for the ancient heavenly connection to the starry dynamo in the machinery of night.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bouncing up and down.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A shiny rock that proves I love you.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Crazy opium eyes.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Moderate-to-severe joint pain.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Finally finishing off the Indians.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Actual mutants with medical conditions and no superpowers.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The complex geopolitical quagmire that is the Middle East.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Neil Diamond's Greatest Hits.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `No clothes on, penis in vagina.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Whispering all sexy.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A horse with no legs.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Depression.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Almost giving money to a homeless person.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Interspecies marriage.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Blackula.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `What Jesus would do.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A manhole.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `My dad's dumb fucking face.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Ugandan warlord.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `My worthless son.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Native American who solves crimes by going into the spirit world.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A kiss on the lips.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A fart.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The peaceful and nonthreatening rise of China.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The size of my penis.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Jizz.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `10 Incredible Facts About the Anus.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The secret formula for ultimate female satisfaction.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sugar madness.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Calculating every mannerism so as not to suggest homosexuality.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fucking a corpse back to life.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The euphoric rush of strangling a drifter.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Snorting coke off a clown's boner.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Three consecutive seconds of happiness.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Falling into the toilet.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ass to mouth.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Some sort of Asian.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The safe word.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Party Mexicans.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ambiguous sarcasm.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Prince Ali,<br/>fabulous he,<br/>Ali Ababwa.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `My sex dungeon.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Child Protective Services.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An interracial handshake.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `All the single ladies.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Whatever a McRib&reg; is made of.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Africa.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Khakis.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A gender identity that can only be conveyed through slam poetry.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Stuff a child's face with Fun Dip&reg; until he starts having fun.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A for-real lizard that spits blood from its eyes.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The tiniest shred of evidence that God is real.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dem titties.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Exploding pigeons.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Doo-doo.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sports.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Unquestioning obedience.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Grammar nazis who are also regular Nazis.`, watermark: `X4`, cardSetId: insertResult.result![0].id
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.delete('black_card', {
      text: `What's fun until it gets weird?`, draw: 0, pick: 1, watermark: `X4`
    });
    await queryRunner.delete('black_card', {
      text: `Wes Anderson's new film tells the story of a precocious child coming to terms with ____.`, draw: 0, pick: 1, watermark: `X4`
    });
    await queryRunner.delete('black_card', {
      text: `I'm sorry, sir, but we don't allow ____ at the country club.`, draw: 0, pick: 1, watermark: `X4`
    });
    await queryRunner.delete('black_card', {
      text: `How am I compensating for my tiny penis?`, draw: 0, pick: 1, watermark: `X4`
    });
    await queryRunner.delete('black_card', {
      text: `You've seen the bearded lady!<br/>You've seen the ring of fire!<br/>Now, ladies and gentlemen, feast your eyes upon ____!`, draw: 0, pick: 1, watermark: `X4`
    });
    await queryRunner.delete('black_card', {
      text: `She's up all night for good fun.<br/>I'm up all night for ____.`, draw: 0, pick: 1, watermark: `X4`
    });
    await queryRunner.delete('black_card', {
      text: `Dear Leader Kim Jong-un,<br/>our village praises your infinite wisdom with a humble offering of ____.`, draw: 0, pick: 1, watermark: `X4`
    });
    await queryRunner.delete('black_card', {
      text: `Man, this is bullshit. Fuck ____.`, draw: 0, pick: 1, watermark: `X4`
    });
    await queryRunner.delete('black_card', {
      text: `You guys, I saw this crazy movie last night. It opens on ____, and then there's some stuff about ____, and then it ends with ____.`, draw: 2, pick: 3, watermark: `X4`
    });
    await queryRunner.delete('black_card', {
      text: `In return for my soul, the Devil promised me ____, but all I got was ____.`, draw: 0, pick: 2, watermark: `X4`
    });
    await queryRunner.delete('black_card', {
      text: `The Japanese have developed a smaller, more efficient version of ____.`, draw: 0, pick: 1, watermark: `X4`
    });
    await queryRunner.delete('black_card', {
      text: `Alright, bros. Our frat house is condemned, and all the hot slampieces are over at Gamma Phi. The time has come to commence Operation ____.`, draw: 0, pick: 1, watermark: `X4`
    });
    await queryRunner.delete('black_card', {
      text: `This is the prime of my life. I'm young, hot, and full of ____.`, draw: 0, pick: 1, watermark: `X4`
    });
    await queryRunner.delete('black_card', {
      text: `I'm pretty sure I'm high right now, because I'm absolutely mesmerized by ____.`, draw: 0, pick: 1, watermark: `X4`
    });
    await queryRunner.delete('black_card', {
      text: `It lurks in the night. It hungers for flesh. This summer, no one is safe from ____.`, draw: 0, pick: 1, watermark: `X4`
    });
    await queryRunner.delete('black_card', {
      text: `If you can't handle ____, you'd better stay away from ____.`, draw: 0, pick: 2, watermark: `X4`
    });
    await queryRunner.delete('black_card', {
      text: `Forget everything you know about ____, because now we've supercharged it with ____!`, draw: 0, pick: 2, watermark: `X4`
    });
    await queryRunner.delete('black_card', {
      text: `Honey, I have a new role-play I want to try tonight! You can be ____, and I'll be ____.`, draw: 0, pick: 2, watermark: `X4`
    });
    await queryRunner.delete('black_card', {
      text: `This year's hottest album is "____" by ____.`, draw: 0, pick: 2, watermark: `X4`
    });
    await queryRunner.delete('black_card', {
      text: `Every step towards ____ gets me a little closer to ____.`, draw: 0, pick: 2, watermark: `X4`
    });
    await queryRunner.delete('black_card', {
      text: `Do <i>not</i> fuck with me! I am literally ____ right now.`, draw: 0, pick: 1, watermark: `X4`
    });
    await queryRunner.delete('black_card', {
      text: `2 AM in the city that never sleeps. The door swings open and <i>she</i> walks in, legs up to here. Something in her eyes tells me she's looking for ____.`, draw: 0, pick: 1, watermark: `X4`
    });
    await queryRunner.delete('black_card', {
      text: `As king, how will I keep the peasants in line?`, draw: 0, pick: 1, watermark: `X4`
    });
    await queryRunner.delete('black_card', {
      text: `I am become ____, destroyer of ____!`, draw: 0, pick: 2, watermark: `X4`
    });
    await queryRunner.delete('black_card', {
      text: `In the beginning, there was ____.<br/>And the Lord said, "Let there be ____."`, draw: 0, pick: 2, watermark: `X4`
    });
    await queryRunner.delete('black_card', {
      text: `____ will never be the same after ____.`, draw: 0, pick: 2, watermark: `X4`
    });
    await queryRunner.delete('black_card', {
      text: `We never did find ____, but along the way we sure learned a lot about ____.`, draw: 0, pick: 2, watermark: `X4`
    });
    await queryRunner.delete('black_card', {
      text: `____ may pass, but ____ will last forever.`, draw: 0, pick: 2, watermark: `X4`
    });
    await queryRunner.delete('black_card', {
      text: `Adventure.<br/>Romance.<br/>____.<br/><br/>From Paramount Pictures, "____."`, draw: 0, pick: 2, watermark: `X4`
    });
    await queryRunner.delete('black_card', {
      text: `Oprah's book of the month is "____ For ____: A Story of Hope."`, draw: 0, pick: 2, watermark: `X4`
    });

    await queryRunner.delete('white_card', {
      text: `A bunch of idiots playing a card game instead of interacting like normal humans.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `A sex goblin with a carnival penis.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `Lots and lots of abortions.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `Injecting speed into one arm and horse tranquilizer into the other.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `Sharks with legs.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `A sex comet from Neptune that plunges the Earth into eternal sexiness.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `How awesome I am.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `Smoking crack, for instance.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `A dance move that's just sex.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `A hopeless amount of spiders.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `Drinking responsibly.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `Angelheaded hipsters burning for the ancient heavenly connection to the starry dynamo in the machinery of night.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `Bouncing up and down.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `A shiny rock that proves I love you.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `Crazy opium eyes.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `Moderate-to-severe joint pain.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `Finally finishing off the Indians.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `Actual mutants with medical conditions and no superpowers.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `The complex geopolitical quagmire that is the Middle East.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `Neil Diamond's Greatest Hits.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `No clothes on, penis in vagina.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `Whispering all sexy.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `A horse with no legs.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `Depression.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `Almost giving money to a homeless person.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `Interspecies marriage.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `Blackula.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `What Jesus would do.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `A manhole.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `My dad's dumb fucking face.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `A Ugandan warlord.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `My worthless son.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `A Native American who solves crimes by going into the spirit world.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `A kiss on the lips.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `A fart.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `The peaceful and nonthreatening rise of China.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `The size of my penis.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `Jizz.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `10 Incredible Facts About the Anus.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `The secret formula for ultimate female satisfaction.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `Sugar madness.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `Calculating every mannerism so as not to suggest homosexuality.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `Fucking a corpse back to life.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `The euphoric rush of strangling a drifter.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `Snorting coke off a clown's boner.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `Three consecutive seconds of happiness.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `Falling into the toilet.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `Ass to mouth.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `Some sort of Asian.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `The safe word.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `Party Mexicans.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `Ambiguous sarcasm.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `Prince Ali,<br/>fabulous he,<br/>Ali Ababwa.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `My sex dungeon.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `Child Protective Services.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `An interracial handshake.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `All the single ladies.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `Whatever a McRib&reg; is made of.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `Africa.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `Khakis.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `A gender identity that can only be conveyed through slam poetry.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `Stuff a child's face with Fun Dip&reg; until he starts having fun.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `A for-real lizard that spits blood from its eyes.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `The tiniest shred of evidence that God is real.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `Dem titties.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `Exploding pigeons.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `Doo-doo.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `Sports.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `Unquestioning obedience.`, watermark: `X4`
    });
    await queryRunner.delete('white_card', {
      text: `Grammar nazis who are also regular Nazis.`, watermark: `X4`
    });

    await queryRunner.delete('card_set', {
      name: `The Fourth Expansion`, baseDeck: true, description: `The official Fourth Expansion.`, weight: 12, active: true
    });
  }

}
