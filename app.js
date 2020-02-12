$('.search').on('change', function (e) {
    e.preventDefault();
    let searchTerm = $(this).val();
    console.log(searchTerm);

    //let APIKey = `e1a8ea5f7cdb69019154dae735be3a85`;

    let queryUrl = "https://api.edamam.com/search?q=" + searchTerm + "&app_id=4774b501&app_key=e1a8ea5f7cdb69019154dae735be3a85&health=vegetarian";

    $.ajax({
        url: queryUrl,
        method: 'get'
    }).then(function (res) {
        console.log(res);
        for (let hit of res.hits) {
            let cardBody = `
                <div class="col s4">
                    <div class="card">
                    <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src="${hit.recipe.image}">
                    </div>
                    <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">${hit.recipe.label}<i class="material-icons right">more_vert</i></span>
                    <p><a href="#">This is a link</a></p>
                    </div>
                    <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">${hit.recipe.label}<i class="material-icons right">close</i></span>
                    <p>${hit.recipe.ingredientLines[0]}</p>
                    </div>
                </div>
            </div>    
            `;
            $('.card-container').append(cardBody);
        }
    })
})