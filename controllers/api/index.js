const router = require('express').Router();
const userRoutes = require('./userRoutes');
const cityRoutes = require('./cityRoutes');
const eatRoutes = require('./eatRoutes');
const entertainmentRoutes = require('./entertainmentRoutes');
const stayRoutes = require('./stayRoutes');

router.use('/users', userRoutes);
router.use('/cities', cityRoutes);
router.use('/eats', eatRoutes);
router.use('/entertainments', entertainmentRoutes);
router.use('/stays', stayRoutes);


module.exports = router;
