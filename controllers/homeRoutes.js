const router = require('express').Router();
<<<<<<< HEAD
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
=======
const { Project, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  console.log ("hi")
  res.render("homepage")
});

router.get('/project/:id', async (req, res) => {
  try {
    const projectData = await Project.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const project = projectData.get({ plain: true });

    res.render('project', {
      ...project,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
>>>>>>> main
