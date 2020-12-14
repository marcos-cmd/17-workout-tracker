const router = require('express').Router();
const workoutRoutes = require('./workoutsRoutes');

// Everything in this router already has /api prepended to it
router.use('/workouts', workoutsRoutes);

module.exports = router;
