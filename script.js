let name

const popup = document.querySelector('.popup')
function closePopup() {
    popup.classList.remove('open')
    console.log('clicked')
    name = document.querySelector('#name').value
    console.log(name)
}

const playerFactory = () => {
    const name = document.querySelector('#name').value;

}

const submitButton = document.querySelector('.submitButton')
const form = document.querySelector('form')
const nameForm = document.querySelector('#name')
const sybmbolX = document.querySelector('#symbolX')
const sybmbolO = document.querySelector('#symbolO')

function endTask() {
    if (nameForm.checkValidity() === true && sybmbolX.checkValidity() === true ) {
        closePopup()
    }
}

function test() {
    console.log(!nameForm, !sybmbolX, !form)
    console.log(nameForm.checkValidity())
    console.log(sybmbolX.checkValidity())
    console.log(sybmbolO.checkValidity())
}