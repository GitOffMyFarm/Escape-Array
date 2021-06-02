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
  eats: {
      type: DataTypes.INTEGER,
      references: {
          model: 'eat',
          key: 'id',
          unique: false
      }
  },
  stays: {
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