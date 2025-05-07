const emailVar = document.getElementById("email");
const nomeFantasiaVar = document.getElementById("nomeFantasia");
const representanteLegalVar = document.getElementById("representanteLegal");
const telefoneVar = document.getElementById("telefone");

async function getUserData() {
    const idUsuario = sessionStorage.ID_USUARIO;
    fetch(`/get_user_data?idUsuario=${encodeURIComponent(idUsuario)}`)
        .then(response => response.json())
        .then(data => {
            if (data && data.length > 0) {
                const user = data[0];
                emailVar.innerHTML = user.email;
                nomeFantasiaVar.innerHTML = user.nomeFantasia;
                representanteLegalVar.innerHTML = user.representanteLegal;
                telefoneVar.innerHTML = user.telefone;
            } else {
                console.warn("Nenhum dado de usuário encontrado.");
            }
        })
        .catch(error => console.error('Error fetching user data:', error));
}

getUserData();