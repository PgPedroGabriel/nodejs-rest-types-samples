import { Router } from 'express';
import bannerController from './controllers/BannerController';
import ObjectMiddleware from './middlewares/ObjectMiddleware';
import categoryController from './controllers/CategoryController';
import productController from './controllers/ProductController';

import Banner from '../shared/models/Banner';
import Product from '../shared/models/Product';
import Category from '../shared/models/Category';

const routes = new Router();

const bannerMiddleware = new ObjectMiddleware(Banner);
const categoryMiddleware = new ObjectMiddleware(Category);
const productMiddleware = new ObjectMiddleware(Product);

routes.get('/restful/banner', bannerController.listAll);
routes.post('/restful/banner', bannerController.create);
routes.get(
  '/restful/banner/:id',
  bannerMiddleware.find,
  bannerController.getOne
);
routes.put(
  '/restful/banner/:id',
  bannerMiddleware.find,
  bannerController.update
);
routes.delete(
  '/restful/banner/:id',
  bannerMiddleware.find,
  bannerController.delete
);

routes.get('/restful/category', categoryController.listAll);
routes.post('/restful/category', categoryController.create);
routes.get(
  '/restful/category/:id',
  categoryMiddleware.find,
  categoryController.getOne
);
routes.put(
  '/restful/category/:id',
  categoryMiddleware.find,
  categoryController.update
);
routes.delete(
  '/restful/category/:id',
  categoryMiddleware.find,
  categoryController.delete
);

routes.get('/restful/product', productController.listAll);
routes.post('/restful/product', productController.create);
routes.get(
  '/restful/product/:id',
  productMiddleware.find,
  productController.getOne
);
routes.put(
  '/restful/product/:id',
  productMiddleware.find,
  productController.update
);
routes.delete(
  '/restful/product/:id',
  productMiddleware.find,
  productController.delete
);

export default routes;
