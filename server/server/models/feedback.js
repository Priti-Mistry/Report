module.exports = (sequelize, DataTypes) => {
    const Feedback = sequelize.define('Feedback', {
      feedbackID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      feedbackDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      feedbackDescription: DataTypes.STRING,
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 5,
        },
      }
    });
  
    Feedback.associate = (models) => {
      Feedback.belongsTo(models.Guests, { foreignKey: 'guestID' });
    };
  
    return Feedback;
  };
  