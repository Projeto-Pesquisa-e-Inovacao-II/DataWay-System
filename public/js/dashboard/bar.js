const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

const data = {
  labels: labels,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
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
    borderWidth: 1
  }]
};

const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };

  const canvas = document.getElementById("barCanvas");
if (canvas) {
  const ctx = canvas.getContext("2d");
  new Chart(ctx, config);
} else {
  console.error("nao tem canvas");
}
