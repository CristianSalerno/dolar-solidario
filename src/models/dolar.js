import mongoose from "mongoose";

const dolarSchema = new mongoose.Schema({
  precioActual: Number
});

module.exports = mongoose.model("Dolar", dolarSchema);
