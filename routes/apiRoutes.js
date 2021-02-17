const router = require('express').Router();
const Workout = require('../models/workoutsController');


// // gets saved/most recent workouts 
// router.get("/api/workouts", (req, res) => {
//      Workout.find({}, (err, data) => {
//         res.json(data)
//     })
// })


router.get("/api/workouts", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" }
            }
        }
    ]).then(data => {
        res.json(data);
    })
        .catch(err => {
            res.json(err);
        });
})

// post new workout
router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
});

// update workout
router.put("/api/workouts/:id", (req, res) => {
    Workout.findOneAndUpdate(
        { _id: req.params.id },
        {
            $push: {
                exercises: req.body
            },
            $inc: {
                totalDuration: req.body.duration
            }
        }, {
        new: true,
    }).then(data => {
        res.json(data);
    })
        .catch(err => {
            res.json(err);
        });
})

// 7 day range of workouts 
router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" }
            }
        }
    ])
        .sort({ day: -1 })
        .limit(7)
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
})









module.exports = router;
