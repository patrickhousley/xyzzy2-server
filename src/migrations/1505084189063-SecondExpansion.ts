import { MigrationInterface, QueryRunner } from 'typeorm';

export class SecondExpansion1505084189063 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    const insertResult = await queryRunner.insert('card_set', {
      name: `The Second Expansion`, baseDeck: true, description: `The official Second Expansion.`, weight: 11, active: true
    });

    await queryRunner.insert('black_card', {
      text: `During his midlife crisis, my dad got really into ____.`, draw: 0, pick: 1, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `____ would be woefully incomplete without ____.`, draw: 0, pick: 2, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `My new favorite porn star is Joey "____" McGee.`, draw: 0, pick: 1, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Before I run for president, I must destroy all evidence of my involvement with ____.`, draw: 0, pick: 1, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `This is your captain speaking. Fasten your seatbelts and prepare for ____.`, draw: 0, pick: 1, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In his newest and most difficult stunt, David Blaine must escape from ____.`, draw: 0, pick: 1, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The Five Stages of Grief: denial, anger, bargaining, ____, acceptance.`, draw: 0, pick: 1, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `My mom freaked out when she looked at my browser history and found ____.com/____.`, draw: 0, pick: 2, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I went from ____ to ____, all thanks to ____.`, draw: 2, pick: 3, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Members of New York's social elite are paying thousands of dollars just to experience ____.`, draw: 0, pick: 1, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `This month's Cosmo: "Spice up your sex life by bringing ____ into the bedroom."`, draw: 0, pick: 1, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Little Miss Muffet Sat on a tuffet, Eating her curds and ____.`, draw: 0, pick: 1, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `If God didn't want us to enjoy ____, he wouldn't have given us ____.`, draw: 0, pick: 2, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `My country, 'tis of thee, sweet land of ____.`, draw: 0, pick: 1, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `After months of debate, the Occupy Wall Street General Assembly could only agree on "More ____!"`, draw: 0, pick: 1, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I spent my whole life working toward ____, only to have it ruined by ____.`, draw: 0, pick: 2, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Next time on Dr. Phil: How to talk to your child about ____.`, draw: 0, pick: 1, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Only two things in life are certain: death and ____.`, draw: 0, pick: 1, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Everyone down on the ground! We don't want to hurt anyone. We're just here for ____.`, draw: 0, pick: 1, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The healing process began when I joined a support group for victims of ____.`, draw: 0, pick: 1, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The votes are in, and the new high school mascot is ____.`, draw: 0, pick: 1, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Charades was ruined for me forever when my mom had to act out ____.`, draw: 0, pick: 1, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Before ____, all we had was ____.`, draw: 0, pick: 2, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Tonight on 20/20: What you don't know about ____ could kill you.`, draw: 0, pick: 1, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `You haven't truly lived until you've experienced ____ and ____ at the same time.`, draw: 0, pick: 2, watermark: `X2`, cardSetId: insertResult.result![0].id
    });

    await queryRunner.insert('white_card', {
      text: `A soulful rendition of "Ol' Man River."`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Intimacy problems.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A sweaty, panting leather daddy.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Spring break!`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Being awesome at sex.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dining with cardboard cutouts of the cast of "Friends."`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Another shot of morphine.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bullshit.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Google.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The new Radiohead album.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An army of skeletons.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A man in yoga pants with a ponytail and feather earrings.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mild autism.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nunchuck moves.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Whipping a disobedient slave.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An ether-soaked rag.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A sweet spaceship.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A 55-gallon drum of lube.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Special musical guest, Cher.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The human body.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Boris the Soviet Love Hammer.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The grey nutrient broth that sustains Mitt Romney.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tiny nipples.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Power.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Oncoming traffic.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A dollop of sour cream.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A slightly shittier parallel universe.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `My first kill.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Graphic violence, adult language, and some sexual content.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fetal alcohol syndrome.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The day the birds attacked.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `One Ring to rule them all.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Grandpa's ashes.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Basic human decency.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A Burmese tiger pit.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Death by Steven Seagal.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A bigger, blacker dick.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A sad fat dragon with no friends.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Catastrophic urethral trauma.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hillary Clinton's death stare.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Existing.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mooing.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Swiftly achieving orgasm.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Daddy's belt.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Double penetration.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Weapons-grade plutonium.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Some really fucked-up shit.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Subduing a grizzly bear and making her your wife.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Rising from the grave.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The mixing of the races.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Taking a man's eyes and balls out and putting his eyes where his balls go and then his balls in the eye holes.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Scrotal frostbite.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `All of this blood.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Loki, the trickster god.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Whining like a little bitch.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pumping out a baby every nine months.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tongue.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Finding Waldo.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Upgrading homeless people to mobile hotspots.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Wearing an octopus for a hat.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `An unhinged ferris wheel rolling toward the sea.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Living in a trashcan.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The corporations.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A magic hippie love cloud.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fuck Mountain.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Survivor's guilt.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Me.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting hilariously gang-banged by the Blue Man Group.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Jeff Goldblum.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Making a friend.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Beefin' over turf.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A squadron of moles wearing aviator goggles.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The mere concept of Applebee's&reg;.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A pi&ntilde;ata full of scorpions.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pretty Pretty Princess Dress-Up Board Game&reg;.`, watermark: `X2`, cardSetId: insertResult.result![0].id
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.delete('black_card', {
      text: `During his midlife crisis, my dad got really into ____.`, draw: 0, pick: 1, watermark: `X2`
    });
    await queryRunner.delete('black_card', {
      text: `____ would be woefully incomplete without ____.`, draw: 0, pick: 2, watermark: `X2`
    });
    await queryRunner.delete('black_card', {
      text: `My new favorite porn star is Joey "____" McGee.`, draw: 0, pick: 1, watermark: `X2`
    });
    await queryRunner.delete('black_card', {
      text: `Before I run for president, I must destroy all evidence of my involvement with ____.`, draw: 0, pick: 1, watermark: `X2`
    });
    await queryRunner.delete('black_card', {
      text: `This is your captain speaking. Fasten your seatbelts and prepare for ____.`, draw: 0, pick: 1, watermark: `X2`
    });
    await queryRunner.delete('black_card', {
      text: `In his newest and most difficult stunt, David Blaine must escape from ____.`, draw: 0, pick: 1, watermark: `X2`
    });
    await queryRunner.delete('black_card', {
      text: `The Five Stages of Grief: denial, anger, bargaining, ____, acceptance.`, draw: 0, pick: 1, watermark: `X2`
    });
    await queryRunner.delete('black_card', {
      text: `My mom freaked out when she looked at my browser history and found ____.com/____.`, draw: 0, pick: 2, watermark: `X2`
    });
    await queryRunner.delete('black_card', {
      text: `I went from ____ to ____, all thanks to ____.`, draw: 2, pick: 3, watermark: `X2`
    });
    await queryRunner.delete('black_card', {
      text: `Members of New York's social elite are paying thousands of dollars just to experience ____.`, draw: 0, pick: 1, watermark: `X2`
    });
    await queryRunner.delete('black_card', {
      text: `This month's Cosmo: "Spice up your sex life by bringing ____ into the bedroom."`, draw: 0, pick: 1, watermark: `X2`
    });
    await queryRunner.delete('black_card', {
      text: `Little Miss Muffet Sat on a tuffet, Eating her curds and ____.`, draw: 0, pick: 1, watermark: `X2`
    });
    await queryRunner.delete('black_card', {
      text: `If God didn't want us to enjoy ____, he wouldn't have given us ____.`, draw: 0, pick: 2, watermark: `X2`
    });
    await queryRunner.delete('black_card', {
      text: `My country, 'tis of thee, sweet land of ____.`, draw: 0, pick: 1, watermark: `X2`
    });
    await queryRunner.delete('black_card', {
      text: `After months of debate, the Occupy Wall Street General Assembly could only agree on "More ____!"`, draw: 0, pick: 1, watermark: `X2`
    });
    await queryRunner.delete('black_card', {
      text: `I spent my whole life working toward ____, only to have it ruined by ____.`, draw: 0, pick: 2, watermark: `X2`
    });
    await queryRunner.delete('black_card', {
      text: `Next time on Dr. Phil: How to talk to your child about ____.`, draw: 0, pick: 1, watermark: `X2`
    });
    await queryRunner.delete('black_card', {
      text: `Only two things in life are certain: death and ____.`, draw: 0, pick: 1, watermark: `X2`
    });
    await queryRunner.delete('black_card', {
      text: `Everyone down on the ground! We don't want to hurt anyone. We're just here for ____.`, draw: 0, pick: 1, watermark: `X2`
    });
    await queryRunner.delete('black_card', {
      text: `The healing process began when I joined a support group for victims of ____.`, draw: 0, pick: 1, watermark: `X2`
    });
    await queryRunner.delete('black_card', {
      text: `The votes are in, and the new high school mascot is ____.`, draw: 0, pick: 1, watermark: `X2`
    });
    await queryRunner.delete('black_card', {
      text: `Charades was ruined for me forever when my mom had to act out ____.`, draw: 0, pick: 1, watermark: `X2`
    });
    await queryRunner.delete('black_card', {
      text: `Before ____, all we had was ____.`, draw: 0, pick: 2, watermark: `X2`
    });
    await queryRunner.delete('black_card', {
      text: `Tonight on 20/20: What you don't know about ____ could kill you.`, draw: 0, pick: 1, watermark: `X2`
    });
    await queryRunner.delete('black_card', {
      text: `You haven't truly lived until you've experienced ____ and ____ at the same time.`, draw: 0, pick: 2, watermark: `X2`
    });

    await queryRunner.delete('white_card', {
      text: `A soulful rendition of "Ol' Man River."`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `Intimacy problems.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `A sweaty, panting leather daddy.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `Spring break!`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `Being awesome at sex.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `Dining with cardboard cutouts of the cast of "Friends."`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `Another shot of morphine.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `Bullshit.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `The Google.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `The new Radiohead album.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `An army of skeletons.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `A man in yoga pants with a ponytail and feather earrings.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `Mild autism.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `Nunchuck moves.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `Whipping a disobedient slave.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `An ether-soaked rag.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `A sweet spaceship.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `A 55-gallon drum of lube.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `Special musical guest, Cher.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `The human body.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `Boris the Soviet Love Hammer.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `The grey nutrient broth that sustains Mitt Romney.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `Tiny nipples.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `Power.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `Oncoming traffic.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `A dollop of sour cream.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `A slightly shittier parallel universe.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `My first kill.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `Graphic violence, adult language, and some sexual content.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `Fetal alcohol syndrome.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `The day the birds attacked.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `One Ring to rule them all.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `Grandpa's ashes.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `Basic human decency.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `A Burmese tiger pit.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `Death by Steven Seagal.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `A bigger, blacker dick.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `A sad fat dragon with no friends.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `Catastrophic urethral trauma.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `Hillary Clinton's death stare.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `Existing.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `Mooing.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `Swiftly achieving orgasm.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `Daddy's belt.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `Double penetration.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `Weapons-grade plutonium.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `Some really fucked-up shit.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `Subduing a grizzly bear and making her your wife.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `Rising from the grave.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `The mixing of the races.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `Taking a man's eyes and balls out and putting his eyes where his balls go and then his balls in the eye holes.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `Scrotal frostbite.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `All of this blood.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `Loki, the trickster god.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `Whining like a little bitch.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `Pumping out a baby every nine months.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `Tongue.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `Finding Waldo.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `Upgrading homeless people to mobile hotspots.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `Wearing an octopus for a hat.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `An unhinged ferris wheel rolling toward the sea.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `Living in a trashcan.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `The corporations.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `A magic hippie love cloud.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `Fuck Mountain.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `Survivor's guilt.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `Me.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `Getting hilariously gang-banged by the Blue Man Group.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `Jeff Goldblum.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `Making a friend.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `Beefin' over turf.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `A squadron of moles wearing aviator goggles.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `The mere concept of Applebee's&reg;.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `A pi&ntilde;ata full of scorpions.`, watermark: `X2`
    });
    await queryRunner.delete('white_card', {
      text: `Pretty Pretty Princess Dress-Up Board Game&reg;.`, watermark: `X2`
    });

    await queryRunner.delete('card_set', {
      name: `The Second Expansion`, baseDeck: true, description: `The official Second Expansion.`, weight: 11, active: true
    });
  }

}
