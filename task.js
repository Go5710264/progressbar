const progress = document.getElementById('progress'); // доступ к индекатору выполнения
const send = document.getElementById('send'); // доступ к кнопке Отправить  

send.addEventListener('click', (event) => {
    event.preventDefault();

    const xhr = new XMLHttpRequest();

    xhr.upload.onprogress = function(event) {
        progress.value = event.loaded / event.total;
    }

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');

    const formData = new FormData (document.forms[0]); // добавление формы в farmdata

    xhr.send(formData);
})