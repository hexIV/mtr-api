import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class RaceTableChanges1540922083841 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.renameColumn(
            'races',
            'race_id',
            'id'
        );

        await queryRunner.renameColumn(
            'races',
            'race_type',
            'type'
        );

        await queryRunner.renameColumn(
            'races',
            'race_no',
            'number'
        );

        await queryRunner.renameColumn(
            'races',
            'race_class',
            'class'
        );

        await queryRunner.addColumns(
            "races",
            [
                new TableColumn({
                    name: "prize1",
                    type: "int"
                }),
                new TableColumn({
                    name: "prize2",
                    type: "int"
                }),
                new TableColumn({
                    name: "prize3",
                    type: "int"
                }),
                new TableColumn({
                    name: "prize4",
                    type: "int"
                }),
                new TableColumn({
                    name: "prize5",
                    type: "int"
                })
            ]
        )

        await queryRunner.query("UPDATE `races` SET `prize1` = `race_prize1`, `prize2` = `race_prize2`, `prize3` = `race_prize3`, `prize4` = `race_prize4`, `prize5` = `race_prize5`");

        await queryRunner.renameColumn(
            'races',
            'race_distance',
            'distance'
        );

        await queryRunner.renameColumn(
            'races',
            'race_horsesno',
            'hourses_count'
        );

        await queryRunner.renameColumn(
            'races',
            'race_status',
            'status'
        );

        await queryRunner.addColumn("races", new TableColumn({
            name: "starts_on",
            type: "datetime",
            default: "CURRENT_TIMESTAMP"
        }));

        await queryRunner.query("UPDATE `races` SET `starts_on` = FROM_UNIXTIME(`race_time`)");

        await queryRunner.dropColumn(
            "races",
            "race_prize1"
        );

        await queryRunner.dropColumn(
            "races",
            "race_prize5"
        );

        await queryRunner.dropColumn(
            "races",
            "race_prize2"
        );

        await queryRunner.dropColumn(
            "races",
            "race_prize3"
        );

        await queryRunner.dropColumn(
            "races",
            "race_prize4"
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
