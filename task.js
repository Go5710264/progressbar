const progress = document.getElementById('progress'); // доступ к индекатору выполнения
// progress.value = 0; // процесс выполенения
const send = document.getElementById('send'); // доступ к кнопке Отправить  

send.addEventListener('click', (event) => {
    event.preventDefault();

    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 2) { // xhr.readyState = 4
            console.log('hi')
        }
    }

    xhr.upload.onprogress = function(event) {
        console.log(event.loaded, event.total)
        progress.value = event.loaded / event.total;
    }
    // Джобит!

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');

    const formData = new FormData (document.forms[0]); // добавление формы в farmdata

    xhr.send(formData);

    


})