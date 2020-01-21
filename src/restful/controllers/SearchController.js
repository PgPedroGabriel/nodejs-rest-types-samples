import { Op } from 'sequelize';
import Category from '../../shared/models/Category';
import Product from '../../shared/models/Product';

class SearchController {
  async searchCategoryAndProducts(req, res) {
    const { q } = req.query;

    const categories = await Category.findAndCountAll({
      where: { name: { [Op.iLike]: `%${q}%` } },
    });

    const products = await Product.findAndCountAll({
      where: { name: { [Op.iLike]: `%${q}%` } },
      include: [Category.include()],
    });

    return res.json({ categories, products });
  }
}

export default new SearchController();
