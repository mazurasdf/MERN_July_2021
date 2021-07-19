const mongoose = require('mongoose');

const IceCreamSchema = new mongoose.Schema({
    name: String,
    flavor: String,
    whippedCream: Boolean,
    sauce: String,
    toppings: [String],
    container: String
})

const IceCream = mongoose.model("IceCream", IceCreamSchema);

module.exports = IceCream;