import { Router } from 'express';
import AdminHomeController from './controllers/admin/HomeController';
import WebHomeController from './controllers/web/HomeController';
import MobileHomeController from './controllers/mobile/HomeController';

const routes = new Router();

routes.get('/bff/web/home', WebHomeController.getHomeData);
routes.get('/bff/mobile/home', MobileHomeController.getHomeData);
routes.get('/bff/admin/home', AdminHomeController.getHomeData);

export default routes;
