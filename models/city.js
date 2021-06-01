const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class City extends Model {}

City.init(
  {
  //   id: {
  //     type: DataTypes.INTEGER,
  //     allowNull: false,
  //     primaryKey: true,
  //     autoIncrement: true,
  //   },
  //   name: {
  //     type: DataTypes.STRING,
  //     allowNull: false,
  //   },
  //   link: {
  //     type: DataTypes.STRING,
  //     allowNull:false

  //   },
  //   summary: {
  //       type: DataTypes.STRING,
  //       allowNull: false
  
  //   },
  //   point: {
  //       type: DataTypes.INTEGER,
  //       allowNull:false,
  //   },
  //   city: {
  //     type: DataTypes.STRING,
  //     references: {
  //       model: "city",
  //       key: "id"

  //     }

  //   },
    
  // },
  // {
  //   sequelize,
  //   timestamps: false,
  //   freezeTableName: true,
  //   underscored: true,
  //   modelName: 'city',
  }
);