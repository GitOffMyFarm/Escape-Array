const User = require('./user');
const City = require('./city');
const Entertainment = require('./entertainment');
const Eat = require('./eat');

City.hasMany(Entertainment, {
    as: 'city_entertainment',
    constraints: false,
    allownull: true,
    defaultvalue: null
});

City.hasMany(Eat, {
    as: 'city_eats',
    constraints: false,
    allownull: true,
    defaultvalue: null
});
Entertainment.belongsTo(City, {
    foreignKey: 'entertainment_city'
});
Eat.belongsTo(City, {
    foreignKey: 'eat_city'
});



module.exports = { User, Eat, Entertainment, City };
