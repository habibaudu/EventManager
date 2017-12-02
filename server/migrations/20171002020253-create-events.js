module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Events', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    centerId: {
      type: Sequelize.INTEGER,

    },
    userId: {
      type: Sequelize.INTEGER,

    },
    eventType: {
      allowNull: false,
      type: Sequelize.STRING
    },

    eventDate: {
      type: Sequelize.DATEONLY,
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Events')
};
