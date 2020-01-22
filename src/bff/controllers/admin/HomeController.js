import BannerModel from '../../../shared/models/Banner';
import ProductModel from '../../../shared/models/Product';
import CategoryModel from '../../../shared/models/Category';

class HomeController {
  async getHomeData(req, res) {
    // Regras de negócio de autenticação de usuário ADMIN
    const banners = await BannerModel.count();
    const products = await ProductModel.count();
    const categories = await CategoryModel.count();

    return res.json({ banners, products, categories });
  }
}

export default new HomeController();
