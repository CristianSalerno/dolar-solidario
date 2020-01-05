import express from "express";
import mongoose from "mongoose";
const cors = require("cors");
const axios = require("axios");

require("./models/dolar");

// ! Inicializar express
const app = express();
app.use(cors());

const databaseUrl =
  "mongodb://dolar_solidario_admin:cris2023@ds149279.mlab.com:49279/dolar-solidario";

// ! Conectarse a la DB
mongoose.connect(databaseUrl, { useNewUrlParser: true });

// ! Definir puerto
const port = process.env.port || 4000;

app.get("/api/dolar", async (req, res) => {
  const { data } = await axios
    .get(
      "https://www.cronista.com/MercadosOnline/json/getDinamicos.html?tipo=monedas&id=ARS&fechaDesde=01%2F05%2F2020&fechaHasta=05%2F01%2F2020&fbclid=IwAR1OYNeJr43aHlS8VxF_osCk21SEgzbrwBSqKpN8zGhq3eoXYFwSFIX65bI"
    )
    .catch(e => e);

  res.json(data);
});

const dolar = mongoose.model("Dolar");

dolar
  .findByIdAndUpdate({ _id: "5e10ea7f4e45a2208c084b18" }, { precioActual: 60 })
  .exec();

// Escuchar errores no atrapados o manejados
process.on("uncaughtException", e => {
  console.log(e);
  process.exit(1);
});

process.on("unhandledRejection", e => {
  console.log(e);
  process.exit(1);
});

app.listen(port, () =>
  console.log(`La aplicacion esta corriendo en el puerto: ${port}`)
);
