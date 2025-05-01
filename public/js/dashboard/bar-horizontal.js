const ctx = document.getElementById("horizontalBarChart").getContext("2d");

// Dados do gráfico
const data = {
  labels: ["MOTO", "PASSEIO", "COMERCIAL"],
  datasets: [
    {
      label: "Valores",
      data: [5, 10, 18],
      backgroundColor: [
        "rgba(102, 230, 230, 0.8)",
        "rgba(56, 195, 224, 0.8)",
        "rgba(42, 157, 204, 0.8)",
      ],
      borderColor: [
        "rgba(102, 230, 230, 1)",
        "rgba(56, 195, 224, 1)",
        "rgba(42, 157, 204, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {
    indexAxis: "y",
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
        max: 20,
        grid: {
          display: false,
        },
        ticks: {
          color: "white",
          font: {
            size: 12,
          },
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          color: "white",
          font: {
            size: 12,
            weight: "bold",
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        titleColor: "white",
        bodyColor: "white",
        displayColors: false,
      },
    },
  },
};

const myChart = new Chart(ctx, config);
