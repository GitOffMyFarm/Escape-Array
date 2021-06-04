const User = require('./User');
const City = require('./City');
const Entertainment = require('./entertainment');
const Stay = require('./stay');
const Eat = require('./eat');
const Itenirary= require('./itenirary');

/*
User.hasMany(Itenirary, {
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
  */
City.hasMany(Entertainment, {
    foreignKey: 'city_entertainment'
});
City.hasMany(Stay, {
    foreignKey: 'city_stays'
});
City.hasMany(Eat, {
    foreignKey: 'city_eats'
});
Entertainment.belongsTo(City, {
    foreignKey: 'entertainment_city'
});
Stay.belongsTo(City, {
    foreignKey: 'stay_city'
});
Eat.belongsTo(City, {
    foreignKey: 'eat_city'
});



module.exports = { User, Eat, Stay, Entertainment, Itenirary, City };
