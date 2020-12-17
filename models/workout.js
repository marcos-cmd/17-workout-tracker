const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date(),
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Please enter a type of exercise"
            },
            name: {
                type: String,
                trim: true,
                required: "Please enter the name of this exercise"
            },
            duration: {
                type: Number,
                required: "Please enter an exercise duration in minutes"
            },
            weight: {
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
    {
        toJSON: {
            //include the virtual properties at request
            virtuals: true
        }
    });

WorkoutSchema.virtual("totalDuration").get(function () {
    // 'reduce' array of exercises down to just the sum of their durations
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;
