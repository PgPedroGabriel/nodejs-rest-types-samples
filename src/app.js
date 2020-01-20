import express from 'express';
import cors from 'cors';
import './database/index';

import bffRoutes from './bff/routes';
import restfulRoutes from './restful/routes';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    this.server.use(bffRoutes);
    this.server.use(restfulRoutes);
  }
}

export default new App().server;
