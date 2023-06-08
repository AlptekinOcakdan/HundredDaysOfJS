// length, push, pop, unshift, shift, concat, join, slice, splice, forEach, map, filter, reduce, sort, reverse, indexOf, lastIndexOf, includes, every, some, find, findIndex
// Array Methods
const numbers = [1, 2, 3, 4, 5];
const fruits = ['apple', 'banana', 'orange'];
const countries = ['Australia', 'Canada', 'Germany', 'Japan'];

// length: Returns the number of elements in the array.
console.log(fruits.length);

// push: Adds one or more elements to the end of the array and returns the new length.
fruits.push('pineapple');
console.log(fruits);

// pop: Removes the last element from the array and returns that element.
const removedFruit = fruits.pop();
console.log(removedFruit);
console.log(fruits);

// unshift: Adds one or more elements to the beginning of the array and returns the new length.
fruits.unshift('apple');
console.log(fruits);

// shift: Removes the first element from the array and returns that element.
const removedFruit2 = fruits.shift();
console.log(removedFruit2);
console.log(fruits);

// concat: Combines two or more arrays and returns a new array.
const fruits1 = ['apple', 'banana'];
const fruits2 = ['orange', 'kiwi'];
const combinedFruits = fruits1.concat(fruits2);
console.log(combinedFruits);

// join: Joins all elements of the array into a string.
const joinedString = fruits.join(', ');
console.log(joinedString);

// slice: Extracts a section of the array and returns a new array.
const slicedFruits = fruits.slice(1, 4);
console.log(slicedFruits);

// splice: Adds or removes elements from the array at a specific index.
fruits.splice(1, 0, 'kiwi', 'mango');
console.log(fruits);

fruits.splice(2, 2);
console.log(fruits);

// forEach: Executes a provided function once for each array element.
fruits.forEach(function (fruit) {
    console.log(fruit);
});

// map: Creates a new array with the results of calling a provided function on every element in the array.
const multipliedNumbers = numbers.map(function (number) {
    return number * 2;
});
console.log(multipliedNumbers);

// filter: Creates a new array with all elements that pass a test implemented by a provided function.
const evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0;
});
console.log(evenNumbers);

// reduce: Applies a function to reduce the array to a single value.
const sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
});
console.log(sum);

// sort: Sorts the elements of the array in place and returns the sorted array.
fruits.sort();
console.log(fruits);

// reverse: Reverses the order of the elements in the array.
fruits.reverse();
console.log(fruits);

// indexOf: Returns the first index at which a specified element is found in the array.
const index = fruits.indexOf('banana');
console.log(index);

// lastIndexOf: Returns the last index at which a specified element is found in the array.
const lastIndex = fruits.lastIndexOf('banana');
console.log(lastIndex);

// includes: Checks if an array contains a specified element and returns a boolean.
const hasBanana = fruits.includes('banana');
console.log(hasBanana);

const hasGrapes = fruits.includes('grapes');
console.log(hasGrapes);

// every: Checks if all elements in the array pass a test implemented by a provided function.
const allEvenNumbers = numbers.every(function (number) {
    return number % 2 === 0;
});
console.log(allEvenNumbers); // Output: false

const allPositiveNumbers = numbers.every(function (number) {
    return number > 0;
});
console.log(allPositiveNumbers);

// some: Checks if at least one element in the array passes a test implemented by a provided function.
const hasEvenNumber = numbers.some(function (number) {
    return number % 2 === 0;
});
console.log(hasEvenNumber);

const hasNegativeNumber = numbers.some(function (number) {
    return number < 0;
});
console.log(hasNegativeNumber);

// find: Returns the first element in the array that satisfies the provided testing function.
const foundNumber = numbers.find(function (number) {
    return number > 3;
});
console.log(foundNumber);

// findIndex: Returns the index of the first element in the array that satisfies the provided testing function.
const foundIndex = numbers.findIndex(function (number) {
    return number > 3;
});
console.log(foundIndex);

// startsWith: The startsWith method checks if a string element in an array starts with a specified substring. It returns true if any element satisfies the condition; otherwise, it returns false.
const startsWithB = fruits.some(fruit => fruit.startsWith('b'));

console.log(startsWithB);

// endsWith: The endsWith method checks if a string element in an array ends with a specified substring. It returns true if any element satisfies the condition; otherwise, it returns false.
const endsWithLand = countries.some(country => country.endsWith('land'));

console.log(endsWithLand);

