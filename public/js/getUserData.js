const emailVar = document.getElementById("email");
const nomeFantasiaVar = document.getElementById("nomeFantasia");
const representanteLegalVar = document.getElementById("representanteLegal");
const razaoSocialVar = document.getElementById("razaoSocial");
const telefoneVar = document.getElementById("telefone");

function getUserData() {
    const email = "contato@empresa1.com";
    fetch(`/get_user_data?email=${encodeURIComponent(email)}`)
        .then(response => response.json())
        .then(data => {
            emailVar.innerHTML = data[0].email;
            nomeFantasiaVar.innerHTML = data[0].nomeFantasia;
            razaoSocialVar.innerHTML = data[0].razaoSocial;
            representanteLegalVar.innerHTML = data[0].representanteLegal;
            telefoneVar.innerHTML = data[0].telefone;
        })
        .catch(error => console.error('Error fetching user data:', error));
}

getUserData();