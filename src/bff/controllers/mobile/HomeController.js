import Sequelize from 'sequelize';
import BannerModel from '../../../shared/models/Banner';
import ProductModel from '../../../shared/models/Product';

class HomeController {
  async getHomeData(req, res) {
    // Regras de negócio de autenticação de usuário
    const banners = await BannerModel.findAll({
      attributes: ['id', 'image_url'],
      order: Sequelize.literal('sequence ASC'),
    });
    const products = await ProductModel.findAll({
      attributes: ['id', 'name', 'image_url', 'price'],
    });

    return res.json({ banners, products });
  }
}

export default new HomeController();
