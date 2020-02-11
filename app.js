navigator.geolocation.getCurrentPosition(function(pos){
    var lat = pos.coords.latitude;
    var lon = pos.coords.longitude;
    localStorage.setItem('lat', lat);
    localStorage.setItem('lon', lon);
});

var zQueryUrl = 'https://developers.zomato.com/api/v2.1/search?lat=' + localStorage.getItem('lat') + 'lon=' + localStorage.getItem('lon') + '&q=vegetarian';

let zomatoAPIKey = '4668fbe6f51718b42874da8ae396ea5c';

$("button").click(function(){
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
                    if (srch.photos[0].photo.url === null) {
                        var pic = 'https://placekitten.com/200/200';
                    } else {
                        var pic = srch.photos[0].photo.url;
                    }
                var rsts = $("<div class='wrapper col s4 card small'><div class='card-image waves-effect waves-block waves-light'><img class='activator' src='" + pic + "'></div><div class='card-content'><span class='card-title activator grey-text text-darken-4'>" + srch.name + "<i class='material-icons right'>more_vert</i></span><p><a href='" +  + "'>Click here for Menu</a></p></div><div class='card-reveal'><span class='card-title grey-text text-darken-4'>" + srch.name + "<i class='material-icons right'>close</i></span><h6>More Info:</h6><p>" + "</div></div>");
                
                $("#restaurants").append(rsts);
                }
            },
            error: function(e) {
                console.log("ERROR: ", e);
            },
        }
    );
});
  