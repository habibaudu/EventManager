module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false

    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false

    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isUnique(value, next) {
          const self = this;
          Users.find({ where: { email: value } })
            .then((user) => {
              if (user && self.id !== user.id) {
                return next('Email already in use!');
              }
              return next();
            })
            .catch(err => next(err));
        }
      }
    },

    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false


    },

    password: {
      type: DataTypes.STRING,
      allowNull: false

    },
  });
  Users.associate = models =>
    Users.hasMany(models.Events, {
      foreignKey: 'userId',
      as: 'events'
    });
  return Users;
};

