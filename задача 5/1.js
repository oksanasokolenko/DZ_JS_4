var button = document.getElementById('start');

button.addEventListener('click', onClick, false);

function onClick(e) {
    var c = document.getElementById('number').value,
        b = document.getElementById('power').value;

    pow(c, b);
}

function pow(c, b) {
    var a = Math.pow(c, b);
    alert(a);
    return a;
}
