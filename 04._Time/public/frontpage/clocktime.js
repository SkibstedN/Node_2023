function updateClock() {
    const clock = document.getElementById("clock");
  
    // Get the current time
    const now = new Date();
  
    // Format the time as a string
    const time = now.toLocaleTimeString();
  
    // Update the clock element
    clock.textContent = time;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  