import Sequelize from 'sequelize';

class Banner extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        redirect_url: Sequelize.STRING,
        image_url: Sequelize.STRING,
        sequence: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default Banner;
