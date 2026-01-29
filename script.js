// Simple utility for the clock
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { 
        hour12: false, 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    });
    const clockElement = document.getElementById('clock');
    if (clockElement) {
        clockElement.textContent = timeString;
    }
}

setInterval(updateClock, 1000);
updateClock();

// Console Signature
console.log(
    "%c adi.zip %c \nwelcome to the source code.",
    "background: #000; color: #fff; padding: 5px; font-weight: bold;",
    "color: #000; font-family: monospace;"
);
