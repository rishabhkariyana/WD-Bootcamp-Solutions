var p1Button = document.getElementById("p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 7;
// Player 1 event listener

p1Button.addEventListener("click", function () {
  if (!gameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      p1display.classList.add("winner");
      gameOver = true;
    }
    p1display.textContent = p1Score;
  }

});

// Player 2 event listener

p2Button.addEventListener("click", function () {
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      p2display.classList.add("winner");
      gameOver = true;
    }
    p2display.textContent = p2Score;
  }
});

// Reset
resetButton.addEventListener("click", function () {
  reset();
})


// number input event listener

numInput.addEventListener("change", function () {
  if (Number(this.value) > 0) {
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset();
  } else {
    winningScore = 7;
    winningScoreDisplay.textContent = 7
    reset();
  }

});


function reset() {
  p1Score = 0;
  p2Score = 0;
  gameOver = false;
  p1display.textContent = 0;
  p2display.textContent = 0;
  p1display.classList.remove("winner");
  p2display.classList.remove("winner");
}

