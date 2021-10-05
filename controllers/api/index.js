const router = require('express').Router();
const userRoutes = require('./userRoutes');
const reviewRoutes = require('./reviewRoutes');
const clubRoutes = require('./clubRoutes');
// const commentRoutes = require('./commentRoutes');
//const searchbookRoutes = require('./searchbookRoutes');

router.use('/users', userRoutes);
// router.use('/projects', projectRoutes);
router.use('/reviews', reviewRoutes);
router.use('/clubs', clubRoutes);
// router.use('/comments', commentRoutes)
//router.use('/searchbook', searchbookRoutes);

module.exports = router;