const router = require('express').Router();
const userRoutes = require('./userRoutes');
const cityRoutes = require('./cityRoutes');
const eatRoutes = require('./eatRoutes');
const entertainmentRoutes = require('./entertainmentRoutes');

router.use('/users', userRoutes);
router.use('/cities', cityRoutes);
router.use('/eats', eatRoutes);
router.use('/entertainments', entertainmentRoutes);


module.exports = router;
