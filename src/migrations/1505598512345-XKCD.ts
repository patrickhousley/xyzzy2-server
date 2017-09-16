/* tslint:disable:no-non-null-assertion no-unsafe-any no-any */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class XKCD1505598512345 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const insertResult = await queryRunner.insert('card_set', {
      name: `[C] xkcd`,
      baseDeck: false,
      description: null,
      weight: 524,
      active: true
    });

    await queryRunner.insert('black_card', {
      text: `____.tumblr.com`,
      draw: 0,
      pick: 1,
      watermark: `SG`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ would be a good name for a band.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ wouldn't be funny if not for the irony.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Help, I'm trapped in a ____ factory!`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `None of the places I floated to had ____.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____. My normal method is useless here.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `We had a ____ party, but it turned out not to be very much fun.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `My hobby: ____.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ makes terrible pillow talk.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What is the best way to protect yourself from Velociraptors?`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I'm pretty sure you can't send ____ through the mail.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I'm like ____, except with love.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Spoiler Alert! ____ kills ____ with ____!`,
      draw: 2,
      pick: 3,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I didn't actually want you to be ____; I just wanted you to be ____.`,
      draw: 0,
      pick: 2,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Do you really expect ____? No, Mister Bond. I expect you to die!`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What do we miss most from the internet in 1998?`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `All of my algorithms were really just disguised ____.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Waking up would be a lot easier if ____ didn't look so much like you.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____? No, I'm not really into Pokémon.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I got a lot more interested in ____ when I made the connection to ____.`,
      draw: 0,
      pick: 2,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Dreaming about ____ in Cirque du Soleil.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `When I eat ____, I like to pretend I'm a Turing machine.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Freestyle rapping is really just ____.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `It turns out God created the universe using ____.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Human intelligence decreases with increasing proximity to ____.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `If I could rearrange the alphabet, I'd put ____ and ____ together.`,
      draw: 0,
      pick: 2,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The #1 Programmer's excuse for legitimately slacking off: ____.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I like alter songs by replacing ____ with ____.`,
      draw: 0,
      pick: 2,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Ebay review: Instead of ____, package contained ____. Would not buy again.`,
      draw: 0,
      pick: 2,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Social rule 99.1: If friends spend more than 60 minutes deciding what to do, they must default to ____.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ linked to Acne! 95% confidence.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `How many Google results are there for "Died in a ____ accident?"`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Real Programmers use ____.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `After finding Higgs-Boson, I can always use the LHC for ____.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `My health declined when I realized I could eat ____ whenever I wanted.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ is just applied ____.`,
      draw: 0,
      pick: 2,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What's my favorite unit of measurement?`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In the extended base metaphor, shortstop is ____.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I don't actually care about ____, I just like ____.`,
      draw: 0,
      pick: 2,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Why do you have a crossbow in your desk?`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I set up script to buy things on ebay for $1, but then it bought ____, ____, and ____.`,
      draw: 2,
      pick: 3,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I can extrude ____, but I can't retract it.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____'s fetish: ____.`,
      draw: 0,
      pick: 2,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Now I have to live my whole life pretending ____ never happened. It's going to be a fun 70 years.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `My new favorite game is Strip ____.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Did you know you can just buy ____?`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Take me down to the ____, where the ____ is green and the ____ are pretty.`,
      draw: 2,
      pick: 3,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____. That's right. Shit just got REAL.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Just because I have ____ doesn't mean you could milk me now. I'd have to be lactating.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `2009 called? Did you warn them about ____?`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I'm going to name my child ____.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `3D printers sound great until you receive spam containing actual ____.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Until I see more data, I'm going to assume ____ causes ____.`,
      draw: 0,
      pick: 2,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Did you know November is ____ Awareness Month?`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `University Researchers create life in lab! ____ blamed!`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `If you really hate someone, teach them to recognize ____.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____. So it has come to this.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Hey baby, wanna come back to my sex ____?`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The past is a foreign country... with ____ and ____!`,
      draw: 0,
      pick: 2,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What role has social media played in ____? Well, it's certainly made ____ stupider.`,
      draw: 0,
      pick: 2,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____. It works in Kerbal Space Program.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ is too big for small talk.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What did I suggest to the IAU for a new planet name?`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `By 2019, ____ will be outnumbered by ____.`,
      draw: 0,
      pick: 2,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `New movie this summer: ____ beats up everyone.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I filled my apartment with ____.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `It's fun to mentally replace the word ____ with ____.`,
      draw: 0,
      pick: 2,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });

    await queryRunner.insert('white_card', {
      text: `A poisson distribution`,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An apple infused with tin`,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A ferret with wings strapped on`,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Taking a fourier transform of your cat`,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The red spiders`,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A malaria party`,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The square root of lov`,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Orion's penis`,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Bellman-Ford algorithm`,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Only knowing music from Guitar Hero`,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Feeding rocks to children`,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Poking small holes in noodle cups`,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Zeppelins`,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mixing curse levels`,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Going out in a blaze of Dadaist glory`,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Answering casual questions in Iambic Pentameter`,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An inexorably advancing wall of ice`,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Raptor attacks`,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting Jeremy Irons to do your dialogue`,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sending strange things through the mail`,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The RJX-21 Laser Scope`,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Moral Relativity`,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Snakes on Every Plane!`,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A girl whose only mode of transportation is the M.C. Hammer slide`,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Clark Gable's Tourette's`,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Vanilla Ice`,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Computational Linguists`,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cunnilingus`,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Pong machine that's self-aware`,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Centrifugal force`,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The elimination of all culture you don't control`,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Embedded music on MySpace`,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The math of Velociraptors`,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The mathematics of cunnilungus`,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Electric Skateboards`,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Using 'They' as a third-person singular gender-free pronoun`,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pronouncing 'Blog' as 'Blag'`,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Casual use of 'sudo'`,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A human-sized hamster ball`,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An embarrassing search history`,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Commenting out what other people say`,
      watermark: `xkcd`,
      cardSetId: insertResult.result![0].id
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.delete('black_card', {
      text: `____.tumblr.com`,
      draw: 0,
      pick: 1,
      watermark: `SG`
    });
    await queryRunner.delete('black_card', {
      text: `____ would be a good name for a band.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `____ wouldn't be funny if not for the irony.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `Help, I'm trapped in a ____ factory!`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `None of the places I floated to had ____.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `____. My normal method is useless here.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `We had a ____ party, but it turned out not to be very much fun.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `My hobby: ____.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `____ makes terrible pillow talk.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `What is the best way to protect yourself from Velociraptors?`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `I'm pretty sure you can't send ____ through the mail.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `I'm like ____, except with love.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `Spoiler Alert! ____ kills ____ with ____!`,
      draw: 2,
      pick: 3,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `I didn't actually want you to be ____; I just wanted you to be ____.`,
      draw: 0,
      pick: 2,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `Do you really expect ____? No, Mister Bond. I expect you to die!`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `What do we miss most from the internet in 1998?`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `All of my algorithms were really just disguised ____.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `Waking up would be a lot easier if ____ didn't look so much like you.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `____? No, I'm not really into Pokémon.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `I got a lot more interested in ____ when I made the connection to ____.`,
      draw: 0,
      pick: 2,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `Dreaming about ____ in Cirque du Soleil.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `When I eat ____, I like to pretend I'm a Turing machine.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `Freestyle rapping is really just ____.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `It turns out God created the universe using ____.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `Human intelligence decreases with increasing proximity to ____.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `If I could rearrange the alphabet, I'd put ____ and ____ together.`,
      draw: 0,
      pick: 2,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `The #1 Programmer's excuse for legitimately slacking off: ____.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `I like alter songs by replacing ____ with ____.`,
      draw: 0,
      pick: 2,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `Ebay review: Instead of ____, package contained ____. Would not buy again.`,
      draw: 0,
      pick: 2,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `Social rule 99.1: If friends spend more than 60 minutes deciding what to do, they must default to ____.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `____ linked to Acne! 95% confidence.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `How many Google results are there for "Died in a ____ accident?"`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `Real Programmers use ____.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `After finding Higgs-Boson, I can always use the LHC for ____.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `My health declined when I realized I could eat ____ whenever I wanted.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `____ is just applied ____.`,
      draw: 0,
      pick: 2,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `What's my favorite unit of measurement?`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `In the extended base metaphor, shortstop is ____.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `I don't actually care about ____, I just like ____.`,
      draw: 0,
      pick: 2,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `Why do you have a crossbow in your desk?`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `I set up script to buy things on ebay for $1, but then it bought ____, ____, and ____.`,
      draw: 2,
      pick: 3,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `I can extrude ____, but I can't retract it.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `____'s fetish: ____.`,
      draw: 0,
      pick: 2,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `Now I have to live my whole life pretending ____ never happened. It's going to be a fun 70 years.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `My new favorite game is Strip ____.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `Did you know you can just buy ____?`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `Take me down to the ____, where the ____ is green and the ____ are pretty.`,
      draw: 2,
      pick: 3,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `____. That's right. Shit just got REAL.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `Just because I have ____ doesn't mean you could milk me now. I'd have to be lactating.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `2009 called? Did you warn them about ____?`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `I'm going to name my child ____.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `3D printers sound great until you receive spam containing actual ____.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `Until I see more data, I'm going to assume ____ causes ____.`,
      draw: 0,
      pick: 2,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `Did you know November is ____ Awareness Month?`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `University Researchers create life in lab! ____ blamed!`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `If you really hate someone, teach them to recognize ____.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `____. So it has come to this.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `Hey baby, wanna come back to my sex ____?`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `The past is a foreign country... with ____ and ____!`,
      draw: 0,
      pick: 2,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `What role has social media played in ____? Well, it's certainly made ____ stupider.`,
      draw: 0,
      pick: 2,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `____. It works in Kerbal Space Program.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `____ is too big for small talk.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `What did I suggest to the IAU for a new planet name?`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `By 2019, ____ will be outnumbered by ____.`,
      draw: 0,
      pick: 2,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `New movie this summer: ____ beats up everyone.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `I filled my apartment with ____.`,
      draw: 0,
      pick: 1,
      watermark: `xkcd`
    });
    await queryRunner.delete('black_card', {
      text: `It's fun to mentally replace the word ____ with ____.`,
      draw: 0,
      pick: 2,
      watermark: `xkcd`
    });

    await queryRunner.delete('white_card', {
      text: `A poisson distribution`,
      watermark: `xkcd`
    });
    await queryRunner.delete('white_card', {
      text: `An apple infused with tin`,
      watermark: `xkcd`
    });
    await queryRunner.delete('white_card', {
      text: `A ferret with wings strapped on`,
      watermark: `xkcd`
    });
    await queryRunner.delete('white_card', {
      text: `Taking a fourier transform of your cat`,
      watermark: `xkcd`
    });
    await queryRunner.delete('white_card', {
      text: `The red spiders`,
      watermark: `xkcd`
    });
    await queryRunner.delete('white_card', {
      text: `A malaria party`,
      watermark: `xkcd`
    });
    await queryRunner.delete('white_card', {
      text: `The square root of lov`,
      watermark: `xkcd`
    });
    await queryRunner.delete('white_card', {
      text: `Orion's penis`,
      watermark: `xkcd`
    });
    await queryRunner.delete('white_card', {
      text: `The Bellman-Ford algorithm`,
      watermark: `xkcd`
    });
    await queryRunner.delete('white_card', {
      text: `Only knowing music from Guitar Hero`,
      watermark: `xkcd`
    });
    await queryRunner.delete('white_card', {
      text: `Feeding rocks to children`,
      watermark: `xkcd`
    });
    await queryRunner.delete('white_card', {
      text: `Poking small holes in noodle cups`,
      watermark: `xkcd`
    });
    await queryRunner.delete('white_card', {
      text: `Zeppelins`,
      watermark: `xkcd`
    });
    await queryRunner.delete('white_card', {
      text: `Mixing curse levels`,
      watermark: `xkcd`
    });
    await queryRunner.delete('white_card', {
      text: `Going out in a blaze of Dadaist glory`,
      watermark: `xkcd`
    });
    await queryRunner.delete('white_card', {
      text: `Answering casual questions in Iambic Pentameter`,
      watermark: `xkcd`
    });
    await queryRunner.delete('white_card', {
      text: `An inexorably advancing wall of ice`,
      watermark: `xkcd`
    });
    await queryRunner.delete('white_card', {
      text: `Raptor attacks`,
      watermark: `xkcd`
    });
    await queryRunner.delete('white_card', {
      text: `Getting Jeremy Irons to do your dialogue`,
      watermark: `xkcd`
    });
    await queryRunner.delete('white_card', {
      text: `Sending strange things through the mail`,
      watermark: `xkcd`
    });
    await queryRunner.delete('white_card', {
      text: `The RJX-21 Laser Scope`,
      watermark: `xkcd`
    });
    await queryRunner.delete('white_card', {
      text: `Moral Relativity`,
      watermark: `xkcd`
    });
    await queryRunner.delete('white_card', {
      text: `Snakes on Every Plane!`,
      watermark: `xkcd`
    });
    await queryRunner.delete('white_card', {
      text: `A girl whose only mode of transportation is the M.C. Hammer slide`,
      watermark: `xkcd`
    });
    await queryRunner.delete('white_card', {
      text: `Clark Gable's Tourette's`,
      watermark: `xkcd`
    });
    await queryRunner.delete('white_card', {
      text: `Vanilla Ice`,
      watermark: `xkcd`
    });
    await queryRunner.delete('white_card', {
      text: `Computational Linguists`,
      watermark: `xkcd`
    });
    await queryRunner.delete('white_card', {
      text: `Cunnilingus`,
      watermark: `xkcd`
    });
    await queryRunner.delete('white_card', {
      text: `A Pong machine that's self-aware`,
      watermark: `xkcd`
    });
    await queryRunner.delete('white_card', {
      text: `Centrifugal force`,
      watermark: `xkcd`
    });
    await queryRunner.delete('white_card', {
      text: `The elimination of all culture you don't control`,
      watermark: `xkcd`
    });
    await queryRunner.delete('white_card', {
      text: `Embedded music on MySpace`,
      watermark: `xkcd`
    });
    await queryRunner.delete('white_card', {
      text: `The math of Velociraptors`,
      watermark: `xkcd`
    });
    await queryRunner.delete('white_card', {
      text: `The mathematics of cunnilungus`,
      watermark: `xkcd`
    });
    await queryRunner.delete('white_card', {
      text: `Electric Skateboards`,
      watermark: `xkcd`
    });
    await queryRunner.delete('white_card', {
      text: `Using 'They' as a third-person singular gender-free pronoun`,
      watermark: `xkcd`
    });
    await queryRunner.delete('white_card', {
      text: `Pronouncing 'Blog' as 'Blag'`,
      watermark: `xkcd`
    });
    await queryRunner.delete('white_card', {
      text: `Casual use of 'sudo'`,
      watermark: `xkcd`
    });
    await queryRunner.delete('white_card', {
      text: `A human-sized hamster ball`,
      watermark: `xkcd`
    });
    await queryRunner.delete('white_card', {
      text: `An embarrassing search history`,
      watermark: `xkcd`
    });
    await queryRunner.delete('white_card', {
      text: `Commenting out what other people say`,
      watermark: `xkcd`
    });

    await queryRunner.delete('card_set', {
      name: `[C] xkcd`,
      baseDeck: false,
      description: null,
      weight: 524,
      active: true
    });
  }
}
