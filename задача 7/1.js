var input = document.getElementById('age'),
    button = document.getElementById('push'),
    out = document.getElementById('out');

button.addEventListener('click', function () {

    out.innerHTML = checkAge(input.value);

}, false);

function checkAge (age) {

    age = parseInt(age);

    if (age >= 16) {
        return "Welcome";
    }
    else {
        return "вы еще молоды";
    }

}