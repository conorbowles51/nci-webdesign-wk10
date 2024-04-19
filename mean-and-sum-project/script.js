// Question 5
// Return the mean and sum of an array of numbers

// Initialise array
const array = []

const arrayOutput = document.getElementById("array");
const largestOutput = document.getElementById("largest");

// Fill the array with 25 random integers between 0 and 99
for(let i = 0; i < 25; i++){
    array.push(Math.floor(Math.random() * 100));
}

let mean = 0;
let sum = 0;

// Find the sum
for(let i = 0; i < 25; i++){
    sum += array[i];
}

mean = sum / array.length;

arrayOutput.innerHTML = "Array: <br />" + array;
largestOutput.innerHTML = "Sum: " + sum + "<br />Mean: " + mean;