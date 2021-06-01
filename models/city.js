const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class City extends Model {}

City.init(
<<<<<<< HEAD
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
=======
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
        modelName: 'city'
      }
);

modules.export = City;
>>>>>>> 6232a89d06750da019cd85171a1c770e84a79070
