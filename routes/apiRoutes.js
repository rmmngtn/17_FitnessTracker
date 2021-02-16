const router = require('express').Router(); 
const Workout = require('../models/workoutsController'); 


// gets saved/most recent workouts 
router.get("/api/workouts", (req, res) => {
    Workout.find({}, (err, data) => {
    res.json(data)
    })
})

router.post("/api/workouts", (req, res) => { 
    Workout.create({}, (err, data) => 
    res.json(data))
})

router.put("/api/workouts/:id", (req, res) => { 
    Workout.findOneAndUpdate(
        {_id: req.params.id}, 
        { 
            $push: { 
                exercises: req.body 
            }, 
            
        })
})









module.exports = router;
