import CategoryModel from '../../../shared/models/Category';
import BannerModel from '../../../shared/models/Banner';
import ProductModel from '../../../shared/models/Product';

class HomeController {
  async getHomeData(req, res) {
    const banners = await BannerModel.findAll();
    const products = await ProductModel.findAll();
    const categories = await CategoryModel.findAll();

    return res.json({ banners, products, categories });
  }
}

export default new HomeController();
