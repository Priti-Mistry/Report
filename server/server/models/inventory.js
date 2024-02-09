module.exports = (sequelize, DataTypes) => {
    const Inventory = sequelize.define('Inventory', {
      itemID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      itemName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      unitPrice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      supplierInformation: DataTypes.STRING
    });
  
    return Inventory;
  };
  