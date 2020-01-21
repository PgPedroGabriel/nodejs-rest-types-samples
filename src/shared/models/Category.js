import Sequelize from 'sequelize';

class Category extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        slug: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static include() {
    return {
      model: this,
      as: 'category',
      attributes: ['id', 'name', 'slug'],
    };
  }
}

export default Category;
