function getComputerChoice() {
  let choiceArray = ['Rock', 'Paper', 'Scissors']
  return (choiceArray = choiceArray[Math.floor(Math.random() * choiceArray.length)])
}

function playRound(playerOne, playerTwo) {
  if (playerOne === playerTwo) {
    return 0
  }

  if (playerOne === 'rock') {
    return playerTwo === 'scissors' ? -1 : 1
  }

  if (playerOne === 'scissors') {
    return playerTwo === 'paper' ? -1 : 1
  }

  if (playerOne === 'paper') {
    return playerTwo === 'rock' ? -1 : 1
  }
}

function game() {
  let finalResult = 0

  for (let i = 1; i < 6; i++) {
    let playerChoice = prompt('Pick your play')
    let computerChoice = getComputerChoice()
    playerChoice = playerChoice.toLowerCase()
    computerChoice = computerChoice.toLowerCase()

    let roundResult = playRound(playerChoice, computerChoice)

    if (roundResult === 0) {
      console.log('Round draw!', playerChoice, computerChoice)
    }
    if (roundResult === 1) {
      console.log('You lose this round!', playerChoice, computerChoice)
    }
    if (roundResult === -1) {
      console.log('You win this round!', playerChoice, computerChoice)
    }

    finalResult += roundResult
  }

  if (finalResult === 0) {
    console.log("It's a draw!")
  }
  if (finalResult > 0) {
    console.log('You lost the game')
  }
  if (finalResult < 0) {
    console.log('You win the game!')
  }
}

game()
