const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Stay extends Model {}

Stay.init(
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
          model: 'city',
          key: 'id',
        }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
          model: 'stay',
          key: 'id',
          unique: false,
      }
  },
  entertainment: {
      type: DataTypes.INTEGER,
      references: {
          model: 'entertainment',
          key: 'id',
          unique: false,
      }
  }
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'stay'
}
);

module.exports = Stay;