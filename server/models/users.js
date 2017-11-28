module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false

    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false

    },
    username: {
      type: DataTypes.STRING,
      allowNull: false

    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false

    },

    role: {
      type: DataTypes.ENUM('admin', 'user'),
      defaultValue: 'user'
    },

  });
  Users.associate = models =>
    Users.hasMany(models.Events, {
      foreignKey: 'userId',
      as: 'events'
    });
  return Users;
};

