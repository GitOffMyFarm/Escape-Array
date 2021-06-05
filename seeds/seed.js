const sequelize = require('../config/connection');
const { City, Eat, Entertainment, User} = require('../models');
const cityData = require('./city-seeds');
const eatData = require('./eat-seeds');
const entertainmentData = require('./entertainment-seeds.json');
const userData = require('./user-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  
  for (const city of cityData) {
    await City.create({
      ...city
    });
  }

  for (const eat of eatData) {
    await Eat.create({
      ...eat
    });
  }

  for (const entertainment of entertainmentData) {
    await Entertainment.create({
      ...entertainment
    });
  }

  process.exit(0);
};

seedDatabase();
