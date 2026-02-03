function updateNoise() {
   
    let noise = Math.floor(Math.random() * 100);

    let status = "";
    let barClass = "";

    if (noise < 40) {
      status = "Quiet";
      barClass = "bg-success";
    } else if (noise < 70) {
      status = "Moderate";
      barClass = "bg-warning";
    } else {
      status = "Loud";
      barClass = "bg-danger";
    }

    document.getElementById("noiseValue").textContent = noise + " dB";
    document.getElementById("noiseStatus").textContent = status;

    const bar = document.getElementById("noiseBar");
    bar.style.width = noise + "%";
    bar.className = "progress-bar " + barClass;
  }

  setInterval(updateNoise, 1000);