import {MigrationInterface, QueryRunner} from "typeorm";

export class SeasonTableUpdate1540857530965 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.renameColumn(
            "seasons",
            "season_id",
            "id"
        );

        await queryRunner.renameColumn(
            "seasons",
            "season_yr",
            "year"
        );

        await queryRunner.renameColumn(
            "seasons",
            "currentseason",
            "isCurrent",
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
