window.addEventListener("load", init);
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
      if (board[this.x - 1][this.y - 1].type == 'none') {
        move.push([this.x - 1, this.y - 1]);
      } else if (board[this.x - 1][this.y - 1].player == 3-this.player
                 && board[this.x - 2][this.y - 2].type == 'none') {
        capture.push([this.x - 2, this.y - 2]);
        nextCapture = this.hypothetical(this.x - 2, this.y - 2).getMoveSquares(board);
        //STOPPED HERE
      }
      if (board[this.x - 1][this.y + 1].type == 'none') {
        move.push([this.x - 1, this.y + 1]);
      } else if (board[this.x - 1][this.y + 1].player == 3-this.player
                 && board[this.x - 2][this.y + 2].type == 'none') {
        capture.push([this.x - 2, this.y + 2]);
      }
    }
    if (this.player == 1 || this.type == 'king') {
      if (board[this.x - 1][this.y - 1].type == 'none') {
        move.push([this.x - 1, this.y - 1]);
      } else if (board[this.x - 1][this.y - 1].player == 3-this.player
                 && board[this.x - 2][this.y - 2].type == 'none') {
        capture.push([this.x - 2, this.y - 2]);
      }
      if (board[this.x - 1][this.y + 1].type == 'none') {
        move.push([this.x - 1, this.y + 1]);
      } else if (board[this.x - 1][this.y + 1].player == 3-this.player
                 && board[this.x - 2][this.y + 2].type == 'none') {
        capture.push([this.x - 2, this.y + 2]);
      }
    }
    return [move, capture, special];
  }
}
function makeMove(x1, y1, x2, y2, type, board) {
  var boardC = JSON.parse(JSON.stringify(board));
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
    }
  }




























































































for (let x = 0; x < boardElArray.length; x++) {
  for (let y = 0; y < boardElArray[x].length; y++) {
    let d = boardElArray[x][y];
    d.addEventListener("click", function(e) {
      clickedSquare(x, y);
    });
  }
}

function clickedSquare(x, y) {
  boardElArray[x][y].style.backgroundColor = "green";
}

var pawn = new Image();
pawn.src = "chessPieces.png"






































































































}
