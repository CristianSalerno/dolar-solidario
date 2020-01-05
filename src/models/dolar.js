import mongoose from "mongoose";
const cors = require("cors");
const axios = require("axios");

const dolarSchema = new mongoose.Schema({
  precioActual: Number
});

module.exports = mongoose.model("Dolar", dolarSchema);
