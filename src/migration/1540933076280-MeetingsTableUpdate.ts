import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class MeetingsTableUpdate1540933076280 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.renameColumn(
            "meetings",
            "meeting_id",
            "id"
        );

        await queryRunner.renameColumn(
            "meetings",
            "meeting_no",
            "number"
        );

        await queryRunner.addColumn(
            "meetings",
            new TableColumn({
                isNullable: false,
                name: "starts_on",
                type: "datetime"
            })
        );

        await queryRunner.query("UPDATE meetings SET starts_on = SUBTIME(FROM_UNIXTIME(meeting_datetime), '06:00:00')");

        await queryRunner.dropColumn(
            "meetings",
            "meeting_datetime"
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
