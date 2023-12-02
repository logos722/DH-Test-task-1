import { sendDataToServer, handleServerResponse } from "./API/ajax.js";

let inputElements = document.querySelectorAll('input, textarea');

inputElements.forEach(function (input) {
  input.addEventListener('focus', function () {
    this.classList.add('focused');
  });

  input.addEventListener('blur', function () {
    this.classList.remove('focused');
  });
});



document.querySelector('.btn').addEventListener('click', async function (event) {
  event.preventDefault();


  var name = document.getElementById('name').value;
  var phone = document.getElementById('phone').value;
  var email = document.getElementById('email').value;


  var isValid = true;

  if (name === '') {
    alert('Пожалуйста, введите ваше имя.');
    isValid = false;
  }

  if (phone === '') {
    alert('Пожалуйста, введите ваш номер телефона.');
    isValid = false;
  }



  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email !== '' && !emailRegex.test(email)) {
    alert('Введите корректный email.');
    isValid = false;
  }

  
  var phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
  if (!phoneRegex.test(phone)) {
    alert('Введите корректный номер телефона.');
    isValid = false;
  }

  if (isValid) {
    console.log('eye')
    const formData = new FormData(document.getElementById('feedbackForm'))
    for (const pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }
    try {
      const response = await sendDataToServer(formData);

      
      handleServerResponse(response);
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
      
    }
  }
});