const mongoose = require("mongoose");

const oemcarSchema = mongoose.Schema({
    brand: { type: String, required: true },
    model_name: { type: String, required: true },
    model_year: { type: Number, required: true, min: 1900 },
    price_of_new: { type: Number, required: true, min: 0 },
    colors: { type: [String], required: true },
    mileage: { type: Number, required: true, min: 0 },
    BHP: { type: Number, required: true, min: 0 },
    max_speed: { type: Number, required: true, min: 0 },
});

const Oemcarmodel = mongoose.model("oemcar", oemcarSchema);

module.exports = {
    Oemcarmodel,
};
