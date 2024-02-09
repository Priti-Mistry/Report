module.exports = (sequelize, DataTypes) => {
    const EventBookings = sequelize.define('EventBookings', {
      eventID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      eventDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      eventType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      numberOfAttendees: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    });
  
    EventBookings.associate = (models) => {
      EventBookings.belongsTo(models.Guests, { foreignKey: 'guestID' });
    };
  
    return EventBookings;
  };
  