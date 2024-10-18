function isPalindrome(word) {
    let cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, ''); // Limpiar caracteres no alfanuméricos
    let reversedWord = cleanedWord.split('').reverse().join('');
    return cleanedWord === reversedWord;
  }
  
  let userWord = prompt("Ingresa una palabra:");
  if (isPalindrome(userWord)) {
    console.log(userWord + " es un palíndromo.");
  } else {
    console.log(userWord + " no es un palíndromo.");
  }
  