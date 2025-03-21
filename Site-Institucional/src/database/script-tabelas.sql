-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE TABLE Empresa (
    idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100) NOT NULL,
    CNPJ VARCHAR(18) NOT NULL,
    Senha VARCHAR(255) NOT NULL,
    telefone VARCHAR(20),
    representanteLegal VARCHAR(100),
    razaoSocial VARCHAR(200)
);

CREATE TABLE Endereco (
    idEndereco INT PRIMARY KEY AUTO_INCREMENT,
    cep VARCHAR(10),
    cidade VARCHAR(100),
    rua VARCHAR(200),
    estado VARCHAR(50),
    fkEmpresa INT,
    FOREIGN KEY (fkEmpresa) REFERENCES Empresa(idEmpresa)
);

CREATE TABLE DadosPracaPedagio (
    idDado INT PRIMARY KEY AUTO_INCREMENT,
    Praca INT NOT NULL,
    Data DATE NOT NULL,
    Hora TIME NOT NULL,
    Tipo INT NOT NULL,
    fkUsuario INT,
    FOREIGN KEY (fkUsuario) REFERENCES Empresa(idEmpresa)
);

CREATE TABLE Notificacoes (
    idNotificacao INT PRIMARY KEY AUTO_INCREMENT,
    dataHora DATETIME NOT NULL,
    mensagem VARCHAR(500) NOT NULL,
    fkUsuario INT,
    FOREIGN KEY (fkUsuario) REFERENCES Empresa(idEmpresa)
);