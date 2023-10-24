function convertFToC(fahrenheitTemperature){
    const celsiusTemperature = (fahrenheitTemperature-32)/1.8;
    // console.log(`${fahrenheitTemperature}°F is approximately ${celsiusTemperature.toFixed(2)}°C`);
    return celsiusTemperature
}
let currentTemp=92;
let celsiusTemperature=convertFToC(currentTemp);
