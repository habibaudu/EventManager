module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Center', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },

    centerName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Location: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Capacity: {
      type: Sequelize.INTEGER,
      allowNull: false
    },

    price: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    image: {
      type: Sequelize.STRING,
      allowNull: false
    },
    isAvailable: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },

    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    },

  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('Center')
};
