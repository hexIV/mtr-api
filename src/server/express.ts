import * as express from "express";
import * as Controllers from "../controllers";
import IRouteController from "../controllers/IRouteController";

const app = express();

for (const controllerName of Object.keys(Controllers)) {
    const controller: IRouteController = new Controllers[controllerName]();
    controller.applyRoutes(app);
}

export default app;