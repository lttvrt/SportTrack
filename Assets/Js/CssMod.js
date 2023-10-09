document.addEventListener('DOMContentLoaded', function () {
    const lightModeButton = document.getElementById('light-mode-button');
    const darkModeButton = document.getElementById('dark-mode-button');
    const lightStylesheet = document.getElementById('lightCSS');
    const darkStylesheet = document.getElementById('darkCSS');
  
    lightModeButton.addEventListener('click', () => {
      lightStylesheet.removeAttribute('disabled');
      darkStylesheet.setAttribute('disabled', 'true');
    });
  
    darkModeButton.addEventListener('click', () => {
      darkStylesheet.removeAttribute('disabled');
      lightStylesheet.setAttribute('disabled', 'true');
    });
  });