import cors from 'cors';
import express, {Application}  from "express";

import userRoutes from '../routes/user';


class Server {

    private app: Application;
    private port: String;   
    private paths = {
        users: '/api/users'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8001';

        this.middlewares();
        this.routes();

    }


    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running in port ${this.port}`);
            
        });
    }

    routes() {
        this.app.use( this.paths.users, userRoutes);
    }

    middlewares() {
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( express.static('public') );
    }

}

export default Server;