
const countElement = document.getElementById('count');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');

let count = 0;


function increaseCount() {
    count++;
    countElement.textContent = count;
}


function decreaseCount() {
    if (count > 0) {
        count--;
        countElement.textContent = count;
    }
}


increaseBtn.addEventListener('click', increaseCount);
decreaseBtn.addEventListener('click', decreaseCount);
