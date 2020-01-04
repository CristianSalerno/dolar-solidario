import express from "express";
import mongoose from "mongoose";
require("./models/dolar");

// ! Inicializar express
const app = express();

const databaseUrl =
  "mongodb://dolar_solidario_admin:cris2023@ds149279.mlab.com:49279/dolar-solidario";

// ! Conectarse a la DB
mongoose.connect(databaseUrl, { useNewUrlParser: true });

// ! Definir puerto
const port = process.env.port || 3000;

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
