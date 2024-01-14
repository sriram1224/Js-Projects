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
    if(count < 1){
        countElement.style.color = 'red';
    }

    updateCount();

    
  
}

function decreaseCount() {
    const countElement = document.getElementById('count');
    countElement.style.color = 'red';
    if(count === 1){
        countElement.style.color = 'Black';
    }
    
        count--;
        updateCount();
    
}

function resetCount() {
    count = 0;
    updateCount();
}
