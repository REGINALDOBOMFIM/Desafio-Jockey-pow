
const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0

const playhuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())

}


const playMachine = () => {
    const choices = ['paper', 'stone', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log('humano:' + human + 'maquina:' + machine)

    if (human === machine) {
        result.innerHTML = "Deu empate &#x26D4;"
    } else if (human === 'paper' && machine === 'stone' ||
        human === 'scissors' && machine === 'paper' ||
        human === 'stone' && machine === 'scissors') {
        result.innerHTML = "Você ganhou &#x1F60E;"
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
    } else {
        result.innerHTML = "O robô ganhou &#x1F916;"
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
    }



}