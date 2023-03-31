var score = 0
var plays = 0
const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
  button.addEventListener('mousedown', (event) => {
    if (event.button == 0) {
      //Add Font Awesome animation
      let icon = button.querySelector('i')
      icon.classList.add('fa-beat')
      setTimeout(() => {
        icon.classList.remove('fa-beat')
      }, 800)
    }
  }),
    button.addEventListener('mouseup', roundPlayHandler)
})

function cleanupListeners() {
  const buttons = document.querySelectorAll('button')
  buttons.forEach((button) => button.removeEventListener('mouseup', roundPlayHandler))
}

function endGame() {
  let result = ''
  if (score === 0) {
    result = "It's a tie!"
  }
  if (score < 0) {
    result = 'You win!'
  }
  if (score > 0) {
    result = 'You lose!'
  }
  document.querySelector('.final-result').textContent = result
}

function getComputerChoice() {
  let choiceArray = ['Rock', 'Paper', 'Scissors']
  return (choiceArray = choiceArray[Math.floor(Math.random() * choiceArray.length)])
}

function drawRoundPickItem(playerChoice, computerChoice) {
  let pickClasses = {
    rock: 'fa-regular fa-solid fa-hand-back-fist fa-fw fa-xl',
    paper: 'fa-regular fa-solid fa-hand-paper fa-fw fa-xl',
    scissors: 'fa-regular fa-solid fa-hand-scissors fa-fw fa-xl',
  }

  let listOfRounds = document.querySelector('.rounds')
  let listItem = document.createElement('li')

  const html = `<div>You <i class='${pickClasses[playerChoice]}'></i></div> <div> <i class='${pickClasses[computerChoice]}'></i> Computer</div>`

  listItem.insertAdjacentHTML('beforeend', html)
  listOfRounds.appendChild(listItem)
}

function playRound(player, computer) {
  if (player === computer) {
    return 0
  }
  if (player === 'rock') {
    return computer === 'scissors' ? -1 : 1
  }
  if (player === 'scissors') {
    return computer === 'paper' ? -1 : 1
  }
  if (player === 'paper') {
    return computer === 'rock' ? -1 : 1
  }
}

function roundPlayHandler(event) {
  if (event.button == 0) {
    let playerChoice = this.getAttribute('data-pick')
    let computerChoice = getComputerChoice().toLowerCase()

    drawRoundPickItem(playerChoice, computerChoice)
    score += playRound(playerChoice, computerChoice)
    plays += 1

    if (plays == 5) {
      cleanupListeners()
      endGame()
    }
  }
}
