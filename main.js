/*let playerScore = 0;
let computerScore = 0;
let userOption = prompt(`Selecciona piedra, papel o tijera`).toLowerCase();

const computerPlay = () => {
    const options = ['piedra', 'papel', 'tijera'];
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

const playRound = (playerSelection) => {
    let computerSelection = computerPlay();

    if((playerSelection === 'tijera' && computerSelection == 'papel') || 
       (playerSelection === 'papel' && computerSelection == 'piedra') ||
       (playerSelection === 'piedra' && computerSelection == 'tijera')) {
            playerScore += 1;
            console.log(`Ganaste! ${playerScore} - computadora ${computerScore}`);
    } else if(playerSelection === computerSelection) {
        console.log(`Empate`);
    } else {
        computerScore += 1;
        console.log(`Perdiste! tu ${playerScore} - computadora ${computerScore}`);
    }
} 
console.log(playRound(userOption))
console.log(computerPlay());
console.log(userOption);
*/

let playerScore = 0;
let computerScore = 0;

const computerPlay = () => {
    const options = ['piedra', 'papel', 'tijera'];
    return options[Math.floor(Math.random() * options.length)];
}

const playRound = (playerSelection) => {
    const computerSelection = computerPlay();
    const winConditions = {
        'tijera': 'papel',
        'papel': 'piedra',
        'piedra': 'tijera'
    };

    if (playerSelection === computerSelection) {
        console.log(`Empate`);
    } else if (winConditions[playerSelection] === computerSelection) {
        playerScore += 1;
        console.log(`Ganaste! Tu ${playerScore} - Computadora ${computerScore}`);
    } else {
        computerScore += 1;
        console.log(`Perdiste! Tu ${playerScore} - Computadora ${computerScore}`);
    }
}

while (true) {
    let userOption = prompt(`Selecciona piedra, papel o tijera (o escribe 'salir' para terminar):`).toLowerCase();

    if (userOption === 'salir') {
        console.log('Juego terminado.');
        break;
    }

    if (['piedra', 'papel', 'tijera'].includes(userOption)) {
        playRound(userOption);
    } else {
        console.log('Opción no válida, por favor selecciona piedra, papel o tijera.');
    }
}

console.log(`Puntuación final: Tu ${playerScore} - Computadora ${computerScore}`);
