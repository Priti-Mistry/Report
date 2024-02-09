module.exports = (sequelize, DataTypes) => {
    const RoomTypes = sequelize.define('RoomTypes', {
      roomTypeID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      typeName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: DataTypes.STRING,
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      }
    });

    RoomTypes.associate = (models) => {
        RoomTypes.hasMany(models.Rooms, { foreignKey: 'roomTypeID' });
      };
  
    return RoomTypes;
  };
  