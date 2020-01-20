import { Router } from 'express';
import HomeController from './controllers/HomeController';

const routes = new Router();

routes.get('/bff/home', HomeController.getHomeData);
export default routes;
