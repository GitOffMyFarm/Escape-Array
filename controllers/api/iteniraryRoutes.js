const router = require('express').Router();
const { Itenirary, City, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
   Eat.findAll({})
      .then(iteniraryData => res.json(iteniraryData))
      .catch(err => {
         console.log(err);
         res.status(400).json(err);
      });
});

router.get('/:id', (req, res) => {
   Eat.findAll({
      where: {
      id: req.params.id   //itenirary id
      }
   }).then(iteniraryData => res.json(iteniraryData))
      .catch(err => {
         console.log(err);
         res.status(400).json(err);
      });
});


router.post('/', (req, res) => { //??
   // check the session
   if (req.session) {
     Itenirary.create({
    name: req.body.name,
    user_id: req.session.city_id,   //??
    
     }).then(iteniraryData => res.json(iteniraryData))
       .catch(err => {
         console.log(err);
         res.status(400).json(err);
       });
   }
 });
 router.put('/:id', withAuth, (req, res) => {
    Itenirary.update({
        name: req.body.name
   }, {
       where: {
           id: req.params.id
       }
   }).then(iteniraryData => {
       if (!iteniraryData) {
           res.status(404).json({ message: 'No eatery found with this id' });
           return;
       }
       res.json(iteniraryData);
   }).catch(err => {
       console.log(err);
       res.status(500).json(err);
   });
});

router.delete('/:id', (req, res) => {
   Itenirary.destroy(
      {
         where: {
            id: req.params.id
         }
   }).then(iteniraryData => {
         if(!iteniraryData) {
            res.status(404).json({ message: 'No eatery data found with this id' });
            return;
         }
         res.json(iteniraryData);
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

module.exports = router;