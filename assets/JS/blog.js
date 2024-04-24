// this is the dark-light event listener

// Access toggle switch HTML element
const themeSwitcher = document.querySelector('#theme-switcher');
const bodyEl = document.querySelector('body');

// Set default mode to dark
let mode = 'light';

// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {
  // If mode is dark, apply light background
  if (mode === 'dark') {
    mode = 'light';
    bodyEl.setAttribute('class', 'light');
  }
  // If mode is light, apply dark background
  else {
    mode = 'dark';
    bodyEl.setAttribute('class', 'dark');
  }
});

