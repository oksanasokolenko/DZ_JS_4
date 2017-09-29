function putNumber() {

    var paragraphs = document.getElementsByTagName('p');

    for (var i = 1; i < paragraphs.length; i++) {
        // console.dir(paragraphs[i]);
        paragraphs[i].innerHTML = i + '. ' + paragraphs[i].innerHTML;

    }

}

putNumber();


//------

var button = document.getElementById('button'),
    stop = document.getElementById('stop');

var count = 0;

function increment() {
    count++;
}

button.addEventListener('click', function(e) {
    e.preventDefault();
    console.log(e);
    console.log(this);
    e.stopPropagation();

    e.stopImmediatePropagation();

    // console.log(count);
}, false);

button.addEventListener('click', increment, false);

button.addEventListener('click', increment, true);

stop.addEventListener('click', function() {

    // button.removeEventListener('click', increment, false);
    console.log(count);

}, false);

window.addEventListener('click', function(e) {
    // console.log('event on Window');
    // console.log(e.target);

    if (e.target.id === 'stop') {
        alert('stop it');
    }

}, false);