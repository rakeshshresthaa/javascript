// Basic JavaScript program demonstrating common functionality

// Variables and data types
const name = "John";
let age = 25;
const isStudent = true;
const hobbies = ["reading", "coding", "gaming"];

// Function to calculate age in days
function calculateAgeInDays(years) {
    return years * 365;
}

// Function to display user information
function displayUserInfo(userName, userAge, userHobbies) {
    console.log(`Name: ${userName}`);
    console.log(`Age: ${userAge}`);
    console.log(`Age in days: ${calculateAgeInDays(userAge)}`);
    console.log(`Is student: ${isStudent}`);
    console.log("Hobbies:");
    userHobbies.forEach(hobby => console.log(`- ${hobby}`));
}

// Call the function with our variables
displayUserInfo(name, age, hobbies);

// Array operations
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log("Original numbers:", numbers);
console.log("Doubled numbers:", doubled);

// Conditional statement
if (age >= 18) {
    console.log(`${name} is an adult`);
} else {
    console.log(`${name} is a minor`);
}