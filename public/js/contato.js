function sendEmail() {
  const userName = document.getElementById("name");
  const email = document.getElementById("email");
  const telefone = document.getElementById("telefone");
  const mensagem = document.getElementById("message");

  if (!userName || !email || !telefone || !mensagem) {
    alert("Por favor, preencha todos os campos do formulário.");
    return false;
  }

  fetch("http://34.193.231.25:3333/suport-send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userName: userName.value,
      email: email.value,
      telefone: telefone.value,
      mensagem: mensagem.value,
    }),
  })
    .then((response) => {
      if (response.ok) {
        alert("Email enviado com sucesso!");
      } else {
        alert("Erro ao enviar email.");
      }
    })
    .catch((error) => {
      console.error("Erro:", error);
    });

  return false;
}
