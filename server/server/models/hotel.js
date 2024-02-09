module.exports = (sequelize, DataTypes) => {
    const Hotel = sequelize.define('Hotel', {
      hotelID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      hotelName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contactInformation: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: DataTypes.STRING,
      amenities: DataTypes.STRING
    });
  
    return Hotel;
  };
  