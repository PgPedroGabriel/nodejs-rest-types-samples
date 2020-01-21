import Banner from '../../shared/models/Banner';

class BannerMiddleware {
  async find(req, res, next) {
    const { id } = req.params;

    if (!id) {
      return res.status(401).json({ error: 'invalid param' });
    }
    const banner = await Banner.findByPk(id);

    if (!banner) {
      return res.status(404).json({ error: 'invalid param' });
    }

    req.banner = banner;

    return next();
  }
}

export default new BannerMiddleware();
