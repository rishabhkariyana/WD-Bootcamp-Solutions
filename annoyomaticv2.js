var userInput = prompt("Are we there yet?");

while(userInput.indexOf("yes") === -1){
  userInput = prompt("Are we there yet?");
}
alert("Yay, we finally made it!");


