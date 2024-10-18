function numero(input) {
  return !isNaN(input);
}

let userInput = prompt("Ingresa un número:");
if (numero(userInput)) {
  console.log("Es un número válido.");
} else {
    console.log("Error: No es un número válido.");
}
