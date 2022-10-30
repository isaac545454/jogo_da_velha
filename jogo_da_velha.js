document.addEventListener('DOMContentLoaded', () => {
    let linhas = document.querySelectorAll(".linha");
    linhas.forEach((elemento) => {
        elemento.addEventListener('click', handleClick)
    })
})
//nome


    function handleClick(event) {

        let linha = event.target;
        let position = linha.id

        if (bandlemove(position)) {
            setTimeout(() => {
                if (playertime == 0) {
                    alert("fim de jogo, 1 foi o vencedor ")
                } else {
                    alert("fim de jogo, 2 foi o vencedor ")
                }
            }, 15)

        }
        updatelinha(position)
    }


    function updatelinha(position) {
        let linha = document.getElementById(position.toString());
        let symbol = board[position];
        linha.innerHTML = "<div class=" + symbol + "></div>"
    }
  