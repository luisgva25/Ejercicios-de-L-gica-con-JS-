function celsiusFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  
  let celsius = prompt("Ingresa los grados Celsius:");
    console.log(celsius + "°C son " + celsiusFahrenheit(parseFloat(celsius)) + "°F");
  
  