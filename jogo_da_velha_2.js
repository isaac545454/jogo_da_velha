

let board = ['', '', '', '', '', '', '', '', '']
let playertime = 0;
let symbols = ['o', 'x']
let gameover = false
let posiçao = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

function bandlemove(position) {

    if (gameover) {
        return
    }
        if (board[position] == '') {
            board[position] = symbols[playertime]

        gameover = isWIN();

            if (!gameover) {

               playertime = (playertime == 0)? 1 : 0;
        }

    }
    return gameover
}
function isWIN() {
    

    for (let i = 0; i < posiçao.length; i++) {
        let seq = posiçao[i]

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if (board[pos1] == board[pos2]
         && board[pos1] == board[pos3]
         && board[pos1] != '') {
         return true
        }

    }
}
  function reiniciar(){
        
        let x = document.querySelector('.x')
        let o = document.querySelector('.o')
        x.remove()
        o.remove()
        board = ['', '', '', '', '', '', '', '', '']
        playertime = 0;
        symbols = ['o', 'x']
        gameover = false
    }
