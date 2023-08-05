const form = document.getElementById('registration-form');
const email = document.getElementById('email');
const country = document.getElementById('country');
const zip = document.getElementById('zip');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

function showError(input, message) {
  const errorDiv = document.getElementById(`${input.id}-error`);
  errorDiv.innerText = message;
  input.classList.add('invalid');
}

function showSuccess(input) {
  const errorDiv = document.getElementById(`${input.id}-error`);
  errorDiv.innerText = '';
  input.classList.remove('invalid');
}

function checkRequired(inputs) {
  inputs.forEach(input => {
    if (input.value.trim() === '') {
      showError(input, `${input.name} is required`);
    } else {
      showSuccess(input);
    }
  });
}

function checkPasswordMatch(password, confirmPassword) {
  if (password.value !== confirmPassword.value) {
    showError(confirmPassword, 'Passwords do not match');
  }
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  checkRequired([email, country, zip, password, confirmPassword]);
  checkPasswordMatch(password, confirmPassword);

  const invalidInputs = form.querySelectorAll('.invalid');
  if (invalidInputs.length === 0) {
    alert('High five! Form submitted successfully.');
  }
});

email.addEventListener('blur', function () {
  if (email.validity.valid) {
    showSuccess(email);
  } else {
    showError(email, 'Please enter a valid email address');
  }
});

country.addEventListener('blur', function () {
  if (country.validity.valid) {
    showSuccess(country);
  } else {
    showError(country, 'Please enter a country');
  }
});

zip.addEventListener('blur', function () {
  if (zip.validity.valid) {
    showSuccess(zip);
  } else {
    showError(zip, 'Please enter a valid zip code');
  }
});

password.addEventListener('blur', function () {
  if (password.validity.valid) {
    showSuccess(password);
  } else {
    showError(password, 'Password must be at least 8 characters');
  }
});

confirmPassword.addEventListener('blur', function () {
  checkPasswordMatch(password, confirmPassword);
});