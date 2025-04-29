function deleteUser() {
  const id = 1;
  fetch(`/delete_user_data`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
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
