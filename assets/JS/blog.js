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

const backButton = document.querySelector('#back');

// back button function 
backButton.addEventListener('click', function() {
    location.href = "./index.html";
})

//i think we are targeting the wrong element with our query selector
let blogTitle = document.querySelector('.new-blog-title');
let blogContent = document.querySelector('.new-blog-content');
let blogUsername = document.querySelector('.new-username');
let blogContainer = document.querySelector('.body-container'); //this is the container that holds the entire blog post to which we will append inner elements/HTML

// RENDER objects from JSON into the UI
let localBlogData;
// this PARSE function receives the JSON objects from local storage
  function renderedBlogData() {
  
// attempt to get data from localstorage and setting it to 'localBlogData'
    localBlogData = JSON.parse(localStorage.getItem('blogData'));

    // console.log("this is the local data", localBlogData);
//THIS IS WHAT YOU REPEAT to loop and attach CSS
    for (let blogDatum of localBlogData) {
        console.log(blogDatum.content); 
        //let's put HTML and style it with CSS here.
        console.log(blogDatum);

// this CREATES elements (h3, div, article) and then SETS ATTRIBUTES to it that corresponds to the HTML
        let sectionTag = document.createElement(`section`);
        sectionTag.setAttribute('class', 'body-container');

        let articleTag = document.createElement(`article`);
        articleTag.setAttribute('class', 'blog-body'); //we need to set the attribute that we are TARGETING in the HTML
        
        let divTag = document.createElement(`div`);
        divTag.setAttribute('class', 'new-blog');

        let h3Tag = document.createElement(`h3`);
        h3Tag.setAttribute('class','new-blog-title');

        let pTag = document.createElement(`p`);
        pTag.setAttribute('class','new-blog-content');

        let h4Tag = document.createElement(`h4`);
        h4Tag.setAttribute('class','new-username');

//APPENDING the elements 
        // Append the article tag to the body
        document.body.appendChild(sectionTag);

        //Append the section tag to the body
        sectionTag.appendChild(articleTag);

        // Append the div tag to the article tag
        articleTag.appendChild(divTag);

        // Append the h3 tag to the div tag
        divTag.appendChild(h3Tag);

        // Append the p tag to the div tag
        divTag.appendChild(pTag);

        // Append the h4 tag to the div tag
        divTag.appendChild(h4Tag);

        //This is TEXT that comes from input 'blogDatum'
        h3Tag.textContent = `My Idea: ${blogDatum.title}`;
        pTag.textContent = `Blog Content: ${blogDatum.content}`;
        h4Tag.textContent = `Made by ${blogDatum.username}`;

    }
  }

  renderedBlogData();

//moving footer down to bottom of page

const footerElements = document.querySelectorAll('.blog-footer');

// Function to move footer elements to the bottom of the page
function moveFooterElementsToBottom() {
    const body = document.querySelector('body');
    footerElements.forEach(element => {
        body.appendChild(element);
    });
}

// Call the function to move footer elements to the bottom of the page
moveFooterElementsToBottom();