const mongoose = require('mongoose');
const { Schema } = mongoose;

const WorkoutSchema = new Schema({
    workoutName: { type: String, required: true },
    exerciseName: { type: [String], required: true },
    numberOfSets: { type: [String], required: true },
    numberofReps: { type: [String], required: true },
    requiredEquipments: { type: [String], required: true },
    tags: { type: [String], required: true },
});

const WorkoutModel = mongoose.model('Workout', WorkoutSchema);

module.exports = WorkoutModel;
