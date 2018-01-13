/* tslint:disable:no-non-null-assertion no-unsafe-any no-any no-unnecessary-type-assertion */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class SodomyDog1505594835496 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const insertResult = await queryRunner.insert('card_set', {
      name: `[C] Sodomy Dog's Furry Pack`,
      baseDeck: false,
      description: null,
      weight: 516,
      active: true
    });

    await queryRunner.insert('black_card', {
      text: `Personals ad: Seeking a female who doesn't mind ____, might also be willing to try a male if they're ____.`,
      draw: 0,
      pick: 2,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I tell everyone I'm not a furry, but I've drawn a lot of ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `My original species combines ____ and ____. It's called ____.`,
      draw: 2,
      pick: 3,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____. And now I'm bleeding.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Suck my ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I also take ____ as payment for commissions.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ looks pretty in all the art, but have you seen one in real life?`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `At first I couldn't understand ____, but now it's my biggest kink.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Long story short, I ended up with ____ in my ass.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Don't knock ____ until you've tried it.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Who knew I'd be able to make a living off of ____?`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `It's difficult to explain to friends and family why I know so much about ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Once I started roleplaying ____, it was all downhill from there.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ are so goddamn cool.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____, by Bad Dragon™.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `No, look, you don't understand. I REALLY like ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I don't think my parents will ever accept that the real me is ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I can't believe I spent most of my paycheck on ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `You can try to justify ____ all you want, but you don't have to be ____ to realize it's just plain wrong.`,
      draw: 0,
      pick: 2,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I've been waiting all year for ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I can't wait to meet up with my internet friends for ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Most cats are ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Taking pride in one's collection of ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Did you hear about the guy that smuggled ____ into the hotel?`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The panel I'm looking forward to most at AC this year is...`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `My Original Character's name is ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `My secret tumblr account where I post nothing but ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Only my internet friends know that I fantasize about ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Everyone really just goes to the cons for ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `It all started with ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I'll roleplay ____, you can be ____.`,
      draw: 0,
      pick: 2,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I'm no longer allowed near ____ after the incident with ____.`,
      draw: 0,
      pick: 2,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I've been into ____ since before I hit puberty, I just didn't know what it meant.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Realizing, too late, the implications of your interest in ____ as a child.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Whoa, I might fantasize about ____, but I'd never actually go that far in real life.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I realized they were a furry when they mentioned ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Everyone on this site has such strong opinions about ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `My landlord had a lot of uncomfortable questions for me when when he found ____ in my bedroom while I was at work.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I'm not even aroused by normal porn anymore, I can only get off to ____ or ____.`,
      draw: 0,
      pick: 2,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____? Oh, yeah, I could get my mouth around that.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What wouldn't I fuck?`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `When I thought I couldn't go any lower, I realized I would probably fuck ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I knew my boyfriend was a keeper when he said he'd try ____, just for me.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Fuck ____, get ____.`,
      draw: 0,
      pick: 2,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I would bend over for ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I think having horns would make ____ complicated.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In my past life, I was ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ is my spirit animal.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____. This is what my life has come to.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I'm not even sad that I devote at least six hours of each day to ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I never felt more accomplished than when I realized I could fit ____ into my ass.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Yeah, I know I have a lot of ____ in my favorites, but I'm just here for the art.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I'm not a "furry," I prefer to be called ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Okay, ____? Pretty much the cutest thing ever.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____. Yeah, that's a pretty interesting way to die.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I didn't believe the rumors about ____, until I saw the videos.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I knew I needed to leave the fandom when I realized I was ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `After being a furry for so long, I can never see ____ without getting a little aroused.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `It's really hard not to laugh at ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `If my parents ever found ____, I'd probably be disowned.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ ruined the fandom.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The most recent item in my search history.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Is it weird that I want to rub my face on ____?`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____? Oh murr.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I never thought I'd be comfortable with ____, but now it's pretty much the only thing I masturbate to.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `My next fursuit will have ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I'm writing a porn comic about ____ and ____. `,
      draw: 0,
      pick: 2,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I tell everyone that I make my money off "illustration," when really, I just draw ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Oh, you're an artist? Could you draw ____ for me?`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Everyone thinks they're so great, but the only thing they're good at drawing is ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `They're just going to spend all that money on ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `While everyone else seems to have a deep, instinctual fear of ____, it just turns me on.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Lying about having ____ to get donations, which you spend on ____.`,
      draw: 0,
      pick: 2,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `It's not bestiality, it's ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Everyone thinks that because I'm a furry, I'm into ____. Unfortunately, they're right.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I'm only gay for ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Excuse you, I'm a were-____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `If you like it, then you should put ____ on it.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `My girlfriend won't let me do ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The most pleasant surprise I've had this year.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I knew I had a problem when I had to sell ____ to pay for ____.`,
      draw: 0,
      pick: 2,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I'm about 50% ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____: Horrible tragedy, or sexual opportunity?`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `It's a little worrying that I have to compare the size of ____ to beverage containers.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Hey, you guys wanna come back to my place? I've got ____ and ____.`,
      draw: 0,
      pick: 2,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Jizzing all over ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `It's just that much creepier when 40-year-old men are into ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ is no substitute for social skills, but it's a start.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The real reason I got into the fandom? ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ are definitely the new huskies.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I remember when ____ was just getting started.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `When no one else is around, sometimes I consider doing things with ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Actually coming inside ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I don't know how we got on the subject of dragon cocks, but it probably started with ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ is a shining example of what those with autism can really do.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `It is my dream to be covered with ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ fucking ____. Now that's hot.`,
      draw: 0,
      pick: 2,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Would you rather suck ____, or get dicked by ____?`,
      draw: 0,
      pick: 2,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `It never fails to liven up the workplace when you ask your coworkers if they'd rather have sex with ____ or ____.`,
      draw: 0,
      pick: 2,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `HELLO FURRIEND, HOWL ARE YOU DOING?`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What are the two worst cards in your hand right now?`,
      draw: 0,
      pick: 2,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Nobody believes me when I tell that one story about walking in on ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `You don't know who ____ is? They're the one that draws ____.`,
      draw: 0,
      pick: 2,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `You sometimes wish you'd encounter ____ while all alone, in the woods. With a bottle of lube.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I used to avoid talking about ____, but now it's just a part of normal conversation with my friends.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });

    await queryRunner.insert('white_card', {
      text: `Dragon dildos.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Adam Wan.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Non-consensual sex with Zaush.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `My tailhole.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Adoptables with visible genitalia.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An embarrassingly long F-List profile.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Catching STDs at conventions.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fursuit adventures.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A semen-stained fursuit.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fake furry girls.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `That one straight guy at the party.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An apartment full of internet-obsessed losers.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A tub of Vaseline.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sex with strangers.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `People who cosplay at furry conventions.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fursuiters at anime conventions.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Embarrassing craigslist ads.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pounced.org.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A large, flared Chance.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Stretching your anus in preparation for horse cock.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A hermaphrodite foxtaur.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Babyfurs.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Uncomfortably attractive animals.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Confusing feelings about cartoon characters.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `PetSmart.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Krystal, the fox.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `StarFox.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sonic the Hedgehog.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bowser's sweaty balls.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A furpile.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The stench of half a dozen unwashed bronies.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Intimacy with the family dog.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Horses.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fursecution.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Chakats.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `DeviantArt.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Otherkin.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Heated debates about human genitalia versus animal genitalia.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Taking the knot.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Really, really liking Disney's Robin Hood.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Applying your obscure, unrealistic fetishes to 90's cartoon characters.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The texture and color of raw meat.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An oversized clitoris that acts as a functional penis.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A hermaphrodite snow leopard.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Drawing furry porn.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lovingly rendered dragon anus.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cloaca.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Animal genitalia.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Motherfucking wolves.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Christian furries.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Barbed penises.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Two knots.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A really attractive wolf.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A slutty gay fox.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A surprisingly attractive anteater.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `FUCK YOU, I'M A DRAGON.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tumbles, the Stair Dragon.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Furry Weekend Atlanta.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Further Confusion.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `AnthroCon.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Literally a bucket of semen.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sexual interest in pretty much anything with a hole.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Attraction to pretty much anything with a penis.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Transformation porn.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Anatomically incorrect genitalia.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `When you catch yourself glancing at the crotches of animated characters.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Belly rubs leading to awkward boners.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Scritches.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Lifting your tail.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Experimenting with fisting.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bad decisions.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A little bitch.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A lime Citra.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sergals.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An autistic knife fight.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The noises red pandas make during sex.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `About 16 ounces of horse semen.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dog cum.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Oral knotting.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Leaving your orifices bloody and sore.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Rubbing peanut butter on your genitals.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bad Dragon&trade; cumlube.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Piss.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Smells.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `When "blowing ten bucks" makes you think of a long night with a bunch of deer.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Forgetting which set of fursuit paws you use for handjobs.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A strategically placed hole.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Shitting on my face.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Barking at strangers.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sitting on your face.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Spending more money on commissions than food in a given week.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A dick so big you have to give it a hugjob.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The fine line between feral and outright bestiality.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Anal training.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Discovering monster porn.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Realizing that rimming is pretty cool.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Endearing social ineptitude.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `All this lube.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `That thing that gives your dick a knot IRL.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Gay.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Really, truly heterosexual.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Drenching your fursuit in Febreeze.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `That time you let your dog go a little further than just sniffing your crotch.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Poodles with afros.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Offensively stereotyped African animals.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A sassy lioness.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Surprise hermaphrodites.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Taking special interest in nature documentaries.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Becoming a veterinarian for all the wrong reasons.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The premise of every furry comic ever.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Anal sex you didn't know you wanted.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The incredibly satisfying sound it makes when you pull it out.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bear tits.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Big cute paws.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Paws.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Furry porn, shamelessly taped to the walls.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Grabby-paws.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Masturbating, with claws.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pawing-off.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tail-sex.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mary, the anthro mare.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Natascha, the anthro husky.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nipple buffet.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Crotch-tits.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The tailstar tango.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Furries in heat.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fantasizing about sex with just about every monster you encounter in your video game.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Impure thoughts about Kobolds.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Erotic roleplay.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Monsters with bedroom eyes.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Accurate avian anatomy.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting fur stuck in your teeth.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting feathers stuck in your teeth.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ignoring a person's faults because their character is hot.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Discovering that it's never just a big vagina.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dragoneer.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A horny dragon.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A sexually frustrated griffon.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Species stereotypes.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `HELLO FURRIEND, HOWL ARE YOU DOING.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Convention sluts.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Horns and hooves.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Being "prison gay."`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Microwaving diapers.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Adorable dog people.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sexy the Cat.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `That one episode of CSI.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `SecondLife.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Gay Yiffy Club.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hyper-endowed squirrels.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A spider furry who isn't even into bondage.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Being really, really into monsters.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sexual arousal from children's cartoons.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `No males, no herms, no cuntboys, no shemales, no trannys, no furries, no aliens, no vampires, and no werewolves. ONLY STRAIGHT OR BI HUMAN FEMALES.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Overcompensating with a huge horse penis.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A fedora enthusiast.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A tongue-beast.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Frisky tentacles.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A very steampunk rat.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Canine superiority.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Oviposition.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Flares.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dogs wearing panties.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Monster boys in lingerie.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Power bottoms.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sheath licking.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sex with Pok&eacute;mon.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Making out with dogs.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `YouTube videos of horse breeding.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pissing on your significant other to show ownership.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Being able to recognize your friends by the scent of their asses.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A notebook full of embarrassing niche porn sketches.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cockvore.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A prehensile penis.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Puns involving the word "knot."`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Jerking off on an unconscious friend's feet.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `CrusaderCat.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Your Character Here.`,
      watermark: `Furry`,
      cardSetId: insertResult.result![0].id
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.delete('black_card', {
      text: `Personals ad: Seeking a female who doesn't mind ____, might also be willing to try a male if they're ____.`,
      draw: 0,
      pick: 2,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `I tell everyone I'm not a furry, but I've drawn a lot of ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `My original species combines ____ and ____. It's called ____.`,
      draw: 2,
      pick: 3,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `____. And now I'm bleeding.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `Suck my ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `I also take ____ as payment for commissions.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `____ looks pretty in all the art, but have you seen one in real life?`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `At first I couldn't understand ____, but now it's my biggest kink.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `Long story short, I ended up with ____ in my ass.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `Don't knock ____ until you've tried it.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `Who knew I'd be able to make a living off of ____?`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `It's difficult to explain to friends and family why I know so much about ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `Once I started roleplaying ____, it was all downhill from there.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `____ are so goddamn cool.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `____, by Bad Dragon™.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `No, look, you don't understand. I REALLY like ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `I don't think my parents will ever accept that the real me is ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `I can't believe I spent most of my paycheck on ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `You can try to justify ____ all you want, but you don't have to be ____ to realize it's just plain wrong.`,
      draw: 0,
      pick: 2,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `I've been waiting all year for ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `I can't wait to meet up with my internet friends for ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `Most cats are ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `Taking pride in one's collection of ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `Did you hear about the guy that smuggled ____ into the hotel?`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `The panel I'm looking forward to most at AC this year is...`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `My Original Character's name is ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `My secret tumblr account where I post nothing but ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `Only my internet friends know that I fantasize about ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `Everyone really just goes to the cons for ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `It all started with ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `I'll roleplay ____, you can be ____.`,
      draw: 0,
      pick: 2,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `I'm no longer allowed near ____ after the incident with ____.`,
      draw: 0,
      pick: 2,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `I've been into ____ since before I hit puberty, I just didn't know what it meant.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `Realizing, too late, the implications of your interest in ____ as a child.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `Whoa, I might fantasize about ____, but I'd never actually go that far in real life.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `I realized they were a furry when they mentioned ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `Everyone on this site has such strong opinions about ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `My landlord had a lot of uncomfortable questions for me when when he found ____ in my bedroom while I was at work.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `I'm not even aroused by normal porn anymore, I can only get off to ____ or ____.`,
      draw: 0,
      pick: 2,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `____? Oh, yeah, I could get my mouth around that.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `What wouldn't I fuck?`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `When I thought I couldn't go any lower, I realized I would probably fuck ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `I knew my boyfriend was a keeper when he said he'd try ____, just for me.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `Fuck ____, get ____.`,
      draw: 0,
      pick: 2,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `I would bend over for ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `I think having horns would make ____ complicated.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `In my past life, I was ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `____ is my spirit animal.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `____. This is what my life has come to.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `I'm not even sad that I devote at least six hours of each day to ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `I never felt more accomplished than when I realized I could fit ____ into my ass.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `Yeah, I know I have a lot of ____ in my favorites, but I'm just here for the art.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `I'm not a "furry," I prefer to be called ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `Okay, ____? Pretty much the cutest thing ever.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `____. Yeah, that's a pretty interesting way to die.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `I didn't believe the rumors about ____, until I saw the videos.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `I knew I needed to leave the fandom when I realized I was ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `After being a furry for so long, I can never see ____ without getting a little aroused.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `It's really hard not to laugh at ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `If my parents ever found ____, I'd probably be disowned.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `____ ruined the fandom.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `The most recent item in my search history.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `Is it weird that I want to rub my face on ____?`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `____? Oh murr.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `I never thought I'd be comfortable with ____, but now it's pretty much the only thing I masturbate to.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `My next fursuit will have ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `I'm writing a porn comic about ____ and ____. `,
      draw: 0,
      pick: 2,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `I tell everyone that I make my money off "illustration," when really, I just draw ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `Oh, you're an artist? Could you draw ____ for me?`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `Everyone thinks they're so great, but the only thing they're good at drawing is ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `They're just going to spend all that money on ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `While everyone else seems to have a deep, instinctual fear of ____, it just turns me on.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `Lying about having ____ to get donations, which you spend on ____.`,
      draw: 0,
      pick: 2,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `It's not bestiality, it's ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `Everyone thinks that because I'm a furry, I'm into ____. Unfortunately, they're right.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `I'm only gay for ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `Excuse you, I'm a were-____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `If you like it, then you should put ____ on it.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `My girlfriend won't let me do ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `The most pleasant surprise I've had this year.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `I knew I had a problem when I had to sell ____ to pay for ____.`,
      draw: 0,
      pick: 2,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `I'm about 50% ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `____: Horrible tragedy, or sexual opportunity?`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `It's a little worrying that I have to compare the size of ____ to beverage containers.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `Hey, you guys wanna come back to my place? I've got ____ and ____.`,
      draw: 0,
      pick: 2,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `Jizzing all over ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `It's just that much creepier when 40-year-old men are into ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `____ is no substitute for social skills, but it's a start.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `The real reason I got into the fandom? ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `____ are definitely the new huskies.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `I remember when ____ was just getting started.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `When no one else is around, sometimes I consider doing things with ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `Actually coming inside ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `I don't know how we got on the subject of dragon cocks, but it probably started with ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `____ is a shining example of what those with autism can really do.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `It is my dream to be covered with ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `____ fucking ____. Now that's hot.`,
      draw: 0,
      pick: 2,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `Would you rather suck ____, or get dicked by ____?`,
      draw: 0,
      pick: 2,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `It never fails to liven up the workplace when you ask your coworkers if they'd rather have sex with ____ or ____.`,
      draw: 0,
      pick: 2,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `HELLO FURRIEND, HOWL ARE YOU DOING?`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `What are the two worst cards in your hand right now?`,
      draw: 0,
      pick: 2,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `Nobody believes me when I tell that one story about walking in on ____.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `You don't know who ____ is? They're the one that draws ____.`,
      draw: 0,
      pick: 2,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `You sometimes wish you'd encounter ____ while all alone, in the woods. With a bottle of lube.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });
    await queryRunner.delete('black_card', {
      text: `I used to avoid talking about ____, but now it's just a part of normal conversation with my friends.`,
      draw: 0,
      pick: 1,
      watermark: `Furry`
    });

    await queryRunner.delete('white_card', {
      text: `Dragon dildos.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Adam Wan.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Non-consensual sex with Zaush.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `My tailhole.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Adoptables with visible genitalia.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `An embarrassingly long F-List profile.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Catching STDs at conventions.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Fursuit adventures.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `A semen-stained fursuit.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Fake furry girls.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `That one straight guy at the party.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `An apartment full of internet-obsessed losers.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `A tub of Vaseline.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Sex with strangers.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `People who cosplay at furry conventions.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Fursuiters at anime conventions.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Embarrassing craigslist ads.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Pounced.org.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `A large, flared Chance.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Stretching your anus in preparation for horse cock.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `A hermaphrodite foxtaur.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Babyfurs.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Uncomfortably attractive animals.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Confusing feelings about cartoon characters.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `PetSmart.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Krystal, the fox.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `StarFox.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Sonic the Hedgehog.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Bowser's sweaty balls.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `A furpile.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `The stench of half a dozen unwashed bronies.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Intimacy with the family dog.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Horses.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Fursecution.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Chakats.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `DeviantArt.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Otherkin.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Heated debates about human genitalia versus animal genitalia.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Taking the knot.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Really, really liking Disney's Robin Hood.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Applying your obscure, unrealistic fetishes to 90's cartoon characters.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `The texture and color of raw meat.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `An oversized clitoris that acts as a functional penis.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `A hermaphrodite snow leopard.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Drawing furry porn.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Lovingly rendered dragon anus.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Cloaca.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Animal genitalia.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Motherfucking wolves.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Christian furries.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Barbed penises.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Two knots.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `A really attractive wolf.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `A slutty gay fox.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `A surprisingly attractive anteater.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `FUCK YOU, I'M A DRAGON.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Tumbles, the Stair Dragon.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Furry Weekend Atlanta.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Further Confusion.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `AnthroCon.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Literally a bucket of semen.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Sexual interest in pretty much anything with a hole.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Attraction to pretty much anything with a penis.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Transformation porn.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Anatomically incorrect genitalia.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `When you catch yourself glancing at the crotches of animated characters.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Belly rubs leading to awkward boners.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Scritches.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Lifting your tail.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Experimenting with fisting.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Bad decisions.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `A little bitch.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `A lime Citra.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Sergals.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `An autistic knife fight.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `The noises red pandas make during sex.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `About 16 ounces of horse semen.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Dog cum.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Oral knotting.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Leaving your orifices bloody and sore.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Rubbing peanut butter on your genitals.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Bad Dragon&trade; cumlube.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Piss.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Smells.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `When "blowing ten bucks" makes you think of a long night with a bunch of deer.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Forgetting which set of fursuit paws you use for handjobs.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `A strategically placed hole.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Shitting on my face.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Barking at strangers.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Sitting on your face.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Spending more money on commissions than food in a given week.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `A dick so big you have to give it a hugjob.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `The fine line between feral and outright bestiality.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Anal training.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Discovering monster porn.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Realizing that rimming is pretty cool.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Endearing social ineptitude.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `All this lube.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `That thing that gives your dick a knot IRL.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Gay.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Really, truly heterosexual.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Drenching your fursuit in Febreeze.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `That time you let your dog go a little further than just sniffing your crotch.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Poodles with afros.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Offensively stereotyped African animals.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `A sassy lioness.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Surprise hermaphrodites.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Taking special interest in nature documentaries.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Becoming a veterinarian for all the wrong reasons.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `The premise of every furry comic ever.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Anal sex you didn't know you wanted.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `The incredibly satisfying sound it makes when you pull it out.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Bear tits.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Big cute paws.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Paws.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Furry porn, shamelessly taped to the walls.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Grabby-paws.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Masturbating, with claws.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Pawing-off.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Tail-sex.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Mary, the anthro mare.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Natascha, the anthro husky.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Nipple buffet.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Crotch-tits.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `The tailstar tango.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Furries in heat.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Fantasizing about sex with just about every monster you encounter in your video game.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Impure thoughts about Kobolds.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Erotic roleplay.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Monsters with bedroom eyes.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Accurate avian anatomy.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Getting fur stuck in your teeth.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Getting feathers stuck in your teeth.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Ignoring a person's faults because their character is hot.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Discovering that it's never just a big vagina.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Dragoneer.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `A horny dragon.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `A sexually frustrated griffon.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Species stereotypes.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `HELLO FURRIEND, HOWL ARE YOU DOING.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Convention sluts.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Horns and hooves.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Being "prison gay."`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Microwaving diapers.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Adorable dog people.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Sexy the Cat.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `That one episode of CSI.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `SecondLife.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `The Gay Yiffy Club.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Hyper-endowed squirrels.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `A spider furry who isn't even into bondage.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Being really, really into monsters.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Sexual arousal from children's cartoons.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `No males, no herms, no cuntboys, no shemales, no trannys, no furries, no aliens, no vampires, and no werewolves. ONLY STRAIGHT OR BI HUMAN FEMALES.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Overcompensating with a huge horse penis.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `A fedora enthusiast.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `A tongue-beast.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Frisky tentacles.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `A very steampunk rat.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Canine superiority.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Oviposition.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Flares.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Dogs wearing panties.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Monster boys in lingerie.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Power bottoms.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Sheath licking.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Sex with Pok&eacute;mon.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Making out with dogs.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `YouTube videos of horse breeding.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Pissing on your significant other to show ownership.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Being able to recognize your friends by the scent of their asses.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `A notebook full of embarrassing niche porn sketches.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Cockvore.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `A prehensile penis.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Puns involving the word "knot."`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Jerking off on an unconscious friend's feet.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `CrusaderCat.`,
      watermark: `Furry`
    });
    await queryRunner.delete('white_card', {
      text: `Your Character Here.`,
      watermark: `Furry`
    });

    await queryRunner.delete('card_set', {
      name: `[C] Sodomy Dog's Furry Pack`,
      baseDeck: false,
      description: null,
      weight: 516,
      active: true
    });
  }
}
