import { Driverstablepoints } from "../entity/Driverstablepoints";

export class DriversClassification {
    public async updateClassification(seasonId: Number) {
        await Driverstablepoints.query(
            `SELECT
                SUM(driverstablepoints.driver_points) as total_points,
                SUM(CASE driverstablepoints.driver_points WHEN 7 THEN 1 ELSE 0 END) AS first, 
                SUM(CASE driverstablepoints.driver_points WHEN 4 THEN 1 ELSE 0 END) AS second, 
                SUM(CASE driverstablepoints.driver_points WHEN 2 THEN 1 ELSE 0 END) AS third, 
                SUM(CASE driverstablepoints.driver_points WHEN 1 THEN 1 ELSE 0 END) AS fourth,
                (SELECT COUNT(raceresults.result_id) FROM raceresults INNER JOIN races on races.id = raceresults.race_id INNER JOIN meetings ON meetings.id = races.meeting_id INNER JOIN seasons ON seasons.id = meetings.season_id WHERE raceresults.driver_id = driverstablepoints.driver_id AND seasons.id = driverstablepoints.season_id) AS starts,
                (SELECT COUNT(raceresults.result_id) FROM raceresults INNER JOIN races on races.id = raceresults.race_id INNER JOIN meetings ON meetings.id = races.meeting_id INNER JOIN seasons ON seasons.id = meetings.season_id WHERE raceresults.driver_id = driverstablepoints.driver_id AND seasons.id = driverstablepoints.season_id AND raceresults.finalposition >= 5 AND raceresults.finalposition != 100 AND raceresults.finalposition != 104) AS no_places,
                (SELECT COUNT(raceresults.result_id) FROM raceresults INNER JOIN races on races.id = raceresults.race_id INNER JOIN meetings ON meetings.id = races.meeting_id INNER JOIN seasons ON seasons.id = meetings.season_id WHERE raceresults.driver_id = driverstablepoints.driver_id AND seasons.id = driverstablepoints.season_id AND raceresults.finalposition = 100) AS disqualified,
                driver_id, season_id
            FROM driverstablepoints
            WHERE season_id = ${seasonId}
            GROUP BY driverstablepoints.driver_id, driverstablepoints.season_id
            HAVING driver_id IN (SELECT driver_id FROM raceresults INNER JOIN races ON races.id = raceresults.race_id WHERE races.type IN ('Autostart', 'Encounter', 'Qualification', 'Gymkhana', 'Stationary', 'Handicap', 'Stationery'))
            ORDER BY season_id DESC, total_points DESC`
        );
    }
}