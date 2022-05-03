const moves = ["Rock", "Paper", "Scissors"];
let playerSelection, computerSelection;

function computerPlay() {
    return Math.floor(Math.random() * 3);
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function playRound(_playerSelection, _computerSelection) {
    _playerSelection = moves.indexOf(capitalize(_playerSelection));
    if (_playerSelection == -1) return "Wrong input! Try \"Rock\", \"Paper\" or \"Scissors\".";

    let result = (_playerSelection !== _computerSelection) ? +(_computerSelection === (_playerSelection + 2) % 3) : 2;
    
    switch (result) {
        case 0: result = "You Lose! " + moves[_computerSelection] + " beats " + moves[_playerSelection]; break;
        case 1: result = "You Win! " + moves[_playerSelection] + " beats " + moves[_computerSelection]; break;
        case 2: result = "Draw! Try Again"; break;
    }

    return result;
}

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("\"Rock\", \"Paper\" or \"Scissors\".");
        computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();
