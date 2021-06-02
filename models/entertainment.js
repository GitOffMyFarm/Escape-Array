const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class NightOut extends Model {}

NightOut.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    eatary_id: {
      type: DataTypes.INTEGER,
    },
    address: {
        type: DataTypes.INTEGER.STRING,
        allowNull: false
    },
    City: {
        type: DataTypes.STRING,
        allowNull:false
    },
    State: {
        type: DataTypes.STRING,
        allowNull:false
    },
    Zip: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'NightOut',
  }
);