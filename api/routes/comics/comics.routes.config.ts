import { CommonRoutesConfig } from "../common/common.routes.config";
import e from "express";

export class ComicsRoutes extends CommonRoutesConfig {
    constructor(app: e.Application) {
        super(app, 'ComicsRoutes');
    }
    
    configureRoutes(): e.Application {
        return this.app;
    }
}
