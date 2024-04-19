// Question 4
// Create a preset array of numbers. Create a piece of code that chooses the largest number from that array


// Initialise array
const array = []

const arrayOutput = document.getElementById("array");
const largestOutput = document.getElementById("largest");

// Fill the array with 25 random integers between 0 and 99
for(let i = 0; i < 25; i++){
    array.push(Math.floor(Math.random() * 100));
}

let largestNum = 0;

// Find the largest number
for(let i = 0; i < 25; i++){
    if(array[i] > largestNum){
        largestNum = array[i];
    }
}

arrayOutput.innerHTML = "Array: <br />" + array;
largestOutput.innerHTML = "Larget number: " + largestNum;