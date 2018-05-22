const p1Button = document.getElementById('p1');
const p2Button = document.querySelector('#p2');
const resetButton = document.querySelector('#reset');
const p1display = document.querySelector('#p1display');
const p2display = document.querySelector('#p2display');
const numInput = document.querySelector('input');
const winningScoreDisplay = document.querySelector('p span');
let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let winningScore = 7;
// Player 1 event listener

p1Button.addEventListener('click', () => {
  if (!gameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      p1display.classList.add('winner');
      gameOver = true;
    }
    p1display.textContent = p1Score;
  }
});

// Player 2 event listener

p2Button.addEventListener('click', () => {
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      p2display.classList.add('winner');
      gameOver = true;
    }
    p2display.textContent = p2Score;
  }
});

// Reset
resetButton.addEventListener('click', () => {
  reset();
});

// number input event listener

numInput.addEventListener('change', () => {
  if (Number(this.value) > 0) {
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset();
  } else {
    winningScore = 7;
    winningScoreDisplay.textContent = 7;
    reset();
  }
});

function reset() {
  p1Score = 0;
  p2Score = 0;
  gameOver = false;
  p1display.textContent = 0;
  p2display.textContent = 0;
  p1display.classList.remove('winner');
  p2display.classList.remove('winner');
}
