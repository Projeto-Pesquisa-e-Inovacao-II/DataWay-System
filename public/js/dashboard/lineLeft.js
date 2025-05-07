const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: "rgba(108, 230, 232, 0.56)",
      backgroundColor: "rgba(108, 230, 232, 0.56)",
      tension: 0.1,
    },
    // {
    //   label: 'Avanços Automáticos',
    //   data: [10, 30, 50, 65, 60, 80, 90],
    //   fill: true,
    //   borderColor: '#ff6384',
    //   backgroundColor: 'rgba(255, 99, 132, 0.2)',
    //   tension: 0.3
  ],
};

const config = {
  type: "line",
  data: data,
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
  },
};

const canvas = document.getElementById("lineLeftCanvas");
if (canvas) {
  const ctx = canvas.getContext("2d");
  new Chart(ctx, config);
} else {
  console.error("Canvas de área não encontrado!");
}
