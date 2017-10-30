window.addEventListener("load", init);
function works(x,y) {
  return (0<=x && x<=7 && 0<=y && y<=7);
}
class Piece {
  constructor(x, y, type, player) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.player = player;
  }
  hypothetical(x, y) {
    return new Piece(x, y, this.type, this.player);
  }
  getMoveSquares(board) {
    let move = [];
    let capture = [];
    if (this.player == 1 || this.type == 'king') {
      if (works(this.x - 1, this.y - 1)) {
        if (board[this.x - 1][this.y - 1].type == 'none') {
          move.push([this.x - 1, this.y - 1]);
        } /*else if (board[this.x - 1][this.y - 1].player == 3-this.player
                   && board[this.x - 2][this.y - 2].type == 'none') {
          capture.push([this.x - 2, this.y - 2]);
          nextCapture = this.hypothetical(this.x - 2, this.y - 2).getMoveSquares(makeMove(this.x, this.y, this.x - 2, this.y - 2, 'capture', board))[1];
          for (let i = 0; i < nextCapture.length; i++) {
            capture.push([this.x - 2, this.y - 2].concat(nextCapture[i]));
          }
        }*/
      }
      if (works(this.x - 1, this.y + 1)) {
        if (board[this.x - 1][this.y + 1].type == 'none') {
          move.push([this.x - 1, this.y + 1]);
        } /*else if (board[this.x - 1][this.y + 1].player == 3-this.player
                   && board[this.x - 2][this.y + 2].type == 'none') {
          capture.push([this.x - 2, this.y + 2]);
          nextCapture = this.hypothetical(this.x - 2, this.y + 2).getMoveSquares(makeMove(this.x, this.y, this.x - 2, this.y + 2, 'capture', board))[1];
          for (let i = 0; i < nextCapture.length; i++) {
            capture.push([this.x - 2, this.y + 2].concat(nextCapture[i]));
          }
        }*/
      }
    }
    if (this.player == 2 || this.type == 'king') {
      if (works(this.x + 1, this.y - 1)) {
        if (board[this.x + 1][this.y - 1].type == 'none') {
          move.push([this.x + 1, this.y - 1]);
        } /*else if (board[this.x + 1][this.y - 1].player == 3-this.player
                   && board[this.x + 2][this.y - 2].type == 'none') {
          capture.push([this.x + 2, this.y - 2]);
          nextCapture = this.hypothetical(this.x + 2, this.y - 2).getMoveSquares(makeMove(this.x, this.y, this.x + 2, this.y - 2, 'capture', board))[1];
          for (let i = 0; i < nextCapture.length; i++) {
            capture.push([this.x + 2, this.y - 2].concat(nextCapture[i]));
          }
        }*/
      }
      if (works(this.x + 1, this.y + 1)) {
        if (board[this.x + 1][this.y + 1].type == 'none') {
          move.push([this.x + 1, this.y + 1]);
        } /*else if (board[this.x + 1][this.y + 1].player == 3-this.player
                   && board[this.x + 2][this.y + 2].type == 'none') {
          capture.push([this.x + 2, this.y + 2]);
          nextCapture = this.hypothetical(this.x + 2, this.y + 2).getMoveSquares(makeMove(this.x, this.y, this.x + 2, this.y + 2, 'capture', board))[1];
          for (let i = 0; i < nextCapture.length; i++) {
            capture.push([this.x + 2, this.y + 2].concat(nextCapture[i]));
          }
        }*/
      }
    }
    return [move, capture];
  }
}
function makeMove(x1, y1, x2, y2, type, board) {
  var boardC = board.slice();
  boardC[x2][y2] = boardC[x1][y1].hypothetical(x2, y2);
  boardC[x1][y1] = new Piece(x1, y1, 'none', undefined);
  if (type == 'capture') {
    let x3 = (x1+x2)/2;
    let y3 = (y1+y2)/2;
    boardC[x3][y3] = new Piece(x3, y3, 'none', undefined);
  }
  if (x2 == 0 || x2 == 7) {
    boardC[x2][y2].type = 'king';
  }
  return boardC;
}
function init() {
  var boardElement = document.getElementsByClassName('divTableCell');
  var boardElArray = [];
  var pieceArray = [];
  for (let x = 0; x < 8; x++) {
    pieceArray.push([]);
    boardElArray.push([]);
    for (let y = 0; y < 8; y++) {
      boardElArray[x].push(boardElement[x*8+y]);
      pieceArray[x].push(new Piece(x, y, 'none', undefined))
      if ((x + y) % 2 == 1) {
        boardElArray[x][y].style.backgroundColor = "black";
      }
      boardElArray[x][y].id = '(' + x + ',' + y + ')';
      if ((x + y)%2 == 1 && x < 3) {
        pieceArray[x][y] = new Piece(x, y, 'normal', 2);
      } else if ((x + y)%2 == 1 && x >= 5) {
        pieceArray[x][y] = new Piece(x, y, 'normal', 1);
      } else {
        pieceArray[x][y] = new Piece(x, y, 'none', undefined);
      }
    }
  }


























































































function render() {
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      if ((x + y)%2 == 1 && x < 3) {
        let yeet = document.createElement("img");
        yeet.setAttribute("src", "redChecker.png");
        yeet.style.width = "80%";
        yeet.style.height = "80%";
        while (boardElArray[x][y].hasChildNodes()) {
          boardElArray[x][y].removeChild(boardElArray[x][y].lastChild);
        }
        boardElArray[x][y].appendChild(yeet);
      } else if ((x + y)%2 == 1 && x >= 5) {
        let yeet = document.createElement("img");
        yeet.setAttribute("src", "blueChecker.png");
        yeet.style.width = "80%";
        yeet.style.height = "80%";
        while (boardElArray[x][y].hasChildNodes()) {
          boardElArray[x][y].removeChild(boardElArray[x][y].lastChild);
        }
        boardElArray[x][y].appendChild(yeet);
      }
    }
  }
}
render();






















































