import express from 'express';
import http from 'http';
import cors from 'cors';
import rastreiosRoutes from "./routes/RastreiosRoutes";

import * as dotenv from 'dotenv';

class App {
    public express: express.Application;
    public serverHttp: http.Server;

    public constructor() {
        dotenv.config();
        this.express = express();
        this.serverHttp = http.createServer(this.express);
        this.middlewares();
        this.routes();
    }

    private middlewares(): void {
        const allowSites = [
            'http://localhost:8100'
        ]
        this.express.use(express.json());
        this.express.use(cors({
            origin: allowSites
        }));
    }

    private routes(): void {
        this.express.use([
            rastreiosRoutes
        ]);
    }
}

const app = new App();

export {app};
