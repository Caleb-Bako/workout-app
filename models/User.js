const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: { type: String, required: true },
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    trainMethod: { type: String, default: '' },
    fitnessLevel: { type: String, default: '' },
    gender: { type: String, default: '' },
    checkboxes: {
        buildMuscle: { type: Boolean, default: false },
        loseWeight: { type: Boolean, default: false },
        flexibility: { type: Boolean, default: false },
        improveFitness: { type: Boolean, default: false },
        gainMass: { type: Boolean, default: false },
    },
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
