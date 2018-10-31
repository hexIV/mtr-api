import { RequestHandler } from "express";
import IRouteController, { IApplyRoutes } from "./IRouteController";
import { News } from "../entity/News";
import { Meetings } from "../entity/Meetings";
import { Races } from "../entity/Races";
import * as moment from "moment";

export default class HomeController implements IRouteController {
    public applyRoutes: IApplyRoutes = (app) => {
        app.get("/home", this.latestNews);
    }

    private latestNews: RequestHandler = async (req, res) => {
        const latestNews = await News.createQueryBuilder("news")
            .select(["news.title", "news.body", "news.created"])
            .orderBy("created", "DESC")
            .take(5)
            .getManyAndCount();

        const upcomingMeetings = await Meetings.createQueryBuilder("meetings")
            .select(["meetings.id", "meetings.number", "meetings.startOn"])
            .orderBy("meetings.startsOn", "ASC")
            .where("DATE(meetings.startsOn) >= :today", { today: moment().format("Y-M-D") })
            .take(3)
            .getMany();

        const latestResults = await Races.createQueryBuilder("races")
            .select(["races.id", "races.number", "races.class"])
            .orderBy("races.startsOn", "DESC")
            .where("races.status = 5")
            .take(3)
            .getMany();

        return res.status(200).json({ 
            success: true, data: {
                "latestNews": latestNews,
                "upcomingMeetings": upcomingMeetings,
                "latestResults": latestResults
            }
        });
    }
}
