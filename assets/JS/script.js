const usernameEl = document.querySelector('#username-entry');
const titleEl = document.querySelector('#title-entry');
const contentEl = document.querySelector('#content-entry');
const submitEl = document.querySelector('#submit');

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

// Accessing toggle element by id (IDK HOW TO DO THIS)
// const centerRowToggle = document.querySelector('row toggle');
// console.log(centerRowToggle);

// Setting style of element
// centerRowToggle.style.align-content = 'center';


// Switch lightbulb gif to darkbulb gif
// themeSwitcher.addEventListener('click', function() {
    // if (element.matches('img')) {
        // const mode = element.getAttribute('data-state');
// 
        // if (mode==='light') {
            // element.dataset.state = 'dark';
            // element.setAttribute('data-state', 'dark');
        // }
    // }
// } 