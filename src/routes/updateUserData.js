var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/updateUserDataController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/update_user_data", function (req, res) {
    usuarioController.cadastrar(req, res);
})

module.exports = router;