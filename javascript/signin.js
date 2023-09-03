let userNameInput = document.querySelector(".user-name");
let passwordInput = document.querySelector(".password");
let signUpBotton = document.querySelector(".sign-in");
let buttonMassege = document.querySelector(".button-massege");
let welcomeMassege = document.querySelector(".welcome");
let signInFormC = document.querySelector(".sign-in-form");
let imageContainer = document.querySelector(".image");
let welcomeUName = document.querySelector(".w-name");
let passwordShow = document.querySelector(".password-show");

// get User Data From Local Storage
let userDataString = localStorage.getItem("user");
let userData = JSON.parse(userDataString);
//
signUpBotton.addEventListener("click", (event) => {
  let userName = userData.user_Name === userNameInput.value;
  let password = userData.password === passwordInput.value;
  if (userName && password) {
    event.preventDefault();
    console.log("user name correct");
    welcomeMassege.classList.add("active");
    signInFormC.classList.add("not-active");
    imageContainer.classList.add("not-active");
    welcomeUName.textContent=`  ${userData.full_Name} `
} else {
    event.preventDefault();
    imageContainer.classList.remove("not-active");
    signInFormC.classList.remove("not-active");
      welcomeMassege.classList.remove("active");
    buttonMassege.classList.add("active");
  }
});
// handle  show  & hide password
let inputsHandler = document.querySelector(".p-sh-handler");
passwordShow.addEventListener("click", (e) => {
    if (inputsHandler.type === "password") {
      inputsHandler.type = "text";
      passwordShow.classList.remove("fa-eye-slash");
      passwordShow.classList.add("fa-eye");
    } else {
      inputsHandler.type = "password";
      passwordShow.classList.add("fa-eye-slash");
      passwordShow.classList.remove("fa-eye");
    }
  });