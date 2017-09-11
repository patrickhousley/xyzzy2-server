/* tslint:disable:no-non-null-assertion no-unsafe-any no-any */

import { MigrationInterface, QueryRunner } from 'typeorm';

export class ThirdExpansion1505084444418 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const insertResult = await queryRunner.insert('card_set', {
      name: `The Third Expansion`,
      baseDeck: false,
      description: `The official Third Expansion.`,
      weight: 12,
      active: true
    });

    await queryRunner.insert('black_card', {
      text: `____: Hours of fun. Easy to use. Perfect for ____!`,
      draw: 0,
      pick: 2,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Turns out that ____-Man was neither the hero we needed nor wanted.`,
      draw: 0,
      pick: 1,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What left this stain on my couch?`,
      draw: 0,
      pick: 1,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Call the law offices of Goldstein &amp; Goldstein, because no one should have to tolerate ____ in the workplace.`,
      draw: 0,
      pick: 1,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `A successful job interview begins with a firm handshake and ends with ____.`,
      draw: 0,
      pick: 1,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Lovin' you is easy 'cause you're ____.`,
      draw: 0,
      pick: 1,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Money can't buy me love, but it can buy me ____.`,
      draw: 0,
      pick: 1,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Listen, son. If you want to get involved with ____, I won't stop you. Just steer clear of ____.`,
      draw: 0,
      pick: 2,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `During high school, I never really fit in until I found ____ club.`,
      draw: 0,
      pick: 1,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Hey baby, come back to my place and I'll show you ____.`,
      draw: 0,
      pick: 1,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `To prepare for his upcoming role, Daniel Day-Lewis immersed himself in the world of ____.`,
      draw: 0,
      pick: 1,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Finally! A service that delivers ____ right to your door.`,
      draw: 0,
      pick: 1,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `My gym teacher got fired for adding ____ to the obstacle course.`,
      draw: 0,
      pick: 1,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `When you get right down to it, ____ is just ____.`,
      draw: 0,
      pick: 2,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `As part of his daily regimen, Anderson Cooper sets aside 15 minutes for ____.`,
      draw: 0,
      pick: 1,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In the seventh circle of Hell, sinners must endure ____ for all eternity.`,
      draw: 0,
      pick: 1,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `After months of practice with ____, I think I'm finally ready for ____.`,
      draw: 0,
      pick: 2,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The blind date was going horribly until we discovered our shared interest in ____.`,
      draw: 0,
      pick: 1,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____. Awesome in theory, kind of a mess in practice.`,
      draw: 0,
      pick: 1,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `With enough time and pressure, ____ will turn into ____.`,
      draw: 0,
      pick: 2,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I'm not like the rest of you. I'm too rich and busy for ____.`,
      draw: 0,
      pick: 1,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `And what did <i>you</i> bring for show and tell?`,
      draw: 0,
      pick: 1,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Having problems with ____? Try ____!`,
      draw: 0,
      pick: 2,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `As part of his contract, Prince won't perform without ____ in his dressing room.`,
      draw: 0,
      pick: 1,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `My life is ruled by a vicious cycle of ____ and ____.`,
      draw: 0,
      pick: 2,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });

    await queryRunner.insert('white_card', {
      text: `The primal, ball-slapping sex your parents are having right now.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A cat video so cute that your eyes roll back and your spine slides out of your anus.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Cock.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A cop who is also a dog.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dying alone and in pain.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Gay aliens.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The way white people is.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Reverse cowgirl.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Quesadilla Explosion Salad&trade; from Chili's&reg;.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Actually getting shot, for real.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Not having sex.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Vietnam flashbacks.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Running naked through a mall, pissing and shitting everywhere.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nothing.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Warm, velvety muppet sex.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Self-flagellation.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The systematic destruction of an entire people and their way of life.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Samuel L. Jackson.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A boo-boo.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Going around punching people.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The entire Internet.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Some kind of bird-man.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Chugging a lava lamp.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Having sex on top of a pizza.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Indescribable loneliness.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An ass disaster.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Shutting the fuck up.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `All my friends dying.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Putting an entire peanut butter and jelly sandwich into the VCR.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Spending lots of money.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Some douche with an acoustic guitar.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Flying robots that kill people.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A greased-up Matthew McConaughey.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An unstoppable wave of fire ants.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Not contributing to society in any meaningful way.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An all-midget production of Shakespeare's <i>Richard III</i>.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Screaming like a maniac.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The moist, demanding chasm of his mouth.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Filling every orifice with butterscotch pudding.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Unlimited soup, salad, and breadsticks.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Crying into the pages of Sylvia Plath.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A PowerPoint presentation.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A surprising amount of hair.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Eating Tom Selleck's mustache to gain his powers.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Roland the Farter, flatulist to the king.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `That ass.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A pile of squirming bodies.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Buying the right pants to be cool.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Blood farts.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Three months in the hole.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A botched circumcision.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Land of Chocolate.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Slapping a racist old lady.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A lamprey swimming up the toilet and latching onto your taint.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Jumping out at people.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A black male in his early 20s, last seen wearing a hoodie.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mufasa's death scene.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bill Clinton, naked on a bearskin rug with a saxophone.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Demonic possession.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Harlem Globetrotters.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Vomiting mid-blowjob.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `My manservant, Claude.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Having shotguns for legs.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Letting everyone down.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A spontaneous conga line.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A vagina that leads to another dimension.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Disco fever.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting your dick stuck in a Chinese finger trap with another dick.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fisting.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The thin veneer of situational causality that underlies porn.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Girls that always be textin'.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Blowing some dudes in an alley.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sneezing, farting, and coming at the same time.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Drinking ten 5-hour ENERGYs&reg; to get fifty continuous hours of energy.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Velcro&trade;.`,
      watermark: `X3`,
      cardSetId: insertResult.result![0].id
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.delete('black_card', {
      text: `____: Hours of fun. Easy to use. Perfect for ____!`,
      draw: 0,
      pick: 2,
      watermark: `X3`
    });
    await queryRunner.delete('black_card', {
      text: `Turns out that ____-Man was neither the hero we needed nor wanted.`,
      draw: 0,
      pick: 1,
      watermark: `X3`
    });
    await queryRunner.delete('black_card', {
      text: `What left this stain on my couch?`,
      draw: 0,
      pick: 1,
      watermark: `X3`
    });
    await queryRunner.delete('black_card', {
      text: `Call the law offices of Goldstein &amp; Goldstein, because no one should have to tolerate ____ in the workplace.`,
      draw: 0,
      pick: 1,
      watermark: `X3`
    });
    await queryRunner.delete('black_card', {
      text: `A successful job interview begins with a firm handshake and ends with ____.`,
      draw: 0,
      pick: 1,
      watermark: `X3`
    });
    await queryRunner.delete('black_card', {
      text: `Lovin' you is easy 'cause you're ____.`,
      draw: 0,
      pick: 1,
      watermark: `X3`
    });
    await queryRunner.delete('black_card', {
      text: `Money can't buy me love, but it can buy me ____.`,
      draw: 0,
      pick: 1,
      watermark: `X3`
    });
    await queryRunner.delete('black_card', {
      text: `Listen, son. If you want to get involved with ____, I won't stop you. Just steer clear of ____.`,
      draw: 0,
      pick: 2,
      watermark: `X3`
    });
    await queryRunner.delete('black_card', {
      text: `During high school, I never really fit in until I found ____ club.`,
      draw: 0,
      pick: 1,
      watermark: `X3`
    });
    await queryRunner.delete('black_card', {
      text: `Hey baby, come back to my place and I'll show you ____.`,
      draw: 0,
      pick: 1,
      watermark: `X3`
    });
    await queryRunner.delete('black_card', {
      text: `To prepare for his upcoming role, Daniel Day-Lewis immersed himself in the world of ____.`,
      draw: 0,
      pick: 1,
      watermark: `X3`
    });
    await queryRunner.delete('black_card', {
      text: `Finally! A service that delivers ____ right to your door.`,
      draw: 0,
      pick: 1,
      watermark: `X3`
    });
    await queryRunner.delete('black_card', {
      text: `My gym teacher got fired for adding ____ to the obstacle course.`,
      draw: 0,
      pick: 1,
      watermark: `X3`
    });
    await queryRunner.delete('black_card', {
      text: `When you get right down to it, ____ is just ____.`,
      draw: 0,
      pick: 2,
      watermark: `X3`
    });
    await queryRunner.delete('black_card', {
      text: `As part of his daily regimen, Anderson Cooper sets aside 15 minutes for ____.`,
      draw: 0,
      pick: 1,
      watermark: `X3`
    });
    await queryRunner.delete('black_card', {
      text: `In the seventh circle of Hell, sinners must endure ____ for all eternity.`,
      draw: 0,
      pick: 1,
      watermark: `X3`
    });
    await queryRunner.delete('black_card', {
      text: `After months of practice with ____, I think I'm finally ready for ____.`,
      draw: 0,
      pick: 2,
      watermark: `X3`
    });
    await queryRunner.delete('black_card', {
      text: `The blind date was going horribly until we discovered our shared interest in ____.`,
      draw: 0,
      pick: 1,
      watermark: `X3`
    });
    await queryRunner.delete('black_card', {
      text: `____. Awesome in theory, kind of a mess in practice.`,
      draw: 0,
      pick: 1,
      watermark: `X3`
    });
    await queryRunner.delete('black_card', {
      text: `With enough time and pressure, ____ will turn into ____.`,
      draw: 0,
      pick: 2,
      watermark: `X3`
    });
    await queryRunner.delete('black_card', {
      text: `I'm not like the rest of you. I'm too rich and busy for ____.`,
      draw: 0,
      pick: 1,
      watermark: `X3`
    });
    await queryRunner.delete('black_card', {
      text: `And what did <i>you</i> bring for show and tell?`,
      draw: 0,
      pick: 1,
      watermark: `X3`
    });
    await queryRunner.delete('black_card', {
      text: `Having problems with ____? Try ____!`,
      draw: 0,
      pick: 2,
      watermark: `X3`
    });
    await queryRunner.delete('black_card', {
      text: `As part of his contract, Prince won't perform without ____ in his dressing room.`,
      draw: 0,
      pick: 1,
      watermark: `X3`
    });
    await queryRunner.delete('black_card', {
      text: `My life is ruled by a vicious cycle of ____ and ____.`,
      draw: 0,
      pick: 2,
      watermark: `X3`
    });

    await queryRunner.delete('white_card', {
      text: `The primal, ball-slapping sex your parents are having right now.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `A cat video so cute that your eyes roll back and your spine slides out of your anus.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `Cock.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `A cop who is also a dog.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `Dying alone and in pain.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `Gay aliens.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `The way white people is.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `Reverse cowgirl.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `The Quesadilla Explosion Salad&trade; from Chili's&reg;.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `Actually getting shot, for real.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `Not having sex.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `Vietnam flashbacks.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `Running naked through a mall, pissing and shitting everywhere.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `Nothing.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `Warm, velvety muppet sex.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `Self-flagellation.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `The systematic destruction of an entire people and their way of life.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `Samuel L. Jackson.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `A boo-boo.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `Going around punching people.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `The entire Internet.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `Some kind of bird-man.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `Chugging a lava lamp.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `Having sex on top of a pizza.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `Indescribable loneliness.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `An ass disaster.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `Shutting the fuck up.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `All my friends dying.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `Putting an entire peanut butter and jelly sandwich into the VCR.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `Spending lots of money.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `Some douche with an acoustic guitar.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `Flying robots that kill people.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `A greased-up Matthew McConaughey.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `An unstoppable wave of fire ants.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `Not contributing to society in any meaningful way.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `An all-midget production of Shakespeare's <i>Richard III</i>.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `Screaming like a maniac.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `The moist, demanding chasm of his mouth.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `Filling every orifice with butterscotch pudding.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `Unlimited soup, salad, and breadsticks.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `Crying into the pages of Sylvia Plath.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `A PowerPoint presentation.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `A surprising amount of hair.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `Eating Tom Selleck's mustache to gain his powers.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `Roland the Farter, flatulist to the king.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `That ass.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `A pile of squirming bodies.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `Buying the right pants to be cool.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `Blood farts.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `Three months in the hole.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `A botched circumcision.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `The Land of Chocolate.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `Slapping a racist old lady.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `A lamprey swimming up the toilet and latching onto your taint.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `Jumping out at people.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `A black male in his early 20s, last seen wearing a hoodie.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `Mufasa's death scene.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `Bill Clinton, naked on a bearskin rug with a saxophone.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `Demonic possession.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `The Harlem Globetrotters.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `Vomiting mid-blowjob.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `My manservant, Claude.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `Having shotguns for legs.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `Letting everyone down.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `A spontaneous conga line.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `A vagina that leads to another dimension.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `Disco fever.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `Getting your dick stuck in a Chinese finger trap with another dick.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `Fisting.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `The thin veneer of situational causality that underlies porn.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `Girls that always be textin'.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `Blowing some dudes in an alley.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `Sneezing, farting, and coming at the same time.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `Drinking ten 5-hour ENERGYs&reg; to get fifty continuous hours of energy.`,
      watermark: `X3`
    });
    await queryRunner.delete('white_card', {
      text: `Velcro&trade;.`,
      watermark: `X3`
    });

    await queryRunner.delete('card_set', {
      name: `The Third Expansion`,
      baseDeck: false,
      description: `The official Third Expansion.`,
      weight: 12,
      active: true
    });
  }
}
