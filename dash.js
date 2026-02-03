let noiseValues = [];
let maxNoise = 0;
let alertCount = 0;


const avgEl = document.querySelector(".bg-primary .card-text");
const maxEl = document.querySelector(".bg-success .card-text");
const alertEl = document.querySelector(".bg-warning .card-text");
const sensorEl = document.querySelector(".bg-info .card-text");


sensorEl.textContent = "1";


const ctx = document.getElementById("noiseChart").getContext("2d");
const noiseChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [],
    datasets: [{
      label: "Noise Level (dB)",
      data: [],
      borderColor: "rgba(13,110,253,1)",
      backgroundColor: "rgba(13,110,253,0.2)",
      fill: true,
      tension: 0.3
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } }
  }
});


function updateNoiseSystem(noise) {


  noiseValues.push(noise);

 
  if (noise > maxNoise) {
    maxNoise = noise;
  }

  const sum = noiseValues.reduce((a, b) => a + b, 0);
  const average = Math.round(sum / noiseValues.length);


  if (noise >= 80) {
    alertCount++;
  }

 
  avgEl.textContent = average + " dB";
  maxEl.textContent = maxNoise + " dB";
  alertEl.textContent = alertCount;

 
  noiseChart.data.labels.push(new Date().toLocaleTimeString());
  noiseChart.data.datasets[0].data.push(noise);


  if (noiseChart.data.labels.length > 10) {
    noiseChart.data.labels.shift();
    noiseChart.data.datasets[0].data.shift();
  }

  noiseChart.update();
}

// DEMO: simulate live noise every second
setInterval(() => {
  const simulatedNoise = Math.floor(Math.random() * 100);
  updateNoiseSystem(simulatedNoise);
}, 1000);

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      height: 300
    });
    calendar.render();
  });

  