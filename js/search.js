const searchform = document.querySelector('.search-form');
const search = document.getElementById('Search')
const domain = ['.com','.net','.org','.kr','.in','.tv','.cn','.jp','.biz','.info','.me','.eu','.ac','.cc','.co'];



searchform.onsubmit = function() { return myFunction() };

function myFunction() {
  let bool;
  for(let i=0; i < domain.length ; i++){
    let exp = domain[i];
    bool = search.value.includes(exp);
    if(bool === true){
      window.open('https://www.'+search.value);
      window.close();
      break;
    } else {
      window.open('https://www.google.com/search?q='+search.value);
      window.close();
      break;
    }
  }
}
