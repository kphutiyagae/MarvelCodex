import { CommonRoutesConfig } from "../common/common.routes.config";
import { Express } from "express";

export class UsersRoutes extends CommonRoutesConfig {
    constructor(app: Express.Application) {
        super(app, 'UsersRoutes');
    }
}
