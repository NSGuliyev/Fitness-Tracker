// const router = require("express").Router();
// // const Workout = require("../models/workout");
// const path = require("path");

// router.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "index.html"));
// });

// // Route to access workouts database
// router.get("/api/workouts", function (req, res) {
//     Workout.find({}, function (err, workouts) {
//         res.json(workouts)
//     });
// });

// router.get("/api/workouts/range", function (req, res) {
//     Workout.find({}, function (err, workouts) {
//         res.json(workouts)
//     });
// });

// Route to exercise.html
// router.get("/exercise", function (req, res) {
//     res.sendFile(path.join(__dirname, "../public/exercise.html"));
// });

// router.get("/stats", function (req, res) {
//     res.sendFile(path.join(__dirname, "../public/stats.html"));
// });

// Post request creates a new instance of workout in the database
router.post("api/workouts", function (req, res) {
    Workout.create({})
        .then(function (dbWorkout) {
            res.json(dbWorkout);
        })
        .catch(function (err) {
            res.status(400).json(err)
            console.log("Routes error 1");
        });
});

router.post("api/workouts/:id", function (req, res) {
    Workout.findByIdAndUpdate(req.params.id, { $push: { exercise: req.body } })
        .then(function (dbWorkout) {
            res.json(dbWorkout);
        })
        .catch(function (err) {
            res.status(400).json(err)
            console.log("Routes error 2");
        });

});




module.exports = router
