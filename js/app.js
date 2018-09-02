//instanciate class 
  const ui = new UI();




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
                console.log('add to the rest api');
            }
}