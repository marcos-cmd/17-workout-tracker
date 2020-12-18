const router = require("express").Router();
const Workout = require("../models/workout.js");

// Create a new work out
router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

// Update an existing workout
router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } },
        // "runValidators" will ensure new exercises meet our schema requirements
        { new: true, runValidators: true }
    )
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

// retrieve a workout
router.get("/api/workouts", (req, res) => {
    Workout.find()
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
});

// retrieve last 7 workouts
router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).limit(7)
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
});

// delete a workout
router.delete("/api/workouts", ({ body }, res) => {
    Workout.findByIdAndDelete(body.id)
        .then(() => {
            res.json(true);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;
