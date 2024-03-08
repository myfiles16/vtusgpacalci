function redirectToPage(url) {
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
  var button = document.querySelector('.dark');
  
  // Toggle between sun and moon emoji
  if (button.innerHTML === '🌙') {
    button.innerHTML = '☀️';
    // You can also add a class to the body or other elements to apply dark mode styles
    document.body.classList.add('dark-mode');
  } else {
    button.innerHTML = '🌙';
    document.body.classList.remove('dark-mode');
  }
}
