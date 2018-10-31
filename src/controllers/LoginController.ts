import { RequestHandler } from "express";
import IRouteController, { IApplyRoutes } from "./IRouteController";

export default class LoginController implements IRouteController {
    public applyRoutes: IApplyRoutes = (app) => {
        app.get("/login", this.login);
    }

    private login: RequestHandler = async (req, res) => {
        return res.status(200).json({
            success: true
        });
    }
}
