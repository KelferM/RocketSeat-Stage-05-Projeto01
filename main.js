const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', keyDownEnterScreen2)

function toggleScreen() {

  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')

}

function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()
   
    screen2.querySelector('h2').innerText = `Acertou em ${xAttempts} tentativas`
  }else{

    randomNumber = Math.round(Math.random() * 10)

  }

  inputNumber.value = ""
  xAttempts++
}

function handleResetClick() {

  toggleScreen()

  xAttempts = 1

  randomNumber = Math.round(Math.random() * 10)


}

function keyDownEnterScreen2(e) {

if(e.key == 'Enter' && screen1.classList.contains('hide') )

  handleResetClick()

}