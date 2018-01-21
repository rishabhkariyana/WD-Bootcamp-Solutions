// printReverse function

function printReverse(numA) {
  for (var i = numA.length - 1; i >= 0; i--) {
    console.log(numA[i]);
  }

}

// isUniform function

function isUniform(numA) {
  var value = numA[0];
  for (var i = 1; i < numA.length; i++) {
    if (numA[i] !== value) {
      return false;
    }
  }
  return true;
}

// sumArray function

function sumArray(num) {
  var add = 0;
  num.forEach(function (check) {
    add += check;
  });
  return add;
}

// max function

function max(num) {
  var a = num[0];
  for (var i = 1; i < num.length; i++){
    if (num[i]>a){
      a = num[i];
    }
  }
return a;
}