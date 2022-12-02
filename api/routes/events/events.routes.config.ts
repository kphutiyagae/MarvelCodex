import { CommonRoutesConfig } from "../common/common.routes.config";
import { Express } from "express";

export class EventsRoutes extends CommonRoutesConfig {
    constructor(app: Express.Application) {
        super(app, 'EventsRoutes');
    }

    configureRoutes(): Express.Application {
        return this.app;
    }
}
