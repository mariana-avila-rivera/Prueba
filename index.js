const express = require("express"); //importar express
const bodyParser = require("body-parser");
const cors = require("cors");

const misrutas = require("./routes/rutas"); //importar rutas

const app = express(); //crear al servidor
const port = process.env.PORT || 3000;
// Configura CORS para permitir solicitudes desde tu frontend
app.use(
  cors({
    origin: "https://prueba-production-8f21.up.railway.app", // Reemplaza con el dominio de tu frontend
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", misrutas); //usar las rutas (middleware

app.use(express.static(process.cwd() + "/public/")); //middleware para cargar archivos estaticos
//El middleware es una función que se ejecuta antes de que se ejecute la función de la ruta.

app.listen(port, () => {
  console.log(`hola servidor ejecucion en puerto: ${port}`);
});
