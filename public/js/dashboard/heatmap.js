const ctx = document.getElementById("heatMapCanvas").getContext("2d");

const meses = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];
const dias = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

const dataPoints = [];
for (let m = 1; m <= 12; m++) {
  for (let d = 1; d <= 7; d++) {
    dataPoints.push({
      x: m,
      y: d,
      v: Math.floor(Math.random() * 12) + 1,
    });
  }
}

const config = {
  type: "matrix",
  data: {
    datasets: [
      {
        data: dataPoints,
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.5)",
        backgroundColor: "rgba(200,200,0,0.3)",
        width: (ctx) => {
          const area = ctx.chart.chartArea;
          return area ? area.width / 12 - 11 : undefined;
        },
        height: (ctx) => {
          const area = ctx.chart.chartArea;
          return area ? area.height / 7 - 22 : undefined;
        },
      },
    ],
  },

  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
        min: 0.5,
        max: 12.5,
        offset: true,
      },
      y: {
        display: false,
        min: 0.5,
        max: 7.5,
        offset: true,
      },
    },
  },
};

if (ctx) {
  new Chart(ctx, config);
} else {
  console.error("Canvas não encontrado.");
}
