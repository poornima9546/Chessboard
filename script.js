const chessBoard = document.getElementById('chessBoard');
const colors = ['#f0f0f0', '#000000'];

for(let row=0; row<8; row++){
    for(let col=0; col<8; col++){
        const square = document.createElement('div');
        square.className = 'chess-square';

        const index = (row + col) % 2;
        square.style.backgroundColor = colors[index];
        chessBoard.appendChild(square);
    }
}

