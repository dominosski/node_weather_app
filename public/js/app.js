const weatherForm = document.querySelector('form')
const searchValue = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = searchValue.value

    messageOne.textContent = 'Loading message'
    messageTwo.textContent = ''

    fetch(`/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
                messageTwo.textContent = ''
            }
            else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
})