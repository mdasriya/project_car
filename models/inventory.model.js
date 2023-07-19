const { ObjectId } = require("bson");
const mongoose=require("mongoose");

const invetorySchema=({
    brand: { type: String, required: true },
    model_name: { type: String, required: true },
    model_year: { type: Number, required: true },
    color: { type: String, required: true },
    odometer_km: { type: Number, required: true },
    major_accidents: { type: Number, required: true },
    previous_owners: { type: String, required: true },
    registration_place: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    oemcar_id: { type:ObjectId, ref: 'oemcar' },
    userID:{type:ObjectId,ref:'user'}
})

const Inventorymodel=mongoose.model("inventory",invetorySchema);

module.exports={
    Inventorymodel
}