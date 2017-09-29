var varNum = parseInt(Math.random() * 10);

document.getElementById('check').addEventListener( 'click', GameGetNum, false);

function GameGetNum() {

    var out = document.getElementById('answer'),
        x = parseInt(document.getElementById('findNum').value),
        y = parseInt(document.getElementById('attempts').innerHTML);
    console.log(x);

    if (y <= 3) {
        if (x == varNum) {
            out.innerHTML = 'Ви вгадали';
        } else if (x > varNum) {
            out.innerHTML = "Ви ввели число більше ніж потрібно";
        } else {
            out.innerHTML = "Ви ввели число менше ніж потрібно";
        }
        document.getElementById('attempts').innerHTML = ++y;
    } else {
        out.innerHTML = 'ви використали всі спроби';
    }
}
