const router = require('express').Router(); 
const Workout = require('../models/workout'); 


router.get("/api/workouts", ( {body}, res ) => 
    Workout.find)




module.exports = router;
