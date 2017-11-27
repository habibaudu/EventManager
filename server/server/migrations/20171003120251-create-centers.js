module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Centers', {
    id: {
      allowNull: false,
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
    Facilities: {
      type: Sequelize.ARRAY(Sequelize.TEXT),
      allowNull: false
    },
    status: {
      type: Sequelize.ENUM('Available', 'Not Available'),
      defaultValue: 'Available'
    },

    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    eventId: {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Events',
        key: 'id',
        as: 'eventId',
      },
    }
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Centers')
};
