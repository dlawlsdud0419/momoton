const searchform = document.querySelector('.search-form');
const search = document.getElementById('Search')
searchform.onsubmit = function() { return myFunction() };

function myFunction() {
  window.open('https://www.google.com/search?q='+search.value);
  window.close();
}
