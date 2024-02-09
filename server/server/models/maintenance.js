module.exports = (sequelize, DataTypes) => {
    const Maintenance = sequelize.define('Maintenance', {
      maintenanceID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      maintenanceDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      description: DataTypes.STRING,
      status: {
        type: DataTypes.ENUM('pending', 'completed'),
        allowNull: false,
      }
    });
  
    Maintenance.associate = (models) => {
      Maintenance.belongsTo(models.Rooms, { foreignKey: 'roomID' });
    };
  
    return Maintenance;
  };
  