module.exports = (sequelize, DataTypes) => {
    const Expenses = sequelize.define('Expenses', {
      expenseID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      expenseDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      expenseType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      description: DataTypes.STRING
    });
  
    return Expenses;
  };
  