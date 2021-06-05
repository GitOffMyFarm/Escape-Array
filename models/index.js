const User = require('./User');
const City = require('./City');
const Entertainment = require('./entertainment');
const Stay = require('./stay');
const Eat = require('./eat');

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



module.exports = { User, Eat, Stay, Entertainment, City };
