const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fitnessSchema = new Schema({
    day: {
        type: Date,
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
                required: true
            },
            duration: {
                type: Number,
                required: true
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