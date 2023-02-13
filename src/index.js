"use strict";
exports.__esModule = true;
var helpers_1 = require("./helpers");
function crudeInsertionSort(array) {
    for (var i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            var greaterValue = array[i];
            var lesserValue = array[i + 1];
            array[i] = lesserValue;
            array[i + 1] = greaterValue;
        }
    }
    return array;
}
function recursionInsertionSort(array) {
    if (array.length < 1) {
        return array;
    }
    else {
        for (var i = 0; i < array.length; i++) {
            if ((array[i] < array[i + 1])) {
                var lesserValue = array[i];
                var greaterValue = array[i + 1];
                array[i] = greaterValue;
                array[i + 1] = lesserValue;
            }
        }
        var value = array.pop();
        return [value].concat(recursionInsertionSort(array));
    }
}
(0, helpers_1.consoleStart)();
console.log(crudeInsertionSort([6, 3, 2, 0, 13]));
console.log(crudeInsertionSort([36, 110, 42, 2]));
// console.log(recursionInsertionSort([36,11,44,22,44,99,11]));
(0, helpers_1.consoleEnd)();
(0, helpers_1.consoleBuffer)();
