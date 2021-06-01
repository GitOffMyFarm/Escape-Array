const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Eat extends Model {}

Eat.init(
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
    modelName: 'eat',
  }
);