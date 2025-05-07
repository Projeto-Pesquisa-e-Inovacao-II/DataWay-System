let emailVar = document.getElementById("emailInput");
let senhaVar = document.getElementById("senhaInput");


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

btnLogin.addEventListener("click", function (event) {
  event.preventDefault();
  const email = emailInput.value.trim();
  const senha = senhaInput.value.trim();

  let hasError = false;

  if (!email) {
    showToast("Digite seu e-mail corretamente!", "#ff6347");
    hasError = true;
    return;
  }
  if (!senha) {
    showToast("Digite sua senha corretamente!", "#ff6347");
    hasError = true;
    return;
  }

  console.log("Iniciando validação de login...");
  console.log("FORM LOGIN: ", email);
  console.log("FORM SENHA: ", senha);

  fetch("/usuarios/autenticar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      emailServer: email,
      senhaServer: senha,
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
          sessionStorage.ID_USUARIO = json.idUsuario;

          
          showToast("Login realizado com sucesso!", "#7cb15f");

          // Redirecionar para o dashboard
          setTimeout(function () {
            window.location.href = "/dashboard/visao-geral";
          }, 1000);
        });
      } else {
        console.log("Houve um erro ao tentar realizar o login!");
        showToast("E-mail ou senha inválidos!", "#ff6347");

        resposta.text().then((texto) => {
          console.error(texto);
        });
      }
    })
    .catch(function (erro) {
      console.log(erro);
    });

  return false;
});

function showToast(message, color) {
  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toastMessage");

  toastMessage.textContent = message;
  toast.style.backgroundColor = color;
  toast.classList.remove("hidden");
  toast.classList.add("visible");

  setTimeout(() => {
    toast.classList.remove("visible");
    toast.classList.add("hidden");
  }, 3000);
}
