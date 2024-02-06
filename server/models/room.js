module.exports = (sequelize, DataTypes) => {
    const Rooms = sequelize.define('Rooms', {
      roomID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      roomNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('available', 'occupied', 'under maintenance'),
        allowNull: false,
      }
    });
  
    Rooms.associate = (models) => {
      Rooms.hasMany(models.Reservations, { foreignKey: 'roomID' });
      Rooms.hasMany(models.RoomServiceOrders, { foreignKey: 'roomID' });
      Rooms.hasMany(models.Billing, { foreignKey: 'roomID' });
      Rooms.hasMany(models.Maintenance, { foreignKey: 'roomID' });   
      Rooms.belongsTo(models.RoomTypes, { foreignKey: 'roomTypeID' });
    };
  
    return Rooms;
  };
  