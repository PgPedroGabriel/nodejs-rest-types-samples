module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('banners', 'sequence', {
      type: Sequelize.INTEGER,
      allowNul: false,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('banners', 'sequence');
  },
};
