const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
//const searchbookRoutes = require('./searchbookRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
//router.use('/searchbook', searchbookRoutes);

module.exports = router;