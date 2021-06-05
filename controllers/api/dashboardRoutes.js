const router = require('express').Router();
const {City , User} = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, (req, res) => {
   City.findAll({
      where: {
         city_id: req.session.city_id
      },
      attributes: [
         'id',
         'name',
         'content' //??
         
      ],
      include: [
         {
            model: user,
            attributes: ['id', 'name', 'username']
         },
   
      ]
   }).then(cityData => {
         const city = cityData.map(city => city.get({ plain: true }));
         res.render('dashboard', { posts, loggedIn: true });

      }).catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

router.get('/edit/:id', withAuth, (req, res) => {
   Post.findOne({
      where: {
         city_id: req.session.city_id
      },
      attributes: [
         'id',
         'name',
         'content' //??
         
      ],
      include: [
         {
            model: user,
            attributes: ['id', 'name', 'username']
         },
   
      ]
   }).then(cityData => {
         const post = cityData.get({ plain: true });
         res.render('edit-city', { city, loggedIn: true });
      }).catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});
//  when a user clicks /new to add a post, render that page
router.get('/new', (req, res) => {
   res.render('add-city');
});

module.exports = router;