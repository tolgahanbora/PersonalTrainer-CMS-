import mongoose, { trusted } from "mongoose";

const userSchema = new mongoose.Schema({

    name: {type: String, required: true},
    age: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    bodyScale: {type: String},
    weight: {type: String, required: true},
    height: {type: String, required: true},
    job: {type: String, required: true},
    diseases: {type: String, required: true},
    drug: {type: String, required: true},
    photo: {type: Array },
    deadlift: {type: String, required: true},
    benchPress: {type: String, required: true},
    squat: {type: String, required: true},

    
    dietList: [{type: mongoose.Schema.Types.ObjectId, ref: 'Diet'}],
    trainList: [{type: mongoose.Schema.Types.ObjectId, ref: 'Train'}],
    supplementList: [{type: mongoose.Schema.Types.ObjectId, ref: 'Supplement'}],
    trickList: [{type: mongoose.Schema.Types.ObjectId, ref: 'TrickList'}],
    calories: [{type: mongoose.Schema.Types.ObjectId, ref: 'Diet'}],
    carb: [{type: mongoose.Schema.Types.ObjectId, ref: 'Diet'}],
    protein: [{type: mongoose.Schema.Types.ObjectId, ref: 'Diet'}],
    fat: [{type: mongoose.Schema.Types.ObjectId, ref: 'Diet'}],
    water: [{type: mongoose.Schema.Types.ObjectId, ref: 'Diet'}]
})

const userModel = mongoose.model('User', userSchema)

export default userModel