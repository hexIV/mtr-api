import { RequestHandler } from "express";
import IRouteController, { IApplyRoutes } from "./IRouteController";
import { News } from "../entity/News";

export default class NewsController implements IRouteController {
    public applyRoutes: IApplyRoutes = (app) => {
        app.get("/news", requireAuthHandler, this.getNews);
    }

    private getNews: RequestHandler = async (req, res) => {
        const news = await News.createQueryBuilder("news")
            .select(["news.title", "news.body", "news.created"])
            .orderBy("created", "DESC")
            .take(50)
            .getManyAndCount();

        return res.status(200).json({ 
            success: true,
            data: {
                "news": news
            }
        });
    }
}
