// Валидация
function validate() {
    let a = document.forms["formWithValidation"]["name"].value;
    if (a == "") {
        alert("Укажите ваше имя");
        return false;
    }
    let b = document.forms["formWithValidation"]["company"].value;
    if (b == "") {
        alert("Укажите вашу компанию");
        return false;
    }
    let с = document.forms["formWithValidation"]["email"].value;
    if (с == "") {
        alert("Укажите ваш Е-майл");
        return false;
    }
    let d = document.forms["formWithValidation"]["message"].value;
    if (d == "") {
        alert("Укажите текст сообщения");
        return false;
    }
}