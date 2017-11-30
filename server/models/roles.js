module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    role: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

  });
  Role.associate = models =>
    Role.hasMany(models.Users, {
      foreignKey: 'roleId',
    });
  return 'Role';
};

