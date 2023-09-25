// Function to display the current date and time
displayDateTime();
function displayDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    document.getElementById("display").textContent = "Current Date and Time: " + dateTimeString;
}

// Add click event listeners to the buttons
document.getElementById("showDate").addEventListener("click", function () {
    const now = new Date();
    const dateString = now.toLocaleDateString();
    document.getElementById("display").textContent = "Current Date: " + dateString;
});

document.getElementById("showTime").addEventListener("click", function () {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById("display").textContent = "Current Time: " + timeString;
});
