module.exports = (sequelize, DataTypes) => {
    const Reservations = sequelize.define('Reservations', {
      reservationID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      checkInDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      checkOutDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      totalPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('confirmed', 'canceled'),
        allowNull: false,
      }
    });
  
    Reservations.associate = (models) => {
      Reservations.hasMany(models.Billing, { foreignKey: 'reservationID' });
      Reservations.belongsTo(models.Guests, { foreignKey: 'guestID' });
      Reservations.belongsTo(models.Rooms, { foreignKey: 'roomID' });
    };
  
    return Reservations;
  };
  