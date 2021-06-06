const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Entertainment extends Model {}

Entertainment.init(
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
    link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    picture: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    summary: {
      type: DataTypes.STRING(3000),
      allowNull: false
    },
    points: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    city_id: {
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
    modelName: 'entertainment',
  }
);

module.exports = Entertainment;