const sequelize = require('../config/connection');
const { City, Eat, Entertainment, Itenirary, Stay, User, City} = require('../models');
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
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
