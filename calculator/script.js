let count = 0;

function updateCount() {
    const countElement = document.getElementById('count');
    countElement.innerText = count;

    // Apply animation class
    countElement.classList.add('count-animation');
    // Remove animation class after the animation duration
    setTimeout(() => {
        countElement.classList.remove('count-animation');
    }, 300);
}

function increaseCount() {
    count++;
    updateCount();
}

function decreaseCount() {
    if (count > 0) {
        count--;
        updateCount();
    }
}

function resetCount() {
    count = 0;
    updateCount();
}
