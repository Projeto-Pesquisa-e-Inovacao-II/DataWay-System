var express = require("express");
var router = express.Router();

var empresaController = require("../controllers/empresaController");

router.delete("/", function (req) {
  const idEmpresa = 1;
  empresaController.deletar(idEmpresa);
});

module.exports = router;
