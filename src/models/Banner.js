import Sequelize, { Model } from 'sequelize';

class Banner extends Model {
  static init(connection) {
    super.init(
      {
        name: Sequelize.STRING,
        redirect_url: Sequelize.STRING,
        image_url: Sequelize.STRING,
      },
      {
        connection,
      }
    );
    return this;
  }
}

export default Banner;
