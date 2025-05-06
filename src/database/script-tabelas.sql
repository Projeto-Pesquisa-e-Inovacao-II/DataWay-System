-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database dataway;
use dataway;
	


CREATE TABLE Usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    tipoUsuario ENUM('Empresa', 'Funcionario'),
    foto VARCHAR(255),
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE Empresa (
    idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
    CNPJ CHAR(14) UNIQUE NOT NULL,
    representanteLegal VARCHAR(100) NOT NULL,
    razaoSocial VARCHAR(150) NOT NULL,
    nomeFantasia VARCHAR(100) NOT NULL,
    Usuario_idUsuario INT NOT NULL,
    FOREIGN KEY (Usuario_idUsuario) REFERENCES Usuario(idUsuario)
);

CREATE TABLE Endereco (
    idEndereco INT PRIMARY KEY AUTO_INCREMENT,
    cep CHAR(8) NOT NULL,
    cidade VARCHAR(100) NOT NULL,
    estado CHAR(2) NOT NULL,
    Empresa_idEmpresa INT NOT NULL,
    FOREIGN KEY (Empresa_idEmpresa) REFERENCES Empresa(idEmpresa)
);

CREATE TABLE Notificacoes (
    idNotificacoes INT PRIMARY KEY AUTO_INCREMENT,
    dataHora DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    mensagem TEXT NOT NULL,
    tipoDestinatario ENUM('Empresa', 'Funcionario'),
    Usuario_idUsuario INT NOT NULL,
    FOREIGN KEY (Usuario_idUsuario) REFERENCES Usuario(idUsuario)
);


CREATE TABLE DadosPracaPedagio (
    idDadosPracaPedagio INT PRIMARY KEY AUTO_INCREMENT,
    praca VARCHAR(100) NOT NULL,
    lote VARCHAR(50) NOT NULL,
    data DATE NOT NULL,
    hora INT NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    sentido VARCHAR(100) NOT NULL,
    tpCampo VARCHAR(50),
    quantidade INT NOT NULL,
    Categoria VARCHAR(50),
    Empresa_idEmpresa INT NOT NULL
);