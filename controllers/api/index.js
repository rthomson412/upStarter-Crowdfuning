const router = require('express').Router();
const userRoutes = require('./user-routes');
const projectRoutes = require('./project-routes');
const donationRoutes = require('./donation-routes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/donations', donationRoutes);

module.exports = router;