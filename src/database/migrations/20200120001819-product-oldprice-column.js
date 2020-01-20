module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.addColumn('products', 'oldPrice', {
        type: Sequelize.DOUBLE,
        allowNul: false,
      });
      await queryInterface.addColumn('products', 'promotion', {
        type: Sequelize.BOOLEAN,
        allowNul: false,
      });
      await queryInterface.addColumn('products', 'unit', {
        type: Sequelize.STRING,
        allowNul: false,
      });
      await queryInterface.addColumn('products', 'description', {
        type: Sequelize.STRING,
      });

      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  },

  down: async queryInterface => {
    try {
      await queryInterface.removeColumn('products', 'oldPrice');
      await queryInterface.removeColumn('products', 'promotion');
      await queryInterface.removeColumn('products', 'unit');
      await queryInterface.removeColumn('products', 'description');
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  },
};
