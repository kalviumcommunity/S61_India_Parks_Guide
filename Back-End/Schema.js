const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const nationalParkSchema =new Schema({
    state: { type: String, required: true },
    name: { type: String, required: true },
    location: { type: String, required: true },
    formed: { type: Number, required: true },
    notableFeatures: { type: String, required: true },
    fauna: { type: String, required: true },
    floraAndFauna: {type:String, required:true},
    riversAndLakes: { type: String, required: true },
    created_by:{type:String, required:true}
  }
);
  const parkModel=mongoose.model("Place",nationalParkSchema);
  module.exports = { parkModel };
  