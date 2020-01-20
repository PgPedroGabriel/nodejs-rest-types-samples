import Sequelize from 'sequelize';

class Product extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        slug: Sequelize.STRING,
        image_url: Sequelize.STRING,
        price: Sequelize.DOUBLE,
        category_id: Sequelize.INTEGER,
        oldPrice: Sequelize.DOUBLE,
        promotion: Sequelize.BOOLEAN,
        unit: Sequelize.STRING,
        description: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Category, {
      foreignKey: 'category_id',
      as: 'category',
    });
  }
}

export default Product;
