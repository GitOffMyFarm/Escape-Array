const User = require('./User');
const City = require('./City');
const Entertainment = require('./entertainment');
const Eat = require('./eat');

City.hasMany(Entertainment, {
    foreignKey: 'city_entertainment'
});

City.hasMany(Eat, {
    foreignKey: 'city_eats'
});
Entertainment.belongsTo(City, {
    foreignKey: 'entertainment_city'
});
Eat.belongsTo(City, {
    foreignKey: 'eat_city'
});



module.exports = { User, Eat, Entertainment, City };
