var count = 0;
document.getElementById('start1').onclick = f1;
document.getElementById('start2').onclick = f1;
function f1() {
    count++;
    document.getElementById("output").innerHTML = count;

}


