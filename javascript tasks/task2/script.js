// Function to alphabetize a string
function alphabetizeString(str) {
    // Convert the string to an array of characters, sort it, and join it back to a string
    return str.split('').sort().join('');
}

// Event listener for the button click
document.getElementById('alphabetizeButton').addEventListener('click', function() {
    const inputString = document.getElementById('inputString').value;
    const result = alphabetizeString(inputString);
    document.getElementById('result').textContent = 'Alphabetized string: ' + result;
});
