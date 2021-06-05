const router = require('express').Router();
const { Entertainment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
   Entertainment.findAll({})
      .then(entertainmentData => res.json(entertainmentData))
      .catch(err => {
         console.log(err);
         res.status(400).json(err);
      });
});

router.get('/:id', (req, res) => {
   Entertainment.findAll({
      where: {
        id: req.params.id
      }
   }).then(entertainmentData=> res.json(entertainmentData))
      .catch(err => {
         console.log(err);
         res.status(400).json(err);
      });
});


router.post('/', (req, res) => {
   // check the session
   if (req.session) {
     Entertainment.create({
         name: req.body.name,
         city_id: req.body.city_id,
         user_id: req.session.user_id
     }).then(entertainmentData => res.json(entertainmentData))
       .catch(err => {
         console.log(err);
         res.status(400).json(err);
       });
   }
 });
 router.put('/:id', withAuth, (req, res) => {
   Entertainment.update({
       name: req.body.neme
   }, {
       where: {
           id: req.params.id
       }
   }).then(entertainmentData => {
       if (!entertainmentData) {
           res.status(404).json({ message: 'No entertainment found with this id' });
           return;
       }
       res.json(entertainmentData);
   }).catch(err => {
       console.log(err);
       res.status(500).json(err);
   });
});

router.delete('/:id', (req, res) => {
   Entertainment.destroy(
      {
         where: {
            id: req.params.id
         }
   }).then(entertainmentData => {
         if(!entertainmentData) {
            res.status(404).json({ message: 'No entertainment data found with this id' });
            return;
         }
         res.json(entertainmentData);
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

module.exports = router;