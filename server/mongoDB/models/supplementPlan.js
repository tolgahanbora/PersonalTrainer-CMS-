import mongoose, { trusted } from "mongoose";

const supplementSchema = new mongoose.Schema({ 

    plan: {type: String}


})

const supplementModel = mongoose.model('Supplement',supplementSchema )

export default supplementModel