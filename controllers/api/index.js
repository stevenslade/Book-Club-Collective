const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const reviewRoutes = require('./reviewRoutes');
//const searchbookRoutes = require('./searchbookRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/reviews', reviewRoutes);
//router.use('/searchbook', searchbookRoutes);

module.exports = router;