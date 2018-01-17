// Print all numbers between -10 and 19
console.log('Print all numbers between -10 and 19');
for (i = -10; i <= 19; i++) {
  console.log(i);
}

// Print all even numbers between 10 and 40
console.log('Print all even numbers between 10 and 40');
for (i = 10; i <= 40; i += 2) {
  console.log(i);
}

// Print all odd numbers between 300 and 333
console.log('Print all odd numbers between 300 and 333');
for (i = 300; i <= 333; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// Print all numbers divisible by 3 and 5 between 5 and 30
console.log('Print all numbers divisible by 3 and 5 between 5 and 30');
for (i = 5; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}
