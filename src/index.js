"use strict";
exports.__esModule = true;
var helpers_1 = require("./helpers");
function crudeSort(array, n) {
    if (n === 0) {
        return array[n];
    }
    else if (array[n] < crudeSort(array, n - 1)) {
        return array[n];
    }
    else {
        return crudeSort(array, n - 1);
    }
}
function bubbleSort(array) {
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
        return [value].concat(bubbleSort(array));
    }
}
(0, helpers_1.consoleStart)();
console.log('OUTUPT');
console.log(crudeSort([6, 3, 2, 0, 13], 3));
console.log(crudeSort([36, 110, 42, 2], 1));
console.log(bubbleSort([36, 110, 42, 2]));
console.log(bubbleSort([36, 11, 44, 22, 44, 99, 11]));
(0, helpers_1.consoleEnd)();
(0, helpers_1.consoleBuffer)();
