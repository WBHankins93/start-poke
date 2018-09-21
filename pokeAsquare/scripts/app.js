let score = 0;

$('button').on('click', () => {
  console.log('click works');
  // When the user clicks the button, populate the squares
  createSquares(30);
});


// Now we need to write a function named (createSquares) that sets up our
// squares, Try to write a function that takes a parameter numberOfSquares
// that will create an arbitary number of divs depending on the parameter
// and attach them to the squares class from the html
const createSquares = (numberOfSquares) => {
  for (let i = 0; i < numberOfSquares; i++) {
    // creating squares
    const $div = $('<div/>').on('click', disappearSquares);
    // This is where the color is applied
    applyRandomColor($div);
    // attach to the square class
    $('.squares').append($div);
  }
};

const disappearSquares = (e) => {
  // e is short for event

  // To retrieve a property
  const color = $(e.currentTarget).css('background-color');
  checkValidPoke(color);

  // Setting a property using jQuery
  $(e.currentTarget).css('opacity', 0);
}

// lets write a function called (checkValidPoke) that takes that color
// string and if it is blue lets update a global score variable.
const checkValidPoke = (colorAsString) => {

  if (colorAsString === 'rgb(0, 0, 255)') {
    score++
  } else {
    score--
  };

$('h1').text('scoreboard: ' + score);
}

// Write a function, that when we apply click it randomizes squares to
// red, blue, or green
const applyRandomColor = (square) => {
  const randNum = Math.floor(Math.random() * 3) + 1;

  //
  if (randNum === 1) {
    square.css('background-color', 'red');
  } else if (randNum === 2) {
    square.css('background-color', 'blue');
  } else {
    square.css('background-color', 'green');
  }
};
