const router = require('express').Router();
const { City } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
   City.findAll({})
      .then(cityData=> res.json(cityData))
      .catch(err => {
         console.log(err);
         res.status(400).json(err);
      });
});

router.get('/:id', (req, res) => {
   City.findAll({
      where: {
        id: req.params.id
      }
   }).then(cityData => res.json(cityData))
      .catch(err => {
         console.log(err);
         res.status(400).json(err);
      });
});


router.post('/', (req, res) => {
   // check the session
   if (req.session) {
     City.create({
        id: req.params.id,
     name: req.body.name,
     }).then(cityData => res.json(cityData))
       .catch(err => {
         console.log(err);
         res.status(400).json(err);
       });
   }
 });
 router.put('/:id', withAuth, (req, res) => {
   City.update({
     name: req.name
   }, {
       where: {
           id: req.params.id
       }
   }).then(cityData => {
       if (!cityData) {
           res.status(404).json({ message: 'No city found with this id' });
           return;
       }
       res.json(cityData);
   }).catch(err => {
       console.log(err);
       res.status(500).json(err);
   });
});

router.delete('/:id', (req, res) => {
   City.destroy(
      {
         where: {
            id: req.params.id
         }
   }).then(cityData => {
         if(!cityData) {
            res.status(404).json({ message: 'No city data found with this id' });
            return;
         }
         res.json(cityData);
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

module.exports = router;