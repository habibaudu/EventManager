module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Role', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },

    role: {
      type: Sequelize.INTEGER,
      allowNull: false
    }

  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Role')
};

