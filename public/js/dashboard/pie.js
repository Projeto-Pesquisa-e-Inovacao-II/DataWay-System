const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(108, 229, 232)',
        'rgb(65, 184, 213)',
        'rgb(45, 139, 186)'
      ],
      borderColor: [
        'rgb(108, 229, 232)',
        'rgb(65, 184, 213)',
        'rgb(45, 139, 186)'
      ],
      hoverOffset: 4,
    },
  ],
};

const config = {
  type: "pie",
  data: data,
};

const canvas = document.getElementById("pieCanvas");
if (canvas) {
  const ctx = canvas.getContext("2d");
  new Chart(ctx, config);
} else {
  console.error("nao tem canvas");
}
