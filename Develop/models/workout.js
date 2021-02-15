const mongoose = require("mongoose"); 

const Schema = mongoose.Schema; 

const workoutSchema = new Schema({ 
    day: { 
        type: Date, 
        default: () => new Date()
    }, exercises: [ 
        { 
            type: String, 
            trim: true, 
            required: "Enter exercise type."
        }
    ]
});