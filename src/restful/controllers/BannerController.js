import Sequelize from 'sequelize';
import Banner from '../../shared/models/Banner';

class BannerController {
  async create(req, res) {
    const banner = await Banner.create(req.body);

    return res.json(banner);
  }

  async update(req, res) {
    req.banner.update(req.body);

    return res.json(req.banner);
  }

  async listAll(req, res) {
    const banners = await Banner.findAndCountAll({
      order: Sequelize.literal('sequence ASC'),
    });

    return res.json(banners);
  }

  async delete(req, res) {
    await req.banner.destroy();

    return res.json({ status: true });
  }

  async getOne(req, res) {
    return res.json(req.banner);
  }
}

export default new BannerController();
