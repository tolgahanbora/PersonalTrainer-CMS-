import mongoose, { trusted } from "mongoose";

const trickListchema = new mongoose.Schema({

    tricks: {type: String}

 })

 const trickListModel = mongoose.model('TrickList',trickListchema )

 export default trickListModel