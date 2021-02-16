const router = require('express').Router(); 
const Workout = require('../models/workoutsController'); 


// gets saved/most recent workouts 
router.get("/api/workouts", async (req, res) => {
    const newWorkout = await Workout.find({}, (err, data) => {
    res.json(data)
    })
})

router.post("/api/workouts", async (req, res) => { 
    const newWorkout = await Workout.create({}) 
    res.json(newWorkout);
    
}); 

router.put("/api/workouts/:id", async (req, res) => { 
    const updateWorkout = await Workout.findOneAndUpdate(
        {_id: req.params.id}, 
        { 
            $push: { 
                exercises: req.body 
            }, 

        }); 
        res.json(updateWorkout); 
})









module.exports = router;
