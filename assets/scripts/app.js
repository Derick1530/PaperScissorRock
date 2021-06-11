const startGameBtn = document.getElementById("start-game-btn");
const ROCK = 'ROCK';
const SCISSOR = 'SCISSOR';
const PAPER = 'PAPER';
const DEFAULT_USER_CHOICE = ROCK;
let gameIsRunning = false;
const DRAW = 'DRAW';
const PLAYER_WINS = 'PLAYER_WINS';
const COMPUTER_WINS = 'COMPUTER_WINS';
const getPlayerChoice =  () => {
    const selection = prompt(`${ROCK}, ${SCISSOR} or ${PAPER}?`, '').toUpperCase();
    if (
        selection !== ROCK &&
        selection !== SCISSOR &&
        selection !== PAPER
    ) {

        alert(`Invalid choice! we chose ${DEFAULT_USER_CHOICE} for you`);
        return;
    }
    return selection;
}
const getComputerChoice =  () => {
    const computerChoice = Math.random();
    if (computerChoice < 0.34) {
        return ROCK;
    } else if (computerChoice < 0.65) {
        return PAPER;
    } else {
        return SCISSOR;
    }
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
cChoice === pChoice ? DRAW:(
        cChoice ===ROCK && pChoice ===PAPER ||
        cChoice === PAPER && pChoice === SCISSOR ||
        cChoice === SCISSOR && pChoice === ROCK
        ) ? PLAYER_WINS: COMPUTER_WINS;


    // if(cChoice === pChoice){
    //     return DRAW;
    // }else if(
    //     cChoice ===ROCK && pChoice ===PAPER ||
    //     cChoice === PAPER && pChoice === SCISSOR ||
    //     cChoice === SCISSOR && pChoice === ROCK
    //     ){
    //         return PLAYER_WINS;
    //     }else{
    //         return COMPUTER_WINS;
    //     }


startGameBtn.addEventListener('click',  () => {
    if (gameIsRunning) {
        return
    }
    gameIsRunning = true;
    console.log("Game is starting...");
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    let winner;
    if (playerSelection){
        winner = getWinner(computerSelection,playerSelection);
    
    }else{
        winner = getWinner(computerSelection);
    }
    let message = `you picked ${playerSelection || DEFAULT_USER_CHOICE}, computer picked ${computerSelection} there for you `;
    if (winner === DRAW) {
        message += 'had a draw';
    }
    else if (winner === PLAYER_WINS) {
        message += 'won';
    } else {
        message += 'Lost';
    }
    alert(message);
    gameIsRunning = false;
});
// not related to the game

const sumUp = (...numbers) => {
    let sum = 0;
    for (const num of numbers){
        sum += num;
    }
    return sum;
}
// console.log(sumUp(1,2,4,2,-4,5,4));
// consloe.log(sumUp(1,2,4,2,-4,5,4,99,34));

const numberTry = (a,b,c,...numero)=>{
    const numbersInsideTheNumber = (numeroYengine)=>{
        return isNaN(numeroYengine)? 0: numeroYengine;
    };
};

const x = (a,b,...derick) => {
    let nn = 0;
    for(const i of derick){
        nn += i;
    }
    return nn;
}
console.log(x(23,32,23,34));