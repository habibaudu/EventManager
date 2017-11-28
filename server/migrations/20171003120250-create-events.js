module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Events', {
    id: {
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
    userId: {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
        as: 'userId',
      },
      centerId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Centers',
          key: 'id',
          as: 'centerId',
        },
      }
    }
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Events')
};
