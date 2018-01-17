var userInput = prompt("Are we there yet?");

while (userInput !== "yes" && userInput !== "yeah") {
  userInput = prompt("Are we there yet?");
}
alert("Yay, we finally made it!");
