module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        is: ['^[a-z]+$', 'i']
      }
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        is: ['^[a-z]+$', 'i']
      }
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true
      }
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true
      }
    },

    status: {
      type: Sequelize.ENUM('active', 'inactive'),
      defaultValue: 'active'
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Users')
};
