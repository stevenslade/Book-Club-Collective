const router = require('express').Router();
const { Club } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newClub = await Club.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newClub);
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.delete('/:id', async (req, res) => {
//   try {
//     const clubData = await Club.destroy({
//       where: {
//         id: req.params.id,
//         // user_id: req.session.user_id,
//       },
//     });

//     if (!clubData) {
//       res.status(404).json({ message: 'No club found with this id!' });
//       return;
//     }

//     res.status(200).json(clubData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.delete('/clubs/:id', async (req, res) => {
//   try {
//     const clubData = await Club.destroy({
//       where: {
//         id: req.params.id,
//         // user_id: req.session.user_id,
//       },
//     });

//     if (clubData) 
//     res.status(200).json(clubData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


module.exports = router;
