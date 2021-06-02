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
    summary: {
      type: DataTypes.STRING,
      allowNull: false
    },
    points: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    city_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'city',
          key: 'id',
        }
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
    modelName: 'entertainment',
  }
);

module.exports = Entertainment;