const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const data = {
  labels: labels,
  datasets: [
    {
      type: 'line',
      label: 'Evasões',
      data: [5, 7, 6, 8, 10, 9, 6, 7, 9, 10, 9, 20],
      borderColor: 'orange',
      backgroundColor: 'orange',
      fill: false
    },
    {
      type: 'bar',
      label: 'Tráfego',
      data: [10, 12, 15, 14, 20, 18, 10, 13, 16, 19, 22, 28],
      backgroundColor: [
        'rgb(108, 229, 232)',
        'rgb(65, 184, 213)',
        'rgb(45, 139, 186)',
        'rgb(47, 95, 152)',
      ],
      borderColor: [
        'rgb(108, 229, 232)',
        'rgb(65, 184, 213)',
        'rgb(45, 139, 186)',
        'rgb(47, 95, 152)',
      ],
      borderWidth: 1,
      borderRadius: 4,
    }
    
  ]
};

const config = {
  data: data,
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

const canvas = document.getElementById("barCanvas");
if (canvas) {
  const ctx = canvas.getContext("2d");
  new Chart(ctx, config);
} else {
  console.error("Canvas não encontrado.");
}
