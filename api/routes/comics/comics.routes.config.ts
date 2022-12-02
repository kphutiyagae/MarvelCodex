import { CommonRoutesConfig } from "../common/common.routes.config";
import { Express } from "express";

export class ComicsRoutes extends CommonRoutesConfig {
    constructor(app: Express.Application) {
        super(app, 'ComicsRoutes');
    }
    
    configureRoutes(): Express.Application {
        return this.app;
    }
}
