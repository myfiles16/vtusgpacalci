
  function redirectToPage(url) {
    // Save the current dark mode setting to localStorage before redirecting
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    window.location.href = url;
  }

  function openNav() {
    var sidepanel = document.getElementById("mySidepanel");
    sidepanel.classList.add("initial", "shaped");
  }

  function closeNav() {
    var sidepanel = document.getElementById("mySidepanel");
    sidepanel.classList.remove("initial", "shaped");
  }

  function toggleDarkMode() {
    const body = document.body;
    const icon = document.getElementById('toggle-icon');
    const isDarkMode = body.classList.toggle('dark-mode');
  
    // Save the dark mode state in localStorage
    localStorage.setItem('darkMode', isDarkMode);
  
    // Update the icon based on the dark mode state
    if (isDarkMode) {
      icon.textContent = '☀️';
    } else {
      icon.textContent = '🌙';
    }
  }
  

  // Check if there is a saved dark mode state in localStorage
  document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const icon = document.getElementById('toggle-icon');

    const darkModeSetting = localStorage.getItem('darkMode');
    
    if (darkModeSetting === 'true') {
      // Apply dark mode if it was enabled
      body.classList.add('dark-mode');
      icon.innerHTML = '☀️';
    } else {
      // Dark mode is not enabled
      body.classList.remove('dark-mode');
      icon.innerHTML = '🌙';
    }
  });
