/* filter() takes the given function and runs it on each item in an array, returning a new array filled with the results of the function. */
// const dinos = ['trex', 'triceratop', 'trex', 'diplodocus'];

// const foundBySpecies = dinos.filter((dino) => dino === 'trex');
// console.log(foundBySpecies);
const trex = "trex";
const triceratops = "triceratop";
const diplodocus = "diplodocus";


const search_option = "triceratop";
const dinos = [trex, triceratops, trex, diplodocus];

const foundBySpecies = dinos.filter((dino) => dino === search_option);
console.log(foundBySpecies);

findMostAttractive = function (searchedSpecies) {
const dinos = [trex, triceratops, trex, diplodocus];

const foundBySpecies = dinos.filter((dino) => dino === searchedSpecies);
return foundBySpecies;
}

console.log(findMostAttractive(trex));