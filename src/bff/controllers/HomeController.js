import Category from '../../shared/models/Category';
import Banner from '../../shared/models/Banner';
import Product from '../../shared/models/Product';

class HomeController {
  async getHomeData(req, res) {
    const banners = await Banner.findAll();
    const products = await Product.findAll();
    const categories = await Category.findAll();

    return res.json({ banners, products, categories });
  }
}

export default new HomeController();
