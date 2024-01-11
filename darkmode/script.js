function toggleDarkMode() {
    
    const body = document.body;
    const icon = document.getElementById("theme-icon");
    const title = document.getElementById("page-title");
    
    if(body.classList.contains("dark-mode")) {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
      icon.textContent = "light_mode"; 
      title.textContent = "Light Mode ON";   
    } else {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
      icon.textContent = "nightlight_round";
      title.textContent = "Dark Mode ON";
    }
    
  }