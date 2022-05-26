// //Gọi dữ liệu input
// var signInForm = document.querySelector("#signInForm");
// var email2 = document.querySelector("#email2");
// var password2 = document.querySelector("#password2");

// // Check lỗi input
// function showError(input, message) {
//   input.value = input.value.trim();
//   let parent = input.parentElement;
//   let small = parent.querySelector(`small`);
//   parent.classList.add("Error");
//   small.innerText = message;
// }

// function showSuccess(input) {
//   input.value = input.value.trim();
//   let parent = input.parentElement;
//   let small = parent.querySelector(`small`);
//   parent.classList.remove("Error");
//   small.innerText = "";
// }

// function checkEmptyError(listInput) {
//   let isEmptyError = false;
//   listInput.forEach((input) => {
//     input.value = input.value.trim();
//     if (!input.value) {
//       showError(input, "Please fill this information");
//     } else {
//       showSuccess(input);
//     }
//   });
//   return isEmptyError;
// }

// function checkEmailError(input) {
//   const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   input.value = input.value.trim();
//   let isEmailError = !regexEmail.test(input.value);
//   if (regexEmail.test(input.value)) {
//     showSuccess(input);
//   } else {
//     showError(input, "Email Invalid");
//   }
//   return regexEmail.test(input.value);
// }

// function checkLengthError(input, min, max) {
//   input.value = input.value.trim();
//   if (input.value.length < min) {
//     showError(input, `Must be at least ${min} characters`);
//     return true;
//   }
//   if (input.value.length > max) {
//     showError(input, `Must be less than ${max} characters`);
//     return true;
//   }
//   return false;
// }

// //Valid lỗi
// signUpForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   let isEmptyError = checkEmptyError([email2, password2]);
//   let isEmailError2 = checkEmailError(email2);
//   let isPasswordLengthError = checkLengthError(password2, 6, 20);

//   // Tiến hành lưu vào localStorage khi valid thành công
//   localStorage.setItem("email", email2.value);
//   localStorage.setItem("password", password2.value);
// });

function signIn(event) {
  event.preventDefault();

  var emailInfo = window.localStorage.getItem("email");
  var passwordInfo = window.localStorage.getItem("password");

  // check validate email
  var Email = document.getElementById("email2");
  var errorEmail = document.getElementById("errorEmail");
  if (Email && Email.value.length === 0) {
    errorEmail.innerHTML = "Please fill Email";
  } else if (Email.value !== emailInfo) {
    errorEmail.innerHTML = "Wrong Email";
  } else {
    errorEmail.innerHTML = "";
  }

  // check validate password
  var Password = document.getElementById("password2");
  var errorPassword = document.getElementById("errorPassword");
  if (Password && Password.value.length === 0) {
    errorPassword.innerHTML = "Please fill password";
  } else if (Password.value !== passwordInfo) {
    errorPassword.innerHTML = "Wrong password";
  } else {
    errorPassword.innerHTML = "";
  }
}
