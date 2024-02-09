module.exports = (sequelize, DataTypes) => {
    const Shifts = sequelize.define('Shifts', {
      shiftID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      startTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      endTime: {
        type: DataTypes.DATE,
        allowNull: false,
      }
    });
  
    Shifts.associate = (models) => {
      Shifts.belongsTo(models.Staff, { foreignKey: 'staffID' });
    };
  
    return Shifts;
  };
  