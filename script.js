const button = document.getElementById('counter-btn');
const countDisplay = document.getElementById('count');

let count = 0;

button.addEventListener('click', () => {
    // Increment counter
    count++;
    countDisplay.textContent = count;
});
