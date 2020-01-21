import Sequelize from 'sequelize';
import Product from '../../shared/models/Product';

class ProductController {
  async create(req, res) {
    const product = await Product.create(req.body);

    return res.json(product);
  }

  async update(req, res) {
    req.product.update(req.body);

    return res.json(req.product);
  }

  async listAll(req, res) {
    const products = await Product.findAndCountAll({
      order: Sequelize.literal('sequence ASC'),
    });

    return res.json(products);
  }

  async delete(req, res) {
    await req.product.destroy();

    return res.json({ status: true });
  }

  async getOne(req, res) {
    return res.json(req.product);
  }
}

export default new ProductController();
