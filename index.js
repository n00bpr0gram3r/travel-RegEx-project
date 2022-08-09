console.log('Hello');
let username = document.getElementById('username');
let email = document.getElementById('email');
let phoneNumber = document.getElementById('phoneNumber');
let submit = document.getElementById('submit');
console.log(username, email);
let validEmail = false;
let validUser = false;
let validPhone = false;
email.addEventListener('blur', () => {
  console.log('You have entered email');
  let regex = /^([_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-Z0-9]+)\.[a-zA-Z]{2,7}$/;
  str = email.value;
  if (regex.test(str)) {
    console.log('Email is valid');
    validEmail = true;
    email.classList.add('is-valid');
    email.classList.remove('is-invalid');
  } else {
    console.log('Email is invalid');
    validEmail = false;
    email.classList.add('is-invalid');
    email.classList.remove('is-valid');
  }
});

username.addEventListener('blur', () => {
  console.log('You have entered username');
  let regex = /^([a-zA-Z0-9]){5,10}$/;
  str = username.value;
  if (regex.test(str)) {
    console.log('username is valid');
    validUser = true;
    username.classList.add('is-valid');
    username.classList.remove('is-invalid');
  } else {
    console.log('username is invalid');
    validUser = false;
    username.classList.add('is-invalid');
    username.classList.remove('is-valid');
  }
});

phoneNumber.addEventListener('blur', () => {
  console.log('You have entered phone');
  let regex = /^([0-9]){10}$/;
  str = phoneNumber.value;
  if (regex.test(str)) {
    console.log('Phone Number is valid');
    validPhone = true;
    phoneNumber.classList.add('is-valid');
    phoneNumber.classList.remove('is-invalid');
  } else {
    console.log('Phone Number is invalid');
    validPhone = false;
    phoneNumber.classList.add('is-invalid');
    phoneNumber.classList.remove('is-valid');
  }
});

submit.addEventListener('click', (e) => {
  let success = document.getElementById('success');
  let danger = document.getElementById('danger');
  if (validEmail && validPhone && validUser) {
    console.log('Every details has been putted correctly');
    success.classList.add('show');
    danger.classList.add('d-none')
  } else {
    console.log('Please re check your entries');
    danger.classList.add('show');
    success.classList.add('d-none')
  }
  e.preventDefault();
});
