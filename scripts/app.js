

// ====Grab themes btn====
const darkBtn = document.querySelector('#dark')
const lightBtn = document.querySelector('#light')
const solarBtn = document.querySelector('#solar')
const body = document.body

// Remember prefered theme

const theme = localStorage.getItem('theme')
const isSolar = localStorage.getItem('isSolar')

if (theme) {
    // if(body.classList.contains(theme)){
    //     return
    // }else{
    //     body.removeAttribute('class')
    // }
    body.classList.add(theme)
    isSolar && body.classList.add('solar')
}

// Button Event Handlers

darkBtn.onclick = () => {
    body.classList.replace('light', 'dark')
    localStorage.setItem('theme', 'dark')
}

lightBtn.onclick = () => {
    body.classList.replace('dark', 'light')
    localStorage.setItem('theme', 'light')


}

solarBtn.onclick = () => {
    if (body.classList.contains('solar')) {

        body.classList.remove('solar')
        solarBtn.getElementsByClassName.cssText = `--bg-solar: var(--yellow)`

        solarBtn.textContent = 'Normal'
        localStorage.removeItem('isSolar')
    } else {
        body.classList.add('solar')
        solarBtn.getElementsByClassName.cssText = `--bg-solar: white`
        solarBtn.innerHTML = 'solarized'
        localStorage.setItem('isSolar', true)

    }
}
// localStorage.clear()

// Validate form

// Validate password
const messageDisplay = document.getElementById("message")

let isVisible = document.querySelector('#visible')
let myInput = document.getElementById("password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// show or hide password
isVisible.onclick = function () {
    const type = myInput.getAttribute('type') === 'password' ? 'text' : 'password'
    myInput.setAttribute('type', type)
    const toggleTxt = isVisible.textContent === 'Show' ? 'Hide' : 'Show'
    isVisible.textContent = toggleTxt
    // messageDisplay.style.display = "block";
}

// When the user clicks on the password field, show the message box
myInput.onfocus = function () {
    messageDisplay.style.display = "block";

}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function () {
    messageDisplay.style.display = "none";


}

// When the user starts to type something inside the password field
myInput.onkeyup = function () {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if (myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if (myInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if (myInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // Validate length
    if (myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }

    if (letter.classList.contains('valid') &&
        capital.classList.contains('valid') &&
        number.classList.contains('valid') &&
        length.classList.contains('valid')){
            setTimeout(() => {
    messageDisplay.style.display = 'none'
    
}, 1000);
        myInput.onfocus = function () {
            messageDisplay.style.display = "none";

        }
        }
}

