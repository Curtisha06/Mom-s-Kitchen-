function getRecipeByIngredients(ingredient) {
    var apiKey="5ebfc61359704b5c905090a0a4deaea6";

  var requestUrl = "https://api.spoonacular.com/recipes/findByIngredients?apiKey="+ apiKey+"&ingredients=" + ingredient;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
       console.log(data[i])
      }
    });
}
function getInput(ingredient){
    let queryUrl = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=" + apiKey+ ingredient;
}
function searchBtn(){
    
}

getRecipeByIngredients("apple");
getRecipeByIngredients("pickle");
getRecipeByIngredients("cornstarch");

