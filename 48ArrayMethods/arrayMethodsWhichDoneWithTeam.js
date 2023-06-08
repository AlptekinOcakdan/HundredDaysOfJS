const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const fruits = ['apple', 'banana', 'orange'];

const evenNumber = numbers.filter(function (number) {
    return number % 2 === 0;
})

// console.log(evenNumber);

const foundNumber = numbers.find(function (number) {
    return number >3;
})

const foundIndexNumber = numbers.findIndex(function (number) {
    return number >3;
})

// console.log(foundIndexNumber);

const splicedFruits = fruits.splice(1,1,'kiwi','mango');
console.log(splicedFruits);