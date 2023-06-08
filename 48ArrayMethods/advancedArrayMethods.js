// filter, map, reduce

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter even numbers, then map to double each number, and finally calculate their sum
const sumOfDoubledEvenNumbers = numbers
    .filter(number => number % 2 === 0)
    .map(number => number * 2)
    .reduce((accumulator, current) => accumulator + current, 0);

console.log(sumOfDoubledEvenNumbers); // Output: 60

// filter, map, sort
const students = [
    {name: 'Alice', age: 20, grade: 'A'},
    {name: 'Bob', age: 18, grade: 'B'},
    {name: 'Charlie', age: 19, grade: 'A'},
    {name: 'David', age: 21, grade: 'C'},
    {name: 'Eve', age: 22, grade: 'B'}
];

// Filter students with grade 'A', map to get their names, and sort in alphabetical order
const sortedNamesOfGradeAStudents = students
    .filter(student => student.grade === 'A')
    .map(student => student.name)
    .sort((a, b) => a.localeCompare(b));

console.log(sortedNamesOfGradeAStudents);


// sort
const fruits = ['apple', 'banana', 'orange', 'kiwi'];

const sortedFruits = fruits.slice().sort(function (a, b) {
    return b.localeCompare(a);
});

console.log(sortedFruits);
console.log(fruits);

// reduce

// Find the sum of the odd numbers multiplied by 2
const sumOfDoubledOddNumbers = numbers
    .reduce((sum, number) => {
        if (number % 2 !== 0) {
            return sum + (number * 2);
        }
        return sum;
    }, 0);

console.log(sumOfDoubledOddNumbers);


const sum = numbers.reduce((accumulator, currentValue) => {
    console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`);
    return accumulator + currentValue;
}, 0);

console.log(sum);




