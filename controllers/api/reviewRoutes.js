const router = require('express').Router();
const { Review } = require('../../models');

router.post('/', async (req, res) => {
//   console.log("testing")
  try {
    // console.log(req.body)
    // console.log(req.session.user_id)
    const newReview= await Review.create({
      ...req.body,
      user_id: req.session.user_id
    });

    res.status(200).json(newReview);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const reviewData = await Review.update(req.body, {
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (reviewData) 
    res.status(200).json(reviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
    try {
      const reviewData = await Review.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (reviewData) 
      res.status(200).json(reviewData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
