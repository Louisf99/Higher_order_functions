/* map() carries out the provided function on each item in an array, returning a new array containing the results. This is useful as the original array is not mutated in the process. */
var lucky_number = [3, 7, 27];
// Traditional Way
var square_num = lucky_number.map(function(lucky) {
  return lucky*lucky;
})
console.log(square_num);