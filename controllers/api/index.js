const router = require("express").Router();
const userRoutes = require("./user-routes");
const projectRoutes = require("./project-routes");
const commentRoutes = require("./comment-routes");
const donationRoutes = require("./donation-routes");

// Paths for APi to use
router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/comments', commentRoutes);
router.use('/donations', donationRoutes);

module.exports = router;
