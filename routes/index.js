const router = require('express').Router();
const apiRoutes = require('./apiRoutes/workoutRoutes');

router.use('/api', apiRoutes);

module.exports = router;
