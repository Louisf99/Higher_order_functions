/* reduce() carries out the function provided on each item in an array */

const array1 = [1, 2, 3, 4]

const reducer = function(num1, num2) {
    return num1 * num2;
}

console.log(array1.reduce(reducer))