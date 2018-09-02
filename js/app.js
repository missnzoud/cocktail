




function eventListeners() { 


  const searchForm = document.querySelector('#search-form');
    if(searchForm) {        
    searchForm.addEventListener('submit', getCocktails);
}
}

eventListeners();

function getCocktails(e) {
    e.preventDefault();
    console.log('click');
}