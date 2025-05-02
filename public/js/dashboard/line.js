const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

const backgroundPlugin = {
  id: "custom_canvas_background_color",
  beforeDraw: (chart) => {
    const {
      ctx,
      chartArea: { left, top, width, height },
    } = chart;
    ctx.save();
    ctx.fillStyle = "rgba(65, 183, 213, 0.64)";
    ctx.fillRect(left, top, width, height);
    ctx.restore();
  },
};

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: true,
      borderColor: "rgba(108, 230, 232, 0.56)",
      backgroundColor: "rgba(108, 230, 232, 0.56)",
      tension: 0,
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
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
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
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
            weight: "bold",
          },
          color: "#fff",
        },
      },
    },
  },
  plugins: [backgroundPlugin],
};

const canvas = document.getElementById("lineCanvas");
if (canvas) {
  const ctx = canvas.getContext("2d");
  new Chart(ctx, config);
} else {
  console.error("Canvas de área não encontrado!");
}
