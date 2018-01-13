/* tslint:disable:no-non-null-assertion no-unsafe-any no-any no-unnecessary-type-assertion */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class GolbyFanClub1505101878246 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const insertResult = await queryRunner.insert('card_set', {
      name: `[C] Golby Fan Club`,
      baseDeck: false,
      description: null,
      weight: 505,
      active: true
    });

    await queryRunner.insert('black_card', {
      text: `Every weekend, Golby likes to ____ then ____ before finally ____.`,
      draw: 2,
      pick: 3,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Every weekend, Golby enjoys drinking ____ before getting into a fight with ____ and having sex with ____.`,
      draw: 2,
      pick: 3,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Connie the Condor often doesn't talk on skype because of ____.`,
      draw: 0,
      pick: 1,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Jorgi the Corgi most definitely enjoys ____.`,
      draw: 0,
      pick: 1,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Tom is good, but he's not ____ good.`,
      draw: 0,
      pick: 1,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `It's DJ Manny in the hizouse, playing ____ all night long!`,
      draw: 0,
      pick: 1,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `BENCH ALL THE ____.`,
      draw: 0,
      pick: 1,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Hey guys, check out my ____ montage!`,
      draw: 0,
      pick: 1,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ + ____ = Golby.`,
      draw: 0,
      pick: 2,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `On a night out, Golby will traditionally get into a fight with a ____ then have sex with a ____ before complaining about a hangover from too much ____.`,
      draw: 2,
      pick: 3,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `You're so _____ I'll have to delete you.`,
      draw: 0,
      pick: 1,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Cindi suddenly turned into Steven after ____.`,
      draw: 0,
      pick: 1,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `When Barta isn't talking he's ____.`,
      draw: 0,
      pick: 1,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I got a new tattoo, it looks a bit like ____.`,
      draw: 0,
      pick: 1,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What strange Korean delicacy will Mark enjoy today?`,
      draw: 0,
      pick: 1,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ is camping my lane.`,
      draw: 0,
      pick: 1,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The OGN was fun, but there was far too much ____ cosplay.`,
      draw: 0,
      pick: 1,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `"What are you thinking?" "You know, ____ and stuff."`,
      draw: 0,
      pick: 1,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });

    await queryRunner.insert('white_card', {
      text: `Golby.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Benchpressing.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mother's debit card.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Kevin Golby.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `That Kevin Golby.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Golbies: like the jitters but with a concern towards stabbings.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `STEAL ALL THE FARM.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Norwegian Oil.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Grandiosa.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Drilling.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Barta's glorious hair.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `BENCH ALL THE MOTHERS.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Taking the second and third blue buff.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Invisible stabwounds.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lulu's double E.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A blurry picture.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Merchant Navy.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Extensive research by Trygve.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Trygvipedia.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Chak looking like Ross Kemp on a good day.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Manny's epic laugh.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Clearly jealous.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A very tight vest from Primark.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fisting a nun.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Teabagging a siamese midget while benchpressing a cybernetically enhanced bear.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `From Primark.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `smoochy moochy.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Superman tattoo.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Gary Glitter.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Blanda Upp!.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hestkuk.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A nice guy.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `My 6.3 KDA ratio.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `bronze scrub.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Get on my level.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fucking tryhard.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Those moments when you're bored and pucker your anus to a good beat.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An undetermined but significant quantity of penis.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `PEEEEEEEEEEEEEEEENIIIISSSSSSSS.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Shawk.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `They're taking the hobbits to Isengard!`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Confounding jerry at every turn.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Jumanji.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Wards.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Build an Aegis!`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Wildturtle's vast range of emotions.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `K-Pop.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Doing Gangnam Style at a funeral.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `joseph gordon-Levitt wearing nothing but a kitten.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `125% Reccomended Daily Allowance of cock.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Barta not being sarcastic.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Golby's itchy testicles.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Surgery to move the male g-spot to the naval.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Kirk vs Spock fight scene music.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Golby not jungling.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Feeling a fart pushing against your prostate.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `I'm Batman. WHERE ARE THEY?!?`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Band Camp.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A corgi wearing a hat.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A corgi wearing a sailor moon outfit.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `a corgi dressed as a viking.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A corgi.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Chak's bald spot.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `THE HAWK!`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `When Aunt Erma visits.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Jamiroquai.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `BAWNJOURNO.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Black people's nostrils.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `LOOK AT MY HORSE.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `MY HORSE IS AMAZING.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `XPEKE!`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Because Froggen did it.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Meowing Ride of the Valkyries during intercourse.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `CACAW!`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dryhumping.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Gilbert Gotfried.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `50 Shades of Gay.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Maple Bourbon Bacon Jam.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Chak making a sandwich.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Jealous.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Frozen Heart Ashe.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Yorick Ult on Anivia Egg.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `David.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A healthy dose of Vitamin Cock and Vitamin Dick.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Questioning my sexuality.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tons of Damage.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Deman making a racist pun.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Phreak staring at you and never blinking.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `PENTAFAIL!`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `I Can't Believe It's Not Butter.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Wanksock.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An arsehole like a wellington top.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Emma Watson dressed as a crab dancing to K-Pop.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `BORK.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Handicapped people on Takeshi's Castle.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Chuckle Brothers at their mother's funeral.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A 3am phone call.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A cardboard cutout of Jennifer Lawrence.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Robert Pattinson with Freddy Mercury's moustache and Gilbert.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Gotfried's voice.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ezreal's hot sugary ass.`,
      watermark: `GFC`,
      cardSetId: insertResult.result![0].id
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.delete('black_card', {
      text: `Every weekend, Golby likes to ____ then ____ before finally ____.`,
      draw: 2,
      pick: 3,
      watermark: `GFC`
    });
    await queryRunner.delete('black_card', {
      text: `Every weekend, Golby enjoys drinking ____ before getting into a fight with ____ and having sex with ____.`,
      draw: 2,
      pick: 3,
      watermark: `GFC`
    });
    await queryRunner.delete('black_card', {
      text: `Connie the Condor often doesn't talk on skype because of ____.`,
      draw: 0,
      pick: 1,
      watermark: `GFC`
    });
    await queryRunner.delete('black_card', {
      text: `Jorgi the Corgi most definitely enjoys ____.`,
      draw: 0,
      pick: 1,
      watermark: `GFC`
    });
    await queryRunner.delete('black_card', {
      text: `Tom is good, but he's not ____ good.`,
      draw: 0,
      pick: 1,
      watermark: `GFC`
    });
    await queryRunner.delete('black_card', {
      text: `It's DJ Manny in the hizouse, playing ____ all night long!`,
      draw: 0,
      pick: 1,
      watermark: `GFC`
    });
    await queryRunner.delete('black_card', {
      text: `BENCH ALL THE ____.`,
      draw: 0,
      pick: 1,
      watermark: `GFC`
    });
    await queryRunner.delete('black_card', {
      text: `Hey guys, check out my ____ montage!`,
      draw: 0,
      pick: 1,
      watermark: `GFC`
    });
    await queryRunner.delete('black_card', {
      text: `____ + ____ = Golby.`,
      draw: 0,
      pick: 2,
      watermark: `GFC`
    });
    await queryRunner.delete('black_card', {
      text: `On a night out, Golby will traditionally get into a fight with a ____ then have sex with a ____ before complaining about a hangover from too much ____.`,
      draw: 2,
      pick: 3,
      watermark: `GFC`
    });
    await queryRunner.delete('black_card', {
      text: `You're so _____ I'll have to delete you.`,
      draw: 0,
      pick: 1,
      watermark: `GFC`
    });
    await queryRunner.delete('black_card', {
      text: `Cindi suddenly turned into Steven after ____.`,
      draw: 0,
      pick: 1,
      watermark: `GFC`
    });
    await queryRunner.delete('black_card', {
      text: `When Barta isn't talking he's ____.`,
      draw: 0,
      pick: 1,
      watermark: `GFC`
    });
    await queryRunner.delete('black_card', {
      text: `I got a new tattoo, it looks a bit like ____.`,
      draw: 0,
      pick: 1,
      watermark: `GFC`
    });
    await queryRunner.delete('black_card', {
      text: `What strange Korean delicacy will Mark enjoy today?`,
      draw: 0,
      pick: 1,
      watermark: `GFC`
    });
    await queryRunner.delete('black_card', {
      text: `____ is camping my lane.`,
      draw: 0,
      pick: 1,
      watermark: `GFC`
    });
    await queryRunner.delete('black_card', {
      text: `The OGN was fun, but there was far too much ____ cosplay.`,
      draw: 0,
      pick: 1,
      watermark: `GFC`
    });
    await queryRunner.delete('black_card', {
      text: `"What are you thinking?" "You know, ____ and stuff."`,
      draw: 0,
      pick: 1,
      watermark: `GFC`
    });

    await queryRunner.delete('white_card', {
      text: `Golby.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Benchpressing.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Mother's debit card.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Kevin Golby.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `That Kevin Golby.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `The Golbies: like the jitters but with a concern towards stabbings.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `STEAL ALL THE FARM.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Norwegian Oil.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Grandiosa.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Drilling.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Barta's glorious hair.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `BENCH ALL THE MOTHERS.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Taking the second and third blue buff.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Invisible stabwounds.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Lulu's double E.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `A blurry picture.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `The Merchant Navy.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Extensive research by Trygve.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `The Trygvipedia.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Chak looking like Ross Kemp on a good day.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Manny's epic laugh.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Clearly jealous.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `A very tight vest from Primark.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Fisting a nun.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Teabagging a siamese midget while benchpressing a cybernetically enhanced bear.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `From Primark.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `smoochy moochy.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `A Superman tattoo.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Gary Glitter.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Blanda Upp!.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Hestkuk.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `A nice guy.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `My 6.3 KDA ratio.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `bronze scrub.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Get on my level.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Fucking tryhard.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Those moments when you're bored and pucker your anus to a good beat.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `An undetermined but significant quantity of penis.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `PEEEEEEEEEEEEEEEENIIIISSSSSSSS.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `The Shawk.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `They're taking the hobbits to Isengard!`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Confounding jerry at every turn.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Jumanji.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Wards.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Build an Aegis!`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Wildturtle's vast range of emotions.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `K-Pop.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Doing Gangnam Style at a funeral.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `joseph gordon-Levitt wearing nothing but a kitten.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `125% Reccomended Daily Allowance of cock.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Barta not being sarcastic.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Golby's itchy testicles.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Surgery to move the male g-spot to the naval.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `The Kirk vs Spock fight scene music.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Golby not jungling.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Feeling a fart pushing against your prostate.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `I'm Batman. WHERE ARE THEY?!?`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Band Camp.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `A corgi wearing a hat.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `A corgi wearing a sailor moon outfit.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `a corgi dressed as a viking.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `A corgi.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Chak's bald spot.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `THE HAWK!`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `When Aunt Erma visits.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Jamiroquai.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `BAWNJOURNO.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Black people's nostrils.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `LOOK AT MY HORSE.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `MY HORSE IS AMAZING.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `XPEKE!`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Because Froggen did it.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Meowing Ride of the Valkyries during intercourse.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `CACAW!`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Dryhumping.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Gilbert Gotfried.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `50 Shades of Gay.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Maple Bourbon Bacon Jam.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Chak making a sandwich.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Jealous.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Frozen Heart Ashe.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Yorick Ult on Anivia Egg.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `David.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `A healthy dose of Vitamin Cock and Vitamin Dick.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Questioning my sexuality.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Tons of Damage.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Deman making a racist pun.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Phreak staring at you and never blinking.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `PENTAFAIL!`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `I Can't Believe It's Not Butter.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `A Wanksock.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `An arsehole like a wellington top.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Emma Watson dressed as a crab dancing to K-Pop.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `BORK.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Handicapped people on Takeshi's Castle.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `The Chuckle Brothers at their mother's funeral.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `A 3am phone call.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `A cardboard cutout of Jennifer Lawrence.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Robert Pattinson with Freddy Mercury's moustache and Gilbert.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Gotfried's voice.`,
      watermark: `GFC`
    });
    await queryRunner.delete('white_card', {
      text: `Ezreal's hot sugary ass.`,
      watermark: `GFC`
    });

    await queryRunner.delete('card_set', {
      name: `[C] Golby Fan Club`,
      baseDeck: false,
      description: null,
      weight: 505,
      active: true
    });
  }
}
