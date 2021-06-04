const sequelize = require('../config/connection');
const { City, Eat, Entertainment, Itenirary, Stay, User} = require('../models');
const cityData = require('./city-seeds');
const eatData = require('./eat-seeds');
const entertainmentData = require('./entertainment-seeds.json');
const stayData = require('./stay-seeds.json');
const userData = require('./user-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  
  const cities = await City.bulkCreate(cityData, {
    individualHooks: true,
    returning: true,
  });

  for (const stay of stayData) {
    await Stay.create({
      ...stay,
      city_id: cities[0].id
    });
  }

  for (const eat of eatData) {
    await Eat.create({
      ...eat,
      city_id: cities[0].id
    });
  }

  for (const entertainment of entertainmentData) {
    await Entertainment.create({
      ...entertainment,
      city_id: cities[0].id
    });
  }

  process.exit(0);
};

seedDatabase();
