module.exports = (sequelize, DataTypes) => {
    const Staff = sequelize.define('Staff', {
      staffID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      position: DataTypes.STRING,
      contactInformation: DataTypes.STRING
    });
    Staff.associate = (models) => {
        Staff.hasMany(models.Shifts, { foreignKey: 'staffID' });
      };
    return Staff;
  };
  