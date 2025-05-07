let empresaSelect = document.getElementById("empresaSelect");
let numeroVar = document.getElementById("numeroInput");
let cepVar = document.getElementById("cepInput");
let emailVar = document.getElementById("emailInput");
let senhaVar = document.getElementById("senhaInput");
let confirmacaoSenhaVar = document.getElementById("confirmarSenhaInput");
let representanteLegalInput = document.getElementById(
  "representanteLegalInput"
);
let cnpjInput = document.getElementById("cnpjInput");
let telefoneInput = document.getElementById("telefoneInput");
let checkboxPrivacyPolicy = document.getElementById("checkboxPrivacyPolicy");
let cardRuleSenha = document.getElementById("cardRuleSenha");
let nomeFantasiaVar = document.getElementById("nomeFantasiaInput");

let privacyPolicy = document.getElementById("privacyPolicy");

let btnContinuar1 = document.getElementById("btnContinuar1");
let btnVoltar = document.getElementById("btnVoltar");
let btnCadastrar = document.getElementById("btnCadastrar");

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

document.getElementById("senhaIcon").addEventListener("click", () => {
  togglePasswordVisibility("senhaInput", "senhaIcon");
});

document.getElementById("confirmarSenhaIcon").addEventListener("click", () => {
  togglePasswordVisibility("confirmarSenhaInput", "confirmarSenhaIcon");
});

function passo1() {
  empresaSelect.parentElement.style.display = "block";
  numeroVar.parentElement.style.display = "block";
  cepVar.parentElement.style.display = "block";
  cnpjInput.parentElement.style.display = "block";
  representanteLegalInput.parentElement.style.display = "block";

  telefoneInput.parentElement.style.display = "none";
  emailVar.parentElement.style.display = "none";
  senhaVar.parentElement.style.display = "none";
  confirmacaoSenhaVar.parentElement.style.display = "none";
  
  cardRuleSenha.style.display = "none";

  btnContinuar1.style.display = "block";
  btnVoltar.style.display = "none";
  btnCadastrar.style.display = "none";
  privacyPolicy.style.display = "none";
}

btnVoltar.addEventListener("click", passo1);
btnContinuar1.addEventListener("click", function (event) {
  event.preventDefault();

  const empresaSelecionada = empresaSelect.value.trim() !== "";
  const nomeFantasia = nomeFantasiaInput.value.trim() !== "";
  const representanteLegal = representanteLegalInput.value.trim() !== "";
  const numeroValido = numeroVar.value.trim() !== "";
  const cep = cepVar.value.replace(/-/g, "");
  const cepValido = cep.length === 8 && /^\d{8}$/.test(cep);
  const cnpj = cnpjInput.value.replace(/[.\-/]/g, "");
  const cnpjValido = cnpj.length === 14 && /^\d{14}$/.test(cnpj);

  let hasError = false;

  if (!empresaSelecionada) {
    showToast("Por favor, selecione uma empresa.", "#ff6347");
    hasError = true;
    return;
  }
  if (!representanteLegal) {
    showToast("Por favor, insira o nome do representante legal.", "#ff6347");
    hasError = true;
    return;
  }
  if (!nomeFantasia) {
    showToast("Por favor, insira o nome fantasia.", "#ff6347");
    hasError = true;
    return;
  }

  if (!cnpjValido) {
    showToast("Por favor, insira um CNPJ válido.", "#ff6347");
    hasError = true;
    return;
  }

  if (!numeroValido) {
    showToast("Por favor, insira o numero.", "#ff6347");
    hasError = true;
    return;
  }

  if (!cepValido) {
    showToast("Por favor, insira um CEP válido.", "#ff6347");
    hasError = true;
    return;
  }

  if (!hasError) {
    passo2();
  }
});

function passo2() {
  empresaSelect.parentElement.style.display = "none";
  numeroVar.parentElement.style.display = "none";
  cepVar.parentElement.style.display = "none";
  cnpjInput.parentElement.style.display = "none";
  representanteLegalInput.parentElement.style.display = "none";
  nomeFantasiaVar.parentElement.style.display = "none";

  cardRuleSenha.style.display = "block";
  telefoneInput.parentElement.style.display = "block";
  emailVar.parentElement.style.display = "block";
  senhaVar.parentElement.style.display = "block";
  confirmacaoSenhaVar.parentElement.style.display = "block";

  btnContinuar1.style.display = "none";
  btnVoltar.style.display = "block";
  btnCadastrar.style.display = "block";
  privacyPolicy.style.display = "block";
}

