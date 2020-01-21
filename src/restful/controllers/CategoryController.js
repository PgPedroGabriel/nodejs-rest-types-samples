import Sequelize from 'sequelize';
import Category from '../../shared/models/Category';

class CategoryController {
  async create(req, res) {
    const category = await Category.create(req.body);

    return res.json(category);
  }

  async update(req, res) {
    req.category.update(req.body);

    return res.json(req.category);
  }

  async listAll(req, res) {
    const categories = await Category.findAndCountAll({
      order: Sequelize.literal('name ASC'),
    });

    return res.json(categories);
  }

  async delete(req, res) {
    await req.category.destroy();

    return res.json({ status: true });
  }

  async getOne(req, res) {
    return res.json(req.category);
  }
}

export default new CategoryController();
