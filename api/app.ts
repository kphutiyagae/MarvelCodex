import express from 'express';
import * as http from 'http';

import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import cors from 'cors';
import debug from 'debug';


import { CharactersRoutes } from './routes/characters/characters.routes.config';
import { ComicsRoutes } from './routes/comics/comics.routes.config';
import { EventsRoutes } from './routes/events/events.routes.config';
import { UsersRoutes } from './routes/users/users.routes.config';
import { CommonRoutesConfig } from './routes/common/common.routes.config';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port =  3000;
const routes: Array<CommonRoutesConfig> = [];
const debugLog: debug.IDebugger = debug('app');

app.use(express.json());
app.use(cors());

const loggerOptions: expressWinston.LoggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize({ all: true })
    ),
};

if (!process.env.DEBUG) {
    loggerOptions.meta = false; // when not debugging, log requests as one-liners
}

// initialize the logger with configs
app.use(expressWinston.logger(loggerOptions));

//add routes to app
routes.push(new CharactersRoutes(app));
routes.push(new ComicsRoutes(app));
routes.push(new EventsRoutes(app));
routes.push(new UsersRoutes(app));

const initMessage = `Server running at http://localhost:${port}`;
app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(initMessage);
});

server.listen(port, () => {
    routes.forEach((route: CommonRoutesConfig) => {
        debugLog(`Routes configured for ${route.getName()}`);
    });

    console.log(initMessage);
});