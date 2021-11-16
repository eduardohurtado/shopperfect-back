const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
    imagen: { type: String, required: true },
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    descripcion: { type: String, required: true },
    cantidad: { type: Number, required: true },
    disponible: { type: Boolean, required: true }
});

module.exports = mongoose.model("product", productSchema);
