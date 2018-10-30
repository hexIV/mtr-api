import { Application } from "express";

export type IApplyRoutes = (app: Application) => void;

export default interface IRouteController {
    applyRoutes: IApplyRoutes;
}
