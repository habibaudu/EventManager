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
      allowNull: false

    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false

    },
    username: {
      type: Sequelize.STRING,
      allowNull: false

    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          args: true,
          msg: 'Email address already in use!'
        },
        unique: true
      },
    },

    password: {
      type: Sequelize.STRING,
      allowNull: false

    },
    role: {
      type: Sequelize.ENUM('admin', 'user'),
      defaultValue: 'user'
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
