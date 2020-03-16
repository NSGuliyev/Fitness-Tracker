var db = require("../models");
console.log(db.Workout)
module.exports = function (app) {
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}, (error, workouts) => {
            console.log(error)
            if (error) {
                res.send(error)
            } else {
                res.json(workouts)
            }
        });
    });

    app.get("/api/workouts/range", function (req, res) {
        db.Workout.find({}, function (err, workouts) {
            res.json(workouts)
        });
    });

    app.post("/api/workouts", function (req, res) {
        db.Workout.create({})
            .then(function (dbWorkout) {
                res.json(dbWorkout);
            })
            .catch(function (err) {
                res.status(400).json(err)
                console.log("Routes error 1");
            });
    });

    app.put("/api/workouts/:id", function (req, res) {
        db.Workout.findByIdAndUpdate(req.params.id, { $push: { exercise: req.body } })
            .then(function (dbWorkout) {
                res.json(dbWorkout);
            })
            .catch(function (err) {
                res.status(400).json(err)
                console.log("Routes error 2");
            });

    });
}