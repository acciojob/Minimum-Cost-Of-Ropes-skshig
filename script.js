const input = document.getElementById("input");
const submit = document.getElementById("submit");
const result = document.getElementById("result");

submit.addEventListener("click", function() {
// Split the input string into an array of strings
const ropes = input.value.split(',');

// Convert the array of strings into an array of numbers
const ropesArray = ropes.map(rope => parseInt(rope));

// Sort the array in ascending order
ropesArray.sort((a, b) => a - b);

// Calculate the minimum cost of ropes
let cost = 0;
while (ropesArray.length > 1) {
const first = ropesArray.shift();
const second = ropesArray.shift();
cost += first + second;
ropesArray.unshift(first + second);
ropesArray.sort((a, b) => a - b);
}

// Display the minimum cost of ropes
result.innerHTML = `Minimum cost of ropes: ${cost}`;
});
