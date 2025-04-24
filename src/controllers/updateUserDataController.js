function updateUserData(req, res) {
  // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
  var nomeFantasia = req.body.nomeFantasiaServer;
  var representanteLegal = req.body.representanteLegalServer;
  var CPNJ = req.body.cnpjServer;
  var telefone = req.body.telefoneServer;
  var email = req.body.emailServer;
  var senha = req.body.senhaServer;
  console.log("OI");
  // Faça as validações dos valores
  if (email == undefined) {
    res.status(400).send("Seu email está undefined!");
  } else if (senha == undefined) {
    res.status(400).send("Sua senha está undefined!");
  } else {
    // Passe os valores como parâmetro e vá para o arquivo updateUserDataModel.js
    console.log(nomeFantasia);
    empresaModel
      .cadastrar(nomeFantasia, representanteLegal, CPNJ, telefone, email, senha)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  cadastrar,
};
