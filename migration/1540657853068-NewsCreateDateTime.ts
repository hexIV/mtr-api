import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class NewsCreateDateTime1540657853068 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.addColumn('news', new TableColumn({
            name: "created",
            type: "datetime",
            default: "CURRENT_TIMESTAMP"
        }));
        await queryRunner.query("UPDATE news SET created = FROM_UNIXTIME(news_date)");
        await queryRunner.dropColumn('news', 'news_date');
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
