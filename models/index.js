const User = require('./User');
const City = require('./City');
const NightOut = require('./Night-out');
const Stay = require('./Stay');
const Eat = require('./Eatt');
const Itinerary= require('./Itinerary');


User.hasMany(Itinerary, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Itinerary.belongsTo(User, {
  foreignKey: 'user_id'
});
NightOut.belongsToMany(User, {
    through: {
        model: Itinerary,
        unique: false,
    },
    as: "userNightOut"
  });
  Stay.belongsToMany(User, {
    through: {
        model: Itinerary,
        unique: false,
    },
    as: "userStay"
  });
  Eat.belongsToMany(User, {
    through: {
        model: Itinerary,
        unique: false,
    },
    as: "userEat"
  });

  User.hasMany(Eat, {
    through: {
        model: Itinerary,
        unique: false,
    },
    as: "eatUser"
  });
  User.hasMany(Stay, {
    through: {
        model: Itinerary,
        unique: false,
    },
    as: "stayUser"
  });
  User.hasMany(NightOut, {
    through: {
        model: Itinerary,
        unique: false,
    },
    as: "nightOutUser"
  });
  
City.hasMany(NightOut, {
    foreignKey: 'city_id'
})
City.hasMany(Stay, {
    foreignKey: 'city_id'
})
City.hasMany(Eat, {
    foreignKey: 'city_id'
})
NightOut.belongsTo(City, {
    foreignKey: 'city_id'
})
Stay.belongsTo(City, {
    foreignKey: 'city_id'
})
Eat.belongsTo(City, {
    foreignKey: 'city_id'
})



module.exports = { User, Project };
