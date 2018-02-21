let numSquares = 6;
let colors = [];
let pickedColor;
const squares = document.querySelectorAll('.square');
const colorDisplay = document.getElementById('colorDisplay');
const messageDisplay = document.querySelector('#message');
const h1 = document.querySelector('h1');
const resetButton = document.querySelector('#reset');
const modeButtons = document.querySelectorAll('.mode');

init();

function init() {
  setupModeButtons();
  setupSquares();
  reset();
}

// reset button
resetButton.addEventListener('click', () => {
  reset();
});

// change color of squares to match correct color
function changeColor(color) {
  // loop through all squares
  for (let i = 0; i < squares.length; i++) {
    // change color to match correct color
    squares[i].style.backgroundColor = color;
  }
}

// pick a color from array
function pickColor() {
  const random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

// create array with random colcors
function generateRandomColors(num) {
  // make array
  const arr = [];
  // add num random colors to array
  for (let i = 0; i < num; i++) {
    // get random color and push to array
    arr.push(randomColor());
  }
  // return array
  return arr;
}

// random color generator
function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// reset function
function reset() {
  messageDisplay.textContent = '';
  // generate new colors
  colors = generateRandomColors(numSquares);
  // pick a new random color from array
  pickedColor = pickColor();
  // change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  // cange color of squares
  for (let i = 0; i < squares.length; i++) {
    // add colors to squares
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = 'block';
    } else {
      squares[i].style.display = 'none';
    }
  }
  h1.style.backgroundColor = 'steelblue';
  resetButton.textContent = 'New Color';
}

// setup mode buttons
function setupModeButtons() {
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', function() {
      modeButtons[0].classList.remove('selected');
      modeButtons[1].classList.remove('selected');
      this.classList.add('selected');
      this.textContent === 'Easy' ? (numSquares = 3) : (numSquares = 6);
      reset();
    });
  }
}

// setup square colors
function setupSquares() {
  for (let i = 0; i < squares.length; i++) {
    // add eventlistener to squares
    squares[i].addEventListener('click', function() {
      // get color of picked square
      const clickedColor = this.style.backgroundColor;
      // compare color of picked square
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = 'Correct!';
        resetButton.textContent = 'Play Again?';
        changeColor(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = '#232323';
        messageDisplay.textContent = 'Try Again';
      }
    });
  }
}
