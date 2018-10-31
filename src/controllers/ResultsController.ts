import { RequestHandler } from "express";
import IRouteController, { IApplyRoutes } from "./IRouteController";
import { Meetings } from "../entity/Meetings";

export default class ResultsController implements IRouteController {
    public applyRoutes: IApplyRoutes = (app) => {
    }
}
