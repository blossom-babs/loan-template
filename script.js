// alert('this should work')

const form = document.getElementById('form')
const fullName = document.getElementById('fullName')
const email = document.getElementById('email')
const password = document.getElementById('password')
const error = document.getElementById('error')

form.addEventListener('submit', (e) => {

    let messages = []

    if (fullName.value == ''){
   // error.innerText = "Name cannot be empty";
   messages.push('Name field cannot be empty')
   console.log('name field cannot be empty')
    }

        if (email.value.length <= 5) {
         //   error.innerText = "Invalid email";
         messages.push('Invalid email')
            console.log('name field cannot be empty')
        }

        if(messages.length > 0){
    e.preventDefault()
        }
error.innerText = messages.join (', ')
})