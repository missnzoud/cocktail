//instanciate class 
  const ui = new UI(),
  cocktail = new CocktailAPI();




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
    const searchTerm = document.getElementById('search').value;
            //console.log(searchTerm);
            if(searchTerm === ''){
                //call user interface print message;
                ui.printMessage('alert hehoooo writ somethting', 'danger');
            }else{
                     //console.log('add to the rest api');
                     cocktail.getDrinksByName( searchTerm )
                     .then (cocktails => {
                            //console.log(cocktails);
                            if(cocktails.cocktails.drinks === null) {
                                // Nothing exists
                                ui.printMessage('There\'re no results, try a different term ', 'danger');
                            }else{
                                console.log(cocktails);
                            }
                     })
                     
            }
}