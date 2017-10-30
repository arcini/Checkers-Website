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
    if (this.player == 1 || this.type == 'king') {
      if ()
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
