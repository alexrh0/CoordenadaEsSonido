// Coordenadas preestablecidas
const latitud = 27.4509798;
const longitud = -99.5186301;

// Función para generar un sonido basado en las coordenadas
function generarSonido(lat, long) {
    // Aquí puedes implementar la lógica para generar sonidos
    // Puedes usar bibliotecas como Howler.js o Tone.js
    // Por ejemplo, puedes cargar y reproducir un archivo de sonido según las coordenadas
    const audioElement = document.getElementById("audio");
    audioElement.src = `sonidos/${lat}_${long}.mp3`; // Cambia la ruta y el nombre del archivo según tu estructura de sonidos
    audioElement.load();
    audioElement.play();
}

// Actualiza las coordenadas en la página
document.getElementById("latitud").textContent = latitud;
document.getElementById("longitud").textContent = longitud;

// Llama a la función para generar sonido con las coordenadas preestablecidas
generarSonido(latitud, longitud);
