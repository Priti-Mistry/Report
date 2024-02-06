module.exports = (sequelize, DataTypes) => {
    const Guests = sequelize.define('Guests', {
      guestID: {
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
      address: DataTypes.STRING,
      contactInformation: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      nationality: DataTypes.STRING
    });
    Guests.associate = (models) => {
        Guests.hasMany(models.Reservations, { foreignKey: 'guestID' });
        Guests.hasMany(models.RoomServiceOrders, { foreignKey: 'guestID' });
        Guests.hasMany(models.Billing, { foreignKey: 'guestID' });
        Guests.hasMany(models.Feedback, { foreignKey: 'guestID' });
        Guests.hasMany(models.EventBookings, { foreignKey: 'guestID' });
      };
    return Guests;
  };
  