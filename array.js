const array1 = [1,2,3,"test1","test2"];

// const dummyData = [
//     {
//         name:"John",
//         age:22,
//         gender:"male",
//         phone:9745613232
//     },
//     {
//         name:"Jane",
//         age:23,
//         gender:"female",
//         phone:9745613232
//     }
// ];
// array1.push("test3");
// console.log(array1);
//array1.pop();
//array1.shift();
//console.log(array1);

// array1.unshift("test0");
// console.log(array1);

// const array2 = [1,2,3,4,5,6,7,8,9,10];
// const newarray = array2.concat(array1);
// console.log(newarray);

//array1.slice(index) => Remosve out a part of an array starting from array element 
// const newarray = array1.slice(3);
// console.log(newarray);

// const doubleArray = array1.map((item) => item * 2);
// console.log(doubleArray);

// const evenArray = array1.filter((item) => item % 2 === 0);
// console.log(evenArray);

// const sumArray = array1.reduce((acc, curr) => acc + curr, 0);
// console.log(sumArray);

// const foundArray = array1.find(n => n > 1);
// console.log(foundArray);

// Create an array of numbers from 1 to 10
const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
console.log(numbers);

// Use map() to create a new array where each number is doubled
const doubledNumbers = numbers.map(n => n * 2);
console.log(doubledNumbers);

// Use map() to create an array of strings like "Number: 1", "Number: 2", etc.
const stringNumbers = numbers.map(n => `Number: ${n}`);
console.log(stringNumbers);

// Use filter() to return only even numbers
const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log(evenNumbers);

// Use filter() to return numbers greater than 5
const greaterThan5 = numbers.filter(n => n > 5);
console.log(greaterThan5);

// Use find() to get the first number greater than 3
const firstGreaterThan3 = numbers.find(n => n > 3);
console.log(firstGreaterThan3);

// Use find() to get the first number divisible by 4
const firstDivisibleBy4 = numbers.find(n => n % 4 === 0);
console.log(firstDivisibleBy4);

// Use some() to check if there is any number less than 0
const hasNegativeNumber = numbers.some(n => n < 0);
console.log(hasNegativeNumber);

// Use some() to check if any number is greater than 8
const hasNumberGreaterThan8 = numbers.some(n => n > 8);
console.log(hasNumberGreaterThan8);

// Use every() to check if all numbers are less than or equal to 10
const allLessThanOrEqual10 = numbers.every(n => n <= 10);
console.log(allLessThanOrEqual10);

// Use every() to check if all numbers are positive
const allPositive = numbers.every(n => n > 0);
console.log(allPositive);

// Use forEach() to log each number multiplied by its index
numbers.forEach((n, index) => {
    console.log(`Number: ${n}, Index: ${index}`);
});

// Use forEach() to log whether the number is even or odd
numbers.forEach(n => {
    console.log(n % 2 === 0 ? "Even" : "Odd");
});

// Use reduce() to calculate the sum of all numbers
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum);

// Use reduce() to find the maximum value in the array
const max = numbers.reduce((acc, n) => Math.max(acc, n), -Infinity);
console.log(max);












