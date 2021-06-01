const User = require('./User');
const City = require('./City');
const Entertainment = require('./entertainment');
const Stay = require('./stay');
const Eat = require('./eat');
const Itinerary= require('./itinerary');


User.hasMany(Itinerary, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Itinerary.belongsTo(User, {
  foreignKey: 'user_id'
});
Entertainment.belongsToMany(User, {
    through: {
        model: Itinerary,
        unique: false,
    },
    as: "userEntertainment"
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
  User.hasMany(Entertainment, {
    through: {
        model: Itinerary,
        unique: false,
    },
    as: "entertainmentUser"
  });
  
City.hasMany(Entertainment, {
    foreignKey: 'city_id'
})
City.hasMany(Stay, {
    foreignKey: 'city_id'
})
City.hasMany(Eat, {
    foreignKey: 'city_id'
})
Entertainment.belongsTo(City, {
    foreignKey: 'city_id'
})
Stay.belongsTo(City, {
    foreignKey: 'city_id'
})
Eat.belongsTo(City, {
    foreignKey: 'city_id'
})



module.exports = { User, Project };
