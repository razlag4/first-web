const button = document.querySelector('#confirm');

const nameRegex = /^[a-zA-Zа-яА-ЯёЁ'-]{2,50}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm() {
  const email = document.querySelector('#useremail').value.trim();
  const nameuser = document.querySelector('#inputname').value.trim();
  const adressuser = document.querySelector('#useradress').value.trim();
  const doorsuser = document.querySelector('#doors').value.trim();

  const isValid = 
    emailRegex.test(email) &&
    nameRegex.test(nameuser) &&
    adressuser.length >= 10 &&
    adressuser.length <= 100 &&
    doorsuser !== "";

  button.disabled = !isValid;
}

function checkForm() {
  validateForm();
}

document.querySelectorAll('#useremail, #inputname, #useradress').forEach(input => {
  input.addEventListener('input', validateForm);
});
document.querySelector('#doors').addEventListener('change', validateForm);

validateForm();

function userdatasubmit() {
  const email = document.getElementById('useremail').value;
  const name = document.getElementById('inputname').value;
  const address = document.getElementById('useradress').value;
  const door = document.getElementById('doors').value;

  console.log("Имя пользователя:", name);
  console.log("Email пользователя:", email);
  console.log("Адрес пользователя:", address);
  console.log("Выбранная дверь:", door);

  return false;
}
