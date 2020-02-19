function search() {
    if (rstInput.value === "") {
        navigator.geolocation.getCurrentPosition(function (pos) {
            var lat = pos.coords.latitude;
            var lon = pos.coords.longitude;
            localStorage.setItem('lat', lat);
            localStorage.setItem('lon', lon);
            zCall();
            initMap(lat, lon);
        });
    } else {
        var cwQueryUrl = 'https://api.openweathermap.org/data/2.5/weather?appid=06e67d1c01fd425c507533b8a4c46d90&q=';

        $.ajax({
            url: cwQueryUrl + document.getElementById('rstInput').value,
            method: 'get'
        }).then(function (res) {
            var lat = res.coord.lat;
            var lon = res.coord.lon;
            localStorage.setItem('lat', lat);
            localStorage.setItem('lon', lon);
            zCall();
            initMap(lat, lon);
        });
    };


};

var place_markers = [];
var infoWindow = [];
function zCall() {
    let zQueryUrl = 'https://developers.zomato.com/api/v2.1/search?lat=' + localStorage.getItem('lat') + '&lon=' + localStorage.getItem('lon') + '&q=vegetarian&sort=real_distance';

    let zomatoAPIKey = '4668fbe6f51718b42874da8ae396ea5c';

    $("#restaurants").empty();

    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: zQueryUrl,
        headers: { "user-key": zomatoAPIKey }
    }).then(function (result) {
        console.log(result)
        var searchMap = $("<iframewidth='600'height='450'frameborder='0' style='border:0'src='https://www.google.com/maps/embed/v1/search?key=AIzaSyChMTq7zveGs-pvx0wWFqj9wKGhNcih6_c&q=vegetarian+restaurants+in+" + $(".rstInput").val() + "' allowfullscreen></iframe>")
        $("#map").append(searchMap);
        
        for (i = 0; i < 18; i++) {
            var srch = result.restaurants[i].restaurant;
            var myLatLng = new google.maps.LatLng(srch.location.latitude, srch.location.longitude);
                    var marker = new google.maps.Marker({
                            position: myLatLng,
                            map: map,
                            title: srch.name,
        });

        place_markers.push(marker);
       
            if (srch.featured_image) {
                var pic = srch.featured_image;
            } else {
                var pic = 'assets/images/ph.jpg';
            }
            var rsts = $("<div id='restCard' class='wrapper col s4 card small'><div id='picEdge' class='card-image waves-effect waves-block waves-light'><img id='resPic' class='activator' src='" + pic + "'></div><div class='card-content'><span class='card-title activator grey-text text-darken-4'>" + srch.name + "<i class='material-icons right'>more_vert</i></span><p><a target='_blank' href='" + srch.menu_url + "'>Click here for Menu</a></p></div><div class='card-reveal'><span class='card-title grey-text text-darken-4'>" + srch.name + "<i class='material-icons right'>close</i></span><h6>More Info:</h6><ul><h7>Street Address:</h7><li>" + srch.location.address + "</li><h7>Phone Number:</h7><li>" + srch.phone_numbers + "</li><h7>Customer Rating:</h7><li>" + srch.user_rating.aggregate_rating + "</li></ul></div></div>");

            $("#restaurants").append(rsts);
        }
    });
};

function initMap(lat,lon) {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: lat, lng: lon },
        zoom: 11
    });
}

$("button").click(function () {
    search();
});

$('body').keypress(function (e) {
    var keycode = (e.keyCode);
    if (keycode == '13') {
        event.preventDefault()
        search();
    }
});

search();