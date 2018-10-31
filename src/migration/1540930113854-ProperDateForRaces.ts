import {MigrationInterface, QueryRunner} from "typeorm";

export class ProperDateForRaces1540930113854 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropColumn(
            "races",
            "race_time"
        );

        await queryRunner.query(`
            UPDATE races r
            INNER JOIN meetings m ON m.meeting_id = r.meeting_id
            SET starts_on = CONCAT(
                DATE(FROM_UNIXTIME(m.meeting_datetime)),
                " ",
                SUBTIME(TIME(r.starts_on), '06:00:00')
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
