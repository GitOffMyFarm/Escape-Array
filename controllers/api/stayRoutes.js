const router = require('express').Router();
const { Stay } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
   stay.findAll({})
      .then(stayData => res.json(stayData))
      .catch(err => {
         console.log(err);
         res.status(400).json(err);
      });
});

router.get('/:id', (req, res) => {
   Stay.findAll({
      where: {
         id: req.params.id
      }
   }).then(stayData => res.json(stayData))
      .catch(err => {
         console.log(err);
         res.status(400).json(err);
      });
});


router.post('/', (req, res) => {
   // check the session
   if (req.session) {
     stay.create({
         name: req.body.name,
         stay_id: req.body.stay_id,
         user_id: req.body.user_id,
         link: req.body.link
      
     }).then(stayData => res.json(stayData))
       .catch(err => {
         console.log(err);
         res.status(400).json(err);
       });
   }
 });
 router.put('/:id', withAuth, (req, res) => {
   Stay.update({
       name: req.body.name
   }, {
       where: {
           id: req.params.id
       }
   }).then(stayData => {
       if (!stayData) {
           res.status(404).json({ message: 'No comment found with this id' });
           return;
       }
       res.json(stayData);
   }).catch(err => {
       console.log(err);
       res.status(500).json(err);
   });
});

router.delete('/:id', (req, res) => {
    Stay.destroy({
         where: {
            id: req.params.id
         }
   }).then(stayData => {
         if(!stayData) {
            res.status(404).json({ message: 'No comment data found with this id' });
            return;
         }
         res.json(stayData);
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

module.exports = router;