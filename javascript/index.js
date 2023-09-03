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
let cpasswordNotMassege = document.querySelector(".cpassword-massege-not-matched");
let cpasswordMMatched = document.querySelector(".cpassword-massege-matched");
let genderMassege = document.querySelector(".gender-massege");
let buttonMassege = document.querySelector(".button-massege");
// botton
let signUpBotton = document.querySelector(".sign-up");
// Regular expression for validating usernames: 3-16 characters, allows lowercase letters, digits, underscores, and hyphens.
let userNameReg = /^[a-z0-9_-]{3,16}$/;
// Regular expression for validating password
let passwordReg =
  /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\[\]{}\-_+=~`;:"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;
// Regular expression for validating email addresses using a basic pattern.
let emailReg = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.com)*$/;
// Function to handle individual input validation
const validateInput = (input, regex, messageElement) => {
  if (!input.value.match(regex)) {
    messageElement.classList.add("active");
    input.classList.add("active");
    return false;
  } else {
    input.classList.remove("active");
    messageElement.classList.remove("active");
    return true;
  }
};
// Handling Username validation
userNameInput.addEventListener("input", () =>
  validateInput(userNameInput, userNameReg, userMassege)
);
// Handling Email Input validation
emailInput.addEventListener("input", () =>
  validateInput(emailInput, emailReg, emailMassege)
);
// Handling password Input validation
passwordInput.addEventListener("input", () => {
  validateInput(passwordInput, passwordReg, passwordMassege);
});
// Handling Confirm password Input validation
cpasswordInput.addEventListener("input", () => {
  const passwordsMatch = cpasswordInput.value === passwordInput.value;
  if (passwordsMatch) {
    cpasswordInput.classList.remove("active");
    cpasswordMMatched.classList.add("matched");
    cpasswordNotMassege.classList.remove("not-matched");
    
    } else {
      cpasswordInput.classList.add("active");
      cpasswordMMatched.classList.remove("matched");
      cpasswordNotMassege.classList.add("not-matched");
  }
});

// Handling Full Name validation
fullNameInput.addEventListener("blur", () => {
  if (fullNameInput.value.trim() === "") {
    fullNameInput.classList.add("active");
    nameMassege.classList.add("active");
  } else {
    fullNameInput.classList.remove("active");
    nameMassege.classList.remove("active");
  }
});

// Handle Seleted Gender
let selectedGender = "";
femaleRadio.addEventListener("change", () => {
  if (femaleRadio.checked) {
    selectedGender = "female";
  }
});

maleRadio.addEventListener("change", () => {
  if (maleRadio.checked) {
    selectedGender = "male";
  }
});

signUpBotton.addEventListener("click", (event) => {
  if (
    fullNameInput.value &&
    userNameReg.test(userNameInput.value) &&
    passwordReg.test(passwordInput.value) &&
    cpasswordInput.value === passwordInput.value &&
    emailReg.test(emailInput.value) &&
    selectedGender !== ""
  ) {
    buttonMassege.classList.remove("active");
    event.stopPropagation();
    window.location.href = 'signin.html';
  } else {
    event.preventDefault();
    buttonMassege.classList.add("active");
  }

  if (!femaleRadio.checked && !maleRadio.checked) {
    event.preventDefault();
    genderMassege.classList.add("active");
  } else {
    genderMassege.classList.remove("active");
  }
  // Store User Data In  Local Storage
  if (
    fullNameInput.value &&
    userNameReg.test(userNameInput.value) &&
    passwordReg.test(passwordInput.value) &&
    cpasswordInput.value === passwordInput.value &&
    emailReg.test(emailInput.value)
  ) {
    let userData = {
      full_Name: fullNameInput.value,
      user_Name: userNameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
      gender: selectedGender,
    };
    const userDataString = JSON.stringify(userData);
    localStorage.setItem("user", userDataString);
  }
});
// handle  show  & hide password
let shows = document.querySelectorAll(".show");
let inputsHandler = document.querySelectorAll(".p-sh-handler");
shows.forEach((show, index) => {
  show.addEventListener("click", (e) => {
    if (inputsHandler[index].type === "password") {
      inputsHandler[index].type = "text";
      show.classList.remove("fa-eye-slash");
      show.classList.add("fa-eye");
    } else {
      inputsHandler[index].type = "password";
      show.classList.add("fa-eye-slash");
      show.classList.remove("fa-eye");
    }
  });
});
