import mongoose, { trusted } from "mongoose";

const dietPlanSchema = new mongoose.Schema({

    monday: { type: String, required: true },
    Tuesday: { type: String, required: true },
    Wednesday: { type: String, required: true },
    Thursday: { type: String, required: true },
    Friday: { type: String, required: true },
    Sunday: { type: String, required: true },

    
    carb: { type: String, required: true },
    protein: { type: String, required: true },
    fat: { type: String, required: true },
    water: { type: String, required: true },

    calories: {type: String, required:true},

})

const dietPlanModel = mongoose.model('Diet',dietPlanSchema )

export default dietPlanModel