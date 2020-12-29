//rock paper game

//Your game is going to play against the computer, so begin with a function called computerPlay
//that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.We’ll use this function in the game to make the computer’s play.

function computerPlay() {
    return Math.floor(Math.random() * 3) + 1;
}

function playerPlay() {
    let input = prompt('Rock Paper Scissors shoot');
    return input.toLocaleLowerCase();
}


//Write a function that plays a single round of Rock Paper Scissors. The function should take 
//two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
//Make your function case insensitive(so users can input rock, ROCK, RocK or any other variation)






function game() {
    let inputRounds = prompt('How many rounds would you like to play?')
    let numRounds = parseInt(inputRounds)
    let playerTotal = 0;
    let computerTotal = 0;

    for (let i = 0; i < numRounds; i++) {

        let input = oneRound(playerPlay(), computerPlay())
        let splitInput = input.split(' ')

        if (splitInput.includes('Lose!')) {
            console.log(input);
            computerTotal = computerTotal + 1;
        } else if (splitInput.includes('Win!')) {
            console.log(input);
            playerTotal = playerTotal + 1;
        } else if (splitInput.includes('Tie!')) {
            console.log(input);
        } else {
            input = oneRound(playerPlay(), computerPlay())
        }

    }
    console.log(`Computer Score: ${computerTotal}`)
    console.log(`Player Score: ${playerTotal}`)

    if (computerTotal === playerTotal) {
        console.log(`This game ended as a tie! Refresh to play again!`)
    } else if (playerTotal > computerTotal) {
        console.log(`The player has won! Refresh to play again!`)
    } else if (playerTotal < computerTotal) {
        console.log(`The computer has won! Refresh to play again!`)
    };
}

function oneRound(playerSelection, computerSelection) {

    const score = { computer: 0, player: 0 }



    if (playerSelection === 'rock') {
        playerSelection = 1;
    } else if (playerSelection === 'paper') {
        playerSelection = 2;
    } else if (playerSelection === 'scissor') {
        playerSelection = 3;
    } else {
    }



    if (playerSelection === 1) {//rock                 
        if (computerSelection === 2) {       //paper            
            score.computer = 1;
            return "You Lose! Paper beats Rock";
        } else if (computerSelection === 3) {//scissor
            score.player = 1;
            return "You Win! Rock beats Scissor";
        } else if (computerSelection === 1) {//rock
            return "You Tie! Rock ties Rock";
        };

    } else if (playerSelection === 2) {//paper
        if (computerSelection === 1) {//rock
            score.player = 1;
            return "You Win! Paper beats Rock";
        } else if (computerSelection === 3) {//scissor
            score.computer = 1;
            return "You Lose! Scissor beats Paper";
        } else if (computerSelection === 2) {//paper
            return "You Tie! Paper ties Paper";
        };

    } else if (playerSelection === 3) {//scissor
        if (computerSelection === 1) {//rock
            score.computer = 1;
            return "You Lose! Rock beats Scissor";
        } else if (computerSelection === 2) {//paper
            score.player = 1;
            return "You Win! Paper beats Scissor";
        } else if (computerSelection === 3) {//scissor
            return "You Tie! Scissor ties Scissor";
        };
    };
}

//oneRound(playerPlay(), computerPlay())
game()