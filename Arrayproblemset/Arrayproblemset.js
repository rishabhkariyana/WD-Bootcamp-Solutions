// printReverse function

function printReverse(numA) {
  for (let i = numA.length - 1; i >= 0; i--) {
    console.log(numA[i]);
  }
}

// isUniform function

function isUniform(numA) {
  const value = numA[0];
  for (let i = 1; i < numA.length; i++) {
    if (numA[i] !== value) {
      return false;
    }
  }
  return true;
}

// sumArray function

function sumArray(num) {
  let add = 0;
  num.forEach(check => {
    add += check;
  });
  return add;
}

// max function

function max(num) {
  let a = num[0];
  for (let i = 1; i < num.length; i++) {
    if (num[i] > a) {
      a = num[i];
    }
  }
  return a;
}
