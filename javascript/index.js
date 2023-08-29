// inputs
let inputs = document.querySelectorAll("input");
let fullNameInput = document.querySelector(".full-name");
let userNameInput = document.querySelector(".user-name");
let emailInput = document.querySelector(".email");
let passwordInput = document.querySelector(".password");
let cpasswordInput = document.querySelector(".cpassword");
// inputs Radio
const femaleRadio = document.getElementById("female");
const maleRadio = document.getElementById("male");
// masseges
let nameMassege = document.querySelector(".name-massege");
let userMassege = document.querySelector(".user-massege");
let emailMassege = document.querySelector(".email-massege");
let passwordMassege = document.querySelector(".password-massege");
let cpasswordMassege = document.querySelector(".cpassword-massege");
let genderMassege = document.querySelector(".gender-massege");
// botton
let signUpBotton = document.querySelector(".sign-up");
//
// Regular expression for validating usernames: 3-16 characters, allows lowercase letters, digits, underscores, and hyphens.
let userNameReg = /^[a-z0-9_-]{3,16}$/;

// Regular expression for validating passwords:
// At least 8 characters
// At least one lowercase letter
// At least one uppercase letter
// At least one digit
// At least one special character: !@#$%^&*()[]{}-_+=~`;:"'<>,./?
// EX =>  SecureP@ss123
let passwordReg =
  /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\[\]{}\-_+=~`;:"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;
// Regular expression for validating email addresses using a basic pattern.
let emailReg = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;

// Loop
inputs.forEach((input) => {
  if (input.type !== "radio") {
    input.addEventListener("blur", (e) => {
      e.preventDefault();
      // Handling Full Name validation
      if (fullNameInput.value.trim() === "") {
        fullNameInput.classList.add("active");
        nameMassege.classList.add("active");
      } else {
        fullNameInput.classList.remove("active");
        nameMassege.classList.remove("active");
      }

      // Handling Username validation
      if (!userNameInput.value.match(userNameReg)) {
        userMassege.classList.add("active");
        userNameInput.classList.add("active");
      } else {
        userNameInput.classList.remove("active");
        userMassege.classList.remove("active");
      }

      // Handling Email Input validation
      if (!emailInput.value.match(emailReg)) {
        emailMassege.classList.add("active");
        emailInput.classList.add("active");
      } else {
        emailInput.classList.remove("active");
        emailMassege.classList.remove("active");
      }

      // Handling password Input validation
      if (!passwordInput.value.match(passwordReg)) {
        passwordMassege.classList.add("active");
        passwordInput.classList.add("active");
      } else {
        passwordMassege.classList.remove("active");
        passwordInput.classList.remove("active");
      }

      // Handling Confirm password Input validation
      if (!cpasswordInput.value == passwordInput.value) {
        cpasswordMassege.classList.add("active");
        cpasswordInput.classList.add("active");
      } else {
        cpasswordMassege.classList.remove("active");
        cpasswordInput.classList.remove("active");
      }
      // 
      if (
        cpasswordInput.value == passwordInput.value &&
        passwordInput.value.match(passwordReg) &&
        emailInput.value.match(emailReg) &&
        userNameInput.value.match(userNameReg) &&
        fullNameInput.value.trim() !== ""
      ) {
        signUpBotton.classList.add("active");
      } else {
        signUpBotton.classList.remove("active");
      }
    });
  }
});

//

signUpBotton.addEventListener("click", function (event) {
  if (!femaleRadio.checked && !maleRadio.checked) {
    event.preventDefault();
    // alert("Please select a gender.");
    genderMassege.classList.add("active");
  } else {
    genderMassege.classList.remove("active");
  }
  //
  
});