var isPlayer = 1;
var isClicked = [false, 1, 1]; //index 0 tells whether a square is currently in the clicked state, indexes 1 and 2 give it's x and y position
var lastBGC;
function clickedSquare(x, y) {
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      if ((x + y) % 2 == 1) {
        boardElArray[x][y].style.backgroundColor = "black";
      }
    }
  }
  if (pieceArray[x][y].player == isPlayer) {
    if (isClicked[0]) {
      boardElArray[isClicked[1]][isClicked[2]].style.backgroundColor = lastBGC;
    }
    let moveArray = pieceArray[x][y].getMoveSquares(pieceArray)[0];
    for (i = 0; i < moveArray.length; i++) {
      boardElArray[moveArray[i][0]][moveArray[i][1]].style.backgroundColor = "yellow";
      boardElArray[moveArray[i][0]][moveArray[i][1]].removeEventListener("click", function(e){
        clickedSquare(x, y);
      });
      boardElArray[moveArray[i][0]][moveArray[i][1]].addEventListener("click", function(e) {
        pieceArray = makeMove(x, y, moveArray[i-1][0], moveArray[i-1][1], 'move', pieceArray);
        isPlayer = 3 - isPlayer;
        render();
      });
    }
    lastBGC = boardElArray[x][y].style.backgroundColor;
    boardElArray[x][y].style.backgroundColor = "green";
    isClicked = [true, x, y]; //memory for the state of the clicked square
  }
}
for (let x = 0; x < boardElArray.length; x++) {
  for (let y = 0; y < boardElArray[x].length; y++) {
    let d = boardElArray[x][y];
    function tempFunc() {
      clickedSquare(x,y);
    }
    d.addEventListener("click", tempFunc);
  }
}







































































































}
