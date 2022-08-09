const progress = document.getElementById('progress'); // доступ к индекатору выполнения
progress.value = 0; // процесс выполенения
const send = document.getElementById('send'); // доступ к кнопке Отправить  

send.addEventListener('click', () => {
    const formData = new FormData(document.forms[0]); // добавление формы в farmdata

    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.send(formData);

    xhr.upload.onprogress = function(event) {
        console.log(event.loaded, event.total);
    }

    xhr.onreadystatechange = function() {
        if (readyState === 2) {
            console.log('hi')
        }
    }
})