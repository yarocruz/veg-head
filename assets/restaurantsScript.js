navigator.geolocation.getCurrentPosition(function(pos){
    var lat = pos.coords.latitude;
    var lon = pos.coords.longitude;
    localStorage.setItem('lat', lat);
    localStorage.setItem('lon', lon);
});

var zQueryUrl = 'https://developers.zomato.com/api/v2.1/search?lat=' + localStorage.getItem('lat') + 'lon=' + localStorage.getItem('lon') + '&q=vegetarian';

let zomatoAPIKey = '4668fbe6f51718b42874da8ae396ea5c';

function search(){
    $.ajax(
        {
            type: "GET",
            contentType: "application/json",
            url: zQueryUrl,
            headers : {
                "user-key" : zomatoAPIKey
            },
            success: function(result) {
                console.log(result)
                for (i = 0; i < 18; i++) {
                    
                var srch = result.restaurants[i].restaurant;
                    if (srch.featured_image) {
                        var pic = srch.featured_image;
                    } else {    
                        var pic = 'ph.jpg';
                    }
                var rsts = $("<div class='wrapper col s4 card small'><div class='card-image waves-effect waves-block waves-light'><img class='activator' src='" + pic + "'></div><div class='card-content'><span class='card-title activator grey-text text-darken-4'>" + srch.name + "<i class='material-icons right'>more_vert</i></span><p><a target='_blank' href='" + srch.menu_url + "'>Click here for Menu</a></p></div><div class='card-reveal'><span class='card-title grey-text text-darken-4'>" + srch.name + "<i class='material-icons right'>close</i></span><h6>More Info:</h6><ul><h7>Street Address:</h7><li>" + srch.location.address + "</li><h7>Phone Number:</h7><li>" + srch.phone_numbers + "</li><h7>Customer Rating:</h7><li>" + srch.user_rating.aggregate_rating + "</li></ul>" + "</div></div>");
                
                $("#restaurants").append(rsts);
                }
            },
            error: function(e) {
                console.log("ERROR: ", e);
            },
        }
    );
};

search();

$("button").click(function(){
    search();
});
$('#rstInput').keypress(function(e) {
    var keycode = (e.keyCode);
    if(keycode == '13'){
        search();
    }
});