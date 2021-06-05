const router = require('express').Router();
const { City, User, Entertainment, Eat } = require('../models');

router.get('/', (req, res) => {
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

router.get('/city/:id', (req, res) => {
   City.findByPk(req.params.id)
   .then(cityData => {
       if (!cityData) {
         res.status(404).json({ message: 'No City found with this id' });
         return;
       }
 
       const city = cityData.get({ plain: true });
       res.render('city', { // what haldlebars used?
          city, loggedIn: req.session.loggedIn});
         
     }).catch(err => {
       console.log(err);
       res.status(500).json(err);
     });
});

module.exports = router;
