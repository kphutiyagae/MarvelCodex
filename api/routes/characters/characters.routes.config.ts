import { CommonRoutesConfig } from "../common/common.routes.config";
import { Express } from "express";

export class CharactersRoutes extends CommonRoutesConfig {
    constructor(app: Express.Application) {
        super(app, 'CharactersRoutes');
    }

    configureRoutes(): Express.Application {
        return this.app;
    }
}
