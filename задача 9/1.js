function massLenght(arr) {

    if (arr == undefined) {
        console.error("wrong array")
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
var a = [1, 'sda', 2, 3];


var b = massLenght(a);

console.log(b);