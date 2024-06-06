const express = require("express");
const router = express.Router();
const cuadrado = require("../calculos.js");

router.get("/calculos/:widht", (req, res) => {
  const { widht } = req.params;
  let a = cuadrado.area(widht);
  let b = cuadrado.perimetro(widht);
  console.log(widht, a, b);
  res.send({
    ancho: widht,
    area: a,
    perimetro: b,
  });
});

// router.get("/", (req, res) => {
//   res.send({ message: "hola mundo soy MARIANA AVILA RIVERA" });
// });

//aquí es donde se  indica que al cargar localhost:3000 busque el index de Angular que pegamos en la carpeta public.
router.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/public/index.html"); //envia un archivo
});

//postman
router.post("/ayuda", (req, res) => {
  console.log("Cuerpo de la petición", req.body);
  res.send({
    message: "Hola mundo en que te puedo ayudar, SOY UNA PETICIÓN POST",
  });
});



/* indica que queremos que este código pueda ser utilizado en otras partes del proyecto, en este caso desde el index.js  */
module.exports = router;
