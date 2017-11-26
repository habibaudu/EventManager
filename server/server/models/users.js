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
      allowNull: false,
      validate: {
        is: ['^[a-z]+$', 'i']
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: ['^[a-z]+$', 'i']
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlphanumeric: true
      }
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
      allowNull: false,
      validate: {
        isAlphanumeric: true
      }
    },

    status: {
      type: DataTypes.ENUM('active', 'inactive'),
      defaultValue: 'active'
    },
  });

  Users.associate = models =>
    Users.hasMany(models.Events, {
      foreignKey: 'userId',
      as: 'events'
    });
  return Users;
};
