import { CommonRoutesConfig } from "../common/common.routes.config";
import e from "express";

export class EventsRoutes extends CommonRoutesConfig {
    constructor(app: e.Application) {
        super(app, 'EventsRoutes');
    }

    configureRoutes(): e.Application {
        return this.app;
    }
}
