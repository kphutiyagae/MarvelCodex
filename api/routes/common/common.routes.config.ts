import { Express} from "express";

export abstract class CommonRoutesConfig {
    app: Express.Application;
    name: string;

    constructor(app: Express.Application, name: string){
        this.app = app;
        this.name = name;
    }

    getName(){
        return this.name;
    }

    abstract configureRoutes(): Express.Application;
}