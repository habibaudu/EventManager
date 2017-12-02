module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Centers', {
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

    status: {
      type: Sequelize.ENUM('Available', 'UnAvailable'),
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

    userId: {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
        as: 'userId',
      },
    },
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('Centers')
};
