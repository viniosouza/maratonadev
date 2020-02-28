// configurar a apresentação da página
const express = require("express");
const server = express();

// configurar o servidor para apresentar arquivos estáticos
server.use(express.static("public"));

// configurando a templete engine
const nunjucks = require("nunjucks");
nunjucks.configure("./", {
  express: server,
  noCache: true
});

// Array Donors list
const donors = [
  {
    name: "Vagner",
    blood: "AB+"
  },
  {
    name: "Fabiana",
    blood: "O+"
  },
  {
    name: "Samara",
    blood: "O-"
  },
  {
    name: "Vinicios",
    blood: "A+"
  }
];

// configurar a apresentação
server.get("/", function(req, res) {
  console.log('dd')
  return res.render("index.html", { "valor": "1" });
});

// Ligar servidor e permitir o acesso na porta 3000
server.listen(3000, () => {
  console.log("Iniciei o servidor");
});
