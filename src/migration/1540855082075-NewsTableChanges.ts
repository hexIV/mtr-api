import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class NewsTableChanges1540855082075 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.renameColumn(
            "news",
            "news_id",
            "id"
        );

        await queryRunner.renameColumn(
            "news",
            "news_header",
            "title"
        );

        await queryRunner.renameColumn(
            "news",
            "news_text",
            "body",
        );

        await queryRunner.addColumn(
            "news",
            new TableColumn({
                name: "created",
                type: "datetime",
                default: "CURRENT_TIMESTAMP"
            })
        );

        await queryRunner.query("UPDATE `news` SET `created` = FROM_UNIXTIME(`news_date`);");

        await queryRunner.dropColumn(
            "news",
            "news_date"
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }
}
