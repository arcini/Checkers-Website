window.addEventListener("load", init);
class Piece {
  constructor(x, y, type, player, meta=undefined) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.player = player;
    this.meta = meta;
  }
  getMoveSquares(board) {
    let move = [];
    let capture = [];
    let special = [];
    if (this.type == 'pawn') {
      if (this.player == 1) {
        if (board[this.x, this.y - 1].type == 'none') {
          if (this.y > 1)
          {
            special.push([this.x, this.y]); //promote
          }
          move.push([this.x, this.y - 1]); //single move
          if (this.y == 6 && board[this.x, this.y - 2].type == 'none') {
            move.push([this.x, this.y - 2]); //double move
          }
        }
        if (board[this.x + 1, this.y - 1].type != 'none' && x < 7) {
          capture.push([this.x + 1, this.y - 1]); //capture right
        }
        if (board[this.x - 1, this.y - 1].type != 'none' && x > 0) {
          capture.push([this.x - 1, this.y - 1]); //capture left
        }
      }
    }
    return [move, capture, special];
  }
}
function init() {
  var boardElement = document.getElementsByClassName('divTableCell');
  var boardElArray = [];
  var pieceArray = [];
  for (let x = 0; x < 8; x++) {
    pieceArray.push([]);
    pieceArray.push([]);
    for (let y = 0; y < 8; y++) {
      boardElArray[x].push(boardElement[x*8+y]);
      pieceArray[x].push(new Piece(x, y, 'none', undefined))
      if ((x + y) % 2 == 1) {
        boardElArray[x][y].style.backgroundColor = "black";
      }
      boardElArray[x][y].id = '(' + x + ',' + y + ')';
    }
  }




























































































for (i = 0; i < boardElArray.length; i++) {
  let d = document.getElementById(boareElArray[i]);
  d.addEventListener("click", function(e) {
    clickedSquare(i);
  });
}

function clickedSquare(squareNum) {
  document.getElementById(boareElArray[squareNum]).style.backgroundColor = "green";
}

var pawn = new Image();
pawn.src = "chessPieces.png"





































































































}

var sprite = getElementById("sprite");
