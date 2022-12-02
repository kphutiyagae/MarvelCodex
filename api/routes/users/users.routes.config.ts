import { CommonRoutesConfig } from "../common/common.routes.config";
import e from "express";

export class UsersRoutes extends CommonRoutesConfig {
    constructor(app: e.Application) {
        super(app, 'UsersRoutes');
    }

    configureRoutes(): e.Application {
        
        this.app.route(`/users`)
        .get( (req: e.Request, res: e.Response) => {
            res.status(200).send('User get endpoint to be implemented');
        })
        .post( (req: e.Request, res: e.Response) => {
            res.status(200).send('User create endpoint to be implemented');
        });

        this.app.route(`/users/:userId`)
        .all( (req: e.Request, res: e.Response, next: e.NextFunction) => {
            //Middleare function that calls next function after checks.
            next();
        })
        .get( (req: e.Request, res: e.Response) => {
            res.status(200).send(`Get request issued for id ${req.params.userId}`);
        })
        .put( (req: e.Request, res: e.Response) => {
            res.status(200).send(`Put request issued for id ${req.params.userId}`);
        })
        .patch( (req: e.Request, res: e.Response) => {
            res.status(200).send(`Patch request issued for id ${req.params.userId}`);
        })
        .delete( (req: e.Request, res: e.Response) => {
            res.status(200).send(`Delete request issued for id ${req.params.userId}`);
        })

        return this.app;
    }
}
