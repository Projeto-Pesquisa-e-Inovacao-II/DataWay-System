function changeTextToInput() {
  var text = document.querySelectorAll(".right_span_text").values();
  var buttonChangeData = document.querySelector(".edit_profile_data");

  console.log(text);
  for (const element of text) {
    var input = document.createElement("input");
    input.type = "text";
    input.value = element.innerHTML;
    input.className = "right_span_input";
    input.name = element.getAttribute("data-field");
    element.parentNode.replaceChild(input, element);
  }

  const buttonSave = document.createElement("button");
  const buttonDelete = document.createElement("button");

  var divToAppend = document.querySelector(".buttons");

  buttonSave.className = "save_profile_data";
  buttonSave.textContent = "Atualizar dados";

  buttonDelete.className = "delete_profile_data";
  buttonDelete.textContent = "Excluir conta";

  if (divToAppend) {
    divToAppend.appendChild(buttonSave);
    divToAppend.appendChild(buttonDelete);
  }

  if (buttonChangeData && buttonChangeData.parentNode) {
    buttonChangeData.parentNode.removeChild(buttonChangeData);
  }

  buttonDelete.addEventListener("click", function () {
    var buttonDeleteElem = document.querySelector(".delete_profile_data");
    if (buttonDeleteElem) {
      var popup = document.getElementById("popup");
      if (popup) {
        popup.style.display = "block";
      }
    }
  });
  buttonSave.addEventListener("click", function () {
    var inputs = document.querySelectorAll(".right_span_input");

    var data = {};
    var inputPosition = 0;
    for (const element of inputs) {
      var inputValue = element.value;
      var inputName = inputPosition.toString();

      console.log("Input name:", inputName);
      console.log("Input value:", inputValue);

      data[inputName] = inputValue;

      inputPosition++;
    }

    fetch("/update_user_data", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
}
