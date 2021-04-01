const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fitnessSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: true
            },
            name: {
                type: String,
                trim: true,
                required: [true, 'What was your workout?']
            },
            duration: {
                type: Number,
                required: [true, 'How long did you work out for?']
            },
            weight: {
                type: Number

            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]
}, 
{ timestamps: true });




const Workout = mongoose.model('Workout', fitnessSchema);
module.exports = Workout;