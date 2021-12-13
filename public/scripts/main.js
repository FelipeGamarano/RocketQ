import Modal from './modal.js'

const modal = Modal()

const deleteQuestions = document.querySelectorAll('a.delete')
const cancel = document.querySelectorAll('#cancelButton')
const questionWrapper = document.querySelectorAll('.question-wrapper')
const checkButton = document.querySelectorAll('.check')

let check = 'Marcar como lido'
let checked = 'Desmarcar como lido'

deleteQuestions.forEach(button => {
  button.addEventListener('click', event => {
    modal.open()
  })
})

cancel.forEach(button => {
  button.addEventListener('click', event => {
    modal.close()
  })
})

questionWrapper.forEach(button => {
  button.addEventListener('click', event => {
    questionWrapper.forEach(button => {
      button.classList.add('read')
      checkButton.innerHTML = checked
    })
  })
})
