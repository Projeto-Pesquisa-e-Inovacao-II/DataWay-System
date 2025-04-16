// Variáveis globais

const razaoSocialVar = document.getElementById("razaoSocialInput");
const nomeFantasiaVar = document.getElementById("nomeFantasiaInput");
const estadolVar = document.getElementById("estadoImput");
const cepVar = document.getElementById("cepInput");
const cnpjVar = document.getElementById("cnpjInput");
const emailVar = document.getElementById("emailInput");
const senhaVar = document.getElementById("senhaInput");
const confirmacaoSenhaVar = document.getElementById("confirmacaoSenhaInput");

const btnContinuar = document.getElementById("btnContinuar"); 
const btnVoltar = document.getElementById("btnVoltar"); 
const btnContinuar2 = document.getElementById("btnContinuar2"); 
const btnCadastrar = document.getElementById("btnCadastrar");


function validacoes(){

if(razaoSocialVar.value == "" | nomeFantasiaVar.value == "" | estadolVar.value == "" | cepVar.value == "" | cnpjVar.value == ""){
     alert("Mensagem de erro para todos os campos em branco");
    return false;
  }
 
}
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


function cadastrar() {
  // Recupere o valor da nova input pelo nome do id
  // Agora vá para o método fetch logo abaixo
  console.log(cnpjVar);
  var emailVar = email_input.value;
  var representanteLegalVar = rep_legal_input.value;
  var telefoneVar = telefone_input.value;
  var senhaVar = senha_input.value;
  // Verificando se há algum campo em branco
  if (
    nomeFantasiaVar == "" ||
    emailVar == "" ||
    senhaVar == "" ||
    confirmacaoSenhaVar == ""
  ) {
    cardErro.style.display = "block";
    mensagem_erro.innerHTML =
      "(Mensagem de erro para todos os campos em branco)";

    finalizarAguardar();
    return false;
  } else {
    // setInterval(sumirMensagem, 5000);
  }

  // Enviando o valor da nova input
  fetch("/usuarios/cadastrar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // crie um atributo que recebe o valor recuperado aqui
      // Agora vá para o arquivo routes/usuario.js
      nomeFantasiaServer: nomeFantasiaVar,
      emailServer: emailVar,
      cnpjServer: CNPJVar,
      representanteLegalServer: representanteLegalVar,
      telefoneServer: telefoneVar,
      senhaServer: senhaVar,
    }),
  })
    .then(function (resposta) {
      console.log(nomeFantasiaVar);
      console.log("resposta: ", resposta);

      if (resposta.ok) {
        cardErro.style.display = "block";

        mensagem_erro.innerHTML =
          "Cadastro realizado com sucesso! Redirecionando para tela de Login...";

        setTimeout(() => {
          window.location = "login";
        }, "2000");

        limparFormulario();
        finalizarAguardar();
      } else {
        throw "Houve um erro ao tentar realizar o cadastro!";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
      finalizarAguardar();
    });

  return false;
}
