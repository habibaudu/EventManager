module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Events', {
    eventType: {
      allowNull: false,
      type: Sequelize.STRING
    },

    eventDate: {
      type: Sequelize.STRING,
      allowNull: false
    },
    status: {
      type: Sequelize.ENUM,
      values: ['NotAvailable', 'Available'],
      default: 'Available'
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
