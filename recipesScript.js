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
            var newRecipeItem = $("<div class='wrapper col s4 card small'><div class='card-image waves-effect waves-block waves-light'><img class='activator' src='" + res.hits[i].recipe.image + "'></div><div class='card-content'><span class='card-title activator grey-text text-darken-4'>" + res.hits[i].recipe.label + "<i class='material-icons right'>more_vert</i></span><p><a href='" + res.hits[i].recipe.url + "'>Click here for Recipe</a></p></div><div class='card-reveal'><span class='card-title grey-text text-darken-4'>" + res.hits[i].recipe.label + "<i class='material-icons right'>close</i></span><h6>What you will need:</h6><p>" +  + "</div></div>");
            // Small Card Element
            // $("<div class='wrapper'><div class='col-4'><div class='card small'><div class='card-image'><img class='responsive-image' src='" + res.hits[i].recipe.image + "' ><span class='card-title'>" + res.hits[i].recipe.label + "</span></div><div class='card-content'><p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p></div><div class='card-action'><a href='" + res.hits[i].recipe.url + "'>" + res.hits[i].recipe.url + "</a></div></div></div></div>");
            
            

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
  