const User = require('./User');
const City = require('./City');
const Entertainment = require('./entertainment');
const Stay = require('./stay');
const Eat = require('./eat');
const Itenirary= require('./itenirary');


User.hasMany(Itinerary, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Itenirary.belongsTo(User, {
  foreignKey: 'user_id'
});
Entertainment.belongsToMany(User, {
    through: {
        model: Itenirary,
        unique: false,
    },
    as: "userEntertainment"
  });
  Stay.belongsToMany(User, {
    through: {
        model: Itenirary,
        unique: false,
    },
    as: "userStay"
  });
  Eat.belongsToMany(User, {
    through: {
        model: Itenirary,
        unique: false,
    },
    as: "userEat"
  });

  User.hasMany(Eat, {
    through: {
        model: Itenirary,
        unique: false,
    },
    as: "eatUser"
  });
  User.hasMany(Stay, {
    through: {
        model: Itenirary,
        unique: false,
    },
    as: "stayUser"
  });
  User.hasMany(Entertainment, {
    through: {
        model: Itenirary,
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



module.exports = { User, Eat, Stay, Entertainment, Itenirary, City };
