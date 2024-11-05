const mongoose = require('mongoose');
const { Schema } = mongoose;

const ExerciseSchema = new Schema({
    exerciseName: { type: String, required: true },
    description: { type: String, unique: true, required: true },
    performExercise: { type: [String], required: true },
    targetedMuscles: { type: String, required: true },
});

const ExerciseModel = mongoose.model('Exercise', ExerciseSchema);

module.exports = ExerciseModel;
