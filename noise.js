let readings = [];
  let maxNoise = 0;

  function updateNoise() {
    const noise = Math.floor(Math.random() * 100); 
    readings.push(noise);


    if (noise > maxNoise) maxNoise = noise;

 
    const sum = readings.reduce((a,b) => a + b, 0);
    const avg = Math.round(sum / readings.length);


    document.getElementById('currentNoise').textContent = noise + ' dB';
    document.getElementById('maxNoise').textContent = maxNoise + ' dB';
    document.getElementById('avgNoise').textContent = avg + ' dB';
  }

  setInterval(updateNoise, 1000);