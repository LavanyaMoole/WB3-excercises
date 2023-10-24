function convertCToF(celsiusTemperature){
    const fahrenheitTemperature = (celsiusTemperature*1.8)+32;
    // console.log(`${celsiusTemperature}°C is approximately ${fahrenheitTemperature.toFixed(2)}°F`);
    return fahrenheitTemperature;
}
let celsiusTemperature=40;
let fahrenheitTemperature=convertCToF(celsiusTemperature);