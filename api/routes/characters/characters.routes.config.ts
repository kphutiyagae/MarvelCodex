import { CommonRoutesConfig } from "../common/common.routes.config";
import e from "express";

export class CharactersRoutes extends CommonRoutesConfig {
    constructor(app: e.Application) {
        super(app, 'CharactersRoutes');
    }

    configureRoutes(): e.Application {
        return this.app;
    }
}
