module.exports = (sequelize, DataTypes) => {
    const Billing = sequelize.define('Billing', {
      billID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      totalAmount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      paymentStatus: {
        type: DataTypes.ENUM('pending', 'paid'),
        allowNull: false,
      }
    });
  
    Billing.associate = (models) => {
      Billing.belongsTo(models.Reservations, { foreignKey: 'reservationID' });
      Billing.belongsTo(models.Guests, { foreignKey: 'guestID' });
      Billing.belongsTo(models.Rooms, { foreignKey: 'roomID' });
    };
  
    return Billing;
  };
  