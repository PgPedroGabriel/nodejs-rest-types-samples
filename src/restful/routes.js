import { Router } from 'express';
import bannerController from './controllers/BannerController';
import bannerMiddleware from './middlewares/BannerMiddleware';
import categoryController from './controllers/CategoryController';
import categoryMiddleware from './middlewares/CategoryMiddleware';
import productController from './controllers/ProductController';
import productMiddleware from './middlewares/ProductMiddleware';

const routes = new Router();

routes.get('/restful/banner', bannerController.listAll);
routes.post('/restful/banner', bannerController.create);
routes.get(
  '/restful/banner/:id',
  bannerMiddleware.findBanner,
  bannerController.getOne
);
routes.put(
  '/restful/banner/:id',
  bannerMiddleware.findBanner,
  bannerController.update
);
routes.delete(
  '/restful/banner/:id',
  bannerMiddleware.findBanner,
  bannerController.delete
);

routes.get('/restful/category', categoryController.listAll);
routes.post('/restful/category', categoryController.create);
routes.get(
  '/restful/category/:id',
  categoryMiddleware.findCategory,
  categoryController.getOne
);
routes.put(
  '/restful/category/:id',
  categoryMiddleware.findCategory,
  categoryController.update
);
routes.delete(
  '/restful/category/:id',
  categoryMiddleware.findCategory,
  categoryController.delete
);

routes.get('/restful/product', productController.listAll);
routes.post('/restful/product', productController.create);
routes.get(
  '/restful/product/:id',
  productMiddleware.findProduct,
  productController.getOne
);
routes.put(
  '/restful/product/:id',
  productMiddleware.findProduct,
  productController.update
);
routes.delete(
  '/restful/product/:id',
  productMiddleware.findProduct,
  productController.delete
);

export default routes;
