// Determine if a number is even

function evenNumber(number) {
  if (number % 2 === 0) {
    return true;
  }
  return false;
}

// Calculate the factorial of a number

function factorial(number) {
  var result = 1;
    for (var i = 2; i <= number; i++) {
      result *= i;
    }
  return result;
}

// Conver kebab case to snake case

function convertCase(str) {
  return str.replace(/-/g, "_");
}
