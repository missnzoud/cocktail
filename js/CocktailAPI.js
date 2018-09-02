class CocktailAPI{

    // Get drink by name
    async getDrinksByName(name) {
         // Search by name
         const apiResponse = await fetch(`http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
         // Returns a json respone
         const cocktails = await apiResponse.json();

         return {
              cocktails
         }
    }
}