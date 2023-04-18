import mongoose, { trusted } from "mongoose";

const trainPlanSchema = new mongoose.Schema({

    monday: { type: String, required: true },
    Tuesday: { type: String, required: true },
    Wednesday: { type: String, required: true },
    Thursday: { type: String, required: true },
    Friday: { type: String, required: true },
    Sunday: { type: String, required: true },

  
})

const trainPlanModel = mongoose.model('Train', trainPlanSchema)

export default trainPlanModel