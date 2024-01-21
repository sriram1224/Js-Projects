
document.addEventListener("DOMContentLoaded", function () {
    activateEventListener()

    function activateEventListener() {
        document.querySelector(".wrapper").addEventListener("click", (e) => {
            const button = e.target;
            const parentScoreboard = button.closest(".scoreboard");
    
            if (parentScoreboard) {
                const scorePlayer = parentScoreboard.querySelector(".player-score");
                const action = button.textContent;
    
                if (isNaN(action)) {
                    switch (action) {
                        case '🗑':
                            parentScoreboard.remove();
                            break;
                    }
                } else {
                    
                    if (button.classList.contains("addScore")) {
                        scorePlayer.textContent = parseInt(scorePlayer.textContent) + 5;
                    } else {
                        // Default to incrementing by 5
                        scorePlayer.textContent = parseInt(scorePlayer.textContent) + parseInt(action);
                    }
    
                    sorting();
                }
            }
        });
    }
    
    document.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault();
        const firstnameInput = document.getElementById("first-name");
        const lastnameInput = document.getElementById("last-name");
        const countryInput = document.getElementById("country");
        const scoreInput = document.getElementById("Play-score");
        const errorPrompter = document.querySelector(".prompt");
    
        errorPrompter.style.display = "none";
    
        const firstname = firstnameInput.value;
        const lastname = lastnameInput.value;
        const country = countryInput.value;
        const score = scoreInput.value;
    
        if (firstname === '' || lastname === '' || country === '' || score === '') {
            errorPrompter.style.display = "block";
            return; // Do not proceed if any field is empty
        }
    
        const scoreboardContainer = document.querySelector(".wrapper");
        const scoreboardElement = document.createElement('div');
        scoreboardElement.classList.add("scoreboard");
        scoreboardElement.innerHTML = `
            <div>
                <p class="name">${firstname} ${lastname}</p>
                <p class="time">${getTimeanddate()}</p>
            </div>
            <p class="player-coutry">${country}</p>
            <p class="player-score">${score}</p>
            <div class="btn">
                <button>&#x1F5D1</button>
                <button class="addScore">+5</button>
                <button class="subtractScore">-5</button>
            </div>
        `;
        scoreboardContainer.appendChild(scoreboardElement);
        sorting();
    
        // Clear input fields after adding a player
        firstnameInput.value = '';
        lastnameInput.value = '';
        countryInput.value = '';
        scoreInput.value = '';
    });
    
    


function sorting() {
    let scoreboards = document.querySelectorAll(".scoreboard");
    let arr = Array.from(scoreboards);

    
    arr.sort((a, b) => {
        const scoreA = parseInt(a.querySelector(".player-score").textContent);
        const scoreB = parseInt(b.querySelector(".player-score").textContent);
        return scoreB - scoreA;
    });

    
    let scoreboardContainer = document.querySelector(".wrapper");
    scoreboardContainer.innerHTML = "";
    arr.forEach((scoreboard) => {
        scoreboardContainer.appendChild(scoreboard);
    });
}



   
    

function getTimeanddate() {
    let dateObj = new Date();
    
    const options = {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    };

    return dateObj.toLocaleString('en-US', options);
}

});
