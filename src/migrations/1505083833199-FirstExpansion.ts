import { MigrationInterface, QueryRunner } from 'typeorm';

export class FirstExpansion1505083833199 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    const insertResult = await queryRunner.insert('card_set', {
      name: `The First Expansion`, baseDeck: true, description: `The official First Expansion.`, weight: 10, active: true
    });

    await queryRunner.insert('black_card', {
      text: `He who controls ____ controls the world.`, draw: 0, pick: 1, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The CIA now interrogates enemy agents by repeatedly subjecting them to ____.`, draw: 0, pick: 1, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Dear Sir or Madam, We regret to inform you that the Office of ____ has denied your request for ____.`, draw: 0, pick: 2, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In Rome, there are whisperings that the Vatican has a secret room devoted to ____.`, draw: 0, pick: 1, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Science will never explain the origin of ____.`, draw: 0, pick: 1, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `When all else fails, I can always masturbate to ____.`, draw: 0, pick: 1, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `I learned the hard way that you can't cheer up a grieving friend with ____.`, draw: 0, pick: 1, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In its new tourism campaign, Detroit proudly proclaims that it has finally eliminated ____.`, draw: 0, pick: 1, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `An international tribunal has found ____ guilty of ____.`, draw: 0, pick: 2, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `The socialist governments of Scandinavia have declared that access to ____ is a basic human right.`, draw: 0, pick: 1, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In his new self-produced album, Kanye West raps over the sounds of ____.`, draw: 0, pick: 1, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What's the gift that keeps on giving?`, draw: 0, pick: 1, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `This season on Man vs. Wild, Bear Grylls must survive in the depths of the Amazon with only ____ and his wits.`, draw: 0, pick: 1, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `When I pooped, what came out of my butt?`, draw: 0, pick: 1, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In the distant future, historians will agree that ____ marked the beginning of America's decline.`, draw: 0, pick: 1, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `In a pinch, ____ can be a suitable substitute for ____.`, draw: 0, pick: 2, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What has been making life difficult at the nudist colony?`, draw: 0, pick: 1, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `Michael Bay's new three-hour action epic pits ____ against ____.`, draw: 0, pick: 2, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `And I would have gotten away with it, too, if it hadn't been for ____!`, draw: 0, pick: 1, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('black_card', {
      text: `What brought the orgy to a grinding halt?`, draw: 0, pick: 1, watermark: `X1`, cardSetId: insertResult.result![0].id
    });

    await queryRunner.insert('white_card', {
      text: `Leveling up.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Literally eating shit.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Making the penises kiss.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Media coverage.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Moral ambiguity.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `My machete.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `One thousand Slim Jims.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ominous background music.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Overpowering your father.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Pistol-whipping a hostage.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Quiche.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Quivering jowls.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Revenge fucking.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ripping into a man's chest and pulling out his still-beating heart.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Ryan Gosling riding in on a white horse.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Santa Claus.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Scrotum tickling.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sexual humiliation.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sexy Siamese twins.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Slow motion.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Space muffins.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Statistically validated stereotypes.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Sudden Poop Explosion Disease.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The boners of the elderly.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The economy.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Gulags.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The harsh light of day.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The hiccups.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The shambling corpse of Larry King.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The four arms of Vishnu.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Being a busy adult with many important things to do.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Tripping balls.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Words, words, words.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Zeus's sexual appetites.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A big black dick.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A beached whale.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A bloody pacifier.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A crappy little hand.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A low standard of living.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A nuanced critique.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Panty raids.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A passionate Latino lover.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A rival dojo.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A web of lies.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `A woman scorned.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Apologizing.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Appreciative snapping.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Neil Patrick Harris.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Beating your wives.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Being a dinosaur.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Shaft.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Clams.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Bosnian chicken farmers.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Nubile slave boys.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Carnies.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Coughing into a vagina.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Suicidal thoughts.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dancing with a broom.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Deflowering the princess.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Dorito breath.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Eating an albino.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Enormous Scandinavian women.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Fabricating statistics.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Finding a skeleton.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Gandalf.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Genetically engineered super-soldiers.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `George Clooney's musk.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting abducted by Peter Pan.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Getting in her pants, politely.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Gladiatorial combat.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Good grammar.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Hipsters.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Historical revisionism.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Insatiable bloodlust.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Jafar.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Jean-Claude Van Damme.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Just the tip.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Mad hacky-sack skills.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `Medieval Times&reg; Dinner &amp; Tournament.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
    await queryRunner.insert('white_card', {
      text: `The Fanta&reg; girls.`, watermark: `X1`, cardSetId: insertResult.result![0].id
    });
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.delete('black_card', {
      text: `He who controls ____ controls the world.`, draw: 0, pick: 1, watermark: `X1`
    });
    await queryRunner.delete('black_card', {
      text: `The CIA now interrogates enemy agents by repeatedly subjecting them to ____.`, draw: 0, pick: 1, watermark: `X1`
    });
    await queryRunner.delete('black_card', {
      text: `Dear Sir or Madam, We regret to inform you that the Office of ____ has denied your request for ____.`, draw: 0, pick: 2, watermark: `X1`
    });
    await queryRunner.delete('black_card', {
      text: `In Rome, there are whisperings that the Vatican has a secret room devoted to ____.`, draw: 0, pick: 1, watermark: `X1`
    });
    await queryRunner.delete('black_card', {
      text: `Science will never explain the origin of ____.`, draw: 0, pick: 1, watermark: `X1`
    });
    await queryRunner.delete('black_card', {
      text: `When all else fails, I can always masturbate to ____.`, draw: 0, pick: 1, watermark: `X1`
    });
    await queryRunner.delete('black_card', {
      text: `I learned the hard way that you can't cheer up a grieving friend with ____.`, draw: 0, pick: 1, watermark: `X1`
    });
    await queryRunner.delete('black_card', {
      text: `In its new tourism campaign, Detroit proudly proclaims that it has finally eliminated ____.`, draw: 0, pick: 1, watermark: `X1`
    });
    await queryRunner.delete('black_card', {
      text: `An international tribunal has found ____ guilty of ____.`, draw: 0, pick: 2, watermark: `X1`
    });
    await queryRunner.delete('black_card', {
      text: `The socialist governments of Scandinavia have declared that access to ____ is a basic human right.`, draw: 0, pick: 1, watermark: `X1`
    });
    await queryRunner.delete('black_card', {
      text: `In his new self-produced album, Kanye West raps over the sounds of ____.`, draw: 0, pick: 1, watermark: `X1`
    });
    await queryRunner.delete('black_card', {
      text: `What's the gift that keeps on giving?`, draw: 0, pick: 1, watermark: `X1`
    });
    await queryRunner.delete('black_card', {
      text: `This season on Man vs. Wild, Bear Grylls must survive in the depths of the Amazon with only ____ and his wits.`, draw: 0, pick: 1, watermark: `X1`
    });
    await queryRunner.delete('black_card', {
      text: `When I pooped, what came out of my butt?`, draw: 0, pick: 1, watermark: `X1`
    });
    await queryRunner.delete('black_card', {
      text: `In the distant future, historians will agree that ____ marked the beginning of America's decline.`, draw: 0, pick: 1, watermark: `X1`
    });
    await queryRunner.delete('black_card', {
      text: `In a pinch, ____ can be a suitable substitute for ____.`, draw: 0, pick: 2, watermark: `X1`
    });
    await queryRunner.delete('black_card', {
      text: `What has been making life difficult at the nudist colony?`, draw: 0, pick: 1, watermark: `X1`
    });
    await queryRunner.delete('black_card', {
      text: `Michael Bay's new three-hour action epic pits ____ against ____.`, draw: 0, pick: 2, watermark: `X1`
    });
    await queryRunner.delete('black_card', {
      text: `And I would have gotten away with it, too, if it hadn't been for ____!`, draw: 0, pick: 1, watermark: `X1`
    });
    await queryRunner.delete('black_card', {
      text: `What brought the orgy to a grinding halt?`, draw: 0, pick: 1, watermark: `X1`
    });

    await queryRunner.delete('white_card', {
      text: `Leveling up.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Literally eating shit.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Making the penises kiss.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Media coverage.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Moral ambiguity.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `My machete.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `One thousand Slim Jims.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Ominous background music.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Overpowering your father.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Pistol-whipping a hostage.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Quiche.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Quivering jowls.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Revenge fucking.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Ripping into a man's chest and pulling out his still-beating heart.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Ryan Gosling riding in on a white horse.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Santa Claus.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Scrotum tickling.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Sexual humiliation.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Sexy Siamese twins.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Slow motion.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Space muffins.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Statistically validated stereotypes.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Sudden Poop Explosion Disease.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `The boners of the elderly.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `The economy.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `The Gulags.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `The harsh light of day.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `The hiccups.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `The shambling corpse of Larry King.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `The four arms of Vishnu.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Being a busy adult with many important things to do.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Tripping balls.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Words, words, words.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Zeus's sexual appetites.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `A big black dick.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `A beached whale.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `A bloody pacifier.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `A crappy little hand.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `A low standard of living.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `A nuanced critique.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Panty raids.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `A passionate Latino lover.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `A rival dojo.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `A web of lies.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `A woman scorned.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Apologizing.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Appreciative snapping.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Neil Patrick Harris.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Beating your wives.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Being a dinosaur.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Shaft.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Clams.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Bosnian chicken farmers.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Nubile slave boys.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Carnies.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Coughing into a vagina.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Suicidal thoughts.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Dancing with a broom.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Deflowering the princess.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Dorito breath.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Eating an albino.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Enormous Scandinavian women.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Fabricating statistics.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Finding a skeleton.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Gandalf.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Genetically engineered super-soldiers.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `George Clooney's musk.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Getting abducted by Peter Pan.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Getting in her pants, politely.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Gladiatorial combat.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Good grammar.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Hipsters.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Historical revisionism.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Insatiable bloodlust.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Jafar.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Jean-Claude Van Damme.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Just the tip.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Mad hacky-sack skills.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `Medieval Times&reg; Dinner &amp; Tournament.`, watermark: `X1`
    });
    await queryRunner.delete('white_card', {
      text: `The Fanta&reg; girls.`, watermark: `X1`
    });

    await queryRunner.delete('card_set', {
      name: `The First Expansion`, baseDeck: true, description: `The official First Expansion.`, weight: 10, active: true
    });
  }

}
