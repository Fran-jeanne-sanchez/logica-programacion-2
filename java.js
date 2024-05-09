    function convertirTemperatura() {
        let temperaturaCelsius;
    
        // Solicitar la temperatura en grados Celsius y verificar si es un número
        do {
            temperaturaCelsius = parseFloat(prompt("Ingresa la temperatura en grados Celsius:"));
            if (isNaN(temperaturaCelsius)) {
                alert("Por favor, ingresa un valor numérico válido.");
            }
        } while (isNaN(temperaturaCelsius));
    
        // Convertir temperatura de Celsius a Fahrenheit y Kelvin
        let temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;
        let temperaturaKelvin = temperaturaCelsius + 273.15;
    
        // Imprimir resultados
        console.log("Grados Fahrenheit:", temperaturaFahrenheit.toFixed(2));
        console.log("Grados Kelvin:", temperaturaKelvin.toFixed(2));
    }
    
    // Llamar a la función para ejecutar el programa
    convertirTemperatura();
    
