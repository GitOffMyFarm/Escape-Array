const router = require('express').Router();
const { Eat } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
   Eat.findAll({})
      .then(eatData => res.json(eatData))
      .catch(err => {
         console.log(err);
         res.status(400).json(err);
      });
});

router.get('/:id', (req, res) => {
   Eat.findAll({
      where: {
        id: req.params.id
      }
   }).then(eatData => res.json(eatData))
      .catch(err => {
         console.log(err);
         res.status(400).json(err);
      });
});


router.post('/', (req, res) => {
   // check the session
   if (req.session) {
     Eat.create({
    name: req.body.name,
    link: req.body.link,
    // use the id from the session
    city_id: req.session.city_id
     }).then(eatData => res.json(eatData))
       .catch(err => {
         console.log(err);
         res.status(400).json(err);
       });
   }
 });
 router.put('/:id', withAuth, (req, res) => {
   Eat.update({
    name: req.body.name
   }, {
       where: {
           id: req.params.id
       }
   }).then(eatData => {
       if (!eatData) {
           res.status(404).json({ message: 'No eatery found with this id' });
           return;
       }
       res.json(eatData);
   }).catch(err => {
       console.log(err);
       res.status(500).json(err);
   });
});

router.delete('/:id', (req, res) => {
   eatData.destroy(
      {
         where: {
            id: req.params.id
         }
   }).then(eatData => {
         if(!eatData) {
            res.status(404).json({ message: 'No eatery data found with this id' });
            return;
         }
         res.json(eatData);
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

module.exports = router;