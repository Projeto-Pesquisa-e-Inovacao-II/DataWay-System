let empresaSelect = document.getElementById("empresaSelect"); // Corrigido para pegar o elemento, não o valor
let estadoVar = document.getElementById("estadoInput"); 
let cepVar = document.getElementById("cepInput");
let cnpjVar = document.getElementById("cnpjInput");
let emailVar = document.getElementById("emailInput");
let senhaVar = document.getElementById("senhaInput");
let confirmacaoSenhaVar = document.getElementById("confirmarSenhaInput");

let btnContinuar1 = document.getElementById("btnContinuar1");
let btnVoltar = document.getElementById("btnVoltar");
let btnCadastrar = document.getElementById("btnCadastrar");

let cardErro = document.getElementById("cardErro");
let mensagemErro = document.getElementById("mensagem_erro");

function togglePasswordVisibility(inputId, iconId) {
  const input = document.getElementById(inputId);
  const icon = document.getElementById(iconId);

  if (input.type === "password") {
    input.type = "text";
    icon.src = "../images/Icon/eye-slash.svg";
  } else {
    input.type = "password";
    icon.src = "../images/Icon/eye.svg";
  }
}

function passo1() {
  empresaSelect.parentElement.style.display = "none";
  estadoVar.parentElement.style.display = "block";
  cepVar.parentElement.style.display = "block";
  
  emailVar.parentElement.style.display = "none";
  senhaVar.parentElement.style.display = "none";
  confirmacaoSenhaVar.parentElement.style.display = "none";

  btnContinuar1.style.display = "block";
  btnVoltar.style.display = "none";
  btnCadastrar.style.display = "none";
}

btnVoltar.addEventListener("click", passo1);

function passo2() {
  empresaSelect.parentElement.style.display = "none";
  estadoVar.parentElement.style.display = "none";
  cepVar.parentElement.style.display = "none";

  emailVar.parentElement.style.display = "block";
  senhaVar.parentElement.style.display = "block";
  confirmacaoSenhaVar.parentElement.style.display = "block";

  btnContinuar1.style.display = "none";
  btnVoltar.style.display = "block";
  btnCadastrar.style.display = "block";
}

btnContinuar1.addEventListener("click", passo2);

function cadastrar() {
  const empresaSelecionada = empresaSelect.value;
  const estado = estadoVar.value.trim();
  const email = emailVar.value.trim();
  const senha = senhaVar.value.trim();
  const confirmacaoSenha = confirmacaoSenhaVar.value.trim();

  if (
    !empresaSelecionada || // Verifica se o valor foi selecionado
    !estado ||
    !cep ||
    !cnpj ||
    !email ||
    !senha ||
    !confirmacaoSenha
  ) {
    cardErro.style.display = "block";
    mensagemErro.innerHTML = "Por favor, preencha todos os campos.";
    return false;
  }

  if (senha !== confirmacaoSenha) {
    cardErro.style.display = "block";
    mensagemErro.innerHTML = "As senhas não coincidem.";
    return false;
  }

  // Enviando os dados para o servidor
  fetch("/usuarios/cadastrar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      empresaServer: empresaSelecionada, // Incluído o valor do select
      estadoServer: estado,
      cepServer: cep,
      cnpjServer: cnpj,
      emailServer: email,
      senhaServer: senha,
    }),
  })
    .then(function (resposta) {
      if (resposta.ok) {
        cardErro.style.display = "block";
        mensagemErro.innerHTML =
          "Cadastro realizado com sucesso! Redirecionando para a tela de login...";

        setTimeout(() => {
          window.location = "login";
        }, 2000);
      } else {
        throw new Error("Houve um erro ao tentar realizar o cadastro!");
      }
    })
    .catch(function (erro) {
      console.error(`#ERRO: ${erro}`);
      cardErro.style.display = "block";
      mensagemErro.innerHTML = "Erro ao realizar o cadastro. Tente novamente.";
    });

  return false;
}
