function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validarSenha(senha) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  return regex.test(senha);
}

function entrar() {
  console.log("Iniciando validação de login...");

  var emailVar = email_input.value.trim();
  var senhaVar = senha_input.value.trim();

  if (emailVar === "" || senhaVar === "") {
    cardErro.style.display = "block";
    mensagem_erro.innerHTML = "Por favor, preencha todos os campos.";
    setTimeout(sumirMensagem, 5000);
    return false;
  }

  if (!validarEmail(emailVar)) {
    cardErro.style.display = "block";
    mensagem_erro.innerHTML = "Por favor, insira um e-mail válido.";
    setTimeout(sumirMensagem, 5000);
    return false;
  }

  if (!validarSenha(senhaVar)) {
    cardErro.style.display = "block";
    mensagem_erro.innerHTML =
      "A senha deve ter pelo menos 6 caracteres, incluindo uma letra maiúscula, uma letra minúscula, um número e um caractere especial.";
    setTimeout(sumirMensagem, 5000);
    return false;
  }

  console.log("FORM LOGIN: ", emailVar);
  console.log("FORM SENHA: ", senhaVar);

  fetch("/usuarios/autenticar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      emailServer: emailVar,
      senhaServer: senhaVar,
    }),
  })
    .then(function (resposta) {
      console.log("ESTOU NO THEN DO entrar()!");

      if (resposta.ok) {
        console.log(resposta);

        resposta.json().then((json) => {
          console.log(json);
          console.log(JSON.stringify(json));
          sessionStorage.EMAIL_USUARIO = json.email;
          sessionStorage.NOME_USUARIO = json.nome;
          sessionStorage.ID_USUARIO = json.id;

          // Redirecionar para o dashboard
          setTimeout(function () {
            window.location = "./dashboard/cards.html";
          }, 1000);
        });
      } else {
        console.log("Houve um erro ao tentar realizar o login!");

        resposta.text().then((texto) => {
          console.error(texto);
          cardErro.style.display = "block";
          mensagem_erro.innerHTML = texto;
          setTimeout(sumirMensagem, 5000);
        });
      }
    })
    .catch(function (erro) {
      console.log(erro);
      cardErro.style.display = "block";
      mensagem_erro.innerHTML = "Erro ao conectar ao servidor.";
      setTimeout(sumirMensagem, 5000);
    });

  return false;
}

function sumirMensagem() {
  cardErro.style.display = "none";
}