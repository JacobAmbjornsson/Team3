const error1 = document.querySelector(".errmsg1")
const error2 = document.querySelector(".errmsg2")
const error3 = document.querySelector(".errmsg3")
const error4 = document.querySelector(".errmsg4")
const error5 = document.querySelector(".errmsg5")
const error6 = document.querySelector(".errmsg6")
const error7 = document.querySelector(".errmsg7")
const error8 = document.querySelector(".errmsg8")
const inputemail = document.querySelector(".email")
const inputpassword = document.querySelector(".password")
const inputusername = document.querySelector(".username")
const inputfirstname = document.querySelector(".firstname")
const inputlastname = document.querySelector(".lastname")
const region = document.querySelector(".region")
const town = document.querySelector(".town")
const inputconfirm = document.querySelector(".confirm")


function removeError(element) {
    element.classList.remove("error")
    element.nextElementSibling.classList.add("hidden")
    
}
function sendForm() {
    inputusername.value = inputusername.value.trim()
    // username errormsg
    if (inputusername.value == "") {
        errorUsername()
        error1.innerText = "Empty username"

    } else if (inputemail.value.toLowerCase().includes(inputusername.value.toLowerCase())) {
        errorUsername()
        error1.innerText = "To similar to the email"

    } else {
        inputusername.classList.remove("error")
        error1.classList.add("hidden")
    }

    // email errormsg
    if (inputemail.value == "") {
        errorEmail()
        error2.innerText = "Empty Email adress"

    } else if (!(isValidEmailAddress(inputemail.value))) {
        errorEmail()
        error2.innerText = "Invalid email"
    } else {
        inputemail.classList.remove("error")
        error2.classList.add("hidden")
    }

    // password errormsg
    if (inputpassword.value == "") {
        errorPassword()
        error3.innerText = "Empty Password"

    } else if (inputpassword.value.length < 12) {
        errorPassword()
        error3.innerText = "Password needs to be 12 characters long"

    } else {
        inputpassword.classList.remove("error")
        error3.classList.add("hidden")
    }
    if (!(inputpassword.value.match(inputconfirm.value))) {
        inputconfirm.classList.add("error")
        error8.classList.add("errortext")
        error8.classList.remove("hidden")
        error8.innerText = "Password does not match"
        
    }else{
        inputconfirm.classList.remove("error")
        error8.classList.add("hidden")
    }

    // first name errormsg
    if (inputfirstname.value == "") {
        errorFirstName()
        error4.innerText = "Empty First name"
    } else if (!(inputfirstname.value.match(/^[a-??A-??]+$/))) {
        errorFirstName()
        error4.innerText = "Only letters are allowed (A-??)"
    } else {
        inputfirstname.classList.remove("error")
        error4.classList.add("hidden")
    }
    // last name errormsg
    if (inputlastname.value == "") {
        errorLastName()
        error5.innerText = "Empty Last name"
    } else if (!(inputlastname.value.match(/^[a-??A-??]+$/))) {
        errorLastName()
        error5.innerText = "Only letters are allowed (A-??)"
    } else {
        inputlastname.classList.remove("error")
        error5.classList.add("hidden")
    }

    // region errormsg
    if (region.value.match(/^[a-??A-??]+$/) || region.value == "") {
        region.classList.remove("error")
        error6.classList.add("hidden")
    } else {
        region.classList.add("error")
        error6.classList.add("errortext")
        error6.classList.remove("hidden")
        error6.innerText = "Only letters are allowed (A-??)"
    }
    // town error
    if (town.value.match(/^[a-??A-??]+$/) || town.value == "") {
        town.classList.remove("error")
        error7.classList.add("hidden")
    } else {
        town.classList.add("error")
        error7.classList.add("errortext")
        error7.classList.remove("hidden")
        error7.innerText = "Only letters are allowed (A-??)"
    }

    function isValidEmailAddress(email) {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            ) != null;
    }

    function errorEmail() {
        inputemail.classList.add("error")
        error2.classList.add("errortext")
        error2.classList.remove("hidden")
    }

    function errorFirstName() {
        inputfirstname.classList.add("error")
        error4.classList.add("errortext")
        error4.classList.remove("hidden")
    }

    function errorLastName() {
        inputlastname.classList.add("error")
        error5.classList.add("errortext")
        error5.classList.remove("hidden")
    }

    function errorUsername() {
        inputusername.classList.add("error")
        error1.classList.add("errortext")
        error1.classList.remove("hidden")
    }
    function errorPassword() {
        inputpassword.classList.add("error")
        error3.classList.add("errortext")
        error3.classList.remove("hidden")
    }
}