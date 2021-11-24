/* reduce() carries out the function provided on each item in an array. It returns the value of the output from the function being run */

const array1 = [1, 2, 3, 4]

const reducer = function(num1, num2) {
    return num1 * num2;
}

console.log(array1.reduce(reducer))