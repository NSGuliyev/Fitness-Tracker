var db = require("../models");

module.exports = function (app) {
    app.get("/api/workouts", (req, res) => {
        db.find({}, (error, workouts) => {
            if (error) {
                res.send(error)
            } else {
                res.json(workouts)
            }
        });
    });

    app.get("/api/workouts/range", function (req, res) {
        db.find({}, function (err, workouts) {
            res.json(workouts)
        });
    });

    app.post("api/workouts", function (req, res) {
        db.create({})
            .then(function (dbWorkout) {
                res.json(dbWorkout);
            })
            .catch(function (err) {
                res.status(400).json(err)
                console.log("Routes error 1");
            });
    });

    app.post("api/workouts/:id", function (req, res) {
        db.findByIdAndUpdate(req.params.id, { $push: { exercise: req.body } })
            .then(function (dbWorkout) {
                res.json(dbWorkout);
            })
            .catch(function (err) {
                res.status(400).json(err)
                console.log("Routes error 2");
            });

    });


}