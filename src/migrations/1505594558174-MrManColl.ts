/* tslint:disable:no-non-null-assertion no-unsafe-any no-any no-unnecessary-type-assertion */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class MrManColl1505594558174 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const insertResult = await queryRunner.insert('card_set', {
      name: `[C] Mr. Man Collection`,
      baseDeck: false,
      description: null,
      weight: 515,
      active: true
    });

    await queryRunner.insert('black_card', {
      text: `Scientists have reverse engineered alien technology that unlocks the secrets of ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `It is often argued that our ancestors would have never evolved without the aid of ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The sad truth is, that at the edge of the universe, there is nothing but ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The 1930's is often regarded as the golden age of ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ a day keeps ____ away.`,
      draw: 0,
      pick: 2,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `There is a time for peace, a time for war, and a time for ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `If a pot of gold is at one end of the rainbow, what is at the other?`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `A fortune teller told me I will live a life filled with ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The Himalayas are filled with many perils, such as ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The road to success is paved with ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I work out so I can look good when I'm ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `And on his farm he had ____, E-I-E-I-O!`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Genius is 10% inspiration and 90% ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I will not eat them Sam-I-Am. I will not eat ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What's the time? ____ time!`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ is the root of all evil.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The primitive villagers were both shocked and amazed when I showed them ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `And it is said his ghost still wanders these halls, forever searching for his lost ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Disney presents ____, on ice!`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The best part of waking up is ____ in your cup.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Though Thomas Edison invented the lightbulb, he is also known for giving us ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Little Miss. Muffet sat on her tuffet, eating her ____ and ____.`,
      draw: 0,
      pick: 2,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What do I keep hidden in the crawlspace?`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Go-Go-Gadget, ____!`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I qualify for this job because I have several years experience in the field of ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `We just adopted ____ from the pound.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `It was the happiest day of my life when I became the proud parent of ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I finally realized I hit rock bottom when I started digging through dumpsters for ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `With a million times the destructive force of all our nuclear weapons combined, no one was able to survive ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `You have been found guilty of 5 counts of ____, and 13 counts of ____.`,
      draw: 0,
      pick: 2,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `And the award for the filthiest scene in an adult film goes to "5 women and ____."`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `"Why Grandma", said Little Red Riding Hood, "What big ____ you have!"`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Pay no attention to ____ behind the curtain!`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Mama always said life was like ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Who could have guessed that the alien invasion would be easily thwarted by ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `With the Democrats and Republicans in a dead heat, the election was snatched by the ____ party.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The seldomly mentioned 4th little pig built his house out of ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });

    await queryRunner.insert('white_card', {
      text: `Taking a seat with Chris Hansen.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Village People.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Cleveland steamer.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A big floppy donkey dick.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pooping in the bathtub.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bathing the homeless.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An awkward sponge bath.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Toilet paper.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting off on anime porn.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Enemas.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Teenage Mutant Ninja Turtles.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mining for nose gold.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Laxatives.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Putting the fucking lotion in the basket.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The tears of a clown.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Gangrene.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Gingivitis.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Two dogs humping.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Genital warts.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Suppositories.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Face painting.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A prolapse.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Digital piracy.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A poop sandwich.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Executive parking.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A dead hooker.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A skeptical sheriff.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A chatroom predator.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A loud mouth-breather.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The crushed dreams of a stripper.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Anorexia.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Gobots.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Motown group.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `a classy smoking jacket.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Giant areolas.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Peanutbutter jelly time.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A sexy senior citizen.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Granny panties.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A stuttering auctioneer.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Farting into a fancy handkerchief.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lot lizards.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A LARPing sleeper cell.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Fleshlite&trade;.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A molotov cocktail.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A cockblocker.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Public schooling.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The end of the world.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dickjitsu.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A mushy tushy.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Don Knotts.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Morbid obesity.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Geriatric diaper rash.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A MILF.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bigfoot.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Yellow snow.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A limp wrist.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An angry leprechaun.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Tin Man.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Giving yourself a stranger.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Shitting into someone's hat for revenge.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Learning hypnosis to get laid.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The War of Northern Aggression.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A snot rocket.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Miss. Piggy.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sailor Moon.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mass graves.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A victim.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Soiling ones self.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A clone army.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Raw sewage.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `War crimes.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A collapsed lung.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The town drunk.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The face of pure evil.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Spontaneous pie fights.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Fresh Prince of Bel-Air.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Being screamed at in German.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A lesson in pain.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Talking like a pirate.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Facebook stalker.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sausage.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A compound fracture.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The magical land of Oz.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pow-Pow-PowerWheeels&reg;!`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cheating death.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Clown Shoes.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Clown college.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A lousy comb-over.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Chaz Bono.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hoarders.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bed wetting.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nuns.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A closed casket funeral.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Scotch.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A really ugly baby.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Realizing, too late, that there is no toilet paper left.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Illegal immigrants.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Elder abuse.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Drunkenly texting an ex.`,
      watermark: `MrMan`,
      cardSetId: insertResult.result![0].id
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.delete('black_card', {
      text: `Scientists have reverse engineered alien technology that unlocks the secrets of ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `It is often argued that our ancestors would have never evolved without the aid of ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `The sad truth is, that at the edge of the universe, there is nothing but ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `The 1930's is often regarded as the golden age of ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `____ a day keeps ____ away.`,
      draw: 0,
      pick: 2,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `There is a time for peace, a time for war, and a time for ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `If a pot of gold is at one end of the rainbow, what is at the other?`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `A fortune teller told me I will live a life filled with ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `The Himalayas are filled with many perils, such as ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `The road to success is paved with ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `I work out so I can look good when I'm ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `And on his farm he had ____, E-I-E-I-O!`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `Genius is 10% inspiration and 90% ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `I will not eat them Sam-I-Am. I will not eat ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `What's the time? ____ time!`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `____ is the root of all evil.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `The primitive villagers were both shocked and amazed when I showed them ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `And it is said his ghost still wanders these halls, forever searching for his lost ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `Disney presents ____, on ice!`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `The best part of waking up is ____ in your cup.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `Though Thomas Edison invented the lightbulb, he is also known for giving us ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `Little Miss. Muffet sat on her tuffet, eating her ____ and ____.`,
      draw: 0,
      pick: 2,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `What do I keep hidden in the crawlspace?`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `Go-Go-Gadget, ____!`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `I qualify for this job because I have several years experience in the field of ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `We just adopted ____ from the pound.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `It was the happiest day of my life when I became the proud parent of ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `I finally realized I hit rock bottom when I started digging through dumpsters for ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `With a million times the destructive force of all our nuclear weapons combined, no one was able to survive ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `You have been found guilty of 5 counts of ____, and 13 counts of ____.`,
      draw: 0,
      pick: 2,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `And the award for the filthiest scene in an adult film goes to "5 women and ____."`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `"Why Grandma", said Little Red Riding Hood, "What big ____ you have!"`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `Pay no attention to ____ behind the curtain!`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `Mama always said life was like ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `Who could have guessed that the alien invasion would be easily thwarted by ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `With the Democrats and Republicans in a dead heat, the election was snatched by the ____ party.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });
    await queryRunner.delete('black_card', {
      text: `The seldomly mentioned 4th little pig built his house out of ____.`,
      draw: 0,
      pick: 1,
      watermark: `MrMan`
    });

    await queryRunner.delete('white_card', {
      text: `Taking a seat with Chris Hansen.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `The Village People.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `A Cleveland steamer.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `A big floppy donkey dick.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Pooping in the bathtub.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Bathing the homeless.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `An awkward sponge bath.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Toilet paper.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Getting off on anime porn.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Enemas.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `The Teenage Mutant Ninja Turtles.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Mining for nose gold.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Laxatives.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Putting the fucking lotion in the basket.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `The tears of a clown.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Gangrene.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Gingivitis.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Two dogs humping.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Genital warts.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Suppositories.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Face painting.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `A prolapse.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Digital piracy.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `A poop sandwich.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Executive parking.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `A dead hooker.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `A skeptical sheriff.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `A chatroom predator.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `A loud mouth-breather.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `The crushed dreams of a stripper.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Anorexia.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Gobots.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `A Motown group.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `a classy smoking jacket.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Giant areolas.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Peanutbutter jelly time.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `A sexy senior citizen.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Granny panties.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `A stuttering auctioneer.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Farting into a fancy handkerchief.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Lot lizards.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `A LARPing sleeper cell.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `A Fleshlite&trade;.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `A molotov cocktail.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `A cockblocker.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Public schooling.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `The end of the world.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Dickjitsu.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `A mushy tushy.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Don Knotts.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Morbid obesity.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Geriatric diaper rash.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `A MILF.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Bigfoot.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Yellow snow.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `A limp wrist.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `An angry leprechaun.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `The Tin Man.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Giving yourself a stranger.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Shitting into someone's hat for revenge.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Learning hypnosis to get laid.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `The War of Northern Aggression.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `A snot rocket.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Miss. Piggy.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Sailor Moon.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Mass graves.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `A victim.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Soiling ones self.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `A clone army.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Raw sewage.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `War crimes.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `A collapsed lung.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `The town drunk.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `The face of pure evil.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Spontaneous pie fights.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `The Fresh Prince of Bel-Air.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Being screamed at in German.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `A lesson in pain.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Talking like a pirate.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `A Facebook stalker.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Sausage.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `A compound fracture.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `The magical land of Oz.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Pow-Pow-PowerWheeels&reg;!`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Cheating death.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Clown Shoes.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Clown college.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `A lousy comb-over.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Chaz Bono.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Hoarders.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Bed wetting.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Nuns.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `A closed casket funeral.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Scotch.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `A really ugly baby.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Realizing, too late, that there is no toilet paper left.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Illegal immigrants.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Elder abuse.`,
      watermark: `MrMan`
    });
    await queryRunner.delete('white_card', {
      text: `Drunkenly texting an ex.`,
      watermark: `MrMan`
    });

    await queryRunner.delete('card_set', {
      name: `[C] Mr. Man Collection`,
      baseDeck: false,
      description: null,
      weight: 515,
      active: true
    });
  }
}
