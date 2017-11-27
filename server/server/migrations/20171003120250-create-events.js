module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Events', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    eventType: {
      allowNull: false,
      type: Sequelize.STRING
    },
    centerId: {
      allowNull: false,
      type: Sequelize.STRING
    },
	  dates: {
      allowNull: false,
      type: Sequelize.DATEONLY
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Events')
};
