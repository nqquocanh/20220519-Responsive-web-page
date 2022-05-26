//Gọi dữ liệu input
var signUpForm = document.querySelector("#signUpForm");
var username = document.querySelector("#name");
var email = document.querySelector("#email");
var phone = document.querySelector("#phone");
var password = document.querySelector("#password");
var confirmPassword = document.querySelector("#confirmPassword");

// Check lỗi input
function showError(input, message) {
  input.value = input.value.trim();
  let parent = input.parentElement;
  let small = parent.querySelector(`small`);
  parent.classList.add("Error");
  small.innerText = message;
}

function showSuccess(input) {
  input.value = input.value.trim();
  let parent = input.parentElement;
  let small = parent.querySelector(`small`);
  parent.classList.remove("Error");
  small.innerText = "";
}

function checkEmptyError(listInput) {
  let isEmptyError = false;
  listInput.forEach((input) => {
    input.value = input.value.trim();
    if (!input.value) {
      showError(input, "Please fill this information");
    } else {
      showSuccess(input);
    }
  });
  return isEmptyError;
}

function checkEmailError(input) {
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  input.value = input.value.trim();
  let isEmailError = !regexEmail.test(input.value);
  if (regexEmail.test(input.value)) {
    showSuccess(input);
  } else {
    showError(input, "Email Invalid");
  }
  return regexEmail.test(input.value);
}

function checkPhoneError(input) {
  const regexPhone = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  let isPhoneError = !regexPhone.test(input.value);
  if (regexPhone.test(input.value)) {
    showSuccess(input);
  } else {
    showError(input, "Phone Invalid");
  }
  return regexPhone.test(input.value);
}

function checkLengthError(input, min, max) {
  input.value = input.value.trim();
  if (input.value.length < min) {
    showError(input, `Must be at least ${min} characters`);
    return true;
  }
  if (input.value.length > max) {
    showError(input, `Must be less than ${max} characters`);
    return true;
  }
  return false;
}

function checkMatchPasswordError(passwordInput, cfPasswordInput) {
  if (passwordInput.value !== cfPasswordInput.value) {
    showError(cfPasswordInput, "Password did not match");
    return true;
  }
  return false;
}

//Valid lỗi
signUpForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let isEmptyError = checkEmptyError([
    username,
    email,
    password,
    confirmPassword,
  ]);
  let isEmailError = checkEmailError(email);
  let isPhoneError = checkPhoneError(phone);
  let isPasswordLengthError = checkLengthError(password, 6, 20);
  let isCheckMatchPasswordError = checkMatchPasswordError(
    password,
    confirmPassword
  );

  // Tiến hành lưu vào localStorage khi valid thành công

  localStorage.setItem("name", username.value);
  localStorage.setItem("phone", phone.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("password", password.value);
});
