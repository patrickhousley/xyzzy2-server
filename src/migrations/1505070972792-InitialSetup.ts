import { MigrationInterface, QueryRunner, TableSchema, ColumnSchema, ForeignKeySchema } from 'typeorm';

export class InitialSetup1505070972792 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(new TableSchema(
      'black_card',
      [
        new ColumnSchema({
          name: 'id',
          type: 'integer',
          isNullable: false,
          isGenerated: true,
          generationStrategy: 'increment',
          isPrimary: true,
          isUnique: true
        }),
        new ColumnSchema({
          name: 'text',
          type: 'character',
          length: 255,
          isNullable: false
        }),
        new ColumnSchema({
          name: 'draw',
          type: 'integer',
          default: 0,
          isNullable: false
        }),
        new ColumnSchema({
          name: 'pick',
          type: 'integer',
          default: 1,
          isNullable: false
        }),
        new ColumnSchema({
          name: 'watermark',
          type: 'character',
          length: 5,
          isNullable: true
        }),
        new ColumnSchema({
          name: 'cardSetId',
          type: 'integer',
          isNullable: true
        })
      ]
    ));

    await queryRunner.createTable(new TableSchema(
      'white_card',
      [
        new ColumnSchema({
          name: 'id',
          type: 'integer',
          isNullable: false,
          isGenerated: true,
          generationStrategy: 'increment',
          isPrimary: true,
          isUnique: true
        }),
        new ColumnSchema({
          name: 'text',
          type: 'character',
          length: 255,
          isNullable: false
        }),
        new ColumnSchema({
          name: 'watermark',
          type: 'character',
          length: 5,
          isNullable: true
        }),
        new ColumnSchema({
          name: 'cardSetId',
          type: 'integer',
          isNullable: true
        })
      ]
    ));

    await queryRunner.createTable(new TableSchema(
      'card_set',
      [
        new ColumnSchema({
          name: 'id',
          type: 'integer',
          isNullable: false,
          isGenerated: true,
          generationStrategy: 'increment',
          isPrimary: true,
          isUnique: true
        }),
        new ColumnSchema({
          name: 'active',
          type: 'boolean',
          default: false,
          isNullable: false
        }),
        new ColumnSchema({
          name: 'name',
          type: 'character',
          length: 255,
          isNullable: true
        }),
        new ColumnSchema({
          name: 'baseDeck',
          type: 'boolean',
          default: false,
          isNullable: false
        }),
        new ColumnSchema({
          name: 'description',
          type: 'character',
          length: 255,
          isNullable: true
        }),
        new ColumnSchema({
          name: 'weight',
          type: 'integer',
          default: 0,
          isNullable: false
        })
      ]
    ));

    await queryRunner.createForeignKey(
      'black_card',
      new ForeignKeySchema(
        'fk_card_set_black_card',
        ['cardSetId'],
        ['id'],
        'card_set'
      )
    );

    await queryRunner.createForeignKey(
      'white_card',
      new ForeignKeySchema(
        'fk_card_set_white_card',
        ['cardSetId'],
        ['id'],
        'card_set'
      )
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('black_card');
    await queryRunner.dropTable('white_card');
    await queryRunner.dropTable('card_set');
  }
}
