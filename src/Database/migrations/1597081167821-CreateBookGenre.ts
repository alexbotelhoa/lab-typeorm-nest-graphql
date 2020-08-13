import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateBookGenre1597081167821 implements MigrationInterface {

    private genreBookTable = new Table({
        name: 'books_genres',
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
                name: 'book_id',
                type: 'integer',
                isNullable: true,
            },
            {
                name: 'genre_id',
                type: 'integer',
                isNullable: true,
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
        await queryRunner.createTable(this.genreBookTable);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable(this.genreBookTable);
    }

}
