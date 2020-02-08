var ingredientArray = [];
var ingredient;
var queryURL = "https://api.edamam.com/search?q=" + ingredient + "&app_id=4774b501&app_key=e1a8ea5f7cdb69019154dae735be3a85&health=vegetarian"

function getRecipe(){
    queryURL = "https://api.edamam.com/search?q=" + ingredient + "&app_id=4774b501&app_key=e1a8ea5f7cdb69019154dae735be3a85&health=vegetarian";
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(res){
        console.log(res);
        for (i=0;i < 10;i++){
            var newRecipeItem = $("<div class='wrapper'><div class='recipeItem row'><div class='col-2 recipeItem'><img src='" + res.hits[i].recipe.image + "' height='100px'></div><div class='col-10 recipeItem'><h3>" + res.hits[i].recipe.label + "</h3><a href='" + res.hits[i].recipe.url + "' target='_blank'>" + res.hits[i].recipe.url + "</a></div></div><br></div>");
            $("#recipeList").append(newRecipeItem);
        }
})};
function addIngredient(){
    var newIngredient = $("<button type='button' id='" + ingredient + "' class='list-group-item citybutton list-group-item-action'>" + ingredient + "</button>");
    $("#ingredientList").prepend(newIngredient);
  };
function clearList(){
    $(".wrapper").empty();
}
$(document).on("click", ".citybutton", function() {
    clearList();
    ingredient = $(this).text();
    getRecipe();
  });

$("#searchButton").on("click", function(e){
    event.preventDefault();
    clearList();
    ingredient = $("#ingredientInput").val();
    getRecipe();
    addIngredient();
  });
  