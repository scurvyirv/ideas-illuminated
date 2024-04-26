const usernameEl = document.querySelector('#username-entry');
const titleEl = document.querySelector('#title-entry');
const contentEl = document.querySelector('#content-entry');
const submitEl = document.querySelector('#submit');

// LIGHT DARK TOGGLE

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

// SUBMISSION FUNCTIONALITY: fill all blanks, prevent default, local storage set item (!)


// prevent default + JSON 
submitEl.addEventListener('click', function (event) {
    event.preventDefault();

// Get an error message if not all fields completed
if (usernameEl.value.trim() === '') {
    alert('Username cannot be blank'); //this is where console.log works LOL
  } else if (titleEl.value.trim() === '') {
    alert('Title cannot be blank');
  } else if (contentEl.value.trim() === '') {
    alert('Content cannot be blank');
  } else {
  
  

    let blogData;
    if (!localStorage.getItem('blogData')) {
        blogData=[]; //this prevents error when no data exists in local storage
    }

    if (localStorage.getItem('blogData')) {
        blogData = JSON.parse(localStorage.getItem('blogData'));
    } //this acknowledges existing data in local storage and adds new entries as objects to the array
    const blogPost = { //this is how we make make our blog components of title, content and username as properties of the object
        username: usernameEl.value.trim(),
        title: titleEl.value.trim(),
        content: contentEl.value.trim()
    }
    blogData.push(blogPost); //we are pushing blogPost object into blogData array
  
    localStorage.setItem('blogData', JSON.stringify(blogData));

    location.href = "./blog.html";
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