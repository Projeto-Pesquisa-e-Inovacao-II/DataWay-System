const data = {
  labels: ["SUL", "CO", "N", "SD", "ND"],
  datasets: [
    // {
    //   label: "My First Dataset",
    //   data: [65, 59, 90, 81, 56],
    //   fill: true,
    //   backgroundColor: "#5099a3",
    //   borderColor: "#5099a3",
    //   pointBackgroundColor: "#5099a3",
    //   pointBorderColor: "#fff",
    //   pointHoverBackgroundColor: "#fff",
    //   pointHoverBorderColor: "rgb(255, 99, 132)",
    // },
    {
      label: "My Second Dataset",
      data: [28, 48, 40, 19, 96],
      fill: true,
      backgroundColor: "rgba(108, 230, 232, 0.6)",
      borderColor: "rgba(108, 230, 232, 0.6)",
      pointBackgroundColor: "rgba(108, 230, 232, 0.6)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(108, 230, 232, 0.6)",
    },
  ],
};

const config = {
  type: "radar",
  data: data,
  options: {
    elements: {
      line: {
        borderWidth: 3,
      },
    },
    scales: {
      r: {
        grid: {
          color: "rgba(255, 255, 255, 0.2)",
        },
        angleLines: {
          color: "rgba(255, 255, 255, 0.2)",
        },
        pointLabels: {
          color: "#ffffff", // Cor dos rótulos nos cantos (Eating, Coding, etc.)
        },
        ticks: {
          color: "#fff", // Cor dos números (valores no eixo)
          backdropColor: "transparent", // Cor de fundo dos números (valores no eixo)
        },
      },
    },
  },
};

const canvas = document.getElementById("radarCanvas");
if (canvas) {
  const ctx = canvas.getContext("2d");
  new Chart(ctx, config);
} else {
  console.error("Canvas não encontrado!");
}