function validarSenha(senha) {
  const temNumero = /\d/;
  const temCaractereEspecial = /[@#]/;
  const temLetraMaiuscula = /[A-Z]/;
  const tamanhoMinimo = senha.length >= 6;

  const tamanhoMinimoDiv = document.getElementById("tamanhoMinimoDiv");
  const temNumeroDiv = document.getElementById("temNumeroDiv");
  const temCaractereEspecialDiv = document.getElementById(
    "temCaractereEspecialDiv"
  );
  const temLetraMaiusculaDiv = document.getElementById("temLetraMaiusculaDiv");

  if (tamanhoMinimo) {
    tamanhoMinimoDiv.classList.add("valid");
    tamanhoMinimoDiv.classList.remove("invalid");
  } else {
    tamanhoMinimoDiv.classList.add("invalid");
    tamanhoMinimoDiv.classList.remove("valid");
  }

  if (temNumero.test(senha)) {
    temNumeroDiv.classList.add("valid");
    temNumeroDiv.classList.remove("invalid");
  } else {
    temNumeroDiv.classList.add("invalid");
    temNumeroDiv.classList.remove("valid");
  }

  if (temCaractereEspecial.test(senha)) {
    temCaractereEspecialDiv.classList.add("valid");
    temCaractereEspecialDiv.classList.remove("invalid");
  } else {
    temCaractereEspecialDiv.classList.add("invalid");
    temCaractereEspecialDiv.classList.remove("valid");
  }

  if (temLetraMaiuscula.test(senha)) {
    temLetraMaiusculaDiv.classList.add("valid");
    temLetraMaiusculaDiv.classList.remove("invalid");
  } else {
    temLetraMaiusculaDiv.classList.add("invalid");
    temLetraMaiusculaDiv.classList.remove("valid");
  }

  return (
    tamanhoMinimo &&
    temNumero.test(senha) &&
    temCaractereEspecial.test(senha) &&
    temLetraMaiuscula.test(senha)
  );
}

senhaVar.addEventListener("input", () => validarSenha(senhaVar.value));

btnCadastrar.addEventListener("click", function (event) {
  event.preventDefault();

  const telefone = telefoneInput.value.trim();
  const email = emailVar.value.trim();
  const senha = senhaVar.value.trim();
  const confirmacaoSenha = confirmacaoSenhaVar.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const checkboxPrivacy = checkboxPrivacyPolicy.checked;

  let hasError = false;

  if (!telefone) {
    showToast("Por favor, insira um número de telefone válido.", "#ff6347");
    hasError = true;
    return;
  }

  if (!emailRegex.test(email)) {
    showToast("Por favor, insira um email válido.", "#ff6347");
    hasError = true;
    return;
  }

  if (!validarSenha(senha)) {
    hasError = true;
    return;
  }

  if (senha !== confirmacaoSenha) {
    showToast("As senhas não coincidem.", "#ff6347");
    hasError = true;
    return;
  }

  if (!email) {
    showToast("Por favor, insira um email válido.", "#ff6347");
    hasError = true;
    return;
  }

  if (!checkboxPrivacy) {
    showToast(
      "Por favor, aceite os termos e condições e a política de privacidade, para poder cadastrar.",
      "#ff6347"
    );
    hasError = true;
    return;
  }

  if (!hasError) {
    cadastrar();
    showToast("Cadastro realizado com sucesso!", "#7cb15f");
  }
});

function mascaraCNPJ(cnpj) {
  cnpj.value = cnpj.value
    .replace(/\D/g, "")
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .slice(0, 18);
}

function mascaraTelefone(telefone) {
  telefone.value = telefone.value
    .replace(/\D/g, "")
    .replace(/^(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .slice(0, 15);
}

function mascaraCEP(cep) {
  cep.value = cep.value
    .replace(/\D/g, "")
    .replace(/^(\d{5})(\d)/, "$1-$2")
    .slice(0, 9);
}

cnpjInput.addEventListener("input", () => mascaraCNPJ(cnpjInput));
telefoneInput.addEventListener("input", () => mascaraTelefone(telefoneInput));
cepVar.addEventListener("input", () => mascaraCEP(cepVar));

async function cadastrar() {
  console.log("Cadastrando...");
  const empresaSelecionada = empresaSelect.value;
  const numero = numeroVar.value.trim();
  const cep = cepVar.value.trim();
  const email = emailVar.value.trim();
  const senha = senhaVar.value.trim();
  const confirmacaoSenha = confirmacaoSenhaVar.value.trim();
  const representanteLegal = representanteLegalInput.value.trim();
  const cnpj = cnpjInput.value.trim();
  const telefone = telefoneInput.value.trim();
  const nomeFantasia = nomeFantasiaVar.value.trim();

  if (
    !empresaSelecionada || // Verifica se o valor foi selecionado
    !numero ||
    !cep ||
    !email ||
    !senha ||
    !confirmacaoSenha ||
    !nomeFantasia
  ) {
    
    return false;
  }

  if (senha !== confirmacaoSenha) {
    
    return false;
  }

  // Enviando os dados para o servidor
  fetch("/usuarios/cadastrar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      empresaServer: empresaSelecionada,
      numeroServer: numero,
      cepServer: cep,
      emailServer: email,
      senhaServer: senha,
      representanteLegalServer: representanteLegal,
      cnpjServer: cnpj,
      telefoneServer: telefone,
      nomeFantasiaServer: nomeFantasia,
    }),
  })
    .then(function (resposta) {
      if (resposta.ok) {
        console.log("teste")
      } else {
        throw new Error("Houve um erro ao tentar realizar o cadastro!");
      }
    })
    .catch(function (erro) {
      console.error(`#ERRO: ${erro}`);
    });

    setTimeout(function() {
      window.location.href = "/login";
    }, 3000);

}

function showToast(message, color) {
  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toastMessage");

  toastMessage.textContent = message;
  toast.style.backgroundColor = color; // Define a cor do toast dinamicamente
  toast.classList.remove("hidden");
  toast.classList.add("visible");

  setTimeout(() => {
    toast.classList.remove("visible");
    toast.classList.add("hidden");
  }, 3000);
}
