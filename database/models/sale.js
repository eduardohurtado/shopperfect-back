const mongoose = require("mongoose");
const { Schema } = mongoose;

const saleSchema = new Schema({
    imagen: { type: String, required: true },
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    cantidad: { type: Number, required: true },
    cliente: { type: String, required: true }
});

module.exports = mongoose.model("saleSchema", saleSchema);
