const btn_sent = document.querySelector(".btn-sent__form");
const borderName = document.querySelector(".border-line__name");
const borderEmail = document.querySelector(".border-line__email");
const errorMsg = document.querySelector(".error-msg")
const errorIcon = document.querySelector(".error-icon")
const inputName = document.querySelector(".input-name")
const inputEmail = document.querySelector(".input-email")
const inputMessage = document.querySelector(".input-text");

let submittedForms = [];

const addSubmittedForm = () => {
    let submittedForm = {
        id: Date.now(),
        user: inputName.value,
        email: inputEmail.value,
        message: inputMessage.value 
    }
    submittedForms.push(submittedForm)
    localStorage.setItem("Submitted Forms", JSON.stringify(submittedForms));
    }

btn_sent.addEventListener("click", function() {
    let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (inputName.value === "") {
        borderName.style.border = "1px solid red";

    }
    else if (!inputEmail.value.match(re)) {
        borderName.style.border = "1px solid green";
        borderEmail.style.border = "1px solid red";
        errorIcon.style.display = "block";
        errorMsg.style.display = "flex"
    }
    else {
        borderEmail.style.border = "1px solid #d9d9d9";
        errorIcon.style.display = "none";
        errorMsg.style.display = "none"

    }
    addSubmittedForm()
})
