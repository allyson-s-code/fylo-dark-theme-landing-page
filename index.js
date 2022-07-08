const emailInput = document.getElementById("email");
const error = document.getElementById("error-message");
const submit = document.getElementById("email-submit");

//validate email input function
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const validateEmail = function () {
  const email = emailInput.value;
  if (!email || !email.match(mailFormat)) {
    error.classList.remove("hide");
  } else {
    error.classList.add("hide");
    return email.toLowerCase().trim();
  }
};

//run validatation on submit
submit.addEventListener("click", function (e) {
  e.preventDefault();
  validateEmail();
});
