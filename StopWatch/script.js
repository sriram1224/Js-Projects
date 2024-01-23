startelement = document.getElementById("start");
stopelement = document.getElementById("stop");
resetelement = document.getElementById("reset");
let hour = 0; 
let minute = 0; 
let second = 0; 
let ms = 0; // Added to initialize milliseconds
let timer = false; // Added to track timer state

startelement.addEventListener("click", () => {
    timer = true;
    stopwatch();
});

stopelement.addEventListener("click", () => {
    timer = false;
});

resetelement.addEventListener("click", () => {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    ms = 0; // Added to reset milliseconds
    document.getElementById("hrs").innerHTML = "00";
    document.getElementById("mins").innerHTML = "00";
    document.getElementById("secs").innerHTML = "00"; // Corrected id name
    document.getElementById("ms").innerHTML = "00";
});

function stopwatch() {
    if (timer) {
        ms++;
        if (ms === 100) {
            second++;
            ms = 0;
        }
        if (second == 60) {
            minute++;
            second = 0;
        }
        if (minute == 60) {
            hour++;
            minute = 0;
        }

        let hrsString = hour;
        let minString = minute;
        let secString = second;
        let msString = ms;

        if (hour < 9) {
            hrsString = "0" + hrsString;
        }
        if (minute < 9) {
            minString = "0" + minString;
        }
        if (second < 9) {
            secString = "0" + secString;
        }
        if (ms <9) {
            msString = "0" + msString;
        }
        

        document.getElementById('hrs').innerHTML = hrsString;
        document.getElementById('mins').innerHTML = minString;
        document.getElementById('secs').innerHTML = secString;
        document.getElementById('ms').innerHTML = msString;

        setTimeout(stopwatch, 10); // Update every 10 milliseconds
    }
}
