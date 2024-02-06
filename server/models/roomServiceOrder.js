module.exports = (sequelize, DataTypes) => {
    const RoomServiceOrders = sequelize.define('RoomServiceOrders', {
      orderID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      orderDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('pending', 'delivered'),
        allowNull: false,
      }
    });
  
    RoomServiceOrders.associate = (models) => {
      RoomServiceOrders.belongsTo(models.Guests, { foreignKey: 'guestID' });
      RoomServiceOrders.belongsTo(models.Rooms, { foreignKey: 'roomID' });
    };
  
    return RoomServiceOrders;
  };
  