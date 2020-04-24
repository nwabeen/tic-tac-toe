let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];
let player = "P";
let ai = "AI";
let turnPlayer = true;
let randomRow = Math.floor(Math.random() * (board.length - 1 - 0 + 1)) + 0;
let randomCell = Math.floor(Math.random() * (board.length - 1 - 0 + 1)) + 0;

function isOccupied(row, cell) {
    if (board[row][cell] == ai || board[row][cell] == player) {
        return true;
    } else {
        return false;
    }
}

function drawBoard() {
    for (var i = 0; i < board.length; i++) {
      


        for (var j = 0; j < board[i].length; j++) {


            // COLUMN 
            // X - -
            // X - -
            // - - -
            if (!turnPlayer) {
  // ROW
        // Check if ai can win with each row
        //  - X X


                if (((board[j][1] == ai && board[j][2] == ai) || (board[j][1] == player && board[j][2] == player)) && !isOccupied(j, 0)) {
                    board[j][0] = ai;
                    turnPlayer = true;
                    console.log("row left");

                    //  if each row contains
                    // X - X
                } else if (((board[j][2] == ai && board[j][0] == ai) || (board[j][0] == player && board[j][2] == player)) && !isOccupied(j, 1)) {
                    board[j][1] = ai;
                    turnPlayer = true;
                    console.log("row middle");

                    //  if each row contains
                    // X X - 
                } else if (((board[j][0] == ai &&  board[j][1] == ai) || (board[j][0] == player && board[j][1] == player)) && !isOccupied(j, 2)) {
                    board[j][2] = ai;
                    turnPlayer = true;
                    console.log("row right");

                } else if (((board[0][j] == ai &&  board[1][j] == ai) || (board[0][j] == player && board[1][j] == player)) && !isOccupied(2, j)) {
                    board[2][j] = ai;
                    turnPlayer = true;
                    console.log("column bottom");

                    // COLUMN 
                    // - - -
                    // X - -
                    // X - -
                } else if (((board[1][j] == ai &&  board[2][j] == ai) || (board[1][j] == player && board[2][j] == player)) && !isOccupied(0, j)) {
                    board[0][j] = ai;
                    turnPlayer = true;
                    console.log("column top");

                    // COLUMN 
                    // X - -
                    // - - -
                    // X - -
                } else if (((board[0][j] == ai &&  board[2][j] == ai) || (board[0][j] == player && board[2][j] == player)) && !isOccupied(1, j)) {


                    board[1][j] = ai;
                    turnPlayer = true;
                    console.log("column middle");

                    // DIAGONAL 
                    // - - -
                    // - X -
                    // - - X
                } else if (((board[1][1] == ai &&  board[2][2] == ai) || (board[1][j] == player && board[2][2] == player)) && !isOccupied(0, 0)) {
                    board[0][0] = ai;
                    turnPlayer = true;
                    console.log("diagonal top left to bottom right, top left");

                    // DIAGONAL 
                    // X - -
                    // - X -
                    // - - -
                } else if (((board[0][0] == ai &&  board[1][1] == ai) || (board[0][0] == player && board[1][1] == player)) && !isOccupied(2, 2)) {
                    board[2][2] = ai;
                    turnPlayer = true;
                    console.log("diagonal top left to bottom right, bottom right");

                    // DIAGONAL 
                    //-  - X
                    // - X -
                    // - - -
                } else if (((board[0][2] == ai &&  board[1][1] == ai) || (board[0][2] == player && board[1][1] == player)) && !isOccupied(2, 0)) {
                    board[2][0] = ai;
                    turnPlayer = true;
                    console.log("diagonal top right to bottom left, bottom left");

                    // DIAGONAL 
                    // - - -
                    // - X -
                    // X - -
                } else if (((board[2][0] == ai &&  board[1][1] == ai) || (board[2][0] == player && board[1][1] == player)) && !isOccupied(0, 2)) {
                    board[0][2] = ai;
                    turnPlayer = true;
                    console.log("diagonal top right to bottom left, top right");




                    // DIAGONAL 
                    // X - -
                    // - - -
                    // - - X

                } else if (((board[2][2] == ai &&  board[0][0] == ai) || (board[2][2] == player && board[0][0] == player)) && !isOccupied(1, 1)) {
                    board[1][1] = ai;
                    turnPlayer = true;
                    console.log("diagonal top left to bottom right, middle");

                    // DIAGONAL 
                    // - - X
                    // - - -
                    // X - -
                } else if (((board[0][2] == ai &&  board[2][0] == ai) || (board[0][2] == player && board[2][0] == player)) && !isOccupied(1, 1)) {
                    board[1][1] = ai;
                    turnPlayer = true;
                    console.log("diagonal top right to bottom left, middle");

                } else {
                    if (!isOccupied(randomRow, randomCell)) {


                        board[randomRow][randomCell] = ai;
                        turnPlayer = true;
                        console.log("put random");
                    } else {
                        randomRow = Math.floor(Math.random() * (board.length - 1 - 0 + 1)) + 0;
                        randomCell = Math.floor(Math.random() * (board.length - 1 - 0 + 1)) + 0;
                    }
                }
            }


            var row = i + 1;

            var cell = j + 1;

            let query = "#game ul:nth-child(" + row + ") " + "li:nth-child(" + cell + ") span";
            let square = document.querySelector(query);
            if (board[i][j] == ai) {
                square.classList.add("cross");
                square.classList.remove("tick");



            } else if (board[i][j] == player) {
                square.classList.add("tick");
                square.classList.remove("cross");



            } else {
                square.className = "";
            }

clearBoard(i,j);
            checkInput(square, i, j);
        }
    }

}
function clearBoard(row, cell) {
 let button = document.querySelector("#button");
  button.addEventListener("click", function() {
   board[row][cell] = "";
});
} function checkInput(element, row, cell) {
    element.addEventListener("click", function () {
        if (!isOccupied(row, cell)) {
            board[row][cell] = player;
            turnPlayer = false;
        }
    });
    element.addEventListener("contextmenu", function () {
        if (!isOccupied(row, cell)) {
            board[row][cell] = ai;
            turnPlayer = true;
        }

    });

}
setInterval(drawBoard, 200);