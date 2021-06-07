const router = require('express').Router();
const { City, User, Entertainment, Eat } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
   console.log(req.session);

   City.findAll()
   .then(cityData => {
         console.log(cityData[0]);
         const cities = cityData.map(city => city.get({ plain: true }));
         res.render('homepage', { 
            cities, 
            loggedIn: req.session.loggedIn});
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

router.get('/login', (req, res) => {
   if (req.session.loggedIn) {
     res.redirect('/');
     return;
   }
 
   res.render('loginandout');
});

router.get('/city/:id', withAuth, async (req, res) => {
   try {
      const cityData = await City.findByPk(req.params.id);
      const eatData = await Eat.findAll({where: {city_id: req.params.id}});
      const entData = await Entertainment.findAll({where: {city_id: req.params.id}});

      const city = cityData.get({ plain: true });
      const eats = eatData.map((eats) => eats.get({ plain: true }));
      const ents = entData.map((ents) => ents.get({ plain: true }));

     // res.status(200).json({ city, eats, ents });
      res.render('city', {
         city,
         eats,
         ents,
         loggedIn: req.session.loggedIn
      });
   } catch (err) {
      console.log(err)
      res.status(500).json(err);
   }
});

module.exports = router;
