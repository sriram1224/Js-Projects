let count = 0;

function updateCount() {
    const countElement = document.getElementById('count');
    countElement.innerText = count;

   
    countElement.classList.add('count-animation');

    
}

function increaseCount() {
    count++;

    
    const countElement = document.getElementById('count');
    countElement.style.color = 'Black'; 

    updateCount();

    
  
}

function decreaseCount() {
    const countElement = document.getElementById('count');
    countElement.style.color = 'red';
        count--;
        updateCount();
    
}

function resetCount() {
    count = 0;
    updateCount();
}
