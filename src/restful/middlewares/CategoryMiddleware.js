import Category from '../../models/Category';

class CategoryMiddleware {
  async findCategory(req, res, next) {
    const { id } = req.params;

    if (!id) {
      return res.status(401).json({ error: 'invalid param' });
    }

    const category = await Category.findByPk(id);

    if (!category) {
      return res.status(404).json({ error: 'invalid param' });
    }

    req.category = category;

    return next();
  }
}

export default new CategoryMiddleware();
