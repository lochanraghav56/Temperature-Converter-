function convertTemperature() {
    let inputTemp = document.getElementById("temperatureInput").value;
    let conversionType = document.getElementById("conversionType").value;
    let resultElement = document.getElementById("result");

    if (inputTemp === "") {
        resultElement.textContent = "Please enter a temperature.";
        return;
    }

    let convertedTemp;
    if (conversionType === "CtoF") {
        convertedTemp = (parseFloat(inputTemp) * 9/5) + 32;
        resultElement.textContent = `Result: ${convertedTemp.toFixed(2)}°F`;
    } else {
        convertedTemp = (parseFloat(inputTemp) - 32) * 5/9;
        resultElement.textContent = `Result: ${convertedTemp.toFixed(2)}°C`;
    }
}
