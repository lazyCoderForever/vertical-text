document.addEventListener('DOMContentLoaded', () => {
  function checkPressedButton(e) {
    if (/[a-z]/.test(e.key) && e.key.length <= 1) {
      return true
    }
    return false
  }

  function addNewSymbol(checked, pressedButton) {
    const mainFrame = document.querySelector('.main-frame')
    const line = document.querySelector('.line')
    const newSymbol = document.createElement('p')
    newSymbol.classList.add('symbol')

    if (checked(pressedButton)) {
      line.remove()
      newSymbol.innerText = pressedButton.key
      mainFrame.appendChild(newSymbol)
      mainFrame.appendChild(line)
      return true
    } else {
      console.log('Не допустимый символ')
    }
  }

  document.addEventListener('keydown', (e) =>
    addNewSymbol(checkPressedButton, e)
  )
})
