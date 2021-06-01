// 3 x 3 grid -> empty at start
// UI -> what the user will use
// HTML + CSS = grid
//  -> LINK CSS AND HTML
//  -> MAKE HTML
//  -> APPLY CSS FOR GRID
// GET GRID SQUARES IN JS
//  -> LINK JS IN HTML
//  -> GET THE SQUARES IN JS // RESEARCH -> how we have done this before?
//  -> LOG TO CONSOLE
// -----------------------

// click on square make it an X
// add event listener on click []
// loop through array
// add event listener -> the square/ element in the array
// console.log(square)
// the square that is clicked -> that square -> add innerHTML/ textContent = "X"

const grid = document.querySelectorAll(".grid"); //nodelist like an array
const gridCells = document.querySelectorAll(".cell");
const firstRow = [gridCells[0], gridCells[1], gridCells[2]];
console.log(firstRow);
const secondRow = [gridCells[3], gridCells[4], gridCells[5]];
console.log(secondRow);
const thirdRow = [gridCells[6], gridCells[7], gridCells[8]];
console.log(thirdRow);
let isPlayerOnesTurn = true;
let isPlayerTwosTurn = false;
// takes an array -> maps over it getting the innerHTML -> new array which is just the innerHTML
// checks it - will see if "XXX" or "000"
const checkWinningCondition = (cells) => {
  const innerHTMLArray = cells.map((cell) => {
    return cell.innerHTML;
  }); // ["X", "0", "X"]
  const toCheck = innerHTMLArray.join("");
  // check IF toCheck equals "XXX" or "000" -> return true
  // ELSE return false
  if (toCheck === "XXX" || toCheck === "000") {
    return true;
  } else {
    return false;
  }
  console.log(checkWinningCondition(firstRow));
  console.log(checkWinningCondition(secondRow));
  console.log(checkWinningCondition(thirdRow));
};

gridCells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (cell.innerHTML !== "") {
      return; // stops the function
    }
    if (isPlayerOnesTurn === true) {
      cell.innerHTML = "X";
      isPlayerOnesTurn = false;
      isPlayerTwosTurn = true;
    } else {
      cell.innerHTML = "0";
      isPlayerOnesTurn = true;
      isPlayerTwosTurn = false;
    }
    // check our rows
    //
    const firstRowWin = checkWinningCondition(firstRow); //true or false
    const secondRowWin = checkWinningCondition(secondRow); //true or false
    const thirdRowWin = checkWinningCondition(thirdRow); //true or false

    if (firstRowWin || secondRowWin || thirdRowWin) {
      //  let winningMessage;
      alert("You win!");
    }

    // if (isPlayerOnesTurn) {
    //   winningMessage = "Player two wins";
    // } else {
    //   winningMessage = "Player one wins";
    // }
    // alert(winningMessage);
    // console.log(checkWinningCondition(firstRow));
    // console.log(checkWinningCondition(secondRow));
    // console.log(checkWinningCondition(thirdRow));
  });
});

// create a function that restarts the game
// -> set all the squares innerHTML -> ""
// -> squares -> nodelist -> loop through -> ^^^

// function restart() {
//   for (var i = 0; i < cell.length; i++) {
//     grid.innerHTML = "";
//     [].forEach.call(cell, function (item) {
//       grid.appendChild(item);
//     });
// }

// const restart = document.getElementById("restart");
// for (let index = 0; index < cells.length; index++) {
//   restart.addEventListener("click, () => {
//     if (cells[index].innerHTML == "x" || cells[index].innerHTML == "0") {
//       return (cells[index].innerHTML = "")
//     }
// }

const restartGame = () => {
  cells.forEach((cell) => {
    square.innerHTML = "";
  });
};

// -----------------
// a way of storing if players go or not
// variable -> change it -> let
// -> isPlayerOnesTurn -> true
// -> isPlayerTwosTurn -> false

// let isPlayerOnesTurn = true;
// let isPlayerTwosTurn = false;


// Players turn
// update our event
// check condition -> if its player ones turn -> add an X
// check condition -> if its player twos turn -> add an 0

// Update our player variables
// IF player one turn -> playerOne = false & playerTwo = true
// ELSE its player twos turn -> playerTwo = false & playerOne = true

// ------------------
// connect 3 to win -> CHECK IS 3 ARE THE SAME -> PLAYER WON
// HORIZONTAL CHECK
// ONE ROW CHECK -> FUNCTION
// [FIRST ROW SQUARES] -> CHECK EQUALITY
// THE FIRST THREE -> InnerHTML -> "XXX" or "000"

// -> WHO HAS WON -> ALERT()
// function returns true if theres a match
// If one of the functions is true
// -> Check the values of the variables
// IF one of the variables ^^^ is true
// -> IF playerOne is true = playerTwos turn
// -> IF playerTwo is true = playerOnes turn
// alert ()
