function getApi() {
    
  var requestUrl = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=5ebfc61359704b5c905090a0a4deaea6&ingredients=apple";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement("li");
        listItem.textContent = data[i].html_url;
        repoList.appendChild(listItem);
      }
    });
}

getApi();
//5ebfc61359704b5c905090a0a4deaea6API