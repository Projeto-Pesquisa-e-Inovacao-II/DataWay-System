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
const dias = [
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
  "Domingo",
];

const dataPoints = [];
//provisorio pra gerar os dados
for (let m = 1; m <= 12; m++) {
  for (let d = 1; d <= 7; d++) {
    const v =
      d >= 5
        ? Math.floor(Math.random() * 5) + 8
        : Math.floor(Math.random() * 7) + 1;
    dataPoints.push({ x: m, y: d, v });
  }
}

const MAX = 12;
const BASE_COLOR = [40, 225, 230];

const config = {
  type: "matrix",
  data: {
    datasets: [
      {
        data: dataPoints,
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.5)",
        backgroundColor: (ctx) => {
          const v = ctx.dataset.data[ctx.dataIndex].v;
          const t = 1 - v / MAX;
          const [r, g, b] = BASE_COLOR;
          const alpha = 0.3 + 1 * t;
          return `rgba(${r},${g},${b},${alpha})`;
        },
        width: (ctx) => {
          const area = ctx.chart.chartArea;
          return area ? area.width / 12 - 7 : undefined;
        },
        height: (ctx) => {
          const area = ctx.chart.chartArea;
          return area ? area.height / 7 - 20 : undefined;
        },
      },
    ],
  },

  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          title() {
            return "";
          },
          label(ctx) {
            const v = ctx.raw.v;
            return `Evasões: ${v}`;
          },
        },
      },
    },

    scales: {
      x: {
        min: 1,
        max: 12,
        offset: true,
        grid: {
          display: false,
        },

        ticks: {
          font: {
            size: 12,
            weight: "bold",
          },
          color: "#fff",
          padding: 1,
          callback: function (value) {
            return meses[value - 1].toUpperCase();
          },
        },
      },
      y: {
        min: 1,
        max: 7,
        offset: true,
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
            weight: "bold",
          },
          color: "#fff",
          padding: 1,
          callback: function (value) {
            return dias[value - 1];
          },
        },
      },
    },
  },
};

if (ctx) {
  new Chart(ctx, config);
} else {
  console.error("Canvas não encontrado.");
}
