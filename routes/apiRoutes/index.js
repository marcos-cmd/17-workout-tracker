const router = require('express').Router();
const workoutsRoutes = require('./workoutsRoutes');

// Everything in this router already has /api prepended to it
router.use('/workouts', workoutsRoutes);

module.exports = router;
