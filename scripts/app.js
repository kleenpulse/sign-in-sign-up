// play lofi
audioEl = document.createElement('audio')
document.documentElement.appendChild(audioEl)
audioEl.setAttribute('src', '../audio/lofi.mp3')
function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) +
        ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
}

function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
}

var song = audioEl
var played = false;
var tillPlayed = getCookie('timePlayed');
function update() {
    if (!played) {
        if (tillPlayed) {
            song.currentTime = tillPlayed;
            song.play();
            played = true;
        }
        else {
            song.play();
            played = true;
        }
    }

    else {
        setCookie('timePlayed', song.currentTime);
    }
}
setInterval(update, 50);


// ====Grab themes btn====
const darkBtn = document.querySelector('#dark')
const lightBtn = document.querySelector('#light')
const solarBtn = document.querySelector('#solar')
const body = document.body

// ===== Variables ======

const messageDisplay = document.getElementById("message")

let isConfirmed = document.querySelector('#confirm')
let passConfirmed = document.querySelector('#passconfirm')

let isVisible = document.querySelectorAll('#visible')
let newPasswordAdmin = document.getElementById('newpassword')
let signupPattern = document.querySelector('signuppass')
let newAccountPass = document.getElementById('newaccountpass')
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// Remember prefered theme

const theme = localStorage.getItem('theme')
const isSolar = localStorage.getItem('isSolar')
if (theme) {
    body.removeAttribute('class')
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
const header = $('#header')
$(document).keydown((e) => {
    if ((e.which === 32) && (body.classList.contains('dark'))) {
        header.addClass('boxshadowkeydown')
        return
    }
})
$(document).keyup((e) => {
    if (e.which === 32) {
        setTimeout(() => {
            header.removeClass('boxshadowkeydown')
        }, 1000);
        return
    }
})

// Validate password

// show or hide password
isVisible.onclick = function () {
    alert('ssfdfd')
    const type = newPasswordAdmin.getAttribute('type') === 'password' ? 'text' : 'password'
    newPasswordAdmin.setAttribute('type', type)
    const toggleTxt = isVisible.textContent === 'Show' ? 'Hide' : 'Show'
    isVisible.textContent = toggleTxt
    // messageDisplay.style.display = "block";
}
// disable passconfirm input field
function disablePasswordConfirm() {
    passConfirmed.disabled = true
    passConfirmed.setAttribute('style', `
    cursor: not-allowed;
    opacity: .5;
    `)

    isConfirmed.setAttribute('style', `
    cursor: not-allowed;
    opacity: .5;
    `)
}
disablePasswordConfirm()

// enable passconfirm input field
function enablePasswordConfirm() {
    passConfirmed.disabled = false
    passConfirmed.setAttribute('style', `
    cursor: pointer;
    opacity: 1;
    `)

    isConfirmed.setAttribute('style', `
    cursor: pointer;
    opacity: 1;
    `)

}

// show or hide confirm password

isConfirmed.onclick = function () {
    const type = passConfirmed.getAttribute('type') === 'password' ? 'text' : 'password'
    passConfirmed.setAttribute('type', type)
    const toggleTxt = isConfirmed.textContent === 'Show' ? 'Hide' : 'Show'
    isConfirmed.textContent = toggleTxt
    // messageDisplay.style.display = "block";
}

newPasswordAdmin.onfocus = function () {
    messageDisplay.style.display = "block";

}

newPasswordAdmin.onblur = function () {
    messageDisplay.style.display = "none";


}
let newPasswordAdminChar = ''
// When the user starts to type something inside the password field
newPasswordAdmin.onkeyup = validatePassword


function validatePassword() {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if (newPasswordAdmin.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if (newPasswordAdmin.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if (newPasswordAdmin.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // Validate length
    if (newPasswordAdmin.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }

    if (letter.classList.contains('valid') &&
        capital.classList.contains('valid') &&
        number.classList.contains('valid') &&
        length.classList.contains('valid')) {
        setTimeout(() => {
            messageDisplay.style.display = 'none'

        }, 1000);
        if (messageDisplay.style.display = 'block') {
            messageDisplay.style.display = 'none !important'
        }
        enablePasswordConfirm()
    } else {
        disablePasswordConfirm()

    }
    newPasswordAdminChar = newPasswordAdmin.value
    // passConfirmed.value = newPasswordChar
    console.log(newPasswordAdminChar)
    passConfirmed.setAttribute('pattern', newPasswordAdminChar)
}

