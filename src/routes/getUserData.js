var express = require("express");
var router = express.Router();

var getUserDataController = require("../controllers/getUserDataController");

// Recebendo o email como parâmetro na rota e direcionando para a função getUserData de getUserDataController.js
router.get("/", function (req, res) {
    const idEmpresa = 1;
    console.log(idEmpresa)
    getUserDataController.getUserData(req, res, idEmpresa);
});

module.exports = router;