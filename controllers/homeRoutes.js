const router = require('express').Router();
const { City, User, Stay, Entertainment, Eat } = require('../models');

router.get('/', (req, res) => {
   console.log(req.session);

   City.findAll({
      attributes: [
         'id',
         'name',
         'content',
         'city_id'
      ],
      include: [
         {
            model: Stay,
            attributes: ['id', 'name', 'link', 'user_id'],
            include: {
               model: User,
               attributes: ['username']
            }
         },
         {
             model: Eat,
             attributes: ['id', 'name', 'city_id', ]
        
         },
         {
             model: Entertainment,
             attributes: ['id', 'name', 'city_id']

         },
         {
            model: User,
            attributes: ['username']
         }
      ]
   }).then(cityData => {
         console.log(cityData[0]);
         const cities = cityData.map(city => city.get({ plain: true }));
         res.render('homepage', { 
            posts, 
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
 
   res.render('login');
});
router.get('/signup', (req, res) => {
   res.render('signup');
});

router.get('/city/:id', (req, res) => {
   Post.findOne({
    attributes: [
        'id',
        'name',
        'content',
        'city_id'
     ],
     include: [
        {
           model: Stay,
           attributes: ['id', 'name', 'link', 'user_id'],
           include: {
              model: User,
              attributes: ['username']
           }
        },
        {
            model: Eat,
            attributes: ['id', 'name', 'city_id', ]
       
        },
        {
            model: Entertainment,
            attributes: ['id', 'name', 'city_id']

        },
        {
           model: User,
           attributes: ['username']
        }
     ]
   }).then(cityData => {
       if (!cityData) {
         res.status(404).json({ message: 'No City found with this id' });
         return;
       }
 
       const city = cityData.get({ plain: true });
       res.render('single-post', { // what haldlebars used?
          post, loggedIn: req.session.loggedIn});
         
     }).catch(err => {
       console.log(err);
       res.status(500).json(err);
     });
});

module.exports = router;