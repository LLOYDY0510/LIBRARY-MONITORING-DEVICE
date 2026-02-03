let readings = [];
  let maxNoise = 0;

  function updateNoise() {
    const noise = Math.floor(Math.random() * 100); // Replace with sensor data
    readings.push(noise);

    // Update max
    if (noise > maxNoise) maxNoise = noise;

    // Calculate average
    const sum = readings.reduce((a,b) => a + b, 0);
    const avg = Math.round(sum / readings.length);

    // Update HTML
    document.getElementById('currentNoise').textContent = noise + ' dB';
    document.getElementById('maxNoise').textContent = maxNoise + ' dB';
    document.getElementById('avgNoise').textContent = avg + ' dB';
  }

  setInterval(updateNoise, 1000);