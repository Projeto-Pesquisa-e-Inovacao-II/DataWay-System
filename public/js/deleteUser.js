function deleteUser(event) {
  event.preventDefault();
  numberConfirm = document.getElementById("numberConfirm").value;
  if (numberConfirm != "1654789") {
    alert("Coloque o número correto para confirmar a exclusão do usuário.");
    return;
  }
  const id = 1;
  fetch(`/delete_user_data/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      if (response.ok) {
        window.location.reload();
      } else {
        alert("Error deleting user.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Error deleting user.");
    });
}
