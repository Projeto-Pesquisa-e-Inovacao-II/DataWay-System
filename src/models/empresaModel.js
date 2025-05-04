var database = require("../database/config");

function autenticar(email, senha) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ",
    email,
    senha
  );

  //   CREATE TABLE Usuario (
  //     idUsuario INT PRIMARY KEY AUTO_INCREMENT,
  //     tipoUsuario ENUM('Admin', 'Empresa', 'Funcionario'),
  //     email VARCHAR(100) UNIQUE NULL,
  //     senha VARCHAR(255) NULL,
  //     telefone VARCHAR(20) NULL
  // );

  // CREATE TABLE Empresa (
  //     idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
  //     CNPJ CHAR(18) UNIQUE NULL,
  //     representanteLegal VARCHAR(100) NULL,
  //     razaoSocial VARCHAR(150) NULL,
  //     nomeFantasia VARCHAR(100) NULL,
  //     concessionaria VARCHAR(100),
  //     Usuario_idUsuario INT NULL,
  //     FOREIGN KEY (Usuario_idUsuario) REFERENCES Usuario(idUsuario)
  // );
  var instrucaoSql = `
        SELECT Empresa.idEmpresa, Empresa.nomeFantasia, Usuario.email
        FROM Usuario
        JOIN Empresa ON Empresa.Usuario_idUsuario = Usuario.idUsuario
        WHERE Usuario.email = '${email}' AND Usuario.senha = '${senha}';
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

async function cadastrar(
  empresaServer,
  // nomeFantasia,
  estado,
  cep,
  email,
  senha,
  representanteLegal,
  CNPJ,
  telefone
) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",
    empresaServer,
    // nomeFantasia,
    representanteLegal,
    CNPJ,
    telefone,
    email,
    senha,
    cep,
    estado
  );
  // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
  //  e na ordem de inserção dos dados.

  await inserirUsuario(email, senha, telefone);

  const usuarioResult = await database.executar(`
    SELECT idUsuario FROM Usuario WHERE email = '${email}' AND senha = '${senha}' AND telefone = '${telefone}';
  `);

  const idUsuario = usuarioResult[0].idUsuario;

  await inserirEmpresa(
    CNPJ,
    representanteLegal,
    empresaServer,
    // nomeFantasia,
    empresaServer,
    idUsuario
  );

  const empresaResult = await database.executar(`
    SELECT idEmpresa FROM Empresa WHERE CNPJ = '${CNPJ}' AND representanteLegal = '${representanteLegal}' AND razaoSocial = '${empresaServer}' AND concessionaria = '${empresaServer}' AND Usuario_idUsuario = '${idUsuario}';
  `);

  const idEmpresa = empresaResult[0].idEmpresa;

  await inserirEndereco(cep, estado, idEmpresa);

  return true;
}

async function inserirUsuario(email, senha, telefone) {
  var instrucaoSql = `
        INSERT INTO Usuario 
        (tipoUsuario, email, senha, telefone) 
        VALUES 
        ('Empresa', '${email}', '${senha}', '${telefone}');
    `;
  return await database.executar(instrucaoSql);
}

async function inserirEmpresa(
  CNPJ,
  representanteLegal,
  razaoSocial,
  // nomeFantasia,
  concessionaria,
  Usuario_idUsuario
) {
  var instrucaoSql = `
        INSERT INTO Empresa 
        ( CNPJ, representanteLegal, razaoSocial, concessionaria, Usuario_idUsuario)
        VALUES  
        ('${CNPJ}', '${representanteLegal}', '${razaoSocial}', '${concessionaria}', '${Usuario_idUsuario}');
    `;
  return await database.executar(instrucaoSql);
}

// function inserirEndereco(cep, estado, cidade, bairro, rua, numero, complemento) {
//   var instrucaoSql = `
//         INSERT INTO Endereco
//         (cep, estado, cidade, bairro, rua, numero, complemento)
//         VALUES
//         ('${cep}', '${estado}', '${cidade}', '${bairro}', '${rua}', '${numero}', '${complemento}');
//     `;
//   return database.executar(instrucaoSql);
// }

async function inserirEndereco(cep, estado, idEmpresa) {
  var instrucaoSql = `
        INSERT INTO Endereco 
        (cep, estado, Empresa_idEmpresa)
        VALUES   
        ('${cep}', '${estado}', '${idEmpresa}');
    `;
  return await database.executar(instrucaoSql);
}

function deletar(idEmpresa) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",
    idEmpresa
  );
  var instrucaoSql = `
        DELETE FROM Empresa WHERE idEmpresa = '${idEmpresa}';
    `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  autenticar,
  cadastrar,
  deletar,
};
