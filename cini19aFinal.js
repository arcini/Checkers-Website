window.addEventListener("load", init);

function init() {
  class Piece {
    constructor(type, player, meta=undefined) {
      this.type = type;
      this.player = player;
      this.meta = meta;
    }
    getMoveSquares(board) {
      if (this.type == ) {

      }
    }
  }
  boardElement = document.getElementsByClassName('divTableCell');
  boardElArray = [];
  pieceArray = [];
  for (let x = 0; x < 8; x++) {
    boardArray.push([]);
    pieceArray.push([]);
    for (let y = 0; y < 8; y++) {
      boardElArray[x].push(boardElement[x*8+y]);
      pieceArray.push(new Piece)
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
