var out = document.getElementById('answer'),
    button = document.getElementById('check'),
    varNum = parseInt(Math.random() * 10),
    attempt = 0;

button.addEventListener('click', GameGetNum, false);

function GameGetNum() {

    // check
    var x = parseInt(document.getElementById('findNum').value);

    attempt++;
    document.getElementById('attempts').innerHTML = attempt;

    if (x == varNum) {
        // SUCCESS FINISH
        finishGame(true);
        return;
    } else if (x > varNum) {
        out.innerHTML = "Ви ввели число більше ніж потрібно";
    } else {
        out.innerHTML = "Ви ввели число менше ніж потрібно";
    }
    // LOSE FINISH
    if (attempt >= 3) {
        finishGame();
        return;
    }

}

function finishGame(success) {
    alert(success ? 'вы вгадали' : 'ви використали всі спроби');
    button.disabled = true;
    out.innerHTML = "загаданное число: " + varNum;
}
