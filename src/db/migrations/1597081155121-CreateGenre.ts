import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateGenre1597081155121 implements MigrationInterface {

    private genreTable = new Table({
        name: 'genres',
        columns: [
            {
                name: 'id',
                type: 'integer',
                isPrimary: true,
                isUnique: true,
                isGenerated: true,
                generationStrategy: 'increment',
            },
            {
                name: 'genre_name',
                type: 'varchar',
                length: '255',
                isNullable: false,
            },
            {
                name: 'created_at',
                type: 'timestamp',
                isPrimary: false,
                isNullable: false,
                default: 'now()',
            },
            {
                name: 'updated_at',
                type: 'timestamp',
                isPrimary: false,
                isNullable: false,
                default: 'now()',
            }],
    });


    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(this.genreTable);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable(this.genreTable);
    }

}
