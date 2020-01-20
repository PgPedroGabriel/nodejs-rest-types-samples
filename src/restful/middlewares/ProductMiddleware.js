import Product from '../../models/Product';

class ProductMiddleware {
  async findProduct(req, res, next) {
    const { id } = req.params;

    if (!id) {
      return res.status(401).json({ error: 'invalid param' });
    }

    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ error: 'invalid param' });
    }

    req.product = product;

    return next();
  }
}

export default new ProductMiddleware();
