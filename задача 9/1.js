function massLenght(arr) {

    if (arr == undefined) {
        console.error("wrong array");
        return;
    }

    if (arr instanceof Array) {
        return arr.length;
    }

    if (typeof arr === 'object') {
        var count = 0;

        for (var key in arr) {
            count++

        }
        return count;
    }

    return false;
}


var m =[ ];
var m1 = [ 1, 2, 3,4,5,6,7,8,9,10];
m[3]=4;

/**
 * ==================================
 */


var a = [1,2,3,4,5];

var b = massLenght(a);

console.log(a);

/**
 * ==================================
 */

var num = document.getElementById("inp1");
var idElement = document.getElementById('inp2');
var p = document.getElementById('new');
var length = document.getElementById('length');

masOut();

function masOut () {
    var str ='';
    for ( var i=0; i<m1.length; i++){
        str = str + i + '   ' + m1[i] + '<br>';
    }
    p.innerHTML = str;

    length.innerHTML = 'Length: ' + massLenght(m1);
}

function f1() {
    m1[idElement.value] = num.value;
    masOut();
}

function fp() {
    m1.pop();
    masOut();
}

function fsh() {
    m1.shift();
    masOut();
}

function fpu() {
    m1.push(num.value);
    masOut();
}

















