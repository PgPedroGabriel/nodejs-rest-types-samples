import Product from '../../shared/models/Product';
import Category from '../../shared/models/Category';

class ProductMiddleware {
  async find(req, res, next) {
    const { id } = req.params;

    if (!id) {
      return res.status(401).json({ error: 'invalid param' });
    }

    const product = await Product.findByPk(id, {
      include: [Category.include()],
    });

    if (!product) {
      return res.status(404).json({ error: 'invalid param' });
    }

    req.product = product;

    return next();
  }
}

export default new ProductMiddleware();
