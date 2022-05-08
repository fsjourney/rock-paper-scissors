const moves = ["Rock", "Paper", "Scissors"];
const result = document.querySelector(".result");
const playerScore = document.querySelector(".score-player");
const enemyScore = document.querySelector(".score-enemy");
let player = 0, enemy = 0;
const rounds = 5;

function computerPlay() {
    return Math.floor(Math.random() * 3);
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function playRound() {
    const playerMove = moves.indexOf(capitalize(this.innerText));
    const enemyMove = computerPlay();

    let _result = (playerMove !== enemyMove) ? +(enemyMove === (playerMove + 2) % 3) : 2;
    
    switch (_result) {
        case 0: _result = "You Lose! " + moves[enemyMove] + " beats " + moves[playerMove]; enemy++; break;
        case 1: _result = "You Win! " + moves[playerMove] + " beats " + moves[enemyMove]; player++; break;
        case 2: _result = "Draw! " + moves[playerMove] + " x " + moves[enemyMove] + ", Try Again"; break;
    }

    playerScore.textContent = player;
    enemyScore.textContent = enemy;
    result.textContent = _result;

    if (player >= rounds || enemy >= rounds) victory(player > enemy);
}

function victory(result) {
    const score = document.querySelector(".score");
    while (score.hasChildNodes()) {
        score.removeChild(score.firstChild);
    }

    const element = document.createElement("div");
    element.textContent = (result) ? "Victory!" : "Defeat!";
    element.classList.add("final-result");
    score.appendChild(element);

    buttons.childNodes.forEach(button => button.removeEventListener("click", playRound));
}

const buttons = document.querySelector(".buttons");
buttons.childNodes.forEach(button => button.addEventListener("click", playRound));
